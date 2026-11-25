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

export function getAuthKey() {
  return ['auth'] as const
}

export function getBotsKey() {
  return ['bots'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getCustomKey() {
  return ['custom'] as const
}

export function getInvitesKey() {
  return ['invites'] as const
}

export function getOnboardKey() {
  return ['onboard'] as const
}

export function getPolicyKey() {
  return ['policy'] as const
}

export function getPushKey() {
  return ['push'] as const
}

export function getSafetyKey() {
  return ['safety'] as const
}

export function getServersKey() {
  return ['servers'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/@me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['$get']>>,
) {
  return ['users', '/users/:target', toValue(args)] as const
}

export function getUsersTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTarget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersTargetMutationKey() {
  return ['users', '/users/:target', 'PATCH'] as const
}

export function getPatchUsersTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':target']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':target']['$patch']>) {
      return parseResponse(client.users[':target'].$patch(args, options))
    },
  })
}

export function usePatchUsersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':target']['$patch']>,
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
  const mutationDefaults = getPatchUsersTargetMutationOptions<TError, TOnMutateResult>(
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

export function getUsersTargetFlagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['flags']['$get']>>,
) {
  return ['users', '/users/:target/flags', toValue(args)] as const
}

export function getUsersTargetFlagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['flags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetFlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].flags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTargetFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['flags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersTargetFlagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetFlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetFlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].flags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersMeUsernameMutationKey() {
  return ['users', '/users/@me/username', 'PATCH'] as const
}

export function getPatchUsersMeUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['@me']['username']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['@me']['username']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMeUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['@me']['username']['$patch']>) {
      return parseResponse(client.users['@me'].username.$patch(args, options))
    },
  })
}

export function usePatchUsersMeUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['@me']['username']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['@me']['username']['$patch']>,
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
  const mutationDefaults = getPatchUsersMeUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getUsersTargetDefaultAvatarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>
  >,
) {
  return ['users', '/users/:target/default_avatar', toValue(args)] as const
}

export function getUsersTargetDefaultAvatarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetDefaultAvatarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].default_avatar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTargetDefaultAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersTargetDefaultAvatarQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetDefaultAvatarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetDefaultAvatarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].default_avatar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersTargetProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['profile']['$get']>>,
) {
  return ['users', '/users/:target/profile', toValue(args)] as const
}

export function getUsersTargetProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['profile']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTargetProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['profile']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersTargetProfileQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersDmsQueryKey() {
  return ['users', '/users/dms'] as const
}

export function getUsersDmsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersDmsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.dms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersDms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
          >,
          ReturnType<typeof getUsersDmsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersDmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersDmsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.dms.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersTargetDmQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['dm']['$get']>>,
) {
  return ['users', '/users/:target/dm', toValue(args)] as const
}

export function getUsersTargetDmQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['dm']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetDmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].dm.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTargetDm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['dm']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersTargetDmQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetDmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetDmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].dm.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersTargetMutualQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['mutual']['$get']>>,
) {
  return ['users', '/users/:target/mutual', toValue(args)] as const
}

export function getUsersTargetMutualQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['mutual']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersTargetMutualQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':target'].mutual.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersTargetMutual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':target']['mutual']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersTargetMutualQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetMutualQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersTargetMutualQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':target'].mutual.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersTargetFriendMutationKey() {
  return ['users', '/users/:target/friend', 'PUT'] as const
}

export function getPutUsersTargetFriendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':target']['friend']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':target']['friend']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersTargetFriendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':target']['friend']['$put']>) {
      return parseResponse(client.users[':target'].friend.$put(args, options))
    },
  })
}

export function usePutUsersTargetFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['friend']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':target']['friend']['$put']>,
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
  const mutationDefaults = getPutUsersTargetFriendMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersTargetFriendMutationKey() {
  return ['users', '/users/:target/friend', 'DELETE'] as const
}

export function getDeleteUsersTargetFriendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':target']['friend']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':target']['friend']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersTargetFriendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':target']['friend']['$delete']>,
    ) {
      return parseResponse(client.users[':target'].friend.$delete(args, options))
    },
  })
}

export function useDeleteUsersTargetFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['friend']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':target']['friend']['$delete']>,
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
  const mutationDefaults = getDeleteUsersTargetFriendMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersTargetBlockMutationKey() {
  return ['users', '/users/:target/block', 'PUT'] as const
}

export function getPutUsersTargetBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['block']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':target']['block']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersTargetBlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':target']['block']['$put']>) {
      return parseResponse(client.users[':target'].block.$put(args, options))
    },
  })
}

export function usePutUsersTargetBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['block']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':target']['block']['$put']>,
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
  const mutationDefaults = getPutUsersTargetBlockMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersTargetBlockMutationKey() {
  return ['users', '/users/:target/block', 'DELETE'] as const
}

export function getDeleteUsersTargetBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':target']['block']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':target']['block']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersTargetBlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':target']['block']['$delete']>) {
      return parseResponse(client.users[':target'].block.$delete(args, options))
    },
  })
}

export function useDeleteUsersTargetBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':target']['block']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':target']['block']['$delete']>,
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
  const mutationDefaults = getDeleteUsersTargetBlockMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersFriendMutationKey() {
  return ['users', '/users/friend', 'POST'] as const
}

export function getPostUsersFriendMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.friend.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.friend.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersFriendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.friend.$post>) {
      return parseResponse(client.users.friend.$post(args, options))
    },
  })
}

export function usePostUsersFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.friend.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.friend.$post>,
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
  const mutationDefaults = getPostUsersFriendMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBotsCreateMutationKey() {
  return ['bots', '/bots/create', 'POST'] as const
}

export function getPostBotsCreateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.create.$post>>>>>,
    TError,
    InferRequestType<typeof client.bots.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bots.create.$post>) {
      return parseResponse(client.bots.create.$post(args, options))
    },
  })
}

export function usePostBotsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.create.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bots.create.$post>,
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
  const mutationDefaults = getPostBotsCreateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBotsTargetInviteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':target']['invite']['$get']>>,
) {
  return ['bots', '/bots/:target/invite', toValue(args)] as const
}

export function getBotsTargetInviteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':target']['invite']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsTargetInviteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':target'].invite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsTargetInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':target']['invite']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsTargetInviteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsTargetInviteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsTargetInviteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':target'].invite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBotsTargetInviteMutationKey() {
  return ['bots', '/bots/:target/invite', 'POST'] as const
}

export function getPostBotsTargetInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':target']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBotsTargetInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':target']['invite']['$post']>) {
      return parseResponse(client.bots[':target'].invite.$post(args, options))
    },
  })
}

export function usePostBotsTargetInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':target']['invite']['$post']>,
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
  const mutationDefaults = getPostBotsTargetInviteMutationOptions<TError, TOnMutateResult>(
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

export function getBotsBotIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['$get']>>,
) {
  return ['bots', '/bots/:bot_id', toValue(args)] as const
}

export function getBotsBotIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':bot_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>
            >
          >,
          ReturnType<typeof getBotsBotIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':bot_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteBotsBotIdMutationKey() {
  return ['bots', '/bots/:bot_id', 'DELETE'] as const
}

export function getDeleteBotsBotIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':bot_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':bot_id']['$delete']>) {
      return parseResponse(client.bots[':bot_id'].$delete(args, options))
    },
  })
}

export function useDeleteBotsBotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bots)[':bot_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':bot_id']['$delete']>,
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
  const mutationDefaults = getDeleteBotsBotIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBotsBotIdMutationKey() {
  return ['bots', '/bots/:bot_id', 'PATCH'] as const
}

export function getPatchBotsBotIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bots)[':bot_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBotsBotIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':bot_id']['$patch']>) {
      return parseResponse(client.bots[':bot_id'].$patch(args, options))
    },
  })
}

export function usePatchBotsBotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bots)[':bot_id']['$patch']>,
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
  const mutationDefaults = getPatchBotsBotIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBotsMeQueryKey() {
  return ['bots', '/bots/@me'] as const
}

export function getBotsMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBotsMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBotsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>
            >
          >,
          ReturnType<typeof getBotsMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBotsMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bots['@me'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBotsBotIdDiscoverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>>,
) {
  return ['bots', '/bots/:bot_id/discover', toValue(args)] as const
}

export function getBotsBotIdDiscoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBotsBotIdDiscoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bots[':bot_id'].discover.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBotsBotIdDiscover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBotsBotIdDiscoverQueryKey>
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
          Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdDiscoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBotsBotIdDiscoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bots[':bot_id'].discover.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBotsBotIdDiscoverMutationKey() {
  return ['bots', '/bots/:bot_id/discover', 'PUT'] as const
}

export function getPutBotsBotIdDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':bot_id']['discover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBotsBotIdDiscoverMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$put']>) {
      return parseResponse(client.bots[':bot_id'].discover.$put(args, options))
    },
  })
}

export function usePutBotsBotIdDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':bot_id']['discover']['$put']>,
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
  const mutationDefaults = getPutBotsBotIdDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBotsBotIdDiscoverMutationKey() {
  return ['bots', '/bots/:bot_id/discover', 'DELETE'] as const
}

export function getDeleteBotsBotIdDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.bots)[':bot_id']['discover']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBotsBotIdDiscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$delete']>,
    ) {
      return parseResponse(client.bots[':bot_id'].discover.$delete(args, options))
    },
  })
}

export function useDeleteBotsBotIdDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.bots)[':bot_id']['discover']['$delete']>,
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
  const mutationDefaults = getDeleteBotsBotIdDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getPutChannelsTargetAckMessageMutationKey() {
  return ['channels', '/channels/:target/ack/:message', 'PUT'] as const
}

export function getPutChannelsTargetAckMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':target']['ack'][':message']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['ack'][':message']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsTargetAckMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['ack'][':message']['$put']>,
    ) {
      return parseResponse(client.channels[':target'].ack[':message'].$put(args, options))
    },
  })
}

export function usePutChannelsTargetAckMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.channels)[':target']['ack'][':message']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['ack'][':message']['$put']>,
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
  const mutationDefaults = getPutChannelsTargetAckMessageMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['$get']>>,
) {
  return ['channels', '/channels/:target', toValue(args)] as const
}

export function getChannelsTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
            >
          >,
          ReturnType<typeof getChannelsTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsTargetMutationKey() {
  return ['channels', '/channels/:target', 'DELETE'] as const
}

export function getDeleteChannelsTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':target']['$delete']>) {
      return parseResponse(client.channels[':target'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.channels)[':target']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsTargetMutationOptions<TError, TOnMutateResult>(
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

export function getPatchChannelsTargetMutationKey() {
  return ['channels', '/channels/:target', 'PATCH'] as const
}

export function getPatchChannelsTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':target']['$patch']>) {
      return parseResponse(client.channels[':target'].$patch(args, options))
    },
  })
}

export function usePatchChannelsTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['$patch']>,
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
  const mutationDefaults = getPatchChannelsTargetMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsTargetMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['members']['$get']>>,
) {
  return ['channels', '/channels/:target/members', toValue(args)] as const
}

export function getChannelsTargetMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsTargetMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':target'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsTargetMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsTargetMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTargetMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsTargetMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':target'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsTargetInvitesMutationKey() {
  return ['channels', '/channels/:target/invites', 'POST'] as const
}

export function getPostChannelsTargetInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['invites']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['invites']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTargetInvitesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['invites']['$post']>,
    ) {
      return parseResponse(client.channels[':target'].invites.$post(args, options))
    },
  })
}

export function usePostChannelsTargetInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['invites']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['invites']['$post']>,
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
  const mutationDefaults = getPostChannelsTargetInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getChannelsTargetMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['messages']['$get']>>,
) {
  return ['channels', '/channels/:target/messages', toValue(args)] as const
}

export function getChannelsTargetMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsTargetMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':target'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsTargetMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channels)[':target']['messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsTargetMessagesQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTargetMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsTargetMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':target'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsTargetMessagesMutationKey() {
  return ['channels', '/channels/:target/messages', 'POST'] as const
}

export function getPostChannelsTargetMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTargetMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['messages']['$post']>,
    ) {
      return parseResponse(client.channels[':target'].messages.$post(args, options))
    },
  })
}

export function usePostChannelsTargetMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['messages']['$post']>,
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
  const mutationDefaults = getPostChannelsTargetMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsTargetSearchMutationKey() {
  return ['channels', '/channels/:target/search', 'POST'] as const
}

export function getPostChannelsTargetSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTargetSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['search']['$post']>,
    ) {
      return parseResponse(client.channels[':target'].search.$post(args, options))
    },
  })
}

export function usePostChannelsTargetSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['search']['$post']>,
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
  const mutationDefaults = getPostChannelsTargetSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelsTargetMessagesMsgPinMutationKey() {
  return ['channels', '/channels/:target/messages/:msg/pin', 'POST'] as const
}

export function getPostChannelsTargetMessagesMsgPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTargetMessagesMsgPinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['messages'][':msg']['pin']['$post']
      >,
    ) {
      return parseResponse(client.channels[':target'].messages[':msg'].pin.$post(args, options))
    },
  })
}

export function usePostChannelsTargetMessagesMsgPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['messages'][':msg']['pin']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$post']>,
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
  const mutationDefaults = getPostChannelsTargetMessagesMsgPinMutationOptions<
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

export function getDeleteChannelsTargetMessagesMsgPinMutationKey() {
  return ['channels', '/channels/:target/messages/:msg/pin', 'DELETE'] as const
}

export function getDeleteChannelsTargetMessagesMsgPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMessagesMsgPinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']
      >,
    ) {
      return parseResponse(client.channels[':target'].messages[':msg'].pin.$delete(args, options))
    },
  })
}

export function useDeleteChannelsTargetMessagesMsgPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']
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
  const mutationDefaults = getDeleteChannelsTargetMessagesMsgPinMutationOptions<
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

export function getChannelsTargetMessagesMsgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>
  >,
) {
  return ['channels', '/channels/:target/messages/:msg', toValue(args)] as const
}

export function getChannelsTargetMessagesMsgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsTargetMessagesMsgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':target'].messages[':msg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsTargetMessagesMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsTargetMessagesMsgQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTargetMessagesMsgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsTargetMessagesMsgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':target'].messages[':msg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteChannelsTargetMessagesMsgMutationKey() {
  return ['channels', '/channels/:target/messages/:msg', 'DELETE'] as const
}

export function getDeleteChannelsTargetMessagesMsgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMessagesMsgMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>,
    ) {
      return parseResponse(client.channels[':target'].messages[':msg'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsTargetMessagesMsg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsTargetMessagesMsgMutationOptions<
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

export function getPatchChannelsTargetMessagesMsgMutationKey() {
  return ['channels', '/channels/:target/messages/:msg', 'PATCH'] as const
}

export function getPatchChannelsTargetMessagesMsgMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsTargetMessagesMsgMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>,
    ) {
      return parseResponse(client.channels[':target'].messages[':msg'].$patch(args, options))
    },
  })
}

export function usePatchChannelsTargetMessagesMsg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$patch']>,
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
  const mutationDefaults = getPatchChannelsTargetMessagesMsgMutationOptions<
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

export function getDeleteChannelsTargetMessagesBulkMutationKey() {
  return ['channels', '/channels/:target/messages/bulk', 'DELETE'] as const
}

export function getDeleteChannelsTargetMessagesBulkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMessagesBulkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>,
    ) {
      return parseResponse(client.channels[':target'].messages.bulk.$delete(args, options))
    },
  })
}

export function useDeleteChannelsTargetMessagesBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['messages']['bulk']['$delete']>,
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
  const mutationDefaults = getDeleteChannelsTargetMessagesBulkMutationOptions<
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

export function getPostChannelsCreateMutationKey() {
  return ['channels', '/channels/create', 'POST'] as const
}

export function getPostChannelsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.create.$post>) {
      return parseResponse(client.channels.create.$post(args, options))
    },
  })
}

export function usePostChannelsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channels.create.$post>,
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
  const mutationDefaults = getPostChannelsCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPutChannelsGroupIdRecipientsMemberIdMutationKey() {
  return ['channels', '/channels/:group_id/recipients/:member_id', 'PUT'] as const
}

export function getPutChannelsGroupIdRecipientsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':group_id']['recipients'][':member_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':group_id']['recipients'][':member_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsGroupIdRecipientsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':group_id']['recipients'][':member_id']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':group_id'].recipients[':member_id'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsGroupIdRecipientsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':group_id']['recipients'][':member_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':group_id']['recipients'][':member_id']['$put']
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
  const mutationDefaults = getPutChannelsGroupIdRecipientsMemberIdMutationOptions<
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

export function getDeleteChannelsGroupIdRecipientsMemberIdMutationKey() {
  return ['channels', '/channels/:group_id/recipients/:member_id', 'DELETE'] as const
}

export function getDeleteChannelsGroupIdRecipientsMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsGroupIdRecipientsMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':group_id'].recipients[':member_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsGroupIdRecipientsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':group_id']['recipients'][':member_id']['$delete']
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
  const mutationDefaults = getDeleteChannelsGroupIdRecipientsMemberIdMutationOptions<
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

export function getPostChannelsTargetJoinCallMutationKey() {
  return ['channels', '/channels/:target/join_call', 'POST'] as const
}

export function getPostChannelsTargetJoinCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['join_call']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['join_call']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTargetJoinCallMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['join_call']['$post']>,
    ) {
      return parseResponse(client.channels[':target'].join_call.$post(args, options))
    },
  })
}

export function usePostChannelsTargetJoinCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':target']['join_call']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['join_call']['$post']>,
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
  const mutationDefaults = getPostChannelsTargetJoinCallMutationOptions<TError, TOnMutateResult>(
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

export function getPutChannelsTargetEndRingTargetUserMutationKey() {
  return ['channels', '/channels/:target/end_ring/:target_user', 'PUT'] as const
}

export function getPutChannelsTargetEndRingTargetUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channels)[':target']['end_ring'][':target_user']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.channels)[':target']['end_ring'][':target_user']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsTargetEndRingTargetUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['end_ring'][':target_user']['$put']
      >,
    ) {
      return parseResponse(client.channels[':target'].end_ring[':target_user'].$put(args, options))
    },
  })
}

export function usePutChannelsTargetEndRingTargetUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['end_ring'][':target_user']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.channels)[':target']['end_ring'][':target_user']['$put']>,
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
  const mutationDefaults = getPutChannelsTargetEndRingTargetUserMutationOptions<
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

export function getPutChannelsTargetPermissionsRoleIdMutationKey() {
  return ['channels', '/channels/:target/permissions/:role_id', 'PUT'] as const
}

export function getPutChannelsTargetPermissionsRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsTargetPermissionsRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['permissions'][':role_id']['$put']
      >,
    ) {
      return parseResponse(client.channels[':target'].permissions[':role_id'].$put(args, options))
    },
  })
}

export function usePutChannelsTargetPermissionsRoleId<
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
                  ReturnType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>,
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
  const mutationDefaults = getPutChannelsTargetPermissionsRoleIdMutationOptions<
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

export function getPutChannelsTargetPermissionsDefaultMutationKey() {
  return ['channels', '/channels/:target/permissions/default', 'PUT'] as const
}

export function getPutChannelsTargetPermissionsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':target']['permissions']['default']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':target']['permissions']['default']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsTargetPermissionsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':target']['permissions']['default']['$put']>,
    ) {
      return parseResponse(client.channels[':target'].permissions.default.$put(args, options))
    },
  })
}

export function usePutChannelsTargetPermissionsDefault<
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
                  ReturnType<(typeof client.channels)[':target']['permissions']['default']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':target']['permissions']['default']['$put']>,
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
  const mutationDefaults = getPutChannelsTargetPermissionsDefaultMutationOptions<
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

export function getPutChannelsTargetMessagesMsgReactionsEmojiMutationKey() {
  return ['channels', '/channels/:target/messages/:msg/reactions/:emoji', 'PUT'] as const
}

export function getPutChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsTargetMessagesMsgReactionsEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':target'].messages[':msg'].reactions[':emoji'].$put(args, options),
      )
    },
  })
}

export function usePutChannelsTargetMessagesMsgReactionsEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$put']
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
  const mutationDefaults = getPutChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
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

export function getDeleteChannelsTargetMessagesMsgReactionsEmojiMutationKey() {
  return ['channels', '/channels/:target/messages/:msg/reactions/:emoji', 'DELETE'] as const
}

export function getDeleteChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMessagesMsgReactionsEmojiMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':target'].messages[':msg'].reactions[':emoji'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsTargetMessagesMsgReactionsEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':target']['messages'][':msg']['reactions'][':emoji']['$delete']
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
  const mutationDefaults = getDeleteChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
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

export function getDeleteChannelsTargetMessagesMsgReactionsMutationKey() {
  return ['channels', '/channels/:target/messages/:msg/reactions', 'DELETE'] as const
}

export function getDeleteChannelsTargetMessagesMsgReactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTargetMessagesMsgReactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
      >,
    ) {
      return parseResponse(
        client.channels[':target'].messages[':msg'].reactions.$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelsTargetMessagesMsgReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.channels)[':target']['messages'][':msg']['reactions']['$delete']
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
  const mutationDefaults = getDeleteChannelsTargetMessagesMsgReactionsMutationOptions<
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

export function getChannelsChannelIdWebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
) {
  return ['channels', '/channels/:channel_id/webhooks', toValue(args)] as const
}

export function getChannelsChannelIdWebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsChannelIdWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels[':channel_id'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelsChannelIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelsChannelIdWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsChannelIdWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsChannelIdWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels[':channel_id'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChannelsChannelIdWebhooksMutationKey() {
  return ['channels', '/channels/:channel_id/webhooks', 'POST'] as const
}

export function getPostChannelsChannelIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsChannelIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
    ) {
      return parseResponse(client.channels[':channel_id'].webhooks.$post(args, options))
    },
  })
}

export function usePostChannelsChannelIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$post']>,
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
  const mutationDefaults = getPostChannelsChannelIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersCreateMutationKey() {
  return ['servers', '/servers/create', 'POST'] as const
}

export function getPostServersCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.servers.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServersCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.servers.create.$post>) {
      return parseResponse(client.servers.create.$post(args, options))
    },
  })
}

export function usePostServersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.servers.create.$post>,
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
  const mutationDefaults = getPostServersCreateMutationOptions<TError, TOnMutateResult>(
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

export function getServersTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['$get']>>,
) {
  return ['servers', '/servers/:target', toValue(args)] as const
}

export function getServersTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
            >
          >,
          ReturnType<typeof getServersTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteServersTargetMutationKey() {
  return ['servers', '/servers/:target', 'DELETE'] as const
}

export function getDeleteServersTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':target']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':target']['$delete']>) {
      return parseResponse(client.servers[':target'].$delete(args, options))
    },
  })
}

export function useDeleteServersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.servers)[':target']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':target']['$delete']>,
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
  const mutationDefaults = getDeleteServersTargetMutationOptions<TError, TOnMutateResult>(
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

export function getPatchServersTargetMutationKey() {
  return ['servers', '/servers/:target', 'PATCH'] as const
}

export function getPatchServersTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServersTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':target']['$patch']>) {
      return parseResponse(client.servers[':target'].$patch(args, options))
    },
  })
}

export function usePatchServersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['$patch']>,
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
  const mutationDefaults = getPatchServersTargetMutationOptions<TError, TOnMutateResult>(
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

export function getPutServersTargetAckMutationKey() {
  return ['servers', '/servers/:target/ack', 'PUT'] as const
}

export function getPutServersTargetAckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers)[':target']['ack']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':target']['ack']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersTargetAckMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':target']['ack']['$put']>) {
      return parseResponse(client.servers[':target'].ack.$put(args, options))
    },
  })
}

export function usePutServersTargetAck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.servers)[':target']['ack']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':target']['ack']['$put']>,
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
  const mutationDefaults = getPutServersTargetAckMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersServerChannelsMutationKey() {
  return ['servers', '/servers/:server/channels', 'POST'] as const
}

export function getPostServersServerChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':server']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':server']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersServerChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':server']['channels']['$post']>,
    ) {
      return parseResponse(client.servers[':server'].channels.$post(args, options))
    },
  })
}

export function usePostServersServerChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':server']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':server']['channels']['$post']>,
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
  const mutationDefaults = getPostServersServerChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getServersTargetMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['members']['$get']>>,
) {
  return ['servers', '/servers/:target/members', toValue(args)] as const
}

export function getServersTargetMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersServerIdMembersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
  >,
) {
  return ['servers', '/servers/:server_id/members/:member_id', toValue(args)] as const
}

export function getServersServerIdMembersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersServerIdMembersMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':server_id'].members[':member_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersServerIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServersServerIdMembersMemberIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersServerIdMembersMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersServerIdMembersMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':server_id'].members[':member_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteServersServerIdMembersMemberIdMutationKey() {
  return ['servers', '/servers/:server_id/members/:member_id', 'DELETE'] as const
}

export function getDeleteServersServerIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersServerIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':server_id']['members'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.servers[':server_id'].members[':member_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteServersServerIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.servers)[':server_id']['members'][':member_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.servers)[':server_id']['members'][':member_id']['$delete']
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
  const mutationDefaults = getDeleteServersServerIdMembersMemberIdMutationOptions<
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

export function getPatchServersServerIdMembersMemberIdMutationKey() {
  return ['servers', '/servers/:server_id/members/:member_id', 'PATCH'] as const
}

export function getPatchServersServerIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServersServerIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':server_id']['members'][':member_id']['$patch']
      >,
    ) {
      return parseResponse(client.servers[':server_id'].members[':member_id'].$patch(args, options))
    },
  })
}

export function usePatchServersServerIdMembersMemberId<
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
                    (typeof client.servers)[':server_id']['members'][':member_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.servers)[':server_id']['members'][':member_id']['$patch']
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
  const mutationDefaults = getPatchServersServerIdMembersMemberIdMutationOptions<
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

export function getServersTargetMembersExperimentalQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>
  >,
) {
  return ['servers', '/servers/:target/members_experimental_query', toValue(args)] as const
}

export function getServersTargetMembersExperimentalQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetMembersExperimentalQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].members_experimental_query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetMembersExperimentalQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.servers)[':target']['members_experimental_query']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.servers)[':target']['members_experimental_query']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.servers)[':target']['members_experimental_query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getServersTargetMembersExperimentalQueryQueryKey>
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
          Awaited<
            ReturnType<(typeof client.servers)[':target']['members_experimental_query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetMembersExperimentalQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetMembersExperimentalQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].members_experimental_query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServersServerBansTargetMutationKey() {
  return ['servers', '/servers/:server/bans/:target', 'PUT'] as const
}

export function getPutServersServerBansTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':server']['bans'][':target']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersServerBansTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$put']>,
    ) {
      return parseResponse(client.servers[':server'].bans[':target'].$put(args, options))
    },
  })
}

export function usePutServersServerBansTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':server']['bans'][':target']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$put']>,
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
  const mutationDefaults = getPutServersServerBansTargetMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteServersServerBansTargetMutationKey() {
  return ['servers', '/servers/:server/bans/:target', 'DELETE'] as const
}

export function getDeleteServersServerBansTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers)[':server']['bans'][':target']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersServerBansTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$delete']>,
    ) {
      return parseResponse(client.servers[':server'].bans[':target'].$delete(args, options))
    },
  })
}

export function useDeleteServersServerBansTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.servers)[':server']['bans'][':target']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':server']['bans'][':target']['$delete']>,
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
  const mutationDefaults = getDeleteServersServerBansTargetMutationOptions<TError, TOnMutateResult>(
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

export function getServersTargetBansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['bans']['$get']>>,
) {
  return ['servers', '/servers/:target/bans', toValue(args)] as const
}

export function getServersTargetBansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['bans']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetBansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].bans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetBans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['bans']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetBansQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetBansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetBansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].bans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersTargetInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['invites']['$get']>>,
) {
  return ['servers', '/servers/:target/invites', toValue(args)] as const
}

export function getServersTargetInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['invites']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['invites']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostServersTargetRolesMutationKey() {
  return ['servers', '/servers/:target/roles', 'POST'] as const
}

export function getPostServersTargetRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':target']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersTargetRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':target']['roles']['$post']>) {
      return parseResponse(client.servers[':target'].roles.$post(args, options))
    },
  })
}

export function usePostServersTargetRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['roles']['$post']>,
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
  const mutationDefaults = getPostServersTargetRolesMutationOptions<TError, TOnMutateResult>(
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

export function getServersTargetRolesRoleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>
  >,
) {
  return ['servers', '/servers/:target/roles/:role_id', toValue(args)] as const
}

export function getServersTargetRolesRoleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetRolesRoleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].roles[':role_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetRolesRoleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetRolesRoleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetRolesRoleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].roles[':role_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteServersTargetRolesRoleIdMutationKey() {
  return ['servers', '/servers/:target/roles/:role_id', 'DELETE'] as const
}

export function getDeleteServersTargetRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersTargetRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>,
    ) {
      return parseResponse(client.servers[':target'].roles[':role_id'].$delete(args, options))
    },
  })
}

export function useDeleteServersTargetRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$delete']>,
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
  const mutationDefaults = getDeleteServersTargetRolesRoleIdMutationOptions<
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

export function getPatchServersTargetRolesRoleIdMutationKey() {
  return ['servers', '/servers/:target/roles/:role_id', 'PATCH'] as const
}

export function getPatchServersTargetRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServersTargetRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>,
    ) {
      return parseResponse(client.servers[':target'].roles[':role_id'].$patch(args, options))
    },
  })
}

export function usePatchServersTargetRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$patch']>,
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
  const mutationDefaults = getPatchServersTargetRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutServersTargetPermissionsRoleIdMutationKey() {
  return ['servers', '/servers/:target/permissions/:role_id', 'PUT'] as const
}

export function getPutServersTargetPermissionsRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersTargetPermissionsRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>,
    ) {
      return parseResponse(client.servers[':target'].permissions[':role_id'].$put(args, options))
    },
  })
}

export function usePutServersTargetPermissionsRoleId<
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
                  ReturnType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>,
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
  const mutationDefaults = getPutServersTargetPermissionsRoleIdMutationOptions<
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

export function getPutServersTargetPermissionsDefaultMutationKey() {
  return ['servers', '/servers/:target/permissions/default', 'PUT'] as const
}

export function getPutServersTargetPermissionsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':target']['permissions']['default']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['permissions']['default']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersTargetPermissionsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':target']['permissions']['default']['$put']>,
    ) {
      return parseResponse(client.servers[':target'].permissions.default.$put(args, options))
    },
  })
}

export function usePutServersTargetPermissionsDefault<
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
                  ReturnType<(typeof client.servers)[':target']['permissions']['default']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['permissions']['default']['$put']>,
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
  const mutationDefaults = getPutServersTargetPermissionsDefaultMutationOptions<
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

export function getServersTargetEmojisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>>,
) {
  return ['servers', '/servers/:target/emojis', toValue(args)] as const
}

export function getServersTargetEmojisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetEmojisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].emojis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetEmojis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetEmojisQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetEmojisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetEmojisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].emojis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchServersTargetRolesRanksMutationKey() {
  return ['servers', '/servers/:target/roles/ranks', 'PATCH'] as const
}

export function getPatchServersTargetRolesRanksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServersTargetRolesRanksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>,
    ) {
      return parseResponse(client.servers[':target'].roles.ranks.$patch(args, options))
    },
  })
}

export function usePatchServersTargetRolesRanks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':target']['roles']['ranks']['$patch']>,
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
  const mutationDefaults = getPatchServersTargetRolesRanksMutationOptions<TError, TOnMutateResult>(
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

export function getServersTargetAuditLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>
  >,
) {
  return ['servers', '/servers/:target/audit_logs', toValue(args)] as const
}

export function getServersTargetAuditLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersTargetAuditLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':target'].audit_logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersTargetAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersTargetAuditLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetAuditLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersTargetAuditLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':target'].audit_logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersServerDiscoverQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':server']['discover']['$get']>>,
) {
  return ['servers', '/servers/:server/discover', toValue(args)] as const
}

export function getServersServerDiscoverQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':server']['discover']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersServerDiscoverQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':server'].discover.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersServerDiscover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':server']['discover']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersServerDiscoverQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersServerDiscoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersServerDiscoverQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':server'].discover.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutServersServerDiscoverMutationKey() {
  return ['servers', '/servers/:server/discover', 'PUT'] as const
}

export function getPutServersServerDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':server']['discover']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersServerDiscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':server']['discover']['$put']>,
    ) {
      return parseResponse(client.servers[':server'].discover.$put(args, options))
    },
  })
}

export function usePutServersServerDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':server']['discover']['$put']>,
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
  const mutationDefaults = getPutServersServerDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteServersServerDiscoverMutationKey() {
  return ['servers', '/servers/:server/discover', 'DELETE'] as const
}

export function getDeleteServersServerDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.servers)[':server']['discover']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersServerDiscoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':server']['discover']['$delete']>,
    ) {
      return parseResponse(client.servers[':server'].discover.$delete(args, options))
    },
  })
}

export function useDeleteServersServerDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.servers)[':server']['discover']['$delete']>,
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
  const mutationDefaults = getDeleteServersServerDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function getInvitesTargetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':target']['$get']>>,
) {
  return ['invites', '/invites/:target', toValue(args)] as const
}

export function getInvitesTargetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':target']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvitesTargetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invites[':target'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvitesTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invites)[':target']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
            >
          >,
          ReturnType<typeof getInvitesTargetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesTargetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvitesTargetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invites[':target'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostInvitesTargetMutationKey() {
  return ['invites', '/invites/:target', 'POST'] as const
}

export function getPostInvitesTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invites)[':target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invites)[':target']['$post']>) {
      return parseResponse(client.invites[':target'].$post(args, options))
    },
  })
}

export function usePostInvitesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.invites)[':target']['$post']>,
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
  const mutationDefaults = getPostInvitesTargetMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteInvitesTargetMutationKey() {
  return ['invites', '/invites/:target', 'DELETE'] as const
}

export function getDeleteInvitesTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.invites)[':target']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvitesTargetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invites)[':target']['$delete']>) {
      return parseResponse(client.invites[':target'].$delete(args, options))
    },
  })
}

export function useDeleteInvitesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.invites)[':target']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invites)[':target']['$delete']>,
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
  const mutationDefaults = getDeleteInvitesTargetMutationOptions<TError, TOnMutateResult>(
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

export function getCustomEmojiEmojiIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>>,
) {
  return ['custom', '/custom/emoji/:emoji_id', toValue(args)] as const
}

export function getCustomEmojiEmojiIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomEmojiEmojiIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom.emoji[':emoji_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomEmojiEmojiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomEmojiEmojiIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomEmojiEmojiIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomEmojiEmojiIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom.emoji[':emoji_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCustomEmojiEmojiIdMutationKey() {
  return ['custom', '/custom/emoji/:emoji_id', 'PUT'] as const
}

export function getPutCustomEmojiEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomEmojiEmojiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$put']>) {
      return parseResponse(client.custom.emoji[':emoji_id'].$put(args, options))
    },
  })
}

export function usePutCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$put']>,
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
  const mutationDefaults = getPutCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCustomEmojiEmojiIdMutationKey() {
  return ['custom', '/custom/emoji/:emoji_id', 'DELETE'] as const
}

export function getDeleteCustomEmojiEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomEmojiEmojiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$delete']>) {
      return parseResponse(client.custom.emoji[':emoji_id'].$delete(args, options))
    },
  })
}

export function useDeleteCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$delete']>,
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
  const mutationDefaults = getDeleteCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCustomEmojiEmojiIdMutationKey() {
  return ['custom', '/custom/emoji/:emoji_id', 'PATCH'] as const
}

export function getPatchCustomEmojiEmojiIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCustomEmojiEmojiIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$patch']>) {
      return parseResponse(client.custom.emoji[':emoji_id'].$patch(args, options))
    },
  })
}

export function usePatchCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$patch']>,
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
  const mutationDefaults = getPatchCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSafetyReportMutationKey() {
  return ['safety', '/safety/report', 'POST'] as const
}

export function getPostSafetyReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.safety.report.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.safety.report.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSafetyReportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.safety.report.$post>) {
      return parseResponse(client.safety.report.$post(args, options))
    },
  })
}

export function usePostSafetyReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.safety.report.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.safety.report.$post>,
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
  const mutationDefaults = getPostSafetyReportMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthAccountCreateMutationKey() {
  return ['auth', '/auth/account/create', 'POST'] as const
}

export function getPostAuthAccountCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.create.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.create.$post>) {
      return parseResponse(client.auth.account.create.$post(args, options))
    },
  })
}

export function usePostAuthAccountCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.create.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.create.$post>,
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
  const mutationDefaults = getPostAuthAccountCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthAccountReverifyMutationKey() {
  return ['auth', '/auth/account/reverify', 'POST'] as const
}

export function getPostAuthAccountReverifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.reverify.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.reverify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountReverifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.reverify.$post>) {
      return parseResponse(client.auth.account.reverify.$post(args, options))
    },
  })
}

export function usePostAuthAccountReverify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.reverify.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.reverify.$post>,
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
  const mutationDefaults = getPostAuthAccountReverifyMutationOptions<TError, TOnMutateResult>(
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

export function getPutAuthAccountDeleteMutationKey() {
  return ['auth', '/auth/account/delete', 'PUT'] as const
}

export function getPutAuthAccountDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.delete.$put>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.delete.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthAccountDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.delete.$put>) {
      return parseResponse(client.auth.account.delete.$put(args, options))
    },
  })
}

export function usePutAuthAccountDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.delete.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.delete.$put>,
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
  const mutationDefaults = getPutAuthAccountDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthAccountDeleteMutationKey() {
  return ['auth', '/auth/account/delete', 'POST'] as const
}

export function getPostAuthAccountDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.delete.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.account.delete.$post(undefined, options))
    },
  })
}

export function usePostAuthAccountDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.delete.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostAuthAccountDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getAuthAccountIndexQueryKey() {
  return ['auth', '/auth/account/'] as const
}

export function getAuthAccountIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthAccountIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.account.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>
            >
          >,
          ReturnType<typeof getAuthAccountIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthAccountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthAccountIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.account.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthAccountDisableMutationKey() {
  return ['auth', '/auth/account/disable', 'POST'] as const
}

export function getPostAuthAccountDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.disable.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountDisableMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.account.disable.$post(undefined, options))
    },
  })
}

export function usePostAuthAccountDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.disable.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostAuthAccountDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthAccountChangePasswordMutationKey() {
  return ['auth', '/auth/account/change/password', 'PATCH'] as const
}

export function getPatchAuthAccountChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.auth.account.change.password.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.change.password.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthAccountChangePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.change.password.$patch>) {
      return parseResponse(client.auth.account.change.password.$patch(args, options))
    },
  })
}

export function usePatchAuthAccountChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.auth.account.change.password.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.change.password.$patch>,
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
  const mutationDefaults = getPatchAuthAccountChangePasswordMutationOptions<
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

export function getPatchAuthAccountChangeEmailMutationKey() {
  return ['auth', '/auth/account/change/email', 'PATCH'] as const
}

export function getPatchAuthAccountChangeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.change.email.$patch>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.change.email.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthAccountChangeEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.change.email.$patch>) {
      return parseResponse(client.auth.account.change.email.$patch(args, options))
    },
  })
}

export function usePatchAuthAccountChangeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.auth.account.change.email.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.change.email.$patch>,
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
  const mutationDefaults = getPatchAuthAccountChangeEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthAccountVerifyCodeMutationKey() {
  return ['auth', '/auth/account/verify/:code', 'POST'] as const
}

export function getPostAuthAccountVerifyCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.account.verify)[':code']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.account.verify)[':code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountVerifyCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.account.verify)[':code']['$post']>,
    ) {
      return parseResponse(client.auth.account.verify[':code'].$post(args, options))
    },
  })
}

export function usePostAuthAccountVerifyCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.account.verify)[':code']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.account.verify)[':code']['$post']>,
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
  const mutationDefaults = getPostAuthAccountVerifyCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthAccountResetPasswordMutationKey() {
  return ['auth', '/auth/account/reset_password', 'POST'] as const
}

export function getPostAuthAccountResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.reset_password.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.reset_password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAccountResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.reset_password.$post>) {
      return parseResponse(client.auth.account.reset_password.$post(args, options))
    },
  })
}

export function usePostAuthAccountResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.auth.account.reset_password.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.reset_password.$post>,
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
  const mutationDefaults = getPostAuthAccountResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthAccountResetPasswordMutationKey() {
  return ['auth', '/auth/account/reset_password', 'PATCH'] as const
}

export function getPatchAuthAccountResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.auth.account.reset_password.$patch>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.account.reset_password.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthAccountResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.account.reset_password.$patch>) {
      return parseResponse(client.auth.account.reset_password.$patch(args, options))
    },
  })
}

export function usePatchAuthAccountResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.auth.account.reset_password.$patch>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.account.reset_password.$patch>,
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
  const mutationDefaults = getPatchAuthAccountResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionLoginMutationKey() {
  return ['auth', '/auth/session/login', 'POST'] as const
}

export function getPostAuthSessionLoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.session.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.session.login.$post>) {
      return parseResponse(client.auth.session.login.$post(args, options))
    },
  })
}

export function usePostAuthSessionLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.session.login.$post>,
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
  const mutationDefaults = getPostAuthSessionLoginMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionLogoutMutationKey() {
  return ['auth', '/auth/session/logout', 'POST'] as const
}

export function getPostAuthSessionLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.logout.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.logout.$post(undefined, options))
    },
  })
}

export function usePostAuthSessionLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.logout.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostAuthSessionLogoutMutationOptions<TError, TOnMutateResult>(
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

export function getAuthSessionAllQueryKey() {
  return ['auth', '/auth/session/all'] as const
}

export function getAuthSessionAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthSessionAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.session.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthSessionAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>
            >
          >,
          ReturnType<typeof getAuthSessionAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthSessionAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthSessionAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.session.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAuthSessionAllMutationKey() {
  return ['auth', '/auth/session/all', 'DELETE'] as const
}

export function getDeleteAuthSessionAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.session.all.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionAllMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.session.all.$delete>) {
      return parseResponse(client.auth.session.all.$delete(args, options))
    },
  })
}

export function useDeleteAuthSessionAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.session.all.$delete>,
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
  const mutationDefaults = getDeleteAuthSessionAllMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthSessionIdMutationKey() {
  return ['auth', '/auth/session/:id', 'DELETE'] as const
}

export function getDeleteAuthSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.auth.session)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.session)[':id']['$delete']>) {
      return parseResponse(client.auth.session[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.auth.session)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.auth.session)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAuthSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthSessionIdMutationKey() {
  return ['auth', '/auth/session/:id', 'PATCH'] as const
}

export function getPatchAuthSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth.session)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.session)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.session)[':id']['$patch']>) {
      return parseResponse(client.auth.session[':id'].$patch(args, options))
    },
  })
}

export function usePatchAuthSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.session)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.session)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAuthSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutAuthMfaTicketMutationKey() {
  return ['auth', '/auth/mfa/ticket', 'PUT'] as const
}

export function getPutAuthMfaTicketMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.ticket.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.mfa.ticket.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthMfaTicketMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.mfa.ticket.$put>) {
      return parseResponse(client.auth.mfa.ticket.$put(args, options))
    },
  })
}

export function usePutAuthMfaTicket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.ticket.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.mfa.ticket.$put>,
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
  const mutationDefaults = getPutAuthMfaTicketMutationOptions<TError, TOnMutateResult>(
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

export function getAuthMfaIndexQueryKey() {
  return ['auth', '/auth/mfa/'] as const
}

export function getAuthMfaIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthMfaIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.mfa.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthMfaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
          >,
          ReturnType<typeof getAuthMfaIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthMfaIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.mfa.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthMfaRecoveryMutationKey() {
  return ['auth', '/auth/mfa/recovery', 'POST'] as const
}

export function getPostAuthMfaRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaRecoveryMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.mfa.recovery.$post(undefined, options))
    },
  })
}

export function usePostAuthMfaRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$post>>>
            >
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
  const mutationDefaults = getPostAuthMfaRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAuthMfaRecoveryMutationKey() {
  return ['auth', '/auth/mfa/recovery', 'PATCH'] as const
}

export function getPatchAuthMfaRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$patch>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthMfaRecoveryMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.mfa.recovery.$patch(undefined, options))
    },
  })
}

export function usePatchAuthMfaRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$patch>>>
            >
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
  const mutationDefaults = getPatchAuthMfaRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getAuthMfaMethodsQueryKey() {
  return ['auth', '/auth/mfa/methods'] as const
}

export function getAuthMfaMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthMfaMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.mfa.methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthMfaMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>
            >
          >,
          ReturnType<typeof getAuthMfaMethodsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthMfaMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.mfa.methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAuthMfaTotpMutationKey() {
  return ['auth', '/auth/mfa/totp', 'PUT'] as const
}

export function getPutAuthMfaTotpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.auth.mfa.totp.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthMfaTotpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.mfa.totp.$put>) {
      return parseResponse(client.auth.mfa.totp.$put(args, options))
    },
  })
}

export function usePutAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.auth.mfa.totp.$put>,
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
  const mutationDefaults = getPutAuthMfaTotpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuthMfaTotpMutationKey() {
  return ['auth', '/auth/mfa/totp', 'POST'] as const
}

export function getPostAuthMfaTotpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaTotpMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.mfa.totp.$post(undefined, options))
    },
  })
}

export function usePostAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$post>>>>
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
  const mutationDefaults = getPostAuthMfaTotpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthMfaTotpMutationKey() {
  return ['auth', '/auth/mfa/totp', 'DELETE'] as const
}

export function getDeleteAuthMfaTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthMfaTotpMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.mfa.totp.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$delete>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getDeleteAuthMfaTotpMutationOptions<TError, TOnMutateResult>(
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

export function getOnboardHelloQueryKey() {
  return ['onboard', '/onboard/hello'] as const
}

export function getOnboardHelloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOnboardHelloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.onboard.hello.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOnboardHello<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
          >,
          ReturnType<typeof getOnboardHelloQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOnboardHelloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOnboardHelloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.onboard.hello.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOnboardCompleteMutationKey() {
  return ['onboard', '/onboard/complete', 'POST'] as const
}

export function getPostOnboardCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.complete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.onboard.complete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOnboardCompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.onboard.complete.$post>) {
      return parseResponse(client.onboard.complete.$post(args, options))
    },
  })
}

export function usePostOnboardComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.onboard.complete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.onboard.complete.$post>,
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
  const mutationDefaults = getPostOnboardCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostPolicyAcknowledgeMutationKey() {
  return ['policy', '/policy/acknowledge', 'POST'] as const
}

export function getPostPolicyAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.policy.acknowledge.$post>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPolicyAcknowledgeMutationKey(),
    async mutationFn() {
      return parseResponse(client.policy.acknowledge.$post(undefined, options))
    },
  })
}

export function usePostPolicyAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.policy.acknowledge.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostPolicyAcknowledgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostPushSubscribeMutationKey() {
  return ['push', '/push/subscribe', 'POST'] as const
}

export function getPostPushSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.subscribe.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.push.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push.subscribe.$post>) {
      return parseResponse(client.push.subscribe.$post(args, options))
    },
  })
}

export function usePostPushSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.push.subscribe.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.push.subscribe.$post>,
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
  const mutationDefaults = getPostPushSubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getPostPushUnsubscribeMutationKey() {
  return ['push', '/push/unsubscribe', 'POST'] as const
}

export function getPostPushUnsubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push.unsubscribe.$post>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPushUnsubscribeMutationKey(),
    async mutationFn() {
      return parseResponse(client.push.unsubscribe.$post(undefined, options))
    },
  })
}

export function usePostPushUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.push.unsubscribe.$post>>>
              >
            >
          | undefined,
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
  const mutationDefaults = getPostPushUnsubscribeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncSettingsFetchMutationKey() {
  return ['sync', '/sync/settings/fetch', 'POST'] as const
}

export function getPostSyncSettingsFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.settings.fetch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sync.settings.fetch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncSettingsFetchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.settings.fetch.$post>) {
      return parseResponse(client.sync.settings.fetch.$post(args, options))
    },
  })
}

export function usePostSyncSettingsFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sync.settings.fetch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sync.settings.fetch.$post>,
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
  const mutationDefaults = getPostSyncSettingsFetchMutationOptions<TError, TOnMutateResult>(
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

export function getPostSyncSettingsSetMutationKey() {
  return ['sync', '/sync/settings/set', 'POST'] as const
}

export function getPostSyncSettingsSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.settings.set.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.sync.settings.set.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncSettingsSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.settings.set.$post>) {
      return parseResponse(client.sync.settings.set.$post(args, options))
    },
  })
}

export function usePostSyncSettingsSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.sync.settings.set.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.sync.settings.set.$post>,
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
  const mutationDefaults = getPostSyncSettingsSetMutationOptions<TError, TOnMutateResult>(
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

export function getSyncUnreadsQueryKey() {
  return ['sync', '/sync/unreads'] as const
}

export function getSyncUnreadsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSyncUnreadsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.unreads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSyncUnreads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
          >,
          ReturnType<typeof getSyncUnreadsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSyncUnreadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSyncUnreadsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.unreads.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdTokenMessageIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token/:message_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':token'][':message_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWebhooksWebhookIdTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$delete']
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
  const mutationDefaults = getDeleteWebhooksWebhookIdTokenMessageIdMutationOptions<
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

export function getPatchWebhooksWebhookIdTokenMessageIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token/:message_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdTokenMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdTokenMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id'][':token'][':message_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchWebhooksWebhookIdTokenMessageId<
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
                    (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id'][':token'][':message_id']['$patch']
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
  const mutationDefaults = getPatchWebhooksWebhookIdTokenMessageIdMutationOptions<
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

export function getWebhooksWebhookIdTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>
  >,
) {
  return ['webhooks', '/webhooks/:webhook_id/:token', toValue(args)] as const
}

export function getWebhooksWebhookIdTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksWebhookIdTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token', 'POST'] as const
}

export function getPostWebhooksWebhookIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':token'].$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdTokenMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksWebhookIdTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':token'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksWebhookIdTokenMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':token'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$patch']>,
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
  const mutationDefaults = getPatchWebhooksWebhookIdTokenMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhook_id', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>) {
      return parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
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
  const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksWebhookIdTokenGithubMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/:token/github', 'POST'] as const
}

export function getPostWebhooksWebhookIdTokenGithubMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdTokenGithubMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>,
    ) {
      return parseResponse(client.webhooks[':webhook_id'][':token'].github.$post(args, options))
    },
  })
}

export function usePostWebhooksWebhookIdTokenGithub<
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
                  ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>,
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
  const mutationDefaults = getPostWebhooksWebhookIdTokenGithubMutationOptions<
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
