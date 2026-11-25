import { injectQuery, injectMutation, queryOptions, mutationOptions } from '@tanstack/angular-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
} from '@tanstack/angular-query'
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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getUsersMeQueryKey() {
  return ['users', '/users/@me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)['@me']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getUsersTargetQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['$get']>,
) {
  return ['users', '/users/:target', args] as const
}

export function getUsersTargetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetQueryKey>
  >({
    queryKey: getUsersTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersTarget<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPatchUsersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':target']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getUsersTargetFlagsQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['flags']['$get']>,
) {
  return ['users', '/users/:target/flags', args] as const
}

export function getUsersTargetFlagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['flags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetFlagsQueryKey>
  >({
    queryKey: getUsersTargetFlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].flags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersTargetFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['flags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':target']['flags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTargetFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTargetFlagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPatchUsersMeUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersMeUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getUsersTargetDefaultAvatarQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>,
) {
  return ['users', '/users/:target/default_avatar', args] as const
}

export function getUsersTargetDefaultAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersTargetDefaultAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].default_avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersTargetDefaultAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':target']['default_avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['default_avatar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersTargetDefaultAvatarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getUsersTargetProfileQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['profile']['$get']>,
) {
  return ['users', '/users/:target/profile', args] as const
}

export function getUsersTargetProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersTargetProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].profile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersTargetProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['profile']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['profile']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTargetProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getUsersDmsQueryKey() {
  return ['users', '/users/dms'] as const
}

export function getUsersDmsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersDmsQueryKey>
  >({
    queryKey: getUsersDmsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.dms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersDms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.dms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersDmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersDmsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getUsersTargetDmQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['dm']['$get']>,
) {
  return ['users', '/users/:target/dm', args] as const
}

export function getUsersTargetDmQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['dm']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTargetDmQueryKey>
  >({
    queryKey: getUsersTargetDmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].dm.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersTargetDm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['dm']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':target']['dm']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTargetDmQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTargetDmQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getUsersTargetMutualQueryKey(
  args: InferRequestType<(typeof client.users)[':target']['mutual']['$get']>,
) {
  return ['users', '/users/:target/mutual', args] as const
}

export function getUsersTargetMutualQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':target']['mutual']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersTargetMutualQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':target'].mutual.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersTargetMutual<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':target']['mutual']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':target']['mutual']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTargetMutualQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPutUsersTargetFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersTargetFriendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteUsersTargetFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersTargetFriendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutUsersTargetBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersTargetBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteUsersTargetBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersTargetBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostUsersFriend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.friend.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.friend.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersFriendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostBotsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bots.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.bots.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBotsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBotsTargetInviteQueryKey(
  args: InferRequestType<(typeof client.bots)[':target']['invite']['$get']>,
) {
  return ['bots', '/bots/:target/invite', args] as const
}

export function getBotsTargetInviteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':target']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBotsTargetInviteQueryKey>
  >({
    queryKey: getBotsTargetInviteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':target'].invite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBotsTargetInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':target']['invite']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.bots)[':target']['invite']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsTargetInviteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsTargetInviteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostBotsTargetInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBotsTargetInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBotsBotIdQueryKey(
  args: InferRequestType<(typeof client.bots)[':bot_id']['$get']>,
) {
  return ['bots', '/bots/:bot_id', args] as const
}

export function getBotsBotIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.bots)[':bot_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsBotIdQueryKey>
  >({
    queryKey: getBotsBotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':bot_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBotsBotId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':bot_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBotsBotIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsBotIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteBotsBotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.bots)[':bot_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsBotIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchBotsBotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.bots)[':bot_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBotsBotIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBotsMeQueryKey() {
  return ['bots', '/bots/@me'] as const
}

export function getBotsMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBotsMeQueryKey>
  >({
    queryKey: getBotsMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.bots['@me'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBotsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bots)['@me']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBotsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsMeQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getBotsBotIdDiscoverQueryKey(
  args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>,
) {
  return ['bots', '/bots/:bot_id/discover', args] as const
}

export function getBotsBotIdDiscoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBotsBotIdDiscoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bots[':bot_id'].discover.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBotsBotIdDiscover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bots)[':bot_id']['discover']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bots)[':bot_id']['discover']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBotsBotIdDiscoverQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPutBotsBotIdDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBotsBotIdDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteBotsBotIdDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBotsBotIdDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsTargetAckMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsTargetAckMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChannelsTargetQueryKey(
  args: InferRequestType<(typeof client.channels)[':target']['$get']>,
) {
  return ['channels', '/channels/:target', args] as const
}

export function getChannelsTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTargetQueryKey>
  >({
    queryKey: getChannelsTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':target'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChannelsTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteChannelsTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchChannelsTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':target']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':target']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChannelsTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChannelsTargetMembersQueryKey(
  args: InferRequestType<(typeof client.channels)[':target']['members']['$get']>,
) {
  return ['channels', '/channels/:target/members', args] as const
}

export function getChannelsTargetMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':target']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsTargetMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':target'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsTargetMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':target']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsTargetMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostChannelsTargetInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsTargetInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChannelsTargetMessagesQueryKey(
  args: InferRequestType<(typeof client.channels)[':target']['messages']['$get']>,
) {
  return ['channels', '/channels/:target/messages', args] as const
}

export function getChannelsTargetMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':target']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsTargetMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':target'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsTargetMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':target']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsTargetMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostChannelsTargetMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsTargetMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostChannelsTargetSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsTargetSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostChannelsTargetMessagesMsgPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsTargetMessagesMsgPinMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteChannelsTargetMessagesMsgPin<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['pin']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMessagesMsgPinMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChannelsTargetMessagesMsgQueryKey(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>,
) {
  return ['channels', '/channels/:target/messages/:msg', args] as const
}

export function getChannelsTargetMessagesMsgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsTargetMessagesMsgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':target'].messages[':msg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsTargetMessagesMsg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':target']['messages'][':msg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':target']['messages'][':msg']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsTargetMessagesMsgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteChannelsTargetMessagesMsg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMessagesMsgMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchChannelsTargetMessagesMsg<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChannelsTargetMessagesMsgMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteChannelsTargetMessagesBulk<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMessagesBulkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostChannelsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsGroupIdRecipientsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.channels)[':group_id']['recipients'][':member_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsGroupIdRecipientsMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteChannelsGroupIdRecipientsMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsGroupIdRecipientsMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostChannelsTargetJoinCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsTargetJoinCallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsTargetEndRingTargetUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsTargetEndRingTargetUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsTargetPermissionsRoleId<
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
                ReturnType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':target']['permissions'][':role_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsTargetPermissionsRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsTargetPermissionsDefault<
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
                ReturnType<(typeof client.channels)[':target']['permissions']['default']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':target']['permissions']['default']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsTargetPermissionsDefaultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutChannelsTargetMessagesMsgReactionsEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteChannelsTargetMessagesMsgReactionsEmoji<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMessagesMsgReactionsEmojiMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteChannelsTargetMessagesMsgReactions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChannelsTargetMessagesMsgReactionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChannelsChannelIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
) {
  return ['channels', '/channels/:channel_id/webhooks', args] as const
}

export function getChannelsChannelIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChannelsChannelIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':channel_id'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChannelsChannelIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':channel_id']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':channel_id']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChannelsChannelIdWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostChannelsChannelIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChannelsChannelIdWebhooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostServersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.create.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.servers.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServersCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['$get']>,
) {
  return ['servers', '/servers/:target', args] as const
}

export function getServersTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersTargetQueryKey>
  >({
    queryKey: getServersTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServersTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServersTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteServersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServersTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchServersTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':target']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServersTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutServersTargetAck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServersTargetAckMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostServersServerChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServersServerChannelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetMembersQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['members']['$get']>,
) {
  return ['servers', '/servers/:target/members', args] as const
}

export function getServersTargetMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersTargetMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getServersServerIdMembersMemberIdQueryKey(
  args: InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>,
) {
  return ['servers', '/servers/:server_id/members/:member_id', args] as const
}

export function getServersServerIdMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersServerIdMembersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':server_id'].members[':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersServerIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.servers)[':server_id']['members'][':member_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersServerIdMembersMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteServersServerIdMembersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServersServerIdMembersMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchServersServerIdMembersMemberId<
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
                ReturnType<(typeof client.servers)[':server_id']['members'][':member_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':server_id']['members'][':member_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServersServerIdMembersMemberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetMembersExperimentalQueryQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>,
) {
  return ['servers', '/servers/:target/members_experimental_query', args] as const
}

export function getServersTargetMembersExperimentalQueryQueryOptions<
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
  args: InferRequestType<(typeof client.servers)[':target']['members_experimental_query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetMembersExperimentalQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].members_experimental_query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetMembersExperimentalQuery<
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
  args: () => InferRequestType<
    (typeof client.servers)[':target']['members_experimental_query']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersTargetMembersExperimentalQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutServersServerBansTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServersServerBansTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteServersServerBansTarget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServersServerBansTargetMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetBansQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['bans']['$get']>,
) {
  return ['servers', '/servers/:target/bans', args] as const
}

export function getServersTargetBansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['bans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetBansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].bans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetBans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':target']['bans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['bans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServersTargetBansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getServersTargetInvitesQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['invites']['$get']>,
) {
  return ['servers', '/servers/:target/invites', args] as const
}

export function getServersTargetInvitesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['invites']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetInvitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].invites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['invites']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersTargetInvitesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostServersTargetRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostServersTargetRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetRolesRoleIdQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>,
) {
  return ['servers', '/servers/:target/roles/:role_id', args] as const
}

export function getServersTargetRolesRoleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetRolesRoleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].roles[':role_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetRolesRoleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['roles'][':role_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersTargetRolesRoleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectDeleteServersTargetRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServersTargetRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchServersTargetRolesRoleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServersTargetRolesRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutServersTargetPermissionsRoleId<
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
                ReturnType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':target']['permissions'][':role_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServersTargetPermissionsRoleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutServersTargetPermissionsDefault<
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
                ReturnType<(typeof client.servers)[':target']['permissions']['default']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':target']['permissions']['default']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServersTargetPermissionsDefaultMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetEmojisQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>,
) {
  return ['servers', '/servers/:target/emojis', args] as const
}

export function getServersTargetEmojisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetEmojisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].emojis.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetEmojis<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['emojis']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['emojis']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServersTargetEmojisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPatchServersTargetRolesRanks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchServersTargetRolesRanksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getServersTargetAuditLogsQueryKey(
  args: InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>,
) {
  return ['servers', '/servers/:target/audit_logs', args] as const
}

export function getServersTargetAuditLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersTargetAuditLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':target'].audit_logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersTargetAuditLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':target']['audit_logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':target']['audit_logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersTargetAuditLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getServersServerDiscoverQueryKey(
  args: InferRequestType<(typeof client.servers)[':server']['discover']['$get']>,
) {
  return ['servers', '/servers/:server/discover', args] as const
}

export function getServersServerDiscoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':server']['discover']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getServersServerDiscoverQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':server'].discover.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServersServerDiscover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':server']['discover']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.servers)[':server']['discover']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServersServerDiscoverQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPutServersServerDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutServersServerDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteServersServerDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteServersServerDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getInvitesTargetQueryKey(
  args: InferRequestType<(typeof client.invites)[':target']['$get']>,
) {
  return ['invites', '/invites/:target', args] as const
}

export function getInvitesTargetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invites)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvitesTargetQueryKey>
  >({
    queryKey: getInvitesTargetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invites[':target'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectInvitesTarget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invites)[':target']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvitesTargetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvitesTargetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPostInvitesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invites)[':target']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.invites)[':target']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvitesTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteInvitesTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteInvitesTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getCustomEmojiEmojiIdQueryKey(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>,
) {
  return ['custom', '/custom/emoji/:emoji_id', args] as const
}

export function getCustomEmojiEmojiIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomEmojiEmojiIdQueryKey>
  >({
    queryKey: getCustomEmojiEmojiIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom.emoji[':emoji_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCustomEmojiEmojiId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.custom.emoji)[':emoji_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom.emoji)[':emoji_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomEmojiEmojiIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomEmojiEmojiIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectPutCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchCustomEmojiEmojiId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCustomEmojiEmojiIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostSafetyReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.safety.report.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.safety.report.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSafetyReportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthAccountCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthAccountReverify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountReverifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutAuthAccountDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthAccountDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthAccountDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getAuthAccountIndexQueryKey() {
  return ['auth', '/auth/account/'] as const
}

export function getAuthAccountIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthAccountIndexQueryKey>
  >({
    queryKey: getAuthAccountIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.account.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAuthAccountIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.account.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthAccountIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthAccountIndexQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostAuthAccountDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchAuthAccountChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthAccountChangePasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchAuthAccountChangeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthAccountChangeEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthAccountVerifyCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountVerifyCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthAccountResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthAccountResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchAuthAccountResetPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthAccountResetPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthSessionLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.login.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.auth.session.login.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthSessionLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthSessionLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthSessionLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getAuthSessionAllQueryKey() {
  return ['auth', '/auth/session/all'] as const
}

export function getAuthSessionAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthSessionAllQueryKey>
  >({
    queryKey: getAuthSessionAllQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.session.all.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthSessionAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthSessionAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthSessionAllQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectDeleteAuthSessionAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthSessionAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteAuthSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchAuthSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.auth.session)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.auth.session)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPutAuthMfaTicket<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.ticket.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.mfa.ticket.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthMfaTicketMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getAuthMfaIndexQueryKey() {
  return ['auth', '/auth/mfa/'] as const
}

export function getAuthMfaIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaIndexQueryKey>
  >({
    queryKey: getAuthMfaIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.mfa.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthMfaIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthMfaIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthMfaIndexQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostAuthMfaRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthMfaRecoveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchAuthMfaRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.recovery.$patch>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthMfaRecoveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getAuthMfaMethodsQueryKey() {
  return ['auth', '/auth/mfa/methods'] as const
}

export function getAuthMfaMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaMethodsQueryKey>
  >({
    queryKey: getAuthMfaMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.mfa.methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthMfaMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.methods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthMfaMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthMfaMethodsQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPutAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.auth.mfa.totp.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAuthMfaTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.totp.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthMfaTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteAuthMfaTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthMfaTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getOnboardHelloQueryKey() {
  return ['onboard', '/onboard/hello'] as const
}

export function getOnboardHelloQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOnboardHelloQueryKey>
  >({
    queryKey: getOnboardHelloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.onboard.hello.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOnboardHello<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onboard.hello.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOnboardHelloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOnboardHelloQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectPostOnboardComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.onboard.complete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.onboard.complete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOnboardCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostPolicyAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPolicyAcknowledgeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostPushSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPushSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostPushUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPushUnsubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostSyncSettingsFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sync.settings.fetch.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sync.settings.fetch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncSettingsFetchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostSyncSettingsSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSyncSettingsSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getSyncUnreadsQueryKey() {
  return ['sync', '/sync/unreads'] as const
}

export function getSyncUnreadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSyncUnreadsQueryKey>
  >({
    queryKey: getSyncUnreadsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.unreads.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSyncUnreads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.unreads.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSyncUnreadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSyncUnreadsQueryOptions<TData, TError>(clientOptions), ...query }
  })
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

export function injectDeleteWebhooksWebhookIdTokenMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdTokenMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchWebhooksWebhookIdTokenMessageId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksWebhookIdTokenMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getWebhooksWebhookIdTokenQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id/:token', args] as const
}

export function getWebhooksWebhookIdTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhooksWebhookIdTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksWebhookIdToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWebhooksWebhookIdTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
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

export function injectPostWebhooksWebhookIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksWebhookIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectDeleteWebhooksWebhookIdToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchWebhooksWebhookIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksWebhookIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  return ['webhooks', '/webhooks/:webhook_id', args] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
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

export function injectDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
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

export function injectPostWebhooksWebhookIdTokenGithub<
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
                ReturnType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id'][':token']['github']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWebhooksWebhookIdTokenGithubMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}
