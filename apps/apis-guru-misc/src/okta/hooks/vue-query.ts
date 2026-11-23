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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
) {
  return ['api', '/api/v1/users', toValue(args)] as const
}

export function getApiV1UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>
          >,
          ReturnType<typeof getApiV1UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.users.$post>,
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
  const mutationDefaults = getPostApiV1UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1UsersMeQueryKey() {
  return ['api', '/api/v1/users/me'] as const
}

export function getApiV1UsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1UsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1UsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>
            >
          >,
          ReturnType<typeof getApiV1UsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1UsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>>,
) {
  return ['api', '/api/v1/users/:userId', toValue(args)] as const
}

export function getApiV1UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiV1UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersUserIdAppLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>
  >,
) {
  return ['api', '/api/v1/users/:userId/appLinks', toValue(args)] as const
}

export function getApiV1UsersUserIdAppLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersUserIdAppLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':userId'].appLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersUserIdAppLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersUserIdAppLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['appLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdAppLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersUserIdAppLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':userId'].appLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersUserIdCredentialsChangePassword<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdCredentialsChangePasswordMutationOptions<
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

export function usePostApiV1UsersUserIdCredentialsChangeRecoveryQuestion<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdCredentialsChangeRecoveryQuestionMutationOptions<
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

export function usePostApiV1UsersUserIdCredentialsForgotPassword<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdCredentialsForgotPasswordMutationOptions<
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

export function getApiV1UsersUserIdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>
  >,
) {
  return ['api', '/api/v1/users/:userId/groups', toValue(args)] as const
}

export function getApiV1UsersUserIdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersUserIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.users[':userId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersUserIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.users)[':userId']['groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersUserIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.users)[':userId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersUserIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersUserIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.users[':userId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersUserIdLifecycleActivate<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':userId']['lifecycle']['activate']['$post']
          >,
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
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleActivateMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleDeactivate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleDeactivateMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleExpirePassword<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleExpirePasswordMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleResetFactors<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleResetFactorsMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleResetPassword<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleResetPasswordMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleSuspend<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.users)[':userId']['lifecycle']['suspend']['$post']
          >,
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
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleSuspendMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleUnlock<
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
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.users)[':userId']['lifecycle']['unlock']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleUnlockMutationOptions<
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

export function usePostApiV1UsersUserIdLifecycleUnsuspend<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersUserIdLifecycleUnsuspendMutationOptions<
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

export function useDeleteApiV1UsersUserIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1UsersUserIdSessionsMutationOptions<
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
