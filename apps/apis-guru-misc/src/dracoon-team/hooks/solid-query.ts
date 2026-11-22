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

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV4AuthLoginMutationKey() {
  return ['v4', '/v4/auth/login', 'POST'] as const
}

export function getPostV4AuthLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.auth.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4AuthLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.auth.login.$post>) {
      return parseResponse(client.v4.auth.login.$post(args, options))
    },
  })
}

export function createPostV4AuthLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.auth.login.$post>,
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
    const mutationDefaults = getPostV4AuthLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4AuthOpenidLoginQueryKey(
  args: InferRequestType<typeof client.v4.auth.openid.login.$get>,
) {
  return ['v4', '/v4/auth/openid/login', args] as const
}

export function getV4AuthOpenidLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.auth.openid.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4AuthOpenidLoginQueryKey>
  >({
    queryKey: getV4AuthOpenidLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.auth.openid.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4AuthOpenidLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.auth.openid.login.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4AuthOpenidLoginQueryKey>
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
    return { ...getV4AuthOpenidLoginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4AuthOpenidLoginMutationKey() {
  return ['v4', '/v4/auth/openid/login', 'POST'] as const
}

export function getPostV4AuthOpenidLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.auth.openid.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4AuthOpenidLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.auth.openid.login.$post>) {
      return parseResponse(client.v4.auth.openid.login.$post(args, options))
    },
  })
}

export function createPostV4AuthOpenidLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.openid.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.auth.openid.login.$post>,
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
    const mutationDefaults = getPostV4AuthOpenidLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4AuthPingQueryKey() {
  return ['v4', '/v4/auth/ping'] as const
}

export function getV4AuthPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4AuthPingQueryKey>
  >({
    queryKey: getV4AuthPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.auth.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4AuthPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.ping.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4AuthPingQueryKey>
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
    return { ...getV4AuthPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV4AuthRecoverUsernameMutationKey() {
  return ['v4', '/v4/auth/recover_username', 'POST'] as const
}

export function getPostV4AuthRecoverUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.recover_username.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.auth.recover_username.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4AuthRecoverUsernameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.auth.recover_username.$post>) {
      return parseResponse(client.v4.auth.recover_username.$post(args, options))
    },
  })
}

export function createPostV4AuthRecoverUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.auth.recover_username.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.auth.recover_username.$post>,
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
    const mutationDefaults = getPostV4AuthRecoverUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4AuthResetPasswordMutationKey() {
  return ['v4', '/v4/auth/reset_password', 'POST'] as const
}

export function getPostV4AuthResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.auth.reset_password.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.auth.reset_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4AuthResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.auth.reset_password.$post>) {
      return parseResponse(client.v4.auth.reset_password.$post(args, options))
    },
  })
}

export function createPostV4AuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.auth.reset_password.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.auth.reset_password.$post>,
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
    const mutationDefaults = getPostV4AuthResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4AuthResetPasswordTokenQueryKey(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
) {
  return ['v4', '/v4/auth/reset_password/:token', args] as const
}

export function getV4AuthResetPasswordTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AuthResetPasswordTokenQueryKey>
  >({
    queryKey: getV4AuthResetPasswordTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.auth.reset_password[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4AuthResetPasswordToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4AuthResetPasswordTokenQueryKey>
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
    return {
      ...getV4AuthResetPasswordTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4AuthResetPasswordTokenMutationKey() {
  return ['v4', '/v4/auth/reset_password/:token', 'PUT'] as const
}

export function getPutV4AuthResetPasswordTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4AuthResetPasswordTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']>,
    ) {
      return parseResponse(client.v4.auth.reset_password[':token'].$put(args, options))
    },
  })
}

export function createPutV4AuthResetPasswordToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.auth.reset_password)[':token']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']>,
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
    const mutationDefaults = getPutV4AuthResetPasswordTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4ConfigInfoDefaultsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/defaults', keyArgs] as const
}

export function getV4ConfigInfoDefaultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoDefaultsQueryKey>
  >({
    queryKey: getV4ConfigInfoDefaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.defaults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoDefaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.defaults.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.defaults.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoDefaultsQueryKey>
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
    return {
      ...getV4ConfigInfoDefaultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoGeneralQueryKey(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/general', keyArgs] as const
}

export function getV4ConfigInfoGeneralQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoGeneralQueryKey>
  >({
    queryKey: getV4ConfigInfoGeneralQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.general.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoGeneral<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.general.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.general.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoGeneralQueryKey>
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
    return { ...getV4ConfigInfoGeneralQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4ConfigInfoInfrastructureQueryKey(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/infrastructure', keyArgs] as const
}

export function getV4ConfigInfoInfrastructureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoInfrastructureQueryKey>
  >({
    queryKey: getV4ConfigInfoInfrastructureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.infrastructure.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoInfrastructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.infrastructure.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoInfrastructureQueryKey>
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
    return {
      ...getV4ConfigInfoInfrastructureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoNotificationsChannelsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/notifications/channels', keyArgs] as const
}

export function getV4ConfigInfoNotificationsChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoNotificationsChannelsQueryKey>
  >({
    queryKey: getV4ConfigInfoNotificationsChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.notifications.channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoNotificationsChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.notifications.channels.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoNotificationsChannelsQueryKey>
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
    return {
      ...getV4ConfigInfoNotificationsChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoPoliciesAlgorithmsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/algorithms', keyArgs] as const
}

export function getV4ConfigInfoPoliciesAlgorithmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoPoliciesAlgorithmsQueryKey>
  >({
    queryKey: getV4ConfigInfoPoliciesAlgorithmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.policies.algorithms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoPoliciesAlgorithms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.policies.algorithms.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoPoliciesAlgorithmsQueryKey>
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
    return {
      ...getV4ConfigInfoPoliciesAlgorithmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoPoliciesClassificationsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/classifications', keyArgs] as const
}

export function getV4ConfigInfoPoliciesClassificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoPoliciesClassificationsQueryKey>
  >({
    queryKey: getV4ConfigInfoPoliciesClassificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.policies.classifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoPoliciesClassifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.policies.classifications.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoPoliciesClassificationsQueryKey>
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
    return {
      ...getV4ConfigInfoPoliciesClassificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoPoliciesGuestUsersQueryKey(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/guest_users', keyArgs] as const
}

export function getV4ConfigInfoPoliciesGuestUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoPoliciesGuestUsersQueryKey>
  >({
    queryKey: getV4ConfigInfoPoliciesGuestUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.policies.guest_users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoPoliciesGuestUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.policies.guest_users.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoPoliciesGuestUsersQueryKey>
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
    return {
      ...getV4ConfigInfoPoliciesGuestUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoPoliciesPasswordsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/policies/passwords', keyArgs] as const
}

export function getV4ConfigInfoPoliciesPasswordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoPoliciesPasswordsQueryKey>
  >({
    queryKey: getV4ConfigInfoPoliciesPasswordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.policies.passwords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoPoliciesPasswords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.policies.passwords.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoPoliciesPasswordsQueryKey>
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
    return {
      ...getV4ConfigInfoPoliciesPasswordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoProductPackagesQueryKey(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/product_packages', keyArgs] as const
}

export function getV4ConfigInfoProductPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoProductPackagesQueryKey>
  >({
    queryKey: getV4ConfigInfoProductPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.product_packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoProductPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.product_packages.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.product_packages.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoProductPackagesQueryKey>
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
    return {
      ...getV4ConfigInfoProductPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoProductPackagesCurrentQueryKey(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/product_packages/current', keyArgs] as const
}

export function getV4ConfigInfoProductPackagesCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoProductPackagesCurrentQueryKey>
  >({
    queryKey: getV4ConfigInfoProductPackagesCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.product_packages.current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoProductPackagesCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.config.info.product_packages.current.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoProductPackagesCurrentQueryKey>
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
    return {
      ...getV4ConfigInfoProductPackagesCurrentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ConfigInfoS3TagsQueryKey(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/info/s3_tags', keyArgs] as const
}

export function getV4ConfigInfoS3TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigInfoS3TagsQueryKey>
  >({
    queryKey: getV4ConfigInfoS3TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.info.s3_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ConfigInfoS3Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.info.s3_tags.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigInfoS3TagsQueryKey>
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
    return { ...getV4ConfigInfoS3TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4ConfigSettingsQueryKey(
  args: InferRequestType<typeof client.v4.config.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/config/settings', keyArgs] as const
}

export function getV4ConfigSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.config.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4ConfigSettingsQueryKey>
  >({
    queryKey: getV4ConfigSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.config.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4ConfigSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.config.settings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ConfigSettingsQueryKey>
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
    return { ...getV4ConfigSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4ConfigSettingsMutationKey() {
  return ['v4', '/v4/config/settings', 'PUT'] as const
}

export function getPutV4ConfigSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.config.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4ConfigSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.config.settings.$put>) {
      return parseResponse(client.v4.config.settings.$put(args, options))
    },
  })
}

export function createPutV4ConfigSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.config.settings.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.config.settings.$put>,
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
    const mutationDefaults = getPutV4ConfigSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4DownloadsAvatarUserIdUuidQueryKey(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
) {
  return ['v4', '/v4/downloads/avatar/:user_id/:uuid', args] as const
}

export function getV4DownloadsAvatarUserIdUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DownloadsAvatarUserIdUuidQueryKey>
  >({
    queryKey: getV4DownloadsAvatarUserIdUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.downloads.avatar[':user_id'][':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4DownloadsAvatarUserIdUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4DownloadsAvatarUserIdUuidQueryKey>
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
    return {
      ...getV4DownloadsAvatarUserIdUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4DownloadsZipTokenQueryKey(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
) {
  return ['v4', '/v4/downloads/zip/:token', args] as const
}

export function getV4DownloadsZipTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DownloadsZipTokenQueryKey>
  >({
    queryKey: getV4DownloadsZipTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.downloads.zip[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4DownloadsZipToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.downloads.zip)[':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4DownloadsZipTokenQueryKey>
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
    return { ...getV4DownloadsZipTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4DownloadsTokenQueryKey(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/downloads/:token', keyArgs] as const
}

export function getV4DownloadsTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DownloadsTokenQueryKey>
  >({
    queryKey: getV4DownloadsTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.downloads[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4DownloadsToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4DownloadsTokenQueryKey>
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
    return { ...getV4DownloadsTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHeadV4DownloadsTokenMutationKey() {
  return ['v4', '/v4/downloads/:token', 'HEAD'] as const
}

export function getHeadV4DownloadsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.downloads)[':token']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV4DownloadsTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.downloads)[':token']['$head']>) {
      return parseResponse(client.v4.downloads[':token'].$head(args, options))
    },
  })
}

export function createHeadV4DownloadsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.downloads)[':token']['$head']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.downloads)[':token']['$head']>,
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
    const mutationDefaults = getHeadV4DownloadsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4EventlogAuditsNodeInfoQueryKey(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/audits/node_info', keyArgs] as const
}

export function getV4EventlogAuditsNodeInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4EventlogAuditsNodeInfoQueryKey>
  >({
    queryKey: getV4EventlogAuditsNodeInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.eventlog.audits.node_info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4EventlogAuditsNodeInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.eventlog.audits.node_info.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4EventlogAuditsNodeInfoQueryKey>
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
    return {
      ...getV4EventlogAuditsNodeInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4EventlogAuditsNodesQueryKey(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/audits/nodes', keyArgs] as const
}

export function getV4EventlogAuditsNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4EventlogAuditsNodesQueryKey>
  >({
    queryKey: getV4EventlogAuditsNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.eventlog.audits.nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4EventlogAuditsNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.audits.nodes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4EventlogAuditsNodesQueryKey>
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
    return {
      ...getV4EventlogAuditsNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4EventlogEventsQueryKey(
  args: InferRequestType<typeof client.v4.eventlog.events.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/events', keyArgs] as const
}

export function getV4EventlogEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.eventlog.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4EventlogEventsQueryKey>
  >({
    queryKey: getV4EventlogEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.eventlog.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4EventlogEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.eventlog.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.events.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4EventlogEventsQueryKey>
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
    return { ...getV4EventlogEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4EventlogOperationsQueryKey(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/eventlog/operations', keyArgs] as const
}

export function getV4EventlogOperationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4EventlogOperationsQueryKey>
  >({
    queryKey: getV4EventlogOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.eventlog.operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4EventlogOperations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.eventlog.operations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.eventlog.operations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4EventlogOperationsQueryKey>
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
    return {
      ...getV4EventlogOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4GroupsQueryKey(args: InferRequestType<typeof client.v4.groups.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups', keyArgs] as const
}

export function getV4GroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4GroupsQueryKey>
  >({
    queryKey: getV4GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4Groups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.groups.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsQueryKey>
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
    return { ...getV4GroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4GroupsMutationKey() {
  return ['v4', '/v4/groups', 'POST'] as const
}

export function getPostV4GroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4GroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.groups.$post>) {
      return parseResponse(client.v4.groups.$post(args, options))
    },
  })
}

export function createPostV4Groups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.groups.$post>,
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
    const mutationDefaults = getPostV4GroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4GroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id', keyArgs] as const
}

export function getV4GroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4GroupsGroupIdQueryKey>
  >({
    queryKey: getV4GroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4GroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsGroupIdQueryKey>
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
    return { ...getV4GroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4GroupsGroupIdMutationKey() {
  return ['v4', '/v4/groups/:group_id', 'PUT'] as const
}

export function getPutV4GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.groups)[':group_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4GroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.groups)[':group_id']['$put']>) {
      return parseResponse(client.v4.groups[':group_id'].$put(args, options))
    },
  })
}

export function createPutV4GroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.groups)[':group_id']['$put']>,
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
    const mutationDefaults = getPutV4GroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4GroupsGroupIdMutationKey() {
  return ['v4', '/v4/groups/:group_id', 'DELETE'] as const
}

export function getDeleteV4GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4GroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']>) {
      return parseResponse(client.v4.groups[':group_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4GroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4GroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4GroupsGroupIdLastAdminRoomsQueryKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/last_admin_rooms', keyArgs] as const
}

export function getV4GroupsGroupIdLastAdminRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4GroupsGroupIdLastAdminRoomsQueryKey>
  >({
    queryKey: getV4GroupsGroupIdLastAdminRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups[':group_id'].last_admin_rooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4GroupsGroupIdLastAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsGroupIdLastAdminRoomsQueryKey>
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
    return {
      ...getV4GroupsGroupIdLastAdminRoomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4GroupsGroupIdRolesQueryKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/roles', keyArgs] as const
}

export function getV4GroupsGroupIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4GroupsGroupIdRolesQueryKey>
  >({
    queryKey: getV4GroupsGroupIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups[':group_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4GroupsGroupIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsGroupIdRolesQueryKey>
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
    return {
      ...getV4GroupsGroupIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4GroupsGroupIdRoomsQueryKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/rooms', keyArgs] as const
}

export function getV4GroupsGroupIdRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4GroupsGroupIdRoomsQueryKey>
  >({
    queryKey: getV4GroupsGroupIdRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups[':group_id'].rooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4GroupsGroupIdRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsGroupIdRoomsQueryKey>
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
    return {
      ...getV4GroupsGroupIdRoomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4GroupsGroupIdUsersQueryKey(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/groups/:group_id/users', keyArgs] as const
}

export function getV4GroupsGroupIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4GroupsGroupIdUsersQueryKey>
  >({
    queryKey: getV4GroupsGroupIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.groups[':group_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4GroupsGroupIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4GroupsGroupIdUsersQueryKey>
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
    return {
      ...getV4GroupsGroupIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4GroupsGroupIdUsersMutationKey() {
  return ['v4', '/v4/groups/:group_id/users', 'POST'] as const
}

export function getPostV4GroupsGroupIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4GroupsGroupIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']>,
    ) {
      return parseResponse(client.v4.groups[':group_id'].users.$post(args, options))
    },
  })
}

export function createPostV4GroupsGroupIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']>,
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
    const mutationDefaults = getPostV4GroupsGroupIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4GroupsGroupIdUsersMutationKey() {
  return ['v4', '/v4/groups/:group_id/users', 'DELETE'] as const
}

export function getDeleteV4GroupsGroupIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4GroupsGroupIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']>,
    ) {
      return parseResponse(client.v4.groups[':group_id'].users.$delete(args, options))
    },
  })
}

export function createDeleteV4GroupsGroupIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.groups)[':group_id']['users']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']>,
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
    const mutationDefaults = getDeleteV4GroupsGroupIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4InternalTenantSubscriptionPlanQueryKey(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/internal/tenant/subscription_plan', keyArgs] as const
}

export function getV4InternalTenantSubscriptionPlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4InternalTenantSubscriptionPlanQueryKey>
  >({
    queryKey: getV4InternalTenantSubscriptionPlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.internal.tenant.subscription_plan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4InternalTenantSubscriptionPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4InternalTenantSubscriptionPlanQueryKey>
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
    return {
      ...getV4InternalTenantSubscriptionPlanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4InternalTenantSubscriptionPlanMutationKey() {
  return ['v4', '/v4/internal/tenant/subscription_plan', 'PUT'] as const
}

export function getPutV4InternalTenantSubscriptionPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4InternalTenantSubscriptionPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put>,
    ) {
      return parseResponse(client.v4.internal.tenant.subscription_plan.$put(args, options))
    },
  })
}

export function createPutV4InternalTenantSubscriptionPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.internal.tenant.subscription_plan.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put>,
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
    const mutationDefaults = getPutV4InternalTenantSubscriptionPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesQueryKey(args: InferRequestType<typeof client.v4.nodes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes', keyArgs] as const
}

export function getV4NodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4NodesQueryKey>
  >({
    queryKey: getV4NodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4Nodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.nodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesQueryKey>
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
    return { ...getV4NodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV4NodesMutationKey() {
  return ['v4', '/v4/nodes', 'DELETE'] as const
}

export function getDeleteV4NodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.$delete>) {
      return parseResponse(client.v4.nodes.$delete(args, options))
    },
  })
}

export function createDeleteV4Nodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.$delete>,
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
    const mutationDefaults = getDeleteV4NodesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesCommentsCommentIdMutationKey() {
  return ['v4', '/v4/nodes/comments/:comment_id', 'PUT'] as const
}

export function getPutV4NodesCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.comments[':comment_id'].$put(args, options))
    },
  })
}

export function createPutV4NodesCommentsCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>,
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
    const mutationDefaults = getPutV4NodesCommentsCommentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesCommentsCommentIdMutationKey() {
  return ['v4', '/v4/nodes/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteV4NodesCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes.comments[':comment_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4NodesCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesCommentsCommentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesDeletedNodesMutationKey() {
  return ['v4', '/v4/nodes/deleted_nodes', 'DELETE'] as const
}

export function getDeleteV4NodesDeletedNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesDeletedNodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete>) {
      return parseResponse(client.v4.nodes.deleted_nodes.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesDeletedNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete>,
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
    const mutationDefaults = getDeleteV4NodesDeletedNodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesDeletedNodesActionsRestoreMutationKey() {
  return ['v4', '/v4/nodes/deleted_nodes/actions/restore', 'POST'] as const
}

export function getPostV4NodesDeletedNodesActionsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesDeletedNodesActionsRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>,
    ) {
      return parseResponse(client.v4.nodes.deleted_nodes.actions.restore.$post(args, options))
    },
  })
}

export function createPostV4NodesDeletedNodesActionsRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>,
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
    const mutationDefaults = getPostV4NodesDeletedNodesActionsRestoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesDeletedNodesDeletedNodeIdQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/deleted_nodes/:deleted_node_id', keyArgs] as const
}

export function getV4NodesDeletedNodesDeletedNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesDeletedNodesDeletedNodeIdQueryKey>
  >({
    queryKey: getV4NodesDeletedNodesDeletedNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.deleted_nodes[':deleted_node_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesDeletedNodesDeletedNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesDeletedNodesDeletedNodeIdQueryKey>
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
    return {
      ...getV4NodesDeletedNodesDeletedNodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesFavoritesMutationKey() {
  return ['v4', '/v4/nodes/favorites', 'PUT'] as const
}

export function getPutV4NodesFavoritesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.favorites.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.favorites.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFavoritesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.favorites.$put>) {
      return parseResponse(client.v4.nodes.favorites.$put(args, options))
    },
  })
}

export function createPutV4NodesFavorites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.favorites.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.favorites.$put>,
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
    const mutationDefaults = getPutV4NodesFavoritesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesFilesMutationKey() {
  return ['v4', '/v4/nodes/files', 'PUT'] as const
}

export function getPutV4NodesFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.files.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.files.$put>) {
      return parseResponse(client.v4.nodes.files.$put(args, options))
    },
  })
}

export function createPutV4NodesFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.files.$put>,
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
    const mutationDefaults = getPutV4NodesFilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesFilesKeysMutationKey() {
  return ['v4', '/v4/nodes/files/keys', 'POST'] as const
}

export function getPostV4NodesFilesKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.keys.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.files.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFilesKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.files.keys.$post>) {
      return parseResponse(client.v4.nodes.files.keys.$post(args, options))
    },
  })
}

export function createPostV4NodesFilesKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.keys.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.files.keys.$post>,
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
    const mutationDefaults = getPostV4NodesFilesKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesFilesUploadsMutationKey() {
  return ['v4', '/v4/nodes/files/uploads', 'POST'] as const
}

export function getPostV4NodesFilesUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.uploads.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.nodes.files.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFilesUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.files.uploads.$post>) {
      return parseResponse(client.v4.nodes.files.uploads.$post(args, options))
    },
  })
}

export function createPostV4NodesFilesUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.files.uploads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.nodes.files.uploads.$post>,
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
    const mutationDefaults = getPostV4NodesFilesUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesFilesUploadsUploadIdQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/uploads/:upload_id', keyArgs] as const
}

export function getV4NodesFilesUploadsUploadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesFilesUploadsUploadIdQueryKey>
  >({
    queryKey: getV4NodesFilesUploadsUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.files.uploads[':upload_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesFilesUploadsUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesFilesUploadsUploadIdQueryKey>
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
    return {
      ...getV4NodesFilesUploadsUploadIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesFilesUploadsUploadIdMutationKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'PUT'] as const
}

export function getPutV4NodesFilesUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFilesUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.files.uploads[':upload_id'].$put(args, options))
    },
  })
}

export function createPutV4NodesFilesUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>,
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
    const mutationDefaults = getPutV4NodesFilesUploadsUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesFilesUploadsUploadIdMutationKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'POST'] as const
}

export function getPostV4NodesFilesUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFilesUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>,
    ) {
      return parseResponse(client.v4.nodes.files.uploads[':upload_id'].$post(args, options))
    },
  })
}

export function createPostV4NodesFilesUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>,
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
    const mutationDefaults = getPostV4NodesFilesUploadsUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesFilesUploadsUploadIdMutationKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id', 'DELETE'] as const
}

export function getDeleteV4NodesFilesUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesFilesUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes.files.uploads[':upload_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4NodesFilesUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesFilesUploadsUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesFilesUploadsUploadIdS3MutationKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id/s3', 'PUT'] as const
}

export function getPutV4NodesFilesUploadsUploadIdS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFilesUploadsUploadIdS3MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.files.uploads[':upload_id'].s3.$put(args, options))
    },
  })
}

export function createPutV4NodesFilesUploadsUploadIdS3<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>,
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
    const mutationDefaults = getPutV4NodesFilesUploadsUploadIdS3MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesFilesUploadsUploadIdS3UrlsMutationKey() {
  return ['v4', '/v4/nodes/files/uploads/:upload_id/s3_urls', 'POST'] as const
}

export function getPostV4NodesFilesUploadsUploadIdS3UrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFilesUploadsUploadIdS3UrlsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']
      >,
    ) {
      return parseResponse(client.v4.nodes.files.uploads[':upload_id'].s3_urls.$post(args, options))
    },
  })
}

export function createPostV4NodesFilesUploadsUploadIdS3Urls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']
          >,
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
    const mutationDefaults = getPostV4NodesFilesUploadsUploadIdS3UrlsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesFilesVersionsReferenceIdQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/versions/:reference_id', keyArgs] as const
}

export function getV4NodesFilesVersionsReferenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesFilesVersionsReferenceIdQueryKey>
  >({
    queryKey: getV4NodesFilesVersionsReferenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.files.versions[':reference_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesFilesVersionsReferenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesFilesVersionsReferenceIdQueryKey>
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
    return {
      ...getV4NodesFilesVersionsReferenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesFilesFileIdMutationKey() {
  return ['v4', '/v4/nodes/files/:file_id', 'PUT'] as const
}

export function getPutV4NodesFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']>) {
      return parseResponse(client.v4.nodes.files[':file_id'].$put(args, options))
    },
  })
}

export function createPutV4NodesFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']>,
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
    const mutationDefaults = getPutV4NodesFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesFilesFileIdDataRoomFileKeyQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/data_room_file_key', keyArgs] as const
}

export function getV4NodesFilesFileIdDataRoomFileKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesFilesFileIdDataRoomFileKeyQueryKey>
  >({
    queryKey: getV4NodesFilesFileIdDataRoomFileKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.files[':file_id'].data_room_file_key.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesFilesFileIdDataRoomFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesFilesFileIdDataRoomFileKeyQueryKey>
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
    return {
      ...getV4NodesFilesFileIdDataRoomFileKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4NodesFilesFileIdDataSpaceFileKeyQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/data_space_file_key', keyArgs] as const
}

export function getV4NodesFilesFileIdDataSpaceFileKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesFilesFileIdDataSpaceFileKeyQueryKey>
  >({
    queryKey: getV4NodesFilesFileIdDataSpaceFileKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.files[':file_id'].data_space_file_key.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesFilesFileIdDataSpaceFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesFilesFileIdDataSpaceFileKeyQueryKey>
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
    return {
      ...getV4NodesFilesFileIdDataSpaceFileKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesFilesFileIdDownloadsMutationKey() {
  return ['v4', '/v4/nodes/files/:file_id/downloads', 'POST'] as const
}

export function getPostV4NodesFilesFileIdDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFilesFileIdDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>,
    ) {
      return parseResponse(client.v4.nodes.files[':file_id'].downloads.$post(args, options))
    },
  })
}

export function createPostV4NodesFilesFileIdDownloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>,
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
    const mutationDefaults = getPostV4NodesFilesFileIdDownloadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesFilesFileIdUserFileKeyQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/files/:file_id/user_file_key', keyArgs] as const
}

export function getV4NodesFilesFileIdUserFileKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesFilesFileIdUserFileKeyQueryKey>
  >({
    queryKey: getV4NodesFilesFileIdUserFileKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.files[':file_id'].user_file_key.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesFilesFileIdUserFileKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesFilesFileIdUserFileKeyQueryKey>
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
    return {
      ...getV4NodesFilesFileIdUserFileKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesFoldersMutationKey() {
  return ['v4', '/v4/nodes/folders', 'POST'] as const
}

export function getPostV4NodesFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.folders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.nodes.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.folders.$post>) {
      return parseResponse(client.v4.nodes.folders.$post(args, options))
    },
  })
}

export function createPostV4NodesFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.folders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.nodes.folders.$post>,
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
    const mutationDefaults = getPostV4NodesFoldersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesFoldersFolderIdMutationKey() {
  return ['v4', '/v4/nodes/folders/:folder_id', 'PUT'] as const
}

export function getPutV4NodesFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.folders[':folder_id'].$put(args, options))
    },
  })
}

export function createPutV4NodesFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>,
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
    const mutationDefaults = getPutV4NodesFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesMissingFileKeysQueryKey(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/missingFileKeys', keyArgs] as const
}

export function getV4NodesMissingFileKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesMissingFileKeysQueryKey>
  >({
    queryKey: getV4NodesMissingFileKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.missingFileKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesMissingFileKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.missingFileKeys.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesMissingFileKeysQueryKey>
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
    return {
      ...getV4NodesMissingFileKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesRoomsMutationKey() {
  return ['v4', '/v4/nodes/rooms', 'POST'] as const
}

export function getPostV4NodesRoomsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.nodes.rooms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesRoomsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.rooms.$post>) {
      return parseResponse(client.v4.nodes.rooms.$post(args, options))
    },
  })
}

export function createPostV4NodesRooms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.nodes.rooms.$post>,
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
    const mutationDefaults = getPostV4NodesRoomsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsPendingQueryKey(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/pending', keyArgs] as const
}

export function getV4NodesRoomsPendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsPendingQueryKey>
  >({
    queryKey: getV4NodesRoomsPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsPendingQueryKey>
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
    return { ...getV4NodesRoomsPendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4NodesRoomsPendingMutationKey() {
  return ['v4', '/v4/nodes/rooms/pending', 'PUT'] as const
}

export function getPutV4NodesRoomsPendingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.nodes.rooms.pending.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsPendingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.rooms.pending.$put>) {
      return parseResponse(client.v4.nodes.rooms.pending.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsPending<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.rooms.pending.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.nodes.rooms.pending.$put>,
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
    const mutationDefaults = getPutV4NodesRoomsPendingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdConfigMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/config', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].config.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdEncryptMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/encrypt', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdEncryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdEncryptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].encrypt.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdEncrypt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdEncryptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdEventsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/events', keyArgs] as const
}

export function getV4NodesRoomsRoomIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdEventsQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdEventsQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdGroupsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/groups', keyArgs] as const
}

export function getV4NodesRoomsRoomIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdGroupsQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdGroupsQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdGroupsMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/groups', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].groups.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesRoomsRoomIdGroupsMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/groups', 'DELETE'] as const
}

export function getDeleteV4NodesRoomsRoomIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesRoomsRoomIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].groups.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesRoomsRoomIdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesRoomsRoomIdGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdGuestUsersMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/guest_users', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdGuestUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdGuestUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].guest_users.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdGuestUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdGuestUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdKeypairQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', keyArgs] as const
}

export function getV4NodesRoomsRoomIdKeypairQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdKeypairQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdKeypairQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].keypair.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdKeypair<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdKeypairQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdKeypairQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesRoomsRoomIdKeypairMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', 'POST'] as const
}

export function getPostV4NodesRoomsRoomIdKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesRoomsRoomIdKeypairMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$post(args, options))
    },
  })
}

export function createPostV4NodesRoomsRoomIdKeypair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>,
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
    const mutationDefaults = getPostV4NodesRoomsRoomIdKeypairMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesRoomsRoomIdKeypairMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypair', 'DELETE'] as const
}

export function getDeleteV4NodesRoomsRoomIdKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesRoomsRoomIdKeypairMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesRoomsRoomIdKeypair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesRoomsRoomIdKeypairMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdKeypairsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/keypairs', keyArgs] as const
}

export function getV4NodesRoomsRoomIdKeypairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdKeypairsQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdKeypairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].keypairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdKeypairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdKeypairsQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdKeypairsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesRoomsRoomIdKeypairsMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/keypairs', 'POST'] as const
}

export function getPostV4NodesRoomsRoomIdKeypairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesRoomsRoomIdKeypairsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$post(args, options))
    },
  })
}

export function createPostV4NodesRoomsRoomIdKeypairs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>,
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
    const mutationDefaults = getPostV4NodesRoomsRoomIdKeypairsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdPoliciesQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/policies', keyArgs] as const
}

export function getV4NodesRoomsRoomIdPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdPoliciesQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdPoliciesQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdPoliciesMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/policies', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].policies.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdPoliciesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdS3TagsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/s3_tags', keyArgs] as const
}

export function getV4NodesRoomsRoomIdS3TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdS3TagsQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdS3TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].s3_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdS3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdS3TagsQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdS3TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesRoomsRoomIdS3TagsMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/s3_tags', 'POST'] as const
}

export function getPostV4NodesRoomsRoomIdS3TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesRoomsRoomIdS3TagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$post(args, options))
    },
  })
}

export function createPostV4NodesRoomsRoomIdS3Tags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>,
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
    const mutationDefaults = getPostV4NodesRoomsRoomIdS3TagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdUsersQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/users', keyArgs] as const
}

export function getV4NodesRoomsRoomIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdUsersQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdUsersQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdUsersMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/users', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].users.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesRoomsRoomIdUsersMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/users', 'DELETE'] as const
}

export function getDeleteV4NodesRoomsRoomIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesRoomsRoomIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].users.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesRoomsRoomIdUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesRoomsRoomIdUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesRoomsRoomIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/rooms/:room_id/webhooks', keyArgs] as const
}

export function getV4NodesRoomsRoomIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesRoomsRoomIdWebhooksQueryKey>
  >({
    queryKey: getV4NodesRoomsRoomIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.rooms[':room_id'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesRoomsRoomIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesRoomsRoomIdWebhooksQueryKey>
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
    return {
      ...getV4NodesRoomsRoomIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4NodesRoomsRoomIdWebhooksMutationKey() {
  return ['v4', '/v4/nodes/rooms/:room_id/webhooks', 'PUT'] as const
}

export function getPutV4NodesRoomsRoomIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4NodesRoomsRoomIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>,
    ) {
      return parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$put(args, options))
    },
  })
}

export function createPutV4NodesRoomsRoomIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>,
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
    const mutationDefaults = getPutV4NodesRoomsRoomIdWebhooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesSearchQueryKey(
  args: InferRequestType<typeof client.v4.nodes.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/search', keyArgs] as const
}

export function getV4NodesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.nodes.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesSearchQueryKey>
  >({
    queryKey: getV4NodesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4NodesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.nodes.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.search.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesSearchQueryKey>
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
    return { ...getV4NodesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4NodesZipMutationKey() {
  return ['v4', '/v4/nodes/zip', 'POST'] as const
}

export function getPostV4NodesZipMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.nodes.zip.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesZipMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.zip.$post>) {
      return parseResponse(client.v4.nodes.zip.$post(args, options))
    },
  })
}

export function createPostV4NodesZip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.nodes.zip.$post>,
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
    const mutationDefaults = getPostV4NodesZipMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesZipDownloadMutationKey() {
  return ['v4', '/v4/nodes/zip/download', 'POST'] as const
}

export function getPostV4NodesZipDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.download.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.nodes.zip.download.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesZipDownloadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.nodes.zip.download.$post>) {
      return parseResponse(client.v4.nodes.zip.download.$post(args, options))
    },
  })
}

export function createPostV4NodesZipDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.nodes.zip.download.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.nodes.zip.download.$post>,
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
    const mutationDefaults = getPostV4NodesZipDownloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id', keyArgs] as const
}

export function getV4NodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesNodeIdQueryKey>
  >({
    queryKey: getV4NodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes[':node_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4NodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesNodeIdQueryKey>
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
    return { ...getV4NodesNodeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV4NodesNodeIdMutationKey() {
  return ['v4', '/v4/nodes/:node_id', 'DELETE'] as const
}

export function getDeleteV4NodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesNodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']>) {
      return parseResponse(client.v4.nodes[':node_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4NodesNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesNodeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesNodeIdCommentsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/comments', keyArgs] as const
}

export function getV4NodesNodeIdCommentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesNodeIdCommentsQueryKey>
  >({
    queryKey: getV4NodesNodeIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes[':node_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesNodeIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesNodeIdCommentsQueryKey>
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
    return {
      ...getV4NodesNodeIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesNodeIdCommentsMutationKey() {
  return ['v4', '/v4/nodes/:node_id/comments', 'POST'] as const
}

export function getPostV4NodesNodeIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesNodeIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].comments.$post(args, options))
    },
  })
}

export function createPostV4NodesNodeIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>,
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
    const mutationDefaults = getPostV4NodesNodeIdCommentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesNodeIdCopyToMutationKey() {
  return ['v4', '/v4/nodes/:node_id/copy_to', 'POST'] as const
}

export function getPostV4NodesNodeIdCopyToMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesNodeIdCopyToMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].copy_to.$post(args, options))
    },
  })
}

export function createPostV4NodesNodeIdCopyTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>,
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
    const mutationDefaults = getPostV4NodesNodeIdCopyToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesNodeIdDeletedNodesQueryKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/deleted_nodes', keyArgs] as const
}

export function getV4NodesNodeIdDeletedNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesNodeIdDeletedNodesQueryKey>
  >({
    queryKey: getV4NodesNodeIdDeletedNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes[':node_id'].deleted_nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesNodeIdDeletedNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesNodeIdDeletedNodesQueryKey>
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
    return {
      ...getV4NodesNodeIdDeletedNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV4NodesNodeIdDeletedNodesMutationKey() {
  return ['v4', '/v4/nodes/:node_id/deleted_nodes', 'DELETE'] as const
}

export function getDeleteV4NodesNodeIdDeletedNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesNodeIdDeletedNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesNodeIdDeletedNodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesNodeIdDeletedNodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesNodeIdDeletedNodesVersionsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/deleted_nodes/versions', keyArgs] as const
}

export function getV4NodesNodeIdDeletedNodesVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesNodeIdDeletedNodesVersionsQueryKey>
  >({
    queryKey: getV4NodesNodeIdDeletedNodesVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes[':node_id'].deleted_nodes.versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesNodeIdDeletedNodesVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesNodeIdDeletedNodesVersionsQueryKey>
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
    return {
      ...getV4NodesNodeIdDeletedNodesVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4NodesNodeIdFavoriteMutationKey() {
  return ['v4', '/v4/nodes/:node_id/favorite', 'POST'] as const
}

export function getPostV4NodesNodeIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesNodeIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].favorite.$post(args, options))
    },
  })
}

export function createPostV4NodesNodeIdFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>,
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
    const mutationDefaults = getPostV4NodesNodeIdFavoriteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4NodesNodeIdFavoriteMutationKey() {
  return ['v4', '/v4/nodes/:node_id/favorite', 'DELETE'] as const
}

export function getDeleteV4NodesNodeIdFavoriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4NodesNodeIdFavoriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].favorite.$delete(args, options))
    },
  })
}

export function createDeleteV4NodesNodeIdFavorite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>,
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
    const mutationDefaults = getDeleteV4NodesNodeIdFavoriteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4NodesNodeIdMoveToMutationKey() {
  return ['v4', '/v4/nodes/:node_id/move_to', 'POST'] as const
}

export function getPostV4NodesNodeIdMoveToMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4NodesNodeIdMoveToMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>,
    ) {
      return parseResponse(client.v4.nodes[':node_id'].move_to.$post(args, options))
    },
  })
}

export function createPostV4NodesNodeIdMoveTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>,
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
    const mutationDefaults = getPostV4NodesNodeIdMoveToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4NodesNodeIdParentsQueryKey(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/nodes/:node_id/parents', keyArgs] as const
}

export function getV4NodesNodeIdParentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NodesNodeIdParentsQueryKey>
  >({
    queryKey: getV4NodesNodeIdParentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.nodes[':node_id'].parents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4NodesNodeIdParents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4NodesNodeIdParentsQueryKey>
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
    return {
      ...getV4NodesNodeIdParentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ProvisioningCustomersQueryKey(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers', keyArgs] as const
}

export function getV4ProvisioningCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningCustomersQueryKey>
  >({
    queryKey: getV4ProvisioningCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.provisioning.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.provisioning.customers.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningCustomersQueryKey>
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
    return {
      ...getV4ProvisioningCustomersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4ProvisioningCustomersMutationKey() {
  return ['v4', '/v4/provisioning/customers', 'POST'] as const
}

export function getPostV4ProvisioningCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.customers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.provisioning.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ProvisioningCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.provisioning.customers.$post>) {
      return parseResponse(client.v4.provisioning.customers.$post(args, options))
    },
  })
}

export function createPostV4ProvisioningCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.provisioning.customers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.provisioning.customers.$post>,
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
    const mutationDefaults = getPostV4ProvisioningCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4ProvisioningCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id', keyArgs] as const
}

export function getV4ProvisioningCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningCustomersCustomerIdQueryKey>
  >({
    queryKey: getV4ProvisioningCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningCustomersCustomerIdQueryKey>
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
    return {
      ...getV4ProvisioningCustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4ProvisioningCustomersCustomerIdMutationKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id', 'PUT'] as const
}

export function getPutV4ProvisioningCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4ProvisioningCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>,
    ) {
      return parseResponse(client.v4.provisioning.customers[':customer_id'].$put(args, options))
    },
  })
}

export function createPutV4ProvisioningCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>,
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
    const mutationDefaults = getPutV4ProvisioningCustomersCustomerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4ProvisioningCustomersCustomerIdMutationKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id', 'DELETE'] as const
}

export function getDeleteV4ProvisioningCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4ProvisioningCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>,
    ) {
      return parseResponse(client.v4.provisioning.customers[':customer_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4ProvisioningCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4ProvisioningCustomersCustomerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryKey(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', keyArgs] as const
}

export function getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryKey>
  >({
    queryKey: getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].customerAttributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryKey>
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
    return {
      ...getV4ProvisioningCustomersCustomerIdCustomerAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV4ProvisioningCustomersCustomerIdCustomerAttributesMutationKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', 'PUT'] as const
}

export function getPutV4ProvisioningCustomersCustomerIdCustomerAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV4ProvisioningCustomersCustomerIdCustomerAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
      >,
    ) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].customerAttributes.$put(args, options),
      )
    },
  })
}

export function createPutV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
          >,
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
    const mutationDefaults =
      getPutV4ProvisioningCustomersCustomerIdCustomerAttributesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4ProvisioningCustomersCustomerIdCustomerAttributesMutationKey() {
  return ['v4', '/v4/provisioning/customers/:customer_id/customerAttributes', 'POST'] as const
}

export function getPostV4ProvisioningCustomersCustomerIdCustomerAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4ProvisioningCustomersCustomerIdCustomerAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].customerAttributes.$post(args, options),
      )
    },
  })
}

export function createPostV4ProvisioningCustomersCustomerIdCustomerAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
          >,
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
    const mutationDefaults =
      getPostV4ProvisioningCustomersCustomerIdCustomerAttributesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyMutationKey() {
  return [
    'v4',
    '/v4/provisioning/customers/:customer_id/customerAttributes/:key',
    'DELETE',
  ] as const
}

export function getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].customerAttributes[':key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV4ProvisioningCustomersCustomerIdCustomerAttributesKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4ProvisioningCustomersCustomerIdUsersQueryKey(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/customers/:customer_id/users', keyArgs] as const
}

export function getV4ProvisioningCustomersCustomerIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningCustomersCustomerIdUsersQueryKey>
  >({
    queryKey: getV4ProvisioningCustomersCustomerIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.customers[':customer_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningCustomersCustomerIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningCustomersCustomerIdUsersQueryKey>
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
    return {
      ...getV4ProvisioningCustomersCustomerIdUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV4ProvisioningWebhooksQueryKey(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks', keyArgs] as const
}

export function getV4ProvisioningWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningWebhooksQueryKey>
  >({
    queryKey: getV4ProvisioningWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningWebhooksQueryKey>
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
    return {
      ...getV4ProvisioningWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4ProvisioningWebhooksMutationKey() {
  return ['v4', '/v4/provisioning/webhooks', 'POST'] as const
}

export function getPostV4ProvisioningWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.provisioning.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ProvisioningWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.provisioning.webhooks.$post>) {
      return parseResponse(client.v4.provisioning.webhooks.$post(args, options))
    },
  })
}

export function createPostV4ProvisioningWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.provisioning.webhooks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.provisioning.webhooks.$post>,
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
    const mutationDefaults = getPostV4ProvisioningWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4ProvisioningWebhooksEventTypesQueryKey(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks/event_types', keyArgs] as const
}

export function getV4ProvisioningWebhooksEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningWebhooksEventTypesQueryKey>
  >({
    queryKey: getV4ProvisioningWebhooksEventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.webhooks.event_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningWebhooksEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.provisioning.webhooks.event_types.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningWebhooksEventTypesQueryKey>
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
    return {
      ...getV4ProvisioningWebhooksEventTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ProvisioningWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', keyArgs] as const
}

export function getV4ProvisioningWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ProvisioningWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV4ProvisioningWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.provisioning.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ProvisioningWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ProvisioningWebhooksWebhookIdQueryKey>
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
    return {
      ...getV4ProvisioningWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4ProvisioningWebhooksWebhookIdMutationKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', 'PUT'] as const
}

export function getPutV4ProvisioningWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4ProvisioningWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>,
    ) {
      return parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function createPutV4ProvisioningWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>,
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
    const mutationDefaults = getPutV4ProvisioningWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4ProvisioningWebhooksWebhookIdMutationKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV4ProvisioningWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4ProvisioningWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4ProvisioningWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4ProvisioningWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4ProvisioningWebhooksWebhookIdResetLifetimeMutationKey() {
  return ['v4', '/v4/provisioning/webhooks/:webhook_id/reset_lifetime', 'POST'] as const
}

export function getPostV4ProvisioningWebhooksWebhookIdResetLifetimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4ProvisioningWebhooksWebhookIdResetLifetimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.provisioning.webhooks[':webhook_id'].reset_lifetime.$post(args, options),
      )
    },
  })
}

export function createPostV4ProvisioningWebhooksWebhookIdResetLifetime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
          >,
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
    const mutationDefaults = getPostV4ProvisioningWebhooksWebhookIdResetLifetimeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4PublicSharesDownloadsAccessKeyQueryKey(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/downloads/:access_key', keyArgs] as const
}

export function getV4PublicSharesDownloadsAccessKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSharesDownloadsAccessKeyQueryKey>
  >({
    queryKey: getV4PublicSharesDownloadsAccessKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.shares.downloads[':access_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSharesDownloadsAccessKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSharesDownloadsAccessKeyQueryKey>
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
    return {
      ...getV4PublicSharesDownloadsAccessKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4PublicSharesDownloadsAccessKeyMutationKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key', 'POST'] as const
}

export function getPostV4PublicSharesDownloadsAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PublicSharesDownloadsAccessKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>,
    ) {
      return parseResponse(client.v4.public.shares.downloads[':access_key'].$post(args, options))
    },
  })
}

export function createPostV4PublicSharesDownloadsAccessKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>,
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
    const mutationDefaults = getPostV4PublicSharesDownloadsAccessKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadV4PublicSharesDownloadsAccessKeyMutationKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key', 'HEAD'] as const
}

export function getHeadV4PublicSharesDownloadsAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV4PublicSharesDownloadsAccessKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>,
    ) {
      return parseResponse(client.v4.public.shares.downloads[':access_key'].$head(args, options))
    },
  })
}

export function createHeadV4PublicSharesDownloadsAccessKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>,
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
    const mutationDefaults = getHeadV4PublicSharesDownloadsAccessKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4PublicSharesDownloadsAccessKeyTokenQueryKey(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/downloads/:access_key/:token', keyArgs] as const
}

export function getV4PublicSharesDownloadsAccessKeyTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSharesDownloadsAccessKeyTokenQueryKey>
  >({
    queryKey: getV4PublicSharesDownloadsAccessKeyTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.shares.downloads[':access_key'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSharesDownloadsAccessKeyToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSharesDownloadsAccessKeyTokenQueryKey>
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
    return {
      ...getV4PublicSharesDownloadsAccessKeyTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHeadV4PublicSharesDownloadsAccessKeyTokenMutationKey() {
  return ['v4', '/v4/public/shares/downloads/:access_key/:token', 'HEAD'] as const
}

export function getHeadV4PublicSharesDownloadsAccessKeyTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV4PublicSharesDownloadsAccessKeyTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.downloads[':access_key'][':token'].$head(args, options),
      )
    },
  })
}

export function createHeadV4PublicSharesDownloadsAccessKeyToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']
          >,
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
    const mutationDefaults = getHeadV4PublicSharesDownloadsAccessKeyTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4PublicSharesUploadsAccessKeyQueryKey(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/shares/uploads/:access_key', keyArgs] as const
}

export function getV4PublicSharesUploadsAccessKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSharesUploadsAccessKeyQueryKey>
  >({
    queryKey: getV4PublicSharesUploadsAccessKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSharesUploadsAccessKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSharesUploadsAccessKeyQueryKey>
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
    return {
      ...getV4PublicSharesUploadsAccessKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4PublicSharesUploadsAccessKeyMutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key', 'POST'] as const
}

export function getPostV4PublicSharesUploadsAccessKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PublicSharesUploadsAccessKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>,
    ) {
      return parseResponse(client.v4.public.shares.uploads[':access_key'].$post(args, options))
    },
  })
}

export function createPostV4PublicSharesUploadsAccessKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>,
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
    const mutationDefaults = getPostV4PublicSharesUploadsAccessKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4PublicSharesUploadsAccessKeyUploadIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
) {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', args] as const
}

export function getV4PublicSharesUploadsAccessKeyUploadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSharesUploadsAccessKeyUploadIdQueryKey>
  >({
    queryKey: getV4PublicSharesUploadsAccessKeyUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSharesUploadsAccessKeyUploadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSharesUploadsAccessKeyUploadIdQueryKey>
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
    return {
      ...getV4PublicSharesUploadsAccessKeyUploadIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdMutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'PUT'] as const
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4PublicSharesUploadsAccessKeyUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].$put(args, options),
      )
    },
  })
}

export function createPutV4PublicSharesUploadsAccessKeyUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
          >,
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
    const mutationDefaults = getPutV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdMutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'POST'] as const
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4PublicSharesUploadsAccessKeyUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].$post(args, options),
      )
    },
  })
}

export function createPostV4PublicSharesUploadsAccessKeyUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
          >,
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
    const mutationDefaults = getPostV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4PublicSharesUploadsAccessKeyUploadIdMutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id', 'DELETE'] as const
}

export function getDeleteV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4PublicSharesUploadsAccessKeyUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4PublicSharesUploadsAccessKeyUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
          >,
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
    const mutationDefaults = getDeleteV4PublicSharesUploadsAccessKeyUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdS3MutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id/s3', 'PUT'] as const
}

export function getPutV4PublicSharesUploadsAccessKeyUploadIdS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV4PublicSharesUploadsAccessKeyUploadIdS3MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].s3.$put(args, options),
      )
    },
  })
}

export function createPutV4PublicSharesUploadsAccessKeyUploadIdS3<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
          >,
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
    const mutationDefaults = getPutV4PublicSharesUploadsAccessKeyUploadIdS3MutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsMutationKey() {
  return ['v4', '/v4/public/shares/uploads/:access_key/:upload_id/s3_urls', 'POST'] as const
}

export function getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.public.shares.uploads[':access_key'][':upload_id'].s3_urls.$post(args, options),
      )
    },
  })
}

export function createPostV4PublicSharesUploadsAccessKeyUploadIdS3Urls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
          >,
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
    const mutationDefaults = getPostV4PublicSharesUploadsAccessKeyUploadIdS3UrlsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4PublicSoftwareThirdPartyDependenciesQueryKey() {
  return ['v4', '/v4/public/software/third_party_dependencies'] as const
}

export function getV4PublicSoftwareThirdPartyDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSoftwareThirdPartyDependenciesQueryKey>
  >({
    queryKey: getV4PublicSoftwareThirdPartyDependenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.software.third_party_dependencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSoftwareThirdPartyDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.public.software.third_party_dependencies.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSoftwareThirdPartyDependenciesQueryKey>
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
    return {
      ...getV4PublicSoftwareThirdPartyDependenciesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4PublicSoftwareVersionQueryKey(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/software/version', keyArgs] as const
}

export function getV4PublicSoftwareVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSoftwareVersionQueryKey>
  >({
    queryKey: getV4PublicSoftwareVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.software.version.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSoftwareVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.software.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.public.software.version.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.public.software.version.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSoftwareVersionQueryKey>
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
    return {
      ...getV4PublicSoftwareVersionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4PublicSystemInfoQueryKey(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
) {
  return ['v4', '/v4/public/system/info', args] as const
}

export function getV4PublicSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSystemInfoQueryKey>
  >({
    queryKey: getV4PublicSystemInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.system.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4PublicSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.public.system.info.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSystemInfoQueryKey>
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
    return { ...getV4PublicSystemInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4PublicSystemInfoAuthAdQueryKey(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
) {
  return ['v4', '/v4/public/system/info/auth/ad', args] as const
}

export function getV4PublicSystemInfoAuthAdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSystemInfoAuthAdQueryKey>
  >({
    queryKey: getV4PublicSystemInfoAuthAdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.system.info.auth.ad.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSystemInfoAuthAd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.public.system.info.auth.ad.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSystemInfoAuthAdQueryKey>
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
    return {
      ...getV4PublicSystemInfoAuthAdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4PublicSystemInfoAuthOpenidQueryKey(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
) {
  return ['v4', '/v4/public/system/info/auth/openid', args] as const
}

export function getV4PublicSystemInfoAuthOpenidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicSystemInfoAuthOpenidQueryKey>
  >({
    queryKey: getV4PublicSystemInfoAuthOpenidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.system.info.auth.openid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4PublicSystemInfoAuthOpenid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.public.system.info.auth.openid.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicSystemInfoAuthOpenidQueryKey>
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
    return {
      ...getV4PublicSystemInfoAuthOpenidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4PublicTimeQueryKey(args: InferRequestType<typeof client.v4.public.time.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/public/time', keyArgs] as const
}

export function getV4PublicTimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.public.time.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4PublicTimeQueryKey>
  >({
    queryKey: getV4PublicTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.public.time.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4PublicTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.public.time.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.public.time.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4PublicTimeQueryKey>
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
    return { ...getV4PublicTimeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4ResourcesUserNotificationsScopesQueryKey() {
  return ['v4', '/v4/resources/user/notifications/scopes'] as const
}

export function getV4ResourcesUserNotificationsScopesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ResourcesUserNotificationsScopesQueryKey>
  >({
    queryKey: getV4ResourcesUserNotificationsScopesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.resources.user.notifications.scopes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ResourcesUserNotificationsScopes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.resources.user.notifications.scopes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ResourcesUserNotificationsScopesQueryKey>
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
    return {
      ...getV4ResourcesUserNotificationsScopesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4ResourcesUsersUserIdAvatarUuidQueryKey(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
) {
  return ['v4', '/v4/resources/users/:user_id/avatar/:uuid', args] as const
}

export function getV4ResourcesUsersUserIdAvatarUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4ResourcesUsersUserIdAvatarUuidQueryKey>
  >({
    queryKey: getV4ResourcesUsersUserIdAvatarUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.resources.users[':user_id'].avatar[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4ResourcesUsersUserIdAvatarUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4ResourcesUsersUserIdAvatarUuidQueryKey>
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
    return {
      ...getV4ResourcesUsersUserIdAvatarUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4RolesQueryKey(args: InferRequestType<typeof client.v4.roles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles', keyArgs] as const
}

export function getV4RolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4RolesQueryKey>
  >({
    queryKey: getV4RolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4Roles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.roles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.roles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4RolesQueryKey>
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
    return { ...getV4RolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4RolesRoleIdGroupsQueryKey(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles/:role_id/groups', keyArgs] as const
}

export function getV4RolesRoleIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4RolesRoleIdGroupsQueryKey>
  >({
    queryKey: getV4RolesRoleIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.roles[':role_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4RolesRoleIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4RolesRoleIdGroupsQueryKey>
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
    return { ...getV4RolesRoleIdGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4RolesRoleIdGroupsMutationKey() {
  return ['v4', '/v4/roles/:role_id/groups', 'POST'] as const
}

export function getPostV4RolesRoleIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4RolesRoleIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']>,
    ) {
      return parseResponse(client.v4.roles[':role_id'].groups.$post(args, options))
    },
  })
}

export function createPostV4RolesRoleIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']>,
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
    const mutationDefaults = getPostV4RolesRoleIdGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4RolesRoleIdGroupsMutationKey() {
  return ['v4', '/v4/roles/:role_id/groups', 'DELETE'] as const
}

export function getDeleteV4RolesRoleIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4RolesRoleIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>,
    ) {
      return parseResponse(client.v4.roles[':role_id'].groups.$delete(args, options))
    },
  })
}

export function createDeleteV4RolesRoleIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>,
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
    const mutationDefaults = getDeleteV4RolesRoleIdGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4RolesRoleIdUsersQueryKey(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/roles/:role_id/users', keyArgs] as const
}

export function getV4RolesRoleIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4RolesRoleIdUsersQueryKey>
  >({
    queryKey: getV4RolesRoleIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.roles[':role_id'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4RolesRoleIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4RolesRoleIdUsersQueryKey>
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
    return { ...getV4RolesRoleIdUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4RolesRoleIdUsersMutationKey() {
  return ['v4', '/v4/roles/:role_id/users', 'POST'] as const
}

export function getPostV4RolesRoleIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4RolesRoleIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']>,
    ) {
      return parseResponse(client.v4.roles[':role_id'].users.$post(args, options))
    },
  })
}

export function createPostV4RolesRoleIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']>,
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
    const mutationDefaults = getPostV4RolesRoleIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4RolesRoleIdUsersMutationKey() {
  return ['v4', '/v4/roles/:role_id/users', 'DELETE'] as const
}

export function getDeleteV4RolesRoleIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4RolesRoleIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']>,
    ) {
      return parseResponse(client.v4.roles[':role_id'].users.$delete(args, options))
    },
  })
}

export function createDeleteV4RolesRoleIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.roles)[':role_id']['users']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']>,
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
    const mutationDefaults = getDeleteV4RolesRoleIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsQueryKey(args: InferRequestType<typeof client.v4.settings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings', keyArgs] as const
}

export function getV4SettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4SettingsQueryKey>
  >({
    queryKey: getV4SettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4Settings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsQueryKey>
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
    return { ...getV4SettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4SettingsMutationKey() {
  return ['v4', '/v4/settings', 'PUT'] as const
}

export function getPutV4SettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$put>>>>>,
    TError,
    InferRequestType<typeof client.v4.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.settings.$put>) {
      return parseResponse(client.v4.settings.$put(args, options))
    },
  })
}

export function createPutV4Settings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.settings.$put>,
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
    const mutationDefaults = getPutV4SettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsKeypairQueryKey(
  args: InferRequestType<typeof client.v4.settings.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/keypair', keyArgs] as const
}

export function getV4SettingsKeypairQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.settings.keypair.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsKeypairQueryKey>
  >({
    queryKey: getV4SettingsKeypairQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.keypair.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4SettingsKeypair<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.keypair.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsKeypairQueryKey>
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
    return { ...getV4SettingsKeypairQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4SettingsKeypairMutationKey() {
  return ['v4', '/v4/settings/keypair', 'POST'] as const
}

export function getPostV4SettingsKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.settings.keypair.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SettingsKeypairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.settings.keypair.$post>) {
      return parseResponse(client.v4.settings.keypair.$post(args, options))
    },
  })
}

export function createPostV4SettingsKeypair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.settings.keypair.$post>,
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
    const mutationDefaults = getPostV4SettingsKeypairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SettingsKeypairMutationKey() {
  return ['v4', '/v4/settings/keypair', 'DELETE'] as const
}

export function getDeleteV4SettingsKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.settings.keypair.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SettingsKeypairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.settings.keypair.$delete>) {
      return parseResponse(client.v4.settings.keypair.$delete(args, options))
    },
  })
}

export function createDeleteV4SettingsKeypair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypair.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.settings.keypair.$delete>,
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
    const mutationDefaults = getDeleteV4SettingsKeypairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsKeypairsQueryKey(
  args: InferRequestType<typeof client.v4.settings.keypairs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/keypairs', keyArgs] as const
}

export function getV4SettingsKeypairsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.settings.keypairs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsKeypairsQueryKey>
  >({
    queryKey: getV4SettingsKeypairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.keypairs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4SettingsKeypairs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.keypairs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsKeypairsQueryKey>
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
    return { ...getV4SettingsKeypairsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4SettingsKeypairsMutationKey() {
  return ['v4', '/v4/settings/keypairs', 'POST'] as const
}

export function getPostV4SettingsKeypairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.settings.keypairs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SettingsKeypairsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.settings.keypairs.$post>) {
      return parseResponse(client.v4.settings.keypairs.$post(args, options))
    },
  })
}

export function createPostV4SettingsKeypairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.keypairs.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.settings.keypairs.$post>,
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
    const mutationDefaults = getPostV4SettingsKeypairsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsNotificationsChannelsQueryKey(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/notifications/channels', keyArgs] as const
}

export function getV4SettingsNotificationsChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsNotificationsChannelsQueryKey>
  >({
    queryKey: getV4SettingsNotificationsChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.notifications.channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SettingsNotificationsChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsNotificationsChannelsQueryKey>
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
    return {
      ...getV4SettingsNotificationsChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SettingsNotificationsChannelsMutationKey() {
  return ['v4', '/v4/settings/notifications/channels', 'PUT'] as const
}

export function getPutV4SettingsNotificationsChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.settings.notifications.channels.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SettingsNotificationsChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.settings.notifications.channels.$put>,
    ) {
      return parseResponse(client.v4.settings.notifications.channels.$put(args, options))
    },
  })
}

export function createPutV4SettingsNotificationsChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.settings.notifications.channels.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.settings.notifications.channels.$put>,
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
    const mutationDefaults = getPutV4SettingsNotificationsChannelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsWebhooksQueryKey(
  args: InferRequestType<typeof client.v4.settings.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks', keyArgs] as const
}

export function getV4SettingsWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.settings.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsWebhooksQueryKey>
  >({
    queryKey: getV4SettingsWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4SettingsWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.webhooks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsWebhooksQueryKey>
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
    return { ...getV4SettingsWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4SettingsWebhooksMutationKey() {
  return ['v4', '/v4/settings/webhooks', 'POST'] as const
}

export function getPostV4SettingsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.settings.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SettingsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.settings.webhooks.$post>) {
      return parseResponse(client.v4.settings.webhooks.$post(args, options))
    },
  })
}

export function createPostV4SettingsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.settings.webhooks.$post>,
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
    const mutationDefaults = getPostV4SettingsWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SettingsWebhooksEventTypesQueryKey(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks/event_types', keyArgs] as const
}

export function getV4SettingsWebhooksEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsWebhooksEventTypesQueryKey>
  >({
    queryKey: getV4SettingsWebhooksEventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.webhooks.event_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SettingsWebhooksEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.settings.webhooks.event_types.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsWebhooksEventTypesQueryKey>
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
    return {
      ...getV4SettingsWebhooksEventTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4SettingsWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/settings/webhooks/:webhook_id', keyArgs] as const
}

export function getV4SettingsWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SettingsWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV4SettingsWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.settings.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SettingsWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SettingsWebhooksWebhookIdQueryKey>
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
    return {
      ...getV4SettingsWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SettingsWebhooksWebhookIdMutationKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id', 'PUT'] as const
}

export function getPutV4SettingsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SettingsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>,
    ) {
      return parseResponse(client.v4.settings.webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function createPutV4SettingsWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>,
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
    const mutationDefaults = getPutV4SettingsWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SettingsWebhooksWebhookIdMutationKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV4SettingsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SettingsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v4.settings.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4SettingsWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SettingsWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SettingsWebhooksWebhookIdResetLifetimeMutationKey() {
  return ['v4', '/v4/settings/webhooks/:webhook_id/reset_lifetime', 'POST'] as const
}

export function getPostV4SettingsWebhooksWebhookIdResetLifetimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4SettingsWebhooksWebhookIdResetLifetimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.settings.webhooks[':webhook_id'].reset_lifetime.$post(args, options),
      )
    },
  })
}

export function createPostV4SettingsWebhooksWebhookIdResetLifetime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
          >,
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
    const mutationDefaults = getPostV4SettingsWebhooksWebhookIdResetLifetimeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SharesDownloadsQueryKey(
  args: InferRequestType<typeof client.v4.shares.downloads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads', keyArgs] as const
}

export function getV4SharesDownloadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.shares.downloads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesDownloadsQueryKey>
  >({
    queryKey: getV4SharesDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.downloads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4SharesDownloads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.shares.downloads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesDownloadsQueryKey>
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
    return { ...getV4SharesDownloadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4SharesDownloadsMutationKey() {
  return ['v4', '/v4/shares/downloads', 'PUT'] as const
}

export function getPutV4SharesDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.shares.downloads.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SharesDownloadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.downloads.$put>) {
      return parseResponse(client.v4.shares.downloads.$put(args, options))
    },
  })
}

export function createPutV4SharesDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.shares.downloads.$put>,
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
    const mutationDefaults = getPutV4SharesDownloadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SharesDownloadsMutationKey() {
  return ['v4', '/v4/shares/downloads', 'POST'] as const
}

export function getPostV4SharesDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.shares.downloads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SharesDownloadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.downloads.$post>) {
      return parseResponse(client.v4.shares.downloads.$post(args, options))
    },
  })
}

export function createPostV4SharesDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.shares.downloads.$post>,
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
    const mutationDefaults = getPostV4SharesDownloadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SharesDownloadsMutationKey() {
  return ['v4', '/v4/shares/downloads', 'DELETE'] as const
}

export function getDeleteV4SharesDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.shares.downloads.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SharesDownloadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.downloads.$delete>) {
      return parseResponse(client.v4.shares.downloads.$delete(args, options))
    },
  })
}

export function createDeleteV4SharesDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.downloads.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.shares.downloads.$delete>,
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
    const mutationDefaults = getDeleteV4SharesDownloadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SharesDownloadsShareIdQueryKey(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads/:share_id', keyArgs] as const
}

export function getV4SharesDownloadsShareIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesDownloadsShareIdQueryKey>
  >({
    queryKey: getV4SharesDownloadsShareIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.downloads[':share_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SharesDownloadsShareId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesDownloadsShareIdQueryKey>
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
    return {
      ...getV4SharesDownloadsShareIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SharesDownloadsShareIdMutationKey() {
  return ['v4', '/v4/shares/downloads/:share_id', 'PUT'] as const
}

export function getPutV4SharesDownloadsShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SharesDownloadsShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']>,
    ) {
      return parseResponse(client.v4.shares.downloads[':share_id'].$put(args, options))
    },
  })
}

export function createPutV4SharesDownloadsShareId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']>,
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
    const mutationDefaults = getPutV4SharesDownloadsShareIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SharesDownloadsShareIdMutationKey() {
  return ['v4', '/v4/shares/downloads/:share_id', 'DELETE'] as const
}

export function getDeleteV4SharesDownloadsShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SharesDownloadsShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>,
    ) {
      return parseResponse(client.v4.shares.downloads[':share_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4SharesDownloadsShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SharesDownloadsShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SharesDownloadsShareIdEmailMutationKey() {
  return ['v4', '/v4/shares/downloads/:share_id/email', 'POST'] as const
}

export function getPostV4SharesDownloadsShareIdEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SharesDownloadsShareIdEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>,
    ) {
      return parseResponse(client.v4.shares.downloads[':share_id'].email.$post(args, options))
    },
  })
}

export function createPostV4SharesDownloadsShareIdEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>,
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
    const mutationDefaults = getPostV4SharesDownloadsShareIdEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SharesDownloadsShareIdQrQueryKey(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/downloads/:share_id/qr', keyArgs] as const
}

export function getV4SharesDownloadsShareIdQrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesDownloadsShareIdQrQueryKey>
  >({
    queryKey: getV4SharesDownloadsShareIdQrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.downloads[':share_id'].qr.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SharesDownloadsShareIdQr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesDownloadsShareIdQrQueryKey>
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
    return {
      ...getV4SharesDownloadsShareIdQrQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4SharesUploadsQueryKey(
  args: InferRequestType<typeof client.v4.shares.uploads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads', keyArgs] as const
}

export function getV4SharesUploadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.shares.uploads.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesUploadsQueryKey>
  >({
    queryKey: getV4SharesUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.uploads.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4SharesUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.shares.uploads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesUploadsQueryKey>
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
    return { ...getV4SharesUploadsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4SharesUploadsMutationKey() {
  return ['v4', '/v4/shares/uploads', 'PUT'] as const
}

export function getPutV4SharesUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.shares.uploads.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SharesUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.uploads.$put>) {
      return parseResponse(client.v4.shares.uploads.$put(args, options))
    },
  })
}

export function createPutV4SharesUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.shares.uploads.$put>,
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
    const mutationDefaults = getPutV4SharesUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SharesUploadsMutationKey() {
  return ['v4', '/v4/shares/uploads', 'POST'] as const
}

export function getPostV4SharesUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.shares.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SharesUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.uploads.$post>) {
      return parseResponse(client.v4.shares.uploads.$post(args, options))
    },
  })
}

export function createPostV4SharesUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.shares.uploads.$post>,
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
    const mutationDefaults = getPostV4SharesUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SharesUploadsMutationKey() {
  return ['v4', '/v4/shares/uploads', 'DELETE'] as const
}

export function getDeleteV4SharesUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.shares.uploads.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SharesUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.shares.uploads.$delete>) {
      return parseResponse(client.v4.shares.uploads.$delete(args, options))
    },
  })
}

export function createDeleteV4SharesUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.shares.uploads.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.shares.uploads.$delete>,
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
    const mutationDefaults = getDeleteV4SharesUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SharesUploadsShareIdQueryKey(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads/:share_id', keyArgs] as const
}

export function getV4SharesUploadsShareIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesUploadsShareIdQueryKey>
  >({
    queryKey: getV4SharesUploadsShareIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.uploads[':share_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SharesUploadsShareId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesUploadsShareIdQueryKey>
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
    return {
      ...getV4SharesUploadsShareIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SharesUploadsShareIdMutationKey() {
  return ['v4', '/v4/shares/uploads/:share_id', 'PUT'] as const
}

export function getPutV4SharesUploadsShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SharesUploadsShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']>,
    ) {
      return parseResponse(client.v4.shares.uploads[':share_id'].$put(args, options))
    },
  })
}

export function createPutV4SharesUploadsShareId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']>,
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
    const mutationDefaults = getPutV4SharesUploadsShareIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SharesUploadsShareIdMutationKey() {
  return ['v4', '/v4/shares/uploads/:share_id', 'DELETE'] as const
}

export function getDeleteV4SharesUploadsShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SharesUploadsShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>,
    ) {
      return parseResponse(client.v4.shares.uploads[':share_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4SharesUploadsShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SharesUploadsShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SharesUploadsShareIdEmailMutationKey() {
  return ['v4', '/v4/shares/uploads/:share_id/email', 'POST'] as const
}

export function getPostV4SharesUploadsShareIdEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SharesUploadsShareIdEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>,
    ) {
      return parseResponse(client.v4.shares.uploads[':share_id'].email.$post(args, options))
    },
  })
}

export function createPostV4SharesUploadsShareIdEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>,
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
    const mutationDefaults = getPostV4SharesUploadsShareIdEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SharesUploadsShareIdQrQueryKey(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/shares/uploads/:share_id/qr', keyArgs] as const
}

export function getV4SharesUploadsShareIdQrQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SharesUploadsShareIdQrQueryKey>
  >({
    queryKey: getV4SharesUploadsShareIdQrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.shares.uploads[':share_id'].qr.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SharesUploadsShareIdQr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SharesUploadsShareIdQrQueryKey>
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
    return {
      ...getV4SharesUploadsShareIdQrQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4SystemConfigActionsTestAdMutationKey() {
  return ['v4', '/v4/system/config/actions/test/ad', 'POST'] as const
}

export function getPostV4SystemConfigActionsTestAdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.actions.test.ad.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.actions.test.ad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigActionsTestAdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.actions.test.ad.$post>) {
      return parseResponse(client.v4.system.config.actions.test.ad.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigActionsTestAd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.actions.test.ad.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.actions.test.ad.$post>,
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
    const mutationDefaults = getPostV4SystemConfigActionsTestAdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SystemConfigActionsTestRadiusMutationKey() {
  return ['v4', '/v4/system/config/actions/test/radius', 'POST'] as const
}

export function getPostV4SystemConfigActionsTestRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.actions.test.radius.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.system.config.actions.test.radius.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigActionsTestRadiusMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.actions.test.radius.$post>,
    ) {
      return parseResponse(client.v4.system.config.actions.test.radius.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigActionsTestRadius<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.system.config.actions.test.radius.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.system.config.actions.test.radius.$post>,
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
    const mutationDefaults = getPostV4SystemConfigActionsTestRadiusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigAuthAdsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/ads', keyArgs] as const
}

export function getV4SystemConfigAuthAdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigAuthAdsQueryKey>
  >({
    queryKey: getV4SystemConfigAuthAdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.auth.ads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigAuthAds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigAuthAdsQueryKey>
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
    return {
      ...getV4SystemConfigAuthAdsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4SystemConfigAuthAdsMutationKey() {
  return ['v4', '/v4/system/config/auth/ads', 'POST'] as const
}

export function getPostV4SystemConfigAuthAdsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.auth.ads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigAuthAdsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.auth.ads.$post>) {
      return parseResponse(client.v4.system.config.auth.ads.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigAuthAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.ads.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.auth.ads.$post>,
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
    const mutationDefaults = getPostV4SystemConfigAuthAdsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigAuthAdsAdIdQueryKey(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/ads/:ad_id', keyArgs] as const
}

export function getV4SystemConfigAuthAdsAdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigAuthAdsAdIdQueryKey>
  >({
    queryKey: getV4SystemConfigAuthAdsAdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.auth.ads[':ad_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigAuthAdsAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigAuthAdsAdIdQueryKey>
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
    return {
      ...getV4SystemConfigAuthAdsAdIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigAuthAdsAdIdMutationKey() {
  return ['v4', '/v4/system/config/auth/ads/:ad_id', 'PUT'] as const
}

export function getPutV4SystemConfigAuthAdsAdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigAuthAdsAdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>,
    ) {
      return parseResponse(client.v4.system.config.auth.ads[':ad_id'].$put(args, options))
    },
  })
}

export function createPutV4SystemConfigAuthAdsAdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>,
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
    const mutationDefaults = getPutV4SystemConfigAuthAdsAdIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SystemConfigAuthAdsAdIdMutationKey() {
  return ['v4', '/v4/system/config/auth/ads/:ad_id', 'DELETE'] as const
}

export function getDeleteV4SystemConfigAuthAdsAdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SystemConfigAuthAdsAdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>,
    ) {
      return parseResponse(client.v4.system.config.auth.ads[':ad_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4SystemConfigAuthAdsAdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SystemConfigAuthAdsAdIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigAuthOpenidIdpsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/openid/idps', keyArgs] as const
}

export function getV4SystemConfigAuthOpenidIdpsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigAuthOpenidIdpsQueryKey>
  >({
    queryKey: getV4SystemConfigAuthOpenidIdpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.auth.openid.idps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigAuthOpenidIdps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigAuthOpenidIdpsQueryKey>
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
    return {
      ...getV4SystemConfigAuthOpenidIdpsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4SystemConfigAuthOpenidIdpsMutationKey() {
  return ['v4', '/v4/system/config/auth/openid/idps', 'POST'] as const
}

export function getPostV4SystemConfigAuthOpenidIdpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigAuthOpenidIdpsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post>,
    ) {
      return parseResponse(client.v4.system.config.auth.openid.idps.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigAuthOpenidIdps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.openid.idps.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post>,
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
    const mutationDefaults = getPostV4SystemConfigAuthOpenidIdpsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigAuthOpenidIdpsIdpIdQueryKey(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', keyArgs] as const
}

export function getV4SystemConfigAuthOpenidIdpsIdpIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigAuthOpenidIdpsIdpIdQueryKey>
  >({
    queryKey: getV4SystemConfigAuthOpenidIdpsIdpIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.auth.openid.idps[':idp_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigAuthOpenidIdpsIdpId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigAuthOpenidIdpsIdpIdQueryKey>
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
    return {
      ...getV4SystemConfigAuthOpenidIdpsIdpIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigAuthOpenidIdpsIdpIdMutationKey() {
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', 'PUT'] as const
}

export function getPutV4SystemConfigAuthOpenidIdpsIdpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigAuthOpenidIdpsIdpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>,
    ) {
      return parseResponse(client.v4.system.config.auth.openid.idps[':idp_id'].$put(args, options))
    },
  })
}

export function createPutV4SystemConfigAuthOpenidIdpsIdpId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>,
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
    const mutationDefaults = getPutV4SystemConfigAuthOpenidIdpsIdpIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SystemConfigAuthOpenidIdpsIdpIdMutationKey() {
  return ['v4', '/v4/system/config/auth/openid/idps/:idp_id', 'DELETE'] as const
}

export function getDeleteV4SystemConfigAuthOpenidIdpsIdpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SystemConfigAuthOpenidIdpsIdpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.system.config.auth.openid.idps[':idp_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4SystemConfigAuthOpenidIdpsIdpId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SystemConfigAuthOpenidIdpsIdpIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigAuthRadiusQueryKey(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/auth/radius', keyArgs] as const
}

export function getV4SystemConfigAuthRadiusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigAuthRadiusQueryKey>
  >({
    queryKey: getV4SystemConfigAuthRadiusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.auth.radius.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigAuthRadius<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigAuthRadiusQueryKey>
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
    return {
      ...getV4SystemConfigAuthRadiusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigAuthRadiusMutationKey() {
  return ['v4', '/v4/system/config/auth/radius', 'PUT'] as const
}

export function getPutV4SystemConfigAuthRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.auth.radius.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigAuthRadiusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.auth.radius.$put>) {
      return parseResponse(client.v4.system.config.auth.radius.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigAuthRadius<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.auth.radius.$put>,
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
    const mutationDefaults = getPutV4SystemConfigAuthRadiusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SystemConfigAuthRadiusMutationKey() {
  return ['v4', '/v4/system/config/auth/radius', 'POST'] as const
}

export function getPostV4SystemConfigAuthRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.auth.radius.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigAuthRadiusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.auth.radius.$post>) {
      return parseResponse(client.v4.system.config.auth.radius.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigAuthRadius<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.auth.radius.$post>,
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
    const mutationDefaults = getPostV4SystemConfigAuthRadiusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SystemConfigAuthRadiusMutationKey() {
  return ['v4', '/v4/system/config/auth/radius', 'DELETE'] as const
}

export function getDeleteV4SystemConfigAuthRadiusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.system.config.auth.radius.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SystemConfigAuthRadiusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.auth.radius.$delete>) {
      return parseResponse(client.v4.system.config.auth.radius.$delete(args, options))
    },
  })
}

export function createDeleteV4SystemConfigAuthRadius<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.system.config.auth.radius.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.system.config.auth.radius.$delete>,
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
    const mutationDefaults = getDeleteV4SystemConfigAuthRadiusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigOauthClientsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/oauth/clients', keyArgs] as const
}

export function getV4SystemConfigOauthClientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigOauthClientsQueryKey>
  >({
    queryKey: getV4SystemConfigOauthClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.oauth.clients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigOauthClients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigOauthClientsQueryKey>
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
    return {
      ...getV4SystemConfigOauthClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4SystemConfigOauthClientsMutationKey() {
  return ['v4', '/v4/system/config/oauth/clients', 'POST'] as const
}

export function getPostV4SystemConfigOauthClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.oauth.clients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigOauthClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.oauth.clients.$post>) {
      return parseResponse(client.v4.system.config.oauth.clients.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigOauthClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.oauth.clients.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.oauth.clients.$post>,
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
    const mutationDefaults = getPostV4SystemConfigOauthClientsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigOauthClientsClientIdQueryKey(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/oauth/clients/:client_id', keyArgs] as const
}

export function getV4SystemConfigOauthClientsClientIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigOauthClientsClientIdQueryKey>
  >({
    queryKey: getV4SystemConfigOauthClientsClientIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.oauth.clients[':client_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigOauthClientsClientId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.system.config.oauth.clients)[':client_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigOauthClientsClientIdQueryKey>
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
    return {
      ...getV4SystemConfigOauthClientsClientIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigOauthClientsClientIdMutationKey() {
  return ['v4', '/v4/system/config/oauth/clients/:client_id', 'PUT'] as const
}

export function getPutV4SystemConfigOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>,
    ) {
      return parseResponse(client.v4.system.config.oauth.clients[':client_id'].$put(args, options))
    },
  })
}

export function createPutV4SystemConfigOauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>,
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
    const mutationDefaults = getPutV4SystemConfigOauthClientsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4SystemConfigOauthClientsClientIdMutationKey() {
  return ['v4', '/v4/system/config/oauth/clients/:client_id', 'DELETE'] as const
}

export function getDeleteV4SystemConfigOauthClientsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SystemConfigOauthClientsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.system.config.oauth.clients[':client_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4SystemConfigOauthClientsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SystemConfigOauthClientsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigPoliciesClassificationsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/classifications', keyArgs] as const
}

export function getV4SystemConfigPoliciesClassificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigPoliciesClassificationsQueryKey>
  >({
    queryKey: getV4SystemConfigPoliciesClassificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.policies.classifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigPoliciesClassifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigPoliciesClassificationsQueryKey>
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
    return {
      ...getV4SystemConfigPoliciesClassificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigPoliciesClassificationsMutationKey() {
  return ['v4', '/v4/system/config/policies/classifications', 'PUT'] as const
}

export function getPutV4SystemConfigPoliciesClassificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.policies.classifications.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigPoliciesClassificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.policies.classifications.$put>,
    ) {
      return parseResponse(client.v4.system.config.policies.classifications.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigPoliciesClassifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.classifications.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.policies.classifications.$put>,
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
    const mutationDefaults = getPutV4SystemConfigPoliciesClassificationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigPoliciesGuestUsersQueryKey(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/guest_users', keyArgs] as const
}

export function getV4SystemConfigPoliciesGuestUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigPoliciesGuestUsersQueryKey>
  >({
    queryKey: getV4SystemConfigPoliciesGuestUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.policies.guest_users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigPoliciesGuestUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigPoliciesGuestUsersQueryKey>
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
    return {
      ...getV4SystemConfigPoliciesGuestUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigPoliciesGuestUsersMutationKey() {
  return ['v4', '/v4/system/config/policies/guest_users', 'PUT'] as const
}

export function getPutV4SystemConfigPoliciesGuestUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.policies.guest_users.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigPoliciesGuestUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$put>,
    ) {
      return parseResponse(client.v4.system.config.policies.guest_users.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigPoliciesGuestUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.guest_users.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.policies.guest_users.$put>,
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
    const mutationDefaults = getPutV4SystemConfigPoliciesGuestUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigPoliciesMfaQueryKey(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/mfa', keyArgs] as const
}

export function getV4SystemConfigPoliciesMfaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigPoliciesMfaQueryKey>
  >({
    queryKey: getV4SystemConfigPoliciesMfaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.policies.mfa.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigPoliciesMfa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigPoliciesMfaQueryKey>
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
    return {
      ...getV4SystemConfigPoliciesMfaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigPoliciesMfaMutationKey() {
  return ['v4', '/v4/system/config/policies/mfa', 'PUT'] as const
}

export function getPutV4SystemConfigPoliciesMfaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.policies.mfa.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigPoliciesMfaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.policies.mfa.$put>) {
      return parseResponse(client.v4.system.config.policies.mfa.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigPoliciesMfa<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.mfa.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.policies.mfa.$put>,
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
    const mutationDefaults = getPutV4SystemConfigPoliciesMfaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigPoliciesPasswordsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/passwords', keyArgs] as const
}

export function getV4SystemConfigPoliciesPasswordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigPoliciesPasswordsQueryKey>
  >({
    queryKey: getV4SystemConfigPoliciesPasswordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.policies.passwords.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigPoliciesPasswords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigPoliciesPasswordsQueryKey>
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
    return {
      ...getV4SystemConfigPoliciesPasswordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigPoliciesPasswordsMutationKey() {
  return ['v4', '/v4/system/config/policies/passwords', 'PUT'] as const
}

export function getPutV4SystemConfigPoliciesPasswordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.policies.passwords.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigPoliciesPasswordsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.policies.passwords.$put>,
    ) {
      return parseResponse(client.v4.system.config.policies.passwords.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigPoliciesPasswords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.policies.passwords.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.policies.passwords.$put>,
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
    const mutationDefaults = getPutV4SystemConfigPoliciesPasswordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SystemConfigPoliciesPasswordsEnforceChangeMutationKey() {
  return ['v4', '/v4/system/config/policies/passwords/enforce_change', 'POST'] as const
}

export function getPostV4SystemConfigPoliciesPasswordsEnforceChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigPoliciesPasswordsEnforceChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.v4.system.config.policies.passwords.enforce_change.$post
      >,
    ) {
      return parseResponse(
        client.v4.system.config.policies.passwords.enforce_change.$post(args, options),
      )
    },
  })
}

export function createPostV4SystemConfigPoliciesPasswordsEnforceChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      typeof client.v4.system.config.policies.passwords.enforce_change.$post
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>,
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
    const mutationDefaults = getPostV4SystemConfigPoliciesPasswordsEnforceChangeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigPoliciesPasswordsPasswordTypeQueryKey(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/policies/passwords/:password_type', keyArgs] as const
}

export function getV4SystemConfigPoliciesPasswordsPasswordTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.system.config.policies.passwords)[':password_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigPoliciesPasswordsPasswordTypeQueryKey>
  >({
    queryKey: getV4SystemConfigPoliciesPasswordsPasswordTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.policies.passwords[':password_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigPoliciesPasswordsPasswordType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.system.config.policies.passwords)[':password_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigPoliciesPasswordsPasswordTypeQueryKey>
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
    return {
      ...getV4SystemConfigPoliciesPasswordsPasswordTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsAuthQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/auth', keyArgs] as const
}

export function getV4SystemConfigSettingsAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsAuthQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsAuthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.auth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsAuthQueryKey>
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
    return {
      ...getV4SystemConfigSettingsAuthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigSettingsAuthMutationKey() {
  return ['v4', '/v4/system/config/settings/auth', 'PUT'] as const
}

export function getPutV4SystemConfigSettingsAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.settings.auth.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigSettingsAuthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.settings.auth.$put>) {
      return parseResponse(client.v4.system.config.settings.auth.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigSettingsAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.auth.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.settings.auth.$put>,
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
    const mutationDefaults = getPutV4SystemConfigSettingsAuthMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsDefaultsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/defaults', keyArgs] as const
}

export function getV4SystemConfigSettingsDefaultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsDefaultsQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsDefaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.defaults.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsDefaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsDefaultsQueryKey>
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
    return {
      ...getV4SystemConfigSettingsDefaultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigSettingsDefaultsMutationKey() {
  return ['v4', '/v4/system/config/settings/defaults', 'PUT'] as const
}

export function getPutV4SystemConfigSettingsDefaultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.settings.defaults.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigSettingsDefaultsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.settings.defaults.$put>,
    ) {
      return parseResponse(client.v4.system.config.settings.defaults.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigSettingsDefaults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.defaults.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.settings.defaults.$put>,
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
    const mutationDefaults = getPutV4SystemConfigSettingsDefaultsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsEventlogQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/eventlog', keyArgs] as const
}

export function getV4SystemConfigSettingsEventlogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsEventlogQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsEventlogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.eventlog.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsEventlog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsEventlogQueryKey>
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
    return {
      ...getV4SystemConfigSettingsEventlogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigSettingsEventlogMutationKey() {
  return ['v4', '/v4/system/config/settings/eventlog', 'PUT'] as const
}

export function getPutV4SystemConfigSettingsEventlogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.settings.eventlog.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigSettingsEventlogMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$put>,
    ) {
      return parseResponse(client.v4.system.config.settings.eventlog.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigSettingsEventlog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.eventlog.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.settings.eventlog.$put>,
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
    const mutationDefaults = getPutV4SystemConfigSettingsEventlogMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsGeneralQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/general', keyArgs] as const
}

export function getV4SystemConfigSettingsGeneralQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsGeneralQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsGeneralQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.general.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsGeneral<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.general.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.general.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsGeneralQueryKey>
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
    return {
      ...getV4SystemConfigSettingsGeneralQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigSettingsGeneralMutationKey() {
  return ['v4', '/v4/system/config/settings/general', 'PUT'] as const
}

export function getPutV4SystemConfigSettingsGeneralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.general.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.settings.general.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigSettingsGeneralMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.settings.general.$put>) {
      return parseResponse(client.v4.system.config.settings.general.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigSettingsGeneral<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.general.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.settings.general.$put>,
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
    const mutationDefaults = getPutV4SystemConfigSettingsGeneralMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsInfrastructureQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/infrastructure', keyArgs] as const
}

export function getV4SystemConfigSettingsInfrastructureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsInfrastructureQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsInfrastructureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.infrastructure.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsInfrastructure<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.infrastructure.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsInfrastructureQueryKey>
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
    return {
      ...getV4SystemConfigSettingsInfrastructureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4SystemConfigSettingsSyslogQueryKey(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/settings/syslog', keyArgs] as const
}

export function getV4SystemConfigSettingsSyslogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigSettingsSyslogQueryKey>
  >({
    queryKey: getV4SystemConfigSettingsSyslogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.settings.syslog.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigSettingsSyslog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigSettingsSyslogQueryKey>
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
    return {
      ...getV4SystemConfigSettingsSyslogQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigSettingsSyslogMutationKey() {
  return ['v4', '/v4/system/config/settings/syslog', 'PUT'] as const
}

export function getPutV4SystemConfigSettingsSyslogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.settings.syslog.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigSettingsSyslogMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.settings.syslog.$put>) {
      return parseResponse(client.v4.system.config.settings.syslog.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigSettingsSyslog<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.settings.syslog.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.settings.syslog.$put>,
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
    const mutationDefaults = getPutV4SystemConfigSettingsSyslogMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigStorageS3QueryKey(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3', keyArgs] as const
}

export function getV4SystemConfigStorageS3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigStorageS3QueryKey>
  >({
    queryKey: getV4SystemConfigStorageS3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.storage.s3.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigStorageS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigStorageS3QueryKey>
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
    return {
      ...getV4SystemConfigStorageS3QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4SystemConfigStorageS3MutationKey() {
  return ['v4', '/v4/system/config/storage/s3', 'PUT'] as const
}

export function getPutV4SystemConfigStorageS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.storage.s3.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4SystemConfigStorageS3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.storage.s3.$put>) {
      return parseResponse(client.v4.system.config.storage.s3.$put(args, options))
    },
  })
}

export function createPutV4SystemConfigStorageS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.storage.s3.$put>,
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
    const mutationDefaults = getPutV4SystemConfigStorageS3MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4SystemConfigStorageS3MutationKey() {
  return ['v4', '/v4/system/config/storage/s3', 'POST'] as const
}

export function getPostV4SystemConfigStorageS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.storage.s3.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigStorageS3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.storage.s3.$post>) {
      return parseResponse(client.v4.system.config.storage.s3.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigStorageS3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.storage.s3.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.storage.s3.$post>,
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
    const mutationDefaults = getPostV4SystemConfigStorageS3MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigStorageS3TagsQueryKey(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3/tags', keyArgs] as const
}

export function getV4SystemConfigStorageS3TagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigStorageS3TagsQueryKey>
  >({
    queryKey: getV4SystemConfigStorageS3TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.storage.s3.tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigStorageS3Tags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigStorageS3TagsQueryKey>
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
    return {
      ...getV4SystemConfigStorageS3TagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4SystemConfigStorageS3TagsMutationKey() {
  return ['v4', '/v4/system/config/storage/s3/tags', 'POST'] as const
}

export function getPostV4SystemConfigStorageS3TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4SystemConfigStorageS3TagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post>) {
      return parseResponse(client.v4.system.config.storage.s3.tags.$post(args, options))
    },
  })
}

export function createPostV4SystemConfigStorageS3Tags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.system.config.storage.s3.tags.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post>,
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
    const mutationDefaults = getPostV4SystemConfigStorageS3TagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4SystemConfigStorageS3TagsIdQueryKey(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/system/config/storage/s3/tags/:id', keyArgs] as const
}

export function getV4SystemConfigStorageS3TagsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4SystemConfigStorageS3TagsIdQueryKey>
  >({
    queryKey: getV4SystemConfigStorageS3TagsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.system.config.storage.s3.tags[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4SystemConfigStorageS3TagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4SystemConfigStorageS3TagsIdQueryKey>
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
    return {
      ...getV4SystemConfigStorageS3TagsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV4SystemConfigStorageS3TagsIdMutationKey() {
  return ['v4', '/v4/system/config/storage/s3/tags/:id', 'DELETE'] as const
}

export function getDeleteV4SystemConfigStorageS3TagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4SystemConfigStorageS3TagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>,
    ) {
      return parseResponse(client.v4.system.config.storage.s3.tags[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV4SystemConfigStorageS3TagsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV4SystemConfigStorageS3TagsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4UploadsTokenMutationKey() {
  return ['v4', '/v4/uploads/:token', 'PUT'] as const
}

export function getPutV4UploadsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.uploads)[':token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UploadsTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.uploads)[':token']['$put']>) {
      return parseResponse(client.v4.uploads[':token'].$put(args, options))
    },
  })
}

export function createPutV4UploadsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.uploads)[':token']['$put']>,
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
    const mutationDefaults = getPutV4UploadsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UploadsTokenMutationKey() {
  return ['v4', '/v4/uploads/:token', 'POST'] as const
}

export function getPostV4UploadsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.uploads)[':token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UploadsTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.uploads)[':token']['$post']>) {
      return parseResponse(client.v4.uploads[':token'].$post(args, options))
    },
  })
}

export function createPostV4UploadsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.uploads)[':token']['$post']>,
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
    const mutationDefaults = getPostV4UploadsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UploadsTokenMutationKey() {
  return ['v4', '/v4/uploads/:token', 'DELETE'] as const
}

export function getDeleteV4UploadsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.uploads)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UploadsTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.uploads)[':token']['$delete']>) {
      return parseResponse(client.v4.uploads[':token'].$delete(args, options))
    },
  })
}

export function createDeleteV4UploadsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.uploads)[':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.uploads)[':token']['$delete']>,
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
    const mutationDefaults = getDeleteV4UploadsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountQueryKey(
  args: InferRequestType<typeof client.v4.user.account.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account', keyArgs] as const
}

export function getV4UserAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.user.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountQueryKey>
  >({
    queryKey: getV4UserAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4UserAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountQueryKey>
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
    return { ...getV4UserAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4UserAccountMutationKey() {
  return ['v4', '/v4/user/account', 'PUT'] as const
}

export function getPutV4UserAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.user.account.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.$put>) {
      return parseResponse(client.v4.user.account.$put(args, options))
    },
  })
}

export function createPutV4UserAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.account.$put>,
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
    const mutationDefaults = getPutV4UserAccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountAvatarQueryKey(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/avatar', keyArgs] as const
}

export function getV4UserAccountAvatarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountAvatarQueryKey>
  >({
    queryKey: getV4UserAccountAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountAvatar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.avatar.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountAvatarQueryKey>
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
    return { ...getV4UserAccountAvatarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4UserAccountAvatarMutationKey() {
  return ['v4', '/v4/user/account/avatar', 'POST'] as const
}

export function getPostV4UserAccountAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.user.account.avatar.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserAccountAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.avatar.$post>) {
      return parseResponse(client.v4.user.account.avatar.$post(args, options))
    },
  })
}

export function createPostV4UserAccountAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.account.avatar.$post>,
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
    const mutationDefaults = getPostV4UserAccountAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserAccountAvatarMutationKey() {
  return ['v4', '/v4/user/account/avatar', 'DELETE'] as const
}

export function getDeleteV4UserAccountAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.avatar.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.user.account.avatar.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserAccountAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.avatar.$delete>) {
      return parseResponse(client.v4.user.account.avatar.$delete(args, options))
    },
  })
}

export function createDeleteV4UserAccountAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.account.avatar.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.account.avatar.$delete>,
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
    const mutationDefaults = getDeleteV4UserAccountAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountCustomerQueryKey(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/customer', keyArgs] as const
}

export function getV4UserAccountCustomerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountCustomerQueryKey>
  >({
    queryKey: getV4UserAccountCustomerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.customer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountCustomer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.customer.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountCustomerQueryKey>
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
    return {
      ...getV4UserAccountCustomerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserAccountCustomerMutationKey() {
  return ['v4', '/v4/user/account/customer', 'PUT'] as const
}

export function getPutV4UserAccountCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.user.account.customer.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserAccountCustomerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.customer.$put>) {
      return parseResponse(client.v4.user.account.customer.$put(args, options))
    },
  })
}

export function createPutV4UserAccountCustomer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.account.customer.$put>,
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
    const mutationDefaults = getPutV4UserAccountCustomerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountCustomerKeypairQueryKey(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/customer/keypair', keyArgs] as const
}

export function getV4UserAccountCustomerKeypairQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountCustomerKeypairQueryKey>
  >({
    queryKey: getV4UserAccountCustomerKeypairQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.customer.keypair.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountCustomerKeypair<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.account.customer.keypair.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountCustomerKeypairQueryKey>
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
    return {
      ...getV4UserAccountCustomerKeypairQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV4UserAccountKeypairQueryKey(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/keypair', keyArgs] as const
}

export function getV4UserAccountKeypairQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountKeypairQueryKey>
  >({
    queryKey: getV4UserAccountKeypairQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.keypair.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountKeypair<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.keypair.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountKeypairQueryKey>
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
    return {
      ...getV4UserAccountKeypairQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4UserAccountKeypairMutationKey() {
  return ['v4', '/v4/user/account/keypair', 'POST'] as const
}

export function getPostV4UserAccountKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.keypair.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserAccountKeypairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.keypair.$post>) {
      return parseResponse(client.v4.user.account.keypair.$post(args, options))
    },
  })
}

export function createPostV4UserAccountKeypair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.account.keypair.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.keypair.$post>,
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
    const mutationDefaults = getPostV4UserAccountKeypairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserAccountKeypairMutationKey() {
  return ['v4', '/v4/user/account/keypair', 'DELETE'] as const
}

export function getDeleteV4UserAccountKeypairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypair.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.keypair.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserAccountKeypairMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.keypair.$delete>) {
      return parseResponse(client.v4.user.account.keypair.$delete(args, options))
    },
  })
}

export function createDeleteV4UserAccountKeypair<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.account.keypair.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.keypair.$delete>,
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
    const mutationDefaults = getDeleteV4UserAccountKeypairMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountKeypairsQueryKey(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/keypairs', keyArgs] as const
}

export function getV4UserAccountKeypairsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountKeypairsQueryKey>
  >({
    queryKey: getV4UserAccountKeypairsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.keypairs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountKeypairs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.keypairs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountKeypairsQueryKey>
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
    return {
      ...getV4UserAccountKeypairsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4UserAccountKeypairsMutationKey() {
  return ['v4', '/v4/user/account/keypairs', 'POST'] as const
}

export function getPostV4UserAccountKeypairsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.keypairs.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.keypairs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserAccountKeypairsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.keypairs.$post>) {
      return parseResponse(client.v4.user.account.keypairs.$post(args, options))
    },
  })
}

export function createPostV4UserAccountKeypairs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.account.keypairs.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.keypairs.$post>,
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
    const mutationDefaults = getPostV4UserAccountKeypairsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountMfaQueryKey(
  args: InferRequestType<typeof client.v4.user.account.mfa.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/mfa', keyArgs] as const
}

export function getV4UserAccountMfaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.user.account.mfa.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountMfaQueryKey>
  >({
    queryKey: getV4UserAccountMfaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.mfa.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4UserAccountMfa<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.mfa.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountMfaQueryKey>
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
    return { ...getV4UserAccountMfaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV4UserAccountMfaMutationKey() {
  return ['v4', '/v4/user/account/mfa', 'DELETE'] as const
}

export function getDeleteV4UserAccountMfaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.mfa.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserAccountMfaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.mfa.$delete>) {
      return parseResponse(client.v4.user.account.mfa.$delete(args, options))
    },
  })
}

export function createDeleteV4UserAccountMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.mfa.$delete>,
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
    const mutationDefaults = getDeleteV4UserAccountMfaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserAccountMfaTotpQueryKey(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/account/mfa/totp', keyArgs] as const
}

export function getV4UserAccountMfaTotpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserAccountMfaTotpQueryKey>
  >({
    queryKey: getV4UserAccountMfaTotpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.account.mfa.totp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserAccountMfaTotp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserAccountMfaTotpQueryKey>
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
    return {
      ...getV4UserAccountMfaTotpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4UserAccountMfaTotpMutationKey() {
  return ['v4', '/v4/user/account/mfa/totp', 'POST'] as const
}

export function getPostV4UserAccountMfaTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.mfa.totp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserAccountMfaTotpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.mfa.totp.$post>) {
      return parseResponse(client.v4.user.account.mfa.totp.$post(args, options))
    },
  })
}

export function createPostV4UserAccountMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.account.mfa.totp.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.mfa.totp.$post>,
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
    const mutationDefaults = getPostV4UserAccountMfaTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserAccountMfaTotpIdMutationKey() {
  return ['v4', '/v4/user/account/mfa/totp/:id', 'DELETE'] as const
}

export function getDeleteV4UserAccountMfaTotpIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserAccountMfaTotpIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>,
    ) {
      return parseResponse(client.v4.user.account.mfa.totp[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV4UserAccountMfaTotpId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV4UserAccountMfaTotpIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutV4UserAccountPasswordMutationKey() {
  return ['v4', '/v4/user/account/password', 'PUT'] as const
}

export function getPutV4UserAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.account.password.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.account.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserAccountPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.account.password.$put>) {
      return parseResponse(client.v4.user.account.password.$put(args, options))
    },
  })
}

export function createPutV4UserAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.account.password.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.account.password.$put>,
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
    const mutationDefaults = getPutV4UserAccountPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserLogoutMutationKey() {
  return ['v4', '/v4/user/logout', 'POST'] as const
}

export function getPostV4UserLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.logout.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.logout.$post>) {
      return parseResponse(client.v4.user.logout.$post(args, options))
    },
  })
}

export function createPostV4UserLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.logout.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.logout.$post>,
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
    const mutationDefaults = getPostV4UserLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserNotificationsConfigQueryKey(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/notifications/config', keyArgs] as const
}

export function getV4UserNotificationsConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserNotificationsConfigQueryKey>
  >({
    queryKey: getV4UserNotificationsConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.notifications.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserNotificationsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.notifications.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.notifications.config.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserNotificationsConfigQueryKey>
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
    return {
      ...getV4UserNotificationsConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserNotificationsConfigIdMutationKey() {
  return ['v4', '/v4/user/notifications/config/:id', 'PUT'] as const
}

export function getPutV4UserNotificationsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.user.notifications.config)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserNotificationsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']>,
    ) {
      return parseResponse(client.v4.user.notifications.config[':id'].$put(args, options))
    },
  })
}

export function createPutV4UserNotificationsConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.user.notifications.config)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']>,
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
    const mutationDefaults = getPutV4UserNotificationsConfigIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserOauthApprovalsQueryKey(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/oauth/approvals', keyArgs] as const
}

export function getV4UserOauthApprovalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserOauthApprovalsQueryKey>
  >({
    queryKey: getV4UserOauthApprovalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.oauth.approvals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserOauthApprovals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.approvals.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserOauthApprovalsQueryKey>
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
    return {
      ...getV4UserOauthApprovalsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV4UserOauthApprovalsClientIdMutationKey() {
  return ['v4', '/v4/user/oauth/approvals/:client_id', 'DELETE'] as const
}

export function getDeleteV4UserOauthApprovalsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserOauthApprovalsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>,
    ) {
      return parseResponse(client.v4.user.oauth.approvals[':client_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4UserOauthApprovalsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4UserOauthApprovalsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserOauthAuthorizationsQueryKey(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/oauth/authorizations', keyArgs] as const
}

export function getV4UserOauthAuthorizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserOauthAuthorizationsQueryKey>
  >({
    queryKey: getV4UserOauthAuthorizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.oauth.authorizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserOauthAuthorizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.oauth.authorizations.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserOauthAuthorizationsQueryKey>
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
    return {
      ...getV4UserOauthAuthorizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV4UserOauthAuthorizationsClientIdMutationKey() {
  return ['v4', '/v4/user/oauth/authorizations/:client_id', 'DELETE'] as const
}

export function getDeleteV4UserOauthAuthorizationsClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserOauthAuthorizationsClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>,
    ) {
      return parseResponse(client.v4.user.oauth.authorizations[':client_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4UserOauthAuthorizationsClientId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4UserOauthAuthorizationsClientIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdMutationKey() {
  return ['v4', '/v4/user/oauth/authorizations/:client_id/:authorization_id', 'DELETE'] as const
}

export function getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.user.oauth.authorizations[':client_id'][':authorization_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteV4UserOauthAuthorizationsClientIdAuthorizationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteV4UserOauthAuthorizationsClientIdAuthorizationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserPingQueryKey(args: InferRequestType<typeof client.v4.user.ping.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/ping', keyArgs] as const
}

export function getV4UserPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.user.ping.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4UserPingQueryKey>
  >({
    queryKey: getV4UserPingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.ping.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4UserPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.ping.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.ping.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserPingQueryKey>
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
    return { ...getV4UserPingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4UserProfileAttributesQueryKey(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/profileAttributes', keyArgs] as const
}

export function getV4UserProfileAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserProfileAttributesQueryKey>
  >({
    queryKey: getV4UserProfileAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.profileAttributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserProfileAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.profileAttributes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.profileAttributes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserProfileAttributesQueryKey>
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
    return {
      ...getV4UserProfileAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserProfileAttributesMutationKey() {
  return ['v4', '/v4/user/profileAttributes', 'PUT'] as const
}

export function getPutV4UserProfileAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.user.profileAttributes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserProfileAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.profileAttributes.$put>) {
      return parseResponse(client.v4.user.profileAttributes.$put(args, options))
    },
  })
}

export function createPutV4UserProfileAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.profileAttributes.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.profileAttributes.$put>,
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
    const mutationDefaults = getPutV4UserProfileAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserProfileAttributesMutationKey() {
  return ['v4', '/v4/user/profileAttributes', 'POST'] as const
}

export function getPostV4UserProfileAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.profileAttributes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v4.user.profileAttributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserProfileAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.profileAttributes.$post>) {
      return parseResponse(client.v4.user.profileAttributes.$post(args, options))
    },
  })
}

export function createPostV4UserProfileAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.profileAttributes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v4.user.profileAttributes.$post>,
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
    const mutationDefaults = getPostV4UserProfileAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserProfileAttributesKeyMutationKey() {
  return ['v4', '/v4/user/profileAttributes/:key', 'DELETE'] as const
}

export function getDeleteV4UserProfileAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserProfileAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>,
    ) {
      return parseResponse(client.v4.user.profileAttributes[':key'].$delete(args, options))
    },
  })
}

export function createDeleteV4UserProfileAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteV4UserProfileAttributesKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserSubscriptionsDownloadSharesQueryKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/download_shares', keyArgs] as const
}

export function getV4UserSubscriptionsDownloadSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserSubscriptionsDownloadSharesQueryKey>
  >({
    queryKey: getV4UserSubscriptionsDownloadSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.subscriptions.download_shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserSubscriptionsDownloadShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserSubscriptionsDownloadSharesQueryKey>
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
    return {
      ...getV4UserSubscriptionsDownloadSharesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserSubscriptionsDownloadSharesMutationKey() {
  return ['v4', '/v4/user/subscriptions/download_shares', 'PUT'] as const
}

export function getPutV4UserSubscriptionsDownloadSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserSubscriptionsDownloadSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put>,
    ) {
      return parseResponse(client.v4.user.subscriptions.download_shares.$put(args, options))
    },
  })
}

export function createPutV4UserSubscriptionsDownloadShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.subscriptions.download_shares.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put>,
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
    const mutationDefaults = getPutV4UserSubscriptionsDownloadSharesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserSubscriptionsDownloadSharesShareIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/download_shares/:share_id', 'POST'] as const
}

export function getPostV4UserSubscriptionsDownloadSharesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserSubscriptionsDownloadSharesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.user.subscriptions.download_shares[':share_id'].$post(args, options),
      )
    },
  })
}

export function createPostV4UserSubscriptionsDownloadSharesShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']
          >,
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
    const mutationDefaults = getPostV4UserSubscriptionsDownloadSharesShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserSubscriptionsDownloadSharesShareIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/download_shares/:share_id', 'DELETE'] as const
}

export function getDeleteV4UserSubscriptionsDownloadSharesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserSubscriptionsDownloadSharesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.user.subscriptions.download_shares[':share_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4UserSubscriptionsDownloadSharesShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
          >,
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
    const mutationDefaults = getDeleteV4UserSubscriptionsDownloadSharesShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserSubscriptionsNodesQueryKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/nodes', keyArgs] as const
}

export function getV4UserSubscriptionsNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserSubscriptionsNodesQueryKey>
  >({
    queryKey: getV4UserSubscriptionsNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.subscriptions.nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserSubscriptionsNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserSubscriptionsNodesQueryKey>
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
    return {
      ...getV4UserSubscriptionsNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserSubscriptionsNodesMutationKey() {
  return ['v4', '/v4/user/subscriptions/nodes', 'PUT'] as const
}

export function getPutV4UserSubscriptionsNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.subscriptions.nodes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserSubscriptionsNodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$put>) {
      return parseResponse(client.v4.user.subscriptions.nodes.$put(args, options))
    },
  })
}

export function createPutV4UserSubscriptionsNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.subscriptions.nodes.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.subscriptions.nodes.$put>,
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
    const mutationDefaults = getPutV4UserSubscriptionsNodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserSubscriptionsNodesNodeIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/nodes/:node_id', 'POST'] as const
}

export function getPostV4UserSubscriptionsNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserSubscriptionsNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>,
    ) {
      return parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$post(args, options))
    },
  })
}

export function createPostV4UserSubscriptionsNodesNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>,
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
    const mutationDefaults = getPostV4UserSubscriptionsNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserSubscriptionsNodesNodeIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/nodes/:node_id', 'DELETE'] as const
}

export function getDeleteV4UserSubscriptionsNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserSubscriptionsNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>,
    ) {
      return parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4UserSubscriptionsNodesNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4UserSubscriptionsNodesNodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UserSubscriptionsUploadSharesQueryKey(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/user/subscriptions/upload_shares', keyArgs] as const
}

export function getV4UserSubscriptionsUploadSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UserSubscriptionsUploadSharesQueryKey>
  >({
    queryKey: getV4UserSubscriptionsUploadSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.user.subscriptions.upload_shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UserSubscriptionsUploadShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UserSubscriptionsUploadSharesQueryKey>
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
    return {
      ...getV4UserSubscriptionsUploadSharesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UserSubscriptionsUploadSharesMutationKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares', 'PUT'] as const
}

export function getPutV4UserSubscriptionsUploadSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UserSubscriptionsUploadSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put>,
    ) {
      return parseResponse(client.v4.user.subscriptions.upload_shares.$put(args, options))
    },
  })
}

export function createPutV4UserSubscriptionsUploadShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v4.user.subscriptions.upload_shares.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put>,
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
    const mutationDefaults = getPutV4UserSubscriptionsUploadSharesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UserSubscriptionsUploadSharesShareIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares/:share_id', 'POST'] as const
}

export function getPostV4UserSubscriptionsUploadSharesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UserSubscriptionsUploadSharesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.user.subscriptions.upload_shares[':share_id'].$post(args, options),
      )
    },
  })
}

export function createPostV4UserSubscriptionsUploadSharesShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']
          >,
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
    const mutationDefaults = getPostV4UserSubscriptionsUploadSharesShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UserSubscriptionsUploadSharesShareIdMutationKey() {
  return ['v4', '/v4/user/subscriptions/upload_shares/:share_id', 'DELETE'] as const
}

export function getDeleteV4UserSubscriptionsUploadSharesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UserSubscriptionsUploadSharesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.user.subscriptions.upload_shares[':share_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4UserSubscriptionsUploadSharesShareId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
          >,
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
    const mutationDefaults = getDeleteV4UserSubscriptionsUploadSharesShareIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UsersQueryKey(args: InferRequestType<typeof client.v4.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users', keyArgs] as const
}

export function getV4UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4UsersQueryKey>
  >({
    queryKey: getV4UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersQueryKey>
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
    return { ...getV4UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV4UsersMutationKey() {
  return ['v4', '/v4/users', 'POST'] as const
}

export function getPostV4UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.users.$post>) {
      return parseResponse(client.v4.users.$post(args, options))
    },
  })
}

export function createPostV4Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.users.$post>,
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
    const mutationDefaults = getPostV4UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id', keyArgs] as const
}

export function getV4UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdQueryKey>
  >({
    queryKey: getV4UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV4UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdQueryKey>
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
    return { ...getV4UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV4UsersUserIdMutationKey() {
  return ['v4', '/v4/users/:user_id', 'PUT'] as const
}

export function getPutV4UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.users)[':user_id']['$put']>) {
      return parseResponse(client.v4.users[':user_id'].$put(args, options))
    },
  })
}

export function createPutV4UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.users)[':user_id']['$put']>,
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
    const mutationDefaults = getPutV4UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UsersUserIdMutationKey() {
  return ['v4', '/v4/users/:user_id', 'DELETE'] as const
}

export function getDeleteV4UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.users)[':user_id']['$delete']>) {
      return parseResponse(client.v4.users[':user_id'].$delete(args, options))
    },
  })
}

export function createDeleteV4UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.users)[':user_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.users)[':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteV4UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UsersUserIdGroupsQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/groups', keyArgs] as const
}

export function getV4UsersUserIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdGroupsQueryKey>
  >({
    queryKey: getV4UsersUserIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdGroupsQueryKey>
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
    return { ...getV4UsersUserIdGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4UsersUserIdLastAdminRoomsQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/last_admin_rooms', keyArgs] as const
}

export function getV4UsersUserIdLastAdminRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdLastAdminRoomsQueryKey>
  >({
    queryKey: getV4UsersUserIdLastAdminRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].last_admin_rooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UsersUserIdLastAdminRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdLastAdminRoomsQueryKey>
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
    return {
      ...getV4UsersUserIdLastAdminRoomsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV4UsersUserIdMfaEmergencyCodeMutationKey() {
  return ['v4', '/v4/users/:user_id/mfa/emergency_code', 'POST'] as const
}

export function getPostV4UsersUserIdMfaEmergencyCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UsersUserIdMfaEmergencyCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']
      >,
    ) {
      return parseResponse(client.v4.users[':user_id'].mfa.emergency_code.$post(args, options))
    },
  })
}

export function createPostV4UsersUserIdMfaEmergencyCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>,
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
    const mutationDefaults = getPostV4UsersUserIdMfaEmergencyCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV4UsersUserIdRolesQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/roles', keyArgs] as const
}

export function getV4UsersUserIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdRolesQueryKey>
  >({
    queryKey: getV4UsersUserIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdRolesQueryKey>
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
    return { ...getV4UsersUserIdRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4UsersUserIdRoomsQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/rooms', keyArgs] as const
}

export function getV4UsersUserIdRoomsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdRoomsQueryKey>
  >({
    queryKey: getV4UsersUserIdRoomsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].rooms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UsersUserIdRooms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['rooms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdRoomsQueryKey>
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
    return { ...getV4UsersUserIdRoomsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV4UsersUserIdUserAttributesQueryKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v4', '/v4/users/:user_id/userAttributes', keyArgs] as const
}

export function getV4UsersUserIdUserAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4UsersUserIdUserAttributesQueryKey>
  >({
    queryKey: getV4UsersUserIdUserAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.users[':user_id'].userAttributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV4UsersUserIdUserAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV4UsersUserIdUserAttributesQueryKey>
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
    return {
      ...getV4UsersUserIdUserAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV4UsersUserIdUserAttributesMutationKey() {
  return ['v4', '/v4/users/:user_id/userAttributes', 'PUT'] as const
}

export function getPutV4UsersUserIdUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV4UsersUserIdUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>,
    ) {
      return parseResponse(client.v4.users[':user_id'].userAttributes.$put(args, options))
    },
  })
}

export function createPutV4UsersUserIdUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>,
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
    const mutationDefaults = getPutV4UsersUserIdUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV4UsersUserIdUserAttributesMutationKey() {
  return ['v4', '/v4/users/:user_id/userAttributes', 'POST'] as const
}

export function getPostV4UsersUserIdUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4UsersUserIdUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>,
    ) {
      return parseResponse(client.v4.users[':user_id'].userAttributes.$post(args, options))
    },
  })
}

export function createPostV4UsersUserIdUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>,
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
    const mutationDefaults = getPostV4UsersUserIdUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV4UsersUserIdUserAttributesKeyMutationKey() {
  return ['v4', '/v4/users/:user_id/userAttributes/:key', 'DELETE'] as const
}

export function getDeleteV4UsersUserIdUserAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4UsersUserIdUserAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.users[':user_id'].userAttributes[':key'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV4UsersUserIdUserAttributesKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']
          >,
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
    const mutationDefaults = getDeleteV4UsersUserIdUserAttributesKeyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
