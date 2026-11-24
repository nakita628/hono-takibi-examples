import { injectQuery, injectMutation, queryOptions, mutationOptions } from '@tanstack/angular-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
} from '@tanstack/angular-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthorizationsKey() {
  return ['authorizations'] as const
}

export function getBucketsKey() {
  return ['buckets'] as const
}

export function getChecksKey() {
  return ['checks'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDbrpsKey() {
  return ['dbrps'] as const
}

export function getDeleteKey() {
  return ['delete'] as const
}

export function getFlagsKey() {
  return ['flags'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getNotificationEndpointsKey() {
  return ['notificationEndpoints'] as const
}

export function getNotificationRulesKey() {
  return ['notificationRules'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getPingKey() {
  return ['ping'] as const
}

export function getQueryKey2() {
  return ['query'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSetupKey() {
  return ['setup'] as const
}

export function getSigninKey() {
  return ['signin'] as const
}

export function getSignoutKey() {
  return ['signout'] as const
}

export function getStacksKey() {
  return ['stacks'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getTelegrafKey() {
  return ['telegraf'] as const
}

export function getTelegrafsKey() {
  return ['telegrafs'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVariablesKey() {
  return ['variables'] as const
}

export function getWriteKey() {
  return ['write'] as const
}

export function getPostSigninMutationKey() {
  return ['signin', '/signin', 'POST'] as const
}

export function getPostSigninMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>>
    | undefined,
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

export function injectPostSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.signin.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSigninMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostSignoutMutationKey() {
  return ['signout', '/signout', 'POST'] as const
}

export function getPostSignoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signout.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.signout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signout.$post>) {
      return parseResponse(client.signout.$post(args, options))
    },
  })
}

export function injectPostSignout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signout.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.signout.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >({
    queryKey: getPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPingQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getHeadPingMutationKey() {
  return ['ping', '/ping', 'HEAD'] as const
}

export function getHeadPingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getHeadPingMutationKey(),
    async mutationFn() {
      return parseResponse(client.ping.$head(undefined, options))
    },
  })
}

export function injectHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>
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
    const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
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
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDbrpsQueryKey(args: InferRequestType<typeof client.dbrps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dbrps', '/dbrps', keyArgs] as const
}

export function getDbrpsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dbrps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbrpsQueryKey>
  >({
    queryKey: getDbrpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dbrps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDbrps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dbrps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDbrpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDbrpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostDbrpsMutationKey() {
  return ['dbrps', '/dbrps', 'POST'] as const
}

export function getPostDbrpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$post>>>>>,
    TError,
    InferRequestType<typeof client.dbrps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDbrpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dbrps.$post>) {
      return parseResponse(client.dbrps.$post(args, options))
    },
  })
}

export function injectPostDbrps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$post>>>>>,
        TError,
        InferRequestType<typeof client.dbrps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDbrpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDbrpsDbrpIDQueryKey(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dbrps', '/dbrps/:dbrpID', keyArgs] as const
}

export function getDbrpsDbrpIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbrpsDbrpIDQueryKey>
  >({
    queryKey: getDbrpsDbrpIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dbrps[':dbrpID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDbrpsDbrpID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDbrpsDbrpIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDbrpsDbrpIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteDbrpsDbrpIDMutationKey() {
  return ['dbrps', '/dbrps/:dbrpID', 'DELETE'] as const
}

export function getDeleteDbrpsDbrpIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDbrpsDbrpIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>) {
      return parseResponse(client.dbrps[':dbrpID'].$delete(args, options))
    },
  })
}

export function injectDeleteDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchDbrpsDbrpIDMutationKey() {
  return ['dbrps', '/dbrps/:dbrpID', 'PATCH'] as const
}

export function getPatchDbrpsDbrpIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDbrpsDbrpIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>) {
      return parseResponse(client.dbrps[':dbrpID'].$patch(args, options))
    },
  })
}

export function injectPatchDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTelegrafPluginsQueryKey(
  args: InferRequestType<typeof client.telegraf.plugins.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegraf', '/telegraf/plugins', keyArgs] as const
}

export function getTelegrafPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.telegraf.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafPluginsQueryKey>
  >({
    queryKey: getTelegrafPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegraf.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTelegrafPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.telegraf.plugins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafPluginsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getTelegrafsQueryKey(args: InferRequestType<typeof client.telegrafs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs', keyArgs] as const
}

export function getTelegrafsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.telegrafs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTelegrafsQueryKey>
  >({
    queryKey: getTelegrafsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegrafs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTelegrafs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.telegrafs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTelegrafsMutationKey() {
  return ['telegrafs', '/telegrafs', 'POST'] as const
}

export function getPostTelegrafsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$post>>>>>,
    TError,
    InferRequestType<typeof client.telegrafs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTelegrafsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.telegrafs.$post>) {
      return parseResponse(client.telegrafs.$post(args, options))
    },
  })
}

export function injectPostTelegrafs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.telegrafs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelegrafsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTelegrafsTelegrafIDQueryKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID', keyArgs] as const
}

export function getTelegrafsTelegrafIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDQueryKey>
  >({
    queryKey: getTelegrafsTelegrafIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegrafs[':telegrafID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTelegrafsTelegrafID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafsTelegrafIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafsTelegrafIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPutTelegrafsTelegrafIDMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID', 'PUT'] as const
}

export function getPutTelegrafsTelegrafIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTelegrafsTelegrafIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']>) {
      return parseResponse(client.telegrafs[':telegrafID'].$put(args, options))
    },
  })
}

export function injectPutTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteTelegrafsTelegrafIDMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID', 'DELETE'] as const
}

export function getDeleteTelegrafsTelegrafIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTelegrafsTelegrafIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']>) {
      return parseResponse(client.telegrafs[':telegrafID'].$delete(args, options))
    },
  })
}

export function injectDeleteTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTelegrafsTelegrafIDLabelsQueryKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/labels', keyArgs] as const
}

export function getTelegrafsTelegrafIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDLabelsQueryKey>
  >({
    queryKey: getTelegrafsTelegrafIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegrafs[':telegrafID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTelegrafsTelegrafIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafsTelegrafIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostTelegrafsTelegrafIDLabelsMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/labels', 'POST'] as const
}

export function getPostTelegrafsTelegrafIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelegrafsTelegrafIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>,
    ) {
      return parseResponse(client.telegrafs[':telegrafID'].labels.$post(args, options))
    },
  })
}

export function injectPostTelegrafsTelegrafIDLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelegrafsTelegrafIDLabelsMutationOptions<
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

export function getDeleteTelegrafsTelegrafIDLabelsLabelIDMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteTelegrafsTelegrafIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTelegrafsTelegrafIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.telegrafs[':telegrafID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteTelegrafsTelegrafIDLabelsLabelID<
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
                    (typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTelegrafsTelegrafIDLabelsLabelIDMutationOptions<
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

export function getTelegrafsTelegrafIDMembersQueryKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/members', keyArgs] as const
}

export function getTelegrafsTelegrafIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDMembersQueryKey>
  >({
    queryKey: getTelegrafsTelegrafIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegrafs[':telegrafID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTelegrafsTelegrafIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafsTelegrafIDMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostTelegrafsTelegrafIDMembersMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/members', 'POST'] as const
}

export function getPostTelegrafsTelegrafIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelegrafsTelegrafIDMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>,
    ) {
      return parseResponse(client.telegrafs[':telegrafID'].members.$post(args, options))
    },
  })
}

export function injectPostTelegrafsTelegrafIDMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelegrafsTelegrafIDMembersMutationOptions<
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

export function getDeleteTelegrafsTelegrafIDMembersUserIDMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/members/:userID', 'DELETE'] as const
}

export function getDeleteTelegrafsTelegrafIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTelegrafsTelegrafIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.telegrafs[':telegrafID'].members[':userID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteTelegrafsTelegrafIDMembersUserID<
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
                    (typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTelegrafsTelegrafIDMembersUserIDMutationOptions<
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

export function getTelegrafsTelegrafIDOwnersQueryKey(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['telegrafs', '/telegrafs/:telegrafID/owners', keyArgs] as const
}

export function getTelegrafsTelegrafIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDOwnersQueryKey>
  >({
    queryKey: getTelegrafsTelegrafIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.telegrafs[':telegrafID'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTelegrafsTelegrafIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTelegrafsTelegrafIDOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostTelegrafsTelegrafIDOwnersMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/owners', 'POST'] as const
}

export function getPostTelegrafsTelegrafIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTelegrafsTelegrafIDOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>,
    ) {
      return parseResponse(client.telegrafs[':telegrafID'].owners.$post(args, options))
    },
  })
}

export function injectPostTelegrafsTelegrafIDOwners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelegrafsTelegrafIDOwnersMutationOptions<
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

export function getDeleteTelegrafsTelegrafIDOwnersUserIDMutationKey() {
  return ['telegrafs', '/telegrafs/:telegrafID/owners/:userID', 'DELETE'] as const
}

export function getDeleteTelegrafsTelegrafIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTelegrafsTelegrafIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']
      >,
    ) {
      return parseResponse(client.telegrafs[':telegrafID'].owners[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteTelegrafsTelegrafIDOwnersUserID<
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
                    (typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTelegrafsTelegrafIDOwnersUserIDMutationOptions<
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

export function getVariablesVariableIDLabelsQueryKey(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables/:variableID/labels', keyArgs] as const
}

export function getVariablesVariableIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariablesVariableIDLabelsQueryKey>
  >({
    queryKey: getVariablesVariableIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variables[':variableID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVariablesVariableIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariablesVariableIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVariablesVariableIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostVariablesVariableIDLabelsMutationKey() {
  return ['variables', '/variables/:variableID/labels', 'POST'] as const
}

export function getPostVariablesVariableIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVariablesVariableIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']>,
    ) {
      return parseResponse(client.variables[':variableID'].labels.$post(args, options))
    },
  })
}

export function injectPostVariablesVariableIDLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.variables)[':variableID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVariablesVariableIDLabelsMutationOptions<
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

export function getDeleteVariablesVariableIDLabelsLabelIDMutationKey() {
  return ['variables', '/variables/:variableID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteVariablesVariableIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVariablesVariableIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.variables)[':variableID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.variables[':variableID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteVariablesVariableIDLabelsLabelID<
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
                    (typeof client.variables)[':variableID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.variables)[':variableID']['labels'][':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVariablesVariableIDLabelsLabelIDMutationOptions<
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

export function getPostWriteMutationKey() {
  return ['write', '/write', 'POST'] as const
}

export function getPostWriteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.write.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWriteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.write.$post>) {
      return parseResponse(client.write.$post(args, options))
    },
  })
}

export function injectPostWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.write.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWriteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostDeleteMutationKey() {
  return ['delete', '/delete', 'POST'] as const
}

export function getPostDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delete.$post>) {
      return parseResponse(client.delete.$post(args, options))
    },
  })
}

export function injectPostDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getLabelsQueryKey(args: InferRequestType<typeof client.labels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels', keyArgs] as const
}

export function getLabelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >({
    queryKey: getLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.labels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostLabelsMutationKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function getPostLabelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    InferRequestType<typeof client.labels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labels.$post>) {
      return parseResponse(client.labels.$post(args, options))
    },
  })
}

export function injectPostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
        TError,
        InferRequestType<typeof client.labels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getLabelsLabelIDQueryKey(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/:labelID', keyArgs] as const
}

export function getLabelsLabelIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels)[':labelID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsLabelIDQueryKey>
  >({
    queryKey: getLabelsLabelIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels[':labelID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLabelsLabelID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels)[':labelID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelsLabelIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsLabelIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteLabelsLabelIDMutationKey() {
  return ['labels', '/labels/:labelID', 'DELETE'] as const
}

export function getDeleteLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.labels)[':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsLabelIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':labelID']['$delete']>) {
      return parseResponse(client.labels[':labelID'].$delete(args, options))
    },
  })
}

export function injectDeleteLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':labelID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.labels)[':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchLabelsLabelIDMutationKey() {
  return ['labels', '/labels/:labelID', 'PATCH'] as const
}

export function getPatchLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.labels)[':labelID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLabelsLabelIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.labels)[':labelID']['$patch']>) {
      return parseResponse(client.labels[':labelID'].$patch(args, options))
    },
  })
}

export function injectPatchLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.labels)[':labelID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDashboardsDashboardIDQueryKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID', keyArgs] as const
}

export function getDashboardsDashboardIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDQueryKey>
  >({
    queryKey: getDashboardsDashboardIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsDashboardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDeleteDashboardsDashboardIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].$delete(args, options))
    },
  })
}

export function injectDeleteDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchDashboardsDashboardIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID', 'PATCH'] as const
}

export function getPatchDashboardsDashboardIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDashboardsDashboardIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']>) {
      return parseResponse(client.dashboards[':dashboardID'].$patch(args, options))
    },
  })
}

export function injectPatchDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutDashboardsDashboardIDCellsMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells', 'PUT'] as const
}

export function getPutDashboardsDashboardIDCellsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDashboardsDashboardIDCellsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].cells.$put(args, options))
    },
  })
}

export function injectPutDashboardsDashboardIDCells<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDashboardsDashboardIDCellsMutationOptions<
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

export function getPostDashboardsDashboardIDCellsMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells', 'POST'] as const
}

export function getPostDashboardsDashboardIDCellsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsDashboardIDCellsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].cells.$post(args, options))
    },
  })
}

export function injectPostDashboardsDashboardIDCells<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['cells']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsDashboardIDCellsMutationOptions<
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

export function getDeleteDashboardsDashboardIDCellsCellIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIDCellsCellIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIDCellsCellIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']
      >,
    ) {
      return parseResponse(
        client.dashboards[':dashboardID'].cells[':cellID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDashboardsDashboardIDCellsCellID<
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
                    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDashboardsDashboardIDCellsCellIDMutationOptions<
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

export function getPatchDashboardsDashboardIDCellsCellIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID', 'PATCH'] as const
}

export function getPatchDashboardsDashboardIDCellsCellIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDashboardsDashboardIDCellsCellIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']
      >,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].cells[':cellID'].$patch(args, options))
    },
  })
}

export function injectPatchDashboardsDashboardIDCellsCellID<
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
                ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDashboardsDashboardIDCellsCellIDMutationOptions<
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

export function getDashboardsDashboardIDCellsCellIDViewQueryKey(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID/view', keyArgs] as const
}

export function getDashboardsDashboardIDCellsCellIDViewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDCellsCellIDViewQueryKey>
  >({
    queryKey: getDashboardsDashboardIDCellsCellIDViewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardID'].cells[':cellID'].view.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsDashboardIDCellsCellIDView<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIDCellsCellIDViewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDCellsCellIDViewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPatchDashboardsDashboardIDCellsCellIDViewMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID/view', 'PATCH'] as const
}

export function getPatchDashboardsDashboardIDCellsCellIDViewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDashboardsDashboardIDCellsCellIDViewMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
      >,
    ) {
      return parseResponse(
        client.dashboards[':dashboardID'].cells[':cellID'].view.$patch(args, options),
      )
    },
  })
}

export function injectPatchDashboardsDashboardIDCellsCellIDView<
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
                  (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$patch']
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
    const mutationDefaults = getPatchDashboardsDashboardIDCellsCellIDViewMutationOptions<
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

export function getDashboardsDashboardIDLabelsQueryKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/labels', keyArgs] as const
}

export function getDashboardsDashboardIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDLabelsQueryKey>
  >({
    queryKey: getDashboardsDashboardIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsDashboardIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostDashboardsDashboardIDLabelsMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/labels', 'POST'] as const
}

export function getPostDashboardsDashboardIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsDashboardIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].labels.$post(args, options))
    },
  })
}

export function injectPostDashboardsDashboardIDLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsDashboardIDLabelsMutationOptions<
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

export function getDeleteDashboardsDashboardIDLabelsLabelIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.dashboards[':dashboardID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDashboardsDashboardIDLabelsLabelID<
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
                    (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.dashboards)[':dashboardID']['labels'][':labelID']['$delete']
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
    const mutationDefaults = getDeleteDashboardsDashboardIDLabelsLabelIDMutationOptions<
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

export function getDashboardsDashboardIDMembersQueryKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/members', keyArgs] as const
}

export function getDashboardsDashboardIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDMembersQueryKey>
  >({
    queryKey: getDashboardsDashboardIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsDashboardIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIDMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostDashboardsDashboardIDMembersMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/members', 'POST'] as const
}

export function getPostDashboardsDashboardIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsDashboardIDMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].members.$post(args, options))
    },
  })
}

export function injectPostDashboardsDashboardIDMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsDashboardIDMembersMutationOptions<
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

export function getDeleteDashboardsDashboardIDMembersUserIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/members/:userID', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.dashboards[':dashboardID'].members[':userID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDashboardsDashboardIDMembersUserID<
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
                    (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.dashboards)[':dashboardID']['members'][':userID']['$delete']
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
    const mutationDefaults = getDeleteDashboardsDashboardIDMembersUserIDMutationOptions<
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

export function getDashboardsDashboardIDOwnersQueryKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardID/owners', keyArgs] as const
}

export function getDashboardsDashboardIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDOwnersQueryKey>
  >({
    queryKey: getDashboardsDashboardIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards[':dashboardID'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsDashboardIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsDashboardIDOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostDashboardsDashboardIDOwnersMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/owners', 'POST'] as const
}

export function getPostDashboardsDashboardIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsDashboardIDOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>,
    ) {
      return parseResponse(client.dashboards[':dashboardID'].owners.$post(args, options))
    },
  })
}

export function injectPostDashboardsDashboardIDOwners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsDashboardIDOwnersMutationOptions<
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

export function getDeleteDashboardsDashboardIDOwnersUserIDMutationKey() {
  return ['dashboards', '/dashboards/:dashboardID/owners/:userID', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.dashboards[':dashboardID'].owners[':userID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDashboardsDashboardIDOwnersUserID<
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
                    (typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.dashboards)[':dashboardID']['owners'][':userID']['$delete']
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
    const mutationDefaults = getDeleteDashboardsDashboardIDOwnersUserIDMutationOptions<
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

export function getPostQueryAstMutationKey() {
  return ['query', '/query/ast', 'POST'] as const
}

export function getPostQueryAstMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.ast.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.ast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryAstMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.ast.$post>) {
      return parseResponse(client.query.ast.$post(args, options))
    },
  })
}

export function injectPostQueryAst<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.ast.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.query.ast.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryAstMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getQuerySuggestionsQueryKey(
  args: InferRequestType<typeof client.query.suggestions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/suggestions', keyArgs] as const
}

export function getQuerySuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query.suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuerySuggestionsQueryKey>
  >({
    queryKey: getQuerySuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQuerySuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuerySuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuerySuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getQuerySuggestionsNameQueryKey(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/suggestions/:name', keyArgs] as const
}

export function getQuerySuggestionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuerySuggestionsNameQueryKey>
  >({
    queryKey: getQuerySuggestionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.suggestions[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectQuerySuggestionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.query.suggestions)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuerySuggestionsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getQuerySuggestionsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostQueryAnalyzeMutationKey() {
  return ['query', '/query/analyze', 'POST'] as const
}

export function getPostQueryAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.analyze.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.query.analyze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryAnalyzeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.analyze.$post>) {
      return parseResponse(client.query.analyze.$post(args, options))
    },
  })
}

export function injectPostQueryAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.analyze.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.query.analyze.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryAnalyzeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostQueryMutationKey() {
  return ['query', '/query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.$post>) {
      return parseResponse(client.query.$post(args, options))
    },
  })
}

export function injectPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
        TError,
        InferRequestType<typeof client.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBucketsQueryKey(args: InferRequestType<typeof client.buckets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets', keyArgs] as const
}

export function getBucketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.buckets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBucketsQueryKey>
  >({
    queryKey: getBucketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.buckets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostBucketsMutationKey() {
  return ['buckets', '/buckets', 'POST'] as const
}

export function getPostBucketsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$post>>>>>,
    TError,
    InferRequestType<typeof client.buckets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.buckets.$post>) {
      return parseResponse(client.buckets.$post(args, options))
    },
  })
}

export function injectPostBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$post>>>>>,
        TError,
        InferRequestType<typeof client.buckets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBucketsBucketIDQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID', keyArgs] as const
}

export function getBucketsBucketIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDQueryKey>
  >({
    queryKey: getBucketsBucketIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBucketsBucketID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucketID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsBucketIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteBucketsBucketIDMutationKey() {
  return ['buckets', '/buckets/:bucketID', 'DELETE'] as const
}

export function getDeleteBucketsBucketIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketsBucketIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.buckets)[':bucketID']['$delete']>) {
      return parseResponse(client.buckets[':bucketID'].$delete(args, options))
    },
  })
}

export function injectDeleteBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchBucketsBucketIDMutationKey() {
  return ['buckets', '/buckets/:bucketID', 'PATCH'] as const
}

export function getPatchBucketsBucketIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBucketsBucketIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.buckets)[':bucketID']['$patch']>) {
      return parseResponse(client.buckets[':bucketID'].$patch(args, options))
    },
  })
}

export function injectPatchBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBucketsBucketIDLabelsQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/labels', keyArgs] as const
}

export function getBucketsBucketIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDLabelsQueryKey>
  >({
    queryKey: getBucketsBucketIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostBucketsBucketIDLabelsMutationKey() {
  return ['buckets', '/buckets/:bucketID/labels', 'POST'] as const
}

export function getPostBucketsBucketIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsBucketIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].labels.$post(args, options))
    },
  })
}

export function injectPostBucketsBucketIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteBucketsBucketIDLabelsLabelIDMutationKey() {
  return ['buckets', '/buckets/:bucketID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteBucketsBucketIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketsBucketIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].labels[':labelID'].$delete(args, options))
    },
  })
}

export function injectDeleteBucketsBucketIDLabelsLabelID<
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
                  ReturnType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketsBucketIDLabelsLabelIDMutationOptions<
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

export function getBucketsBucketIDMembersQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/members', keyArgs] as const
}

export function getBucketsBucketIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDMembersQueryKey>
  >({
    queryKey: getBucketsBucketIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostBucketsBucketIDMembersMutationKey() {
  return ['buckets', '/buckets/:bucketID/members', 'POST'] as const
}

export function getPostBucketsBucketIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsBucketIDMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].members.$post(args, options))
    },
  })
}

export function injectPostBucketsBucketIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteBucketsBucketIDMembersUserIDMutationKey() {
  return ['buckets', '/buckets/:bucketID/members/:userID', 'DELETE'] as const
}

export function getDeleteBucketsBucketIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketsBucketIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].members[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteBucketsBucketIDMembersUserID<
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
                  ReturnType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketsBucketIDMembersUserIDMutationOptions<
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

export function getBucketsBucketIDOwnersQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:bucketID/owners', keyArgs] as const
}

export function getBucketsBucketIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDOwnersQueryKey>
  >({
    queryKey: getBucketsBucketIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostBucketsBucketIDOwnersMutationKey() {
  return ['buckets', '/buckets/:bucketID/owners', 'POST'] as const
}

export function getPostBucketsBucketIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsBucketIDOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].owners.$post(args, options))
    },
  })
}

export function injectPostBucketsBucketIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteBucketsBucketIDOwnersUserIDMutationKey() {
  return ['buckets', '/buckets/:bucketID/owners/:userID', 'DELETE'] as const
}

export function getDeleteBucketsBucketIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBucketsBucketIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>,
    ) {
      return parseResponse(client.buckets[':bucketID'].owners[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteBucketsBucketIDOwnersUserID<
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
                  ReturnType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['owners'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketsBucketIDOwnersUserIDMutationOptions<
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

export function getOrgsQueryKey(args: InferRequestType<typeof client.orgs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs', keyArgs] as const
}

export function getOrgsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orgs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgsQueryKey>
  >({
    queryKey: getOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.orgs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostOrgsMutationKey() {
  return ['orgs', '/orgs', 'POST'] as const
}

export function getPostOrgsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
    TError,
    InferRequestType<typeof client.orgs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orgs.$post>) {
      return parseResponse(client.orgs.$post(args, options))
    },
  })
}

export function injectPostOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
        TError,
        InferRequestType<typeof client.orgs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getOrgsOrgIDQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID', keyArgs] as const
}

export function getOrgsOrgIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.orgs)[':orgID']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDQueryKey>
  >({
    queryKey: getOrgsOrgIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteOrgsOrgIDMutationKey() {
  return ['orgs', '/orgs/:orgID', 'DELETE'] as const
}

export function getDeleteOrgsOrgIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':orgID']['$delete']>) {
      return parseResponse(client.orgs[':orgID'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchOrgsOrgIDMutationKey() {
  return ['orgs', '/orgs/:orgID', 'PATCH'] as const
}

export function getPatchOrgsOrgIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgsOrgIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':orgID']['$patch']>) {
      return parseResponse(client.orgs[':orgID'].$patch(args, options))
    },
  })
}

export function injectPatchOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgsOrgIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getOrgsOrgIDSecretsQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/secrets', keyArgs] as const
}

export function getOrgsOrgIDSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDSecretsQueryKey>
  >({
    queryKey: getOrgsOrgIDSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrgsOrgIDSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDSecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPatchOrgsOrgIDSecretsMutationKey() {
  return ['orgs', '/orgs/:orgID/secrets', 'PATCH'] as const
}

export function getPatchOrgsOrgIDSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgsOrgIDSecretsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']>) {
      return parseResponse(client.orgs[':orgID'].secrets.$patch(args, options))
    },
  })
}

export function injectPatchOrgsOrgIDSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgsOrgIDSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getOrgsOrgIDMembersQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/members', keyArgs] as const
}

export function getOrgsOrgIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDMembersQueryKey>
  >({
    queryKey: getOrgsOrgIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrgsOrgIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostOrgsOrgIDMembersMutationKey() {
  return ['orgs', '/orgs/:orgID/members', 'POST'] as const
}

export function getPostOrgsOrgIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsOrgIDMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']>) {
      return parseResponse(client.orgs[':orgID'].members.$post(args, options))
    },
  })
}

export function injectPostOrgsOrgIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteOrgsOrgIDMembersUserIDMutationKey() {
  return ['orgs', '/orgs/:orgID/members/:userID', 'DELETE'] as const
}

export function getDeleteOrgsOrgIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>,
    ) {
      return parseResponse(client.orgs[':orgID'].members[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgIDMembersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDMembersUserIDMutationOptions<
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

export function getOrgsOrgIDOwnersQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orgs', '/orgs/:orgID/owners', keyArgs] as const
}

export function getOrgsOrgIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDOwnersQueryKey>
  >({
    queryKey: getOrgsOrgIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].owners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDOwnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostOrgsOrgIDOwnersMutationKey() {
  return ['orgs', '/orgs/:orgID/owners', 'POST'] as const
}

export function getPostOrgsOrgIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsOrgIDOwnersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']>) {
      return parseResponse(client.orgs[':orgID'].owners.$post(args, options))
    },
  })
}

export function injectPostOrgsOrgIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteOrgsOrgIDOwnersUserIDMutationKey() {
  return ['orgs', '/orgs/:orgID/owners/:userID', 'DELETE'] as const
}

export function getDeleteOrgsOrgIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>,
    ) {
      return parseResponse(client.orgs[':orgID'].owners[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgIDOwnersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDOwnersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostOrgsOrgIDSecretsDeleteMutationKey() {
  return ['orgs', '/orgs/:orgID/secrets/delete', 'POST'] as const
}

export function getPostOrgsOrgIDSecretsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsOrgIDSecretsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>,
    ) {
      return parseResponse(client.orgs[':orgID'].secrets.delete.$post(args, options))
    },
  })
}

export function injectPostOrgsOrgIDSecretsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['secrets']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDSecretsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteOrgsOrgIDSecretsSecretIDMutationKey() {
  return ['orgs', '/orgs/:orgID/secrets/:secretID', 'DELETE'] as const
}

export function getDeleteOrgsOrgIDSecretsSecretIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIDSecretsSecretIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>,
    ) {
      return parseResponse(client.orgs[':orgID'].secrets[':secretID'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgIDSecretsSecretID<
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
                  ReturnType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.orgs)[':orgID']['secrets'][':secretID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDSecretsSecretIDMutationOptions<
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

export function getResourcesQueryKey(args: InferRequestType<typeof client.resources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources', keyArgs] as const
}

export function getResourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >({
    queryKey: getResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.resources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getStacksQueryKey(args: InferRequestType<typeof client.stacks.$get>) {
  return ['stacks', '/stacks', args] as const
}

export function getStacksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stacks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStacksQueryKey>
  >({
    queryKey: getStacksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stacks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStacks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stacks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStacksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostStacksMutationKey() {
  return ['stacks', '/stacks', 'POST'] as const
}

export function getPostStacksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>>,
    TError,
    InferRequestType<typeof client.stacks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stacks.$post>) {
      return parseResponse(client.stacks.$post(args, options))
    },
  })
}

export function injectPostStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>>,
        TError,
        InferRequestType<typeof client.stacks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getStacksStackIdQueryKey(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
) {
  return ['stacks', '/stacks/:stack_id', args] as const
}

export function getStacksStackIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStacksStackIdQueryKey>
  >({
    queryKey: getStacksStackIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stacks[':stack_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStacksStackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stacks)[':stack_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStacksStackIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksStackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteStacksStackIdMutationKey() {
  return ['stacks', '/stacks/:stack_id', 'DELETE'] as const
}

export function getDeleteStacksStackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.stacks)[':stack_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStacksStackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':stack_id']['$delete']>) {
      return parseResponse(client.stacks[':stack_id'].$delete(args, options))
    },
  })
}

export function injectDeleteStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.stacks)[':stack_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStacksStackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchStacksStackIdMutationKey() {
  return ['stacks', '/stacks/:stack_id', 'PATCH'] as const
}

export function getPatchStacksStackIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStacksStackIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>) {
      return parseResponse(client.stacks[':stack_id'].$patch(args, options))
    },
  })
}

export function injectPatchStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchStacksStackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostStacksStackIdUninstallMutationKey() {
  return ['stacks', '/stacks/:stack_id/uninstall', 'POST'] as const
}

export function getPostStacksStackIdUninstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStacksStackIdUninstallMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>,
    ) {
      return parseResponse(client.stacks[':stack_id'].uninstall.$post(args, options))
    },
  })
}

export function injectPostStacksStackIdUninstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stacks)[':stack_id']['uninstall']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksStackIdUninstallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostTemplatesApplyMutationKey() {
  return ['templates', '/templates/apply', 'POST'] as const
}

export function getPostTemplatesApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.apply.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.apply.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesApplyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.apply.$post>) {
      return parseResponse(client.templates.apply.$post(args, options))
    },
  })
}

export function injectPostTemplatesApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.apply.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.apply.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostTemplatesExportMutationKey() {
  return ['templates', '/templates/export', 'POST'] as const
}

export function getPostTemplatesExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.export.$post>) {
      return parseResponse(client.templates.export.$post(args, options))
    },
  })
}

export function injectPostTemplatesExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.export.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.export.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTasksTaskIDRunsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs', keyArgs] as const
}

export function getTasksTaskIDRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsQueryKey>
  >({
    queryKey: getTasksTaskIDRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].runs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasksTaskIDRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTasksTaskIDRunsMutationKey() {
  return ['tasks', '/tasks/:taskID/runs', 'POST'] as const
}

export function getPostTasksTaskIDRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIDRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']>) {
      return parseResponse(client.tasks[':taskID'].runs.$post(args, options))
    },
  })
}

export function injectPostTasksTaskIDRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['runs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTasksTaskIDRunsRunIDQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs/:runID', keyArgs] as const
}

export function getTasksTaskIDRunsRunIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsRunIDQueryKey>
  >({
    queryKey: getTasksTaskIDRunsRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].runs[':runID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTasksTaskIDRunsRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDRunsRunIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTasksTaskIDRunsRunIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDeleteTasksTaskIDRunsRunIDMutationKey() {
  return ['tasks', '/tasks/:taskID/runs/:runID', 'DELETE'] as const
}

export function getDeleteTasksTaskIDRunsRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIDRunsRunIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>,
    ) {
      return parseResponse(client.tasks[':taskID'].runs[':runID'].$delete(args, options))
    },
  })
}

export function injectDeleteTasksTaskIDRunsRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDRunsRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostTasksTaskIDRunsRunIDRetryMutationKey() {
  return ['tasks', '/tasks/:taskID/runs/:runID/retry', 'POST'] as const
}

export function getPostTasksTaskIDRunsRunIDRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIDRunsRunIDRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>,
    ) {
      return parseResponse(client.tasks[':taskID'].runs[':runID'].retry.$post(args, options))
    },
  })
}

export function injectPostTasksTaskIDRunsRunIDRetry<
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
                ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['retry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDRunsRunIDRetryMutationOptions<
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

export function getTasksTaskIDLogsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/logs', keyArgs] as const
}

export function getTasksTaskIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDLogsQueryKey>
  >({
    queryKey: getTasksTaskIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasksTaskIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getTasksTaskIDRunsRunIDLogsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/runs/:runID/logs', keyArgs] as const
}

export function getTasksTaskIDRunsRunIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsRunIDLogsQueryKey>
  >({
    queryKey: getTasksTaskIDRunsRunIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].runs[':runID'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTasksTaskIDRunsRunIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDRunsRunIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTasksTaskIDRunsRunIDLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getTasksTaskIDLabelsQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/labels', keyArgs] as const
}

export function getTasksTaskIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDLabelsQueryKey>
  >({
    queryKey: getTasksTaskIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTasksTaskIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTasksTaskIDLabelsMutationKey() {
  return ['tasks', '/tasks/:taskID/labels', 'POST'] as const
}

export function getPostTasksTaskIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIDLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']>) {
      return parseResponse(client.tasks[':taskID'].labels.$post(args, options))
    },
  })
}

export function injectPostTasksTaskIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteTasksTaskIDLabelsLabelIDMutationKey() {
  return ['tasks', '/tasks/:taskID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteTasksTaskIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>,
    ) {
      return parseResponse(client.tasks[':taskID'].labels[':labelID'].$delete(args, options))
    },
  })
}

export function injectDeleteTasksTaskIDLabelsLabelID<
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
                  ReturnType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['labels'][':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDLabelsLabelIDMutationOptions<
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

export function getFlagsQueryKey(args: InferRequestType<typeof client.flags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['flags', '/flags', keyArgs] as const
}

export function getFlagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.flags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFlagsQueryKey>
  >({
    queryKey: getFlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.flags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFlags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.flags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getMeQueryKey(args: InferRequestType<typeof client.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['me', '/me', keyArgs] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.me.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function injectMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPutMePasswordMutationKey() {
  return ['me', '/me/password', 'PUT'] as const
}

export function getPutMePasswordMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.password.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.me.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutMePasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.password.$put>) {
      return parseResponse(client.me.password.$put(args, options))
    },
  })
}

export function injectPutMePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.password.$put>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.me.password.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMePasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTasksTaskIDMembersQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/members', keyArgs] as const
}

export function getTasksTaskIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDMembersQueryKey>
  >({
    queryKey: getTasksTaskIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTasksTaskIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTasksTaskIDMembersMutationKey() {
  return ['tasks', '/tasks/:taskID/members', 'POST'] as const
}

export function getPostTasksTaskIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIDMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']>) {
      return parseResponse(client.tasks[':taskID'].members.$post(args, options))
    },
  })
}

export function injectPostTasksTaskIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteTasksTaskIDMembersUserIDMutationKey() {
  return ['tasks', '/tasks/:taskID/members/:userID', 'DELETE'] as const
}

export function getDeleteTasksTaskIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>,
    ) {
      return parseResponse(client.tasks[':taskID'].members[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteTasksTaskIDMembersUserID<
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
                  ReturnType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['members'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDMembersUserIDMutationOptions<
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

export function getTasksTaskIDOwnersQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID/owners', keyArgs] as const
}

export function getTasksTaskIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDOwnersQueryKey>
  >({
    queryKey: getTasksTaskIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTasksTaskIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDOwnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDOwnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTasksTaskIDOwnersMutationKey() {
  return ['tasks', '/tasks/:taskID/owners', 'POST'] as const
}

export function getPostTasksTaskIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksTaskIDOwnersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']>) {
      return parseResponse(client.tasks[':taskID'].owners.$post(args, options))
    },
  })
}

export function injectPostTasksTaskIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteTasksTaskIDOwnersUserIDMutationKey() {
  return ['tasks', '/tasks/:taskID/owners/:userID', 'DELETE'] as const
}

export function getDeleteTasksTaskIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>,
    ) {
      return parseResponse(client.tasks[':taskID'].owners[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteTasksTaskIDOwnersUserID<
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
                  ReturnType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['owners'][':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDOwnersUserIDMutationOptions<
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

export function getPutUsersUserIDPasswordMutationKey() {
  return ['users', '/users/:userID/password', 'PUT'] as const
}

export function getPutUsersUserIDPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userID']['password']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userID']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIDPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userID']['password']['$put']>) {
      return parseResponse(client.users[':userID'].password.$put(args, options))
    },
  })
}

export function injectPutUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userID']['password']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':userID']['password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostUsersUserIDPasswordMutationKey() {
  return ['users', '/users/:userID/password', 'POST'] as const
}

export function getPostUsersUserIDPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userID']['password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userID']['password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIDPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userID']['password']['$post']>,
    ) {
      return parseResponse(client.users[':userID'].password.$post(args, options))
    },
  })
}

export function injectPostUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userID']['password']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':userID']['password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChecksQueryKey(args: InferRequestType<typeof client.checks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks', keyArgs] as const
}

export function getChecksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.checks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChecksQueryKey>
  >({
    queryKey: getChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChecks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.checks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostChecksMutationKey() {
  return ['checks', '/checks', 'POST'] as const
}

export function getPostChecksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
    TError,
    InferRequestType<typeof client.checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.checks.$post>) {
      return parseResponse(client.checks.$post(args, options))
    },
  })
}

export function injectPostChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>>,
        TError,
        InferRequestType<typeof client.checks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChecksCheckIDQueryKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID', keyArgs] as const
}

export function getChecksCheckIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checks)[':checkID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDQueryKey>
  >({
    queryKey: getChecksCheckIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks[':checkID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectChecksCheckID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checks)[':checkID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksCheckIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPutChecksCheckIDMutationKey() {
  return ['checks', '/checks/:checkID', 'PUT'] as const
}

export function getPutChecksCheckIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checks)[':checkID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChecksCheckIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checks)[':checkID']['$put']>) {
      return parseResponse(client.checks[':checkID'].$put(args, options))
    },
  })
}

export function injectPutChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.checks)[':checkID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteChecksCheckIDMutationKey() {
  return ['checks', '/checks/:checkID', 'DELETE'] as const
}

export function getDeleteChecksCheckIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.checks)[':checkID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecksCheckIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checks)[':checkID']['$delete']>) {
      return parseResponse(client.checks[':checkID'].$delete(args, options))
    },
  })
}

export function injectDeleteChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.checks)[':checkID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchChecksCheckIDMutationKey() {
  return ['checks', '/checks/:checkID', 'PATCH'] as const
}

export function getPatchChecksCheckIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.checks)[':checkID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChecksCheckIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.checks)[':checkID']['$patch']>) {
      return parseResponse(client.checks[':checkID'].$patch(args, options))
    },
  })
}

export function injectPatchChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.checks)[':checkID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChecksCheckIDLabelsQueryKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID/labels', keyArgs] as const
}

export function getChecksCheckIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDLabelsQueryKey>
  >({
    queryKey: getChecksCheckIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks[':checkID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecksCheckIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksCheckIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostChecksCheckIDLabelsMutationKey() {
  return ['checks', '/checks/:checkID/labels', 'POST'] as const
}

export function getPostChecksCheckIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChecksCheckIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']>,
    ) {
      return parseResponse(client.checks[':checkID'].labels.$post(args, options))
    },
  })
}

export function injectPostChecksCheckIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.checks)[':checkID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecksCheckIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteChecksCheckIDLabelsLabelIDMutationKey() {
  return ['checks', '/checks/:checkID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteChecksCheckIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChecksCheckIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>,
    ) {
      return parseResponse(client.checks[':checkID'].labels[':labelID'].$delete(args, options))
    },
  })
}

export function injectDeleteChecksCheckIDLabelsLabelID<
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
                  ReturnType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.checks)[':checkID']['labels'][':labelID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecksCheckIDLabelsLabelIDMutationOptions<
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

export function getNotificationRulesQueryKey(
  args: InferRequestType<typeof client.notificationRules.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules', keyArgs] as const
}

export function getNotificationRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notificationRules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesQueryKey>
  >({
    queryKey: getNotificationRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationRules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNotificationRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notificationRules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostNotificationRulesMutationKey() {
  return ['notificationRules', '/notificationRules', 'POST'] as const
}

export function getPostNotificationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notificationRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notificationRules.$post>) {
      return parseResponse(client.notificationRules.$post(args, options))
    },
  })
}

export function injectPostNotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notificationRules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getChecksCheckIDQueryQueryKey(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['checks', '/checks/:checkID/query', keyArgs] as const
}

export function getChecksCheckIDQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDQueryQueryKey>
  >({
    queryKey: getChecksCheckIDQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.checks[':checkID'].query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChecksCheckIDQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChecksCheckIDQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getNotificationRulesRuleIDQueryKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID', keyArgs] as const
}

export function getNotificationRulesRuleIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDQueryKey>
  >({
    queryKey: getNotificationRulesRuleIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationRules[':ruleID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationRulesRuleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationRulesRuleIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPutNotificationRulesRuleIDMutationKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'PUT'] as const
}

export function getPutNotificationRulesRuleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationRulesRuleIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']>) {
      return parseResponse(client.notificationRules[':ruleID'].$put(args, options))
    },
  })
}

export function injectPutNotificationRulesRuleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationRules)[':ruleID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationRulesRuleIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteNotificationRulesRuleIDMutationKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'DELETE'] as const
}

export function getDeleteNotificationRulesRuleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationRulesRuleIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']>,
    ) {
      return parseResponse(client.notificationRules[':ruleID'].$delete(args, options))
    },
  })
}

export function injectDeleteNotificationRulesRuleID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.notificationRules)[':ruleID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNotificationRulesRuleIDMutationOptions<
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

export function getPatchNotificationRulesRuleIDMutationKey() {
  return ['notificationRules', '/notificationRules/:ruleID', 'PATCH'] as const
}

export function getPatchNotificationRulesRuleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationRulesRuleIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']>,
    ) {
      return parseResponse(client.notificationRules[':ruleID'].$patch(args, options))
    },
  })
}

export function injectPatchNotificationRulesRuleID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationRules)[':ruleID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNotificationRulesRuleIDMutationOptions<
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

export function getNotificationRulesRuleIDLabelsQueryKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID/labels', keyArgs] as const
}

export function getNotificationRulesRuleIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDLabelsQueryKey>
  >({
    queryKey: getNotificationRulesRuleIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationRules[':ruleID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationRulesRuleIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationRulesRuleIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostNotificationRulesRuleIDLabelsMutationKey() {
  return ['notificationRules', '/notificationRules/:ruleID/labels', 'POST'] as const
}

export function getPostNotificationRulesRuleIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationRulesRuleIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>,
    ) {
      return parseResponse(client.notificationRules[':ruleID'].labels.$post(args, options))
    },
  })
}

export function injectPostNotificationRulesRuleIDLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationRulesRuleIDLabelsMutationOptions<
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

export function getDeleteNotificationRulesRuleIDLabelsLabelIDMutationKey() {
  return ['notificationRules', '/notificationRules/:ruleID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteNotificationRulesRuleIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationRulesRuleIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.notificationRules[':ruleID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteNotificationRulesRuleIDLabelsLabelID<
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
                    (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.notificationRules)[':ruleID']['labels'][':labelID']['$delete']
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
    const mutationDefaults = getDeleteNotificationRulesRuleIDLabelsLabelIDMutationOptions<
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

export function getNotificationRulesRuleIDQueryQueryKey(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationRules', '/notificationRules/:ruleID/query', keyArgs] as const
}

export function getNotificationRulesRuleIDQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDQueryQueryKey>
  >({
    queryKey: getNotificationRulesRuleIDQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationRules[':ruleID'].query.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationRulesRuleIDQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationRulesRuleIDQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getNotificationEndpointsQueryKey(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints', keyArgs] as const
}

export function getNotificationEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notificationEndpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsQueryKey>
  >({
    queryKey: getNotificationEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationEndpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNotificationEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notificationEndpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostNotificationEndpointsMutationKey() {
  return ['notificationEndpoints', '/notificationEndpoints', 'POST'] as const
}

export function getPostNotificationEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notificationEndpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notificationEndpoints.$post>) {
      return parseResponse(client.notificationEndpoints.$post(args, options))
    },
  })
}

export function injectPostNotificationEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.notificationEndpoints.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getNotificationEndpointsEndpointIDQueryKey(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', keyArgs] as const
}

export function getNotificationEndpointsEndpointIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsEndpointIDQueryKey>
  >({
    queryKey: getNotificationEndpointsEndpointIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationEndpoints[':endpointID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationEndpointsEndpointID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEndpointsEndpointIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsEndpointIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPutNotificationEndpointsEndpointIDMutationKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'PUT'] as const
}

export function getPutNotificationEndpointsEndpointIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationEndpointsEndpointIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>,
    ) {
      return parseResponse(client.notificationEndpoints[':endpointID'].$put(args, options))
    },
  })
}

export function injectPutNotificationEndpointsEndpointID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationEndpointsEndpointIDMutationOptions<
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

export function getDeleteNotificationEndpointsEndpointIDMutationKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'DELETE'] as const
}

export function getDeleteNotificationEndpointsEndpointIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationEndpointsEndpointIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>,
    ) {
      return parseResponse(client.notificationEndpoints[':endpointID'].$delete(args, options))
    },
  })
}

export function injectDeleteNotificationEndpointsEndpointID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNotificationEndpointsEndpointIDMutationOptions<
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

export function getPatchNotificationEndpointsEndpointIDMutationKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', 'PATCH'] as const
}

export function getPatchNotificationEndpointsEndpointIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNotificationEndpointsEndpointIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>,
    ) {
      return parseResponse(client.notificationEndpoints[':endpointID'].$patch(args, options))
    },
  })
}

export function injectPatchNotificationEndpointsEndpointID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchNotificationEndpointsEndpointIDMutationOptions<
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

export function getNotificationEndpointsEndpointIDLabelsQueryKey(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID/labels', keyArgs] as const
}

export function getNotificationEndpointsEndpointIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsEndpointIDLabelsQueryKey>
  >({
    queryKey: getNotificationEndpointsEndpointIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notificationEndpoints[':endpointID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNotificationEndpointsEndpointIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.notificationEndpoints)[':endpointID']['labels']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationEndpointsEndpointIDLabelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsEndpointIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostNotificationEndpointsEndpointIDLabelsMutationKey() {
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID/labels', 'POST'] as const
}

export function getPostNotificationEndpointsEndpointIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationEndpointsEndpointIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notificationEndpoints)[':endpointID']['labels']['$post']
      >,
    ) {
      return parseResponse(client.notificationEndpoints[':endpointID'].labels.$post(args, options))
    },
  })
}

export function injectPostNotificationEndpointsEndpointIDLabels<
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
                ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationEndpointsEndpointIDLabelsMutationOptions<
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

export function getDeleteNotificationEndpointsEndpointIDLabelsLabelIDMutationKey() {
  return [
    'notificationEndpoints',
    '/notificationEndpoints/:endpointID/labels/:labelID',
    'DELETE',
  ] as const
}

export function getDeleteNotificationEndpointsEndpointIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationEndpointsEndpointIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.notificationEndpoints[':endpointID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteNotificationEndpointsEndpointIDLabelsLabelID<
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
                    (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.notificationEndpoints)[':endpointID']['labels'][':labelID']['$delete']
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
    const mutationDefaults = getDeleteNotificationEndpointsEndpointIDLabelsLabelIDMutationOptions<
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

export function getAuthorizationsQueryKey(
  args: InferRequestType<typeof client.authorizations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizations', '/authorizations', keyArgs] as const
}

export function getAuthorizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.authorizations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationsQueryKey>
  >({
    queryKey: getAuthorizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorizations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthorizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.authorizations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthorizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostAuthorizationsMutationKey() {
  return ['authorizations', '/authorizations', 'POST'] as const
}

export function getPostAuthorizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorizations.$post>) {
      return parseResponse(client.authorizations.$post(args, options))
    },
  })
}

export function injectPostAuthorizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.authorizations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getAuthorizationsAuthIDQueryKey(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authorizations', '/authorizations/:authID', keyArgs] as const
}

export function getAuthorizationsAuthIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationsAuthIDQueryKey>
  >({
    queryKey: getAuthorizationsAuthIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.authorizations[':authID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAuthorizationsAuthID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.authorizations)[':authID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuthorizationsAuthIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthorizationsAuthIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDeleteAuthorizationsAuthIDMutationKey() {
  return ['authorizations', '/authorizations/:authID', 'DELETE'] as const
}

export function getDeleteAuthorizationsAuthIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.authorizations)[':authID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.authorizations)[':authID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationsAuthIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.authorizations)[':authID']['$delete']>) {
      return parseResponse(client.authorizations[':authID'].$delete(args, options))
    },
  })
}

export function injectDeleteAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizations)[':authID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.authorizations)[':authID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchAuthorizationsAuthIDMutationKey() {
  return ['authorizations', '/authorizations/:authID', 'PATCH'] as const
}

export function getPatchAuthorizationsAuthIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.authorizations)[':authID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.authorizations)[':authID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAuthorizationsAuthIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.authorizations)[':authID']['$patch']>) {
      return parseResponse(client.authorizations[':authID'].$patch(args, options))
    },
  })
}

export function injectPatchAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.authorizations)[':authID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.authorizations)[':authID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users', keyArgs] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getUsersUserIDQueryKey(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/:userID', keyArgs] as const
}

export function getUsersUserIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIDQueryKey>
  >({
    queryKey: getUsersUserIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUserID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteUsersUserIDMutationKey() {
  return ['users', '/users/:userID', 'DELETE'] as const
}

export function getDeleteUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userID']['$delete']>) {
      return parseResponse(client.users[':userID'].$delete(args, options))
    },
  })
}

export function injectDeleteUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':userID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchUsersUserIDMutationKey() {
  return ['users', '/users/:userID', 'PATCH'] as const
}

export function getPatchUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userID']['$patch']>) {
      return parseResponse(client.users[':userID'].$patch(args, options))
    },
  })
}

export function injectPatchUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getSetupQueryKey(args: InferRequestType<typeof client.setup.$get>) {
  const { header: _, ...keyArgs } = args
  return ['setup', '/setup', keyArgs] as const
}

export function getSetupQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetupQueryKey>
  >({
    queryKey: getSetupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSetup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.setup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSetupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostSetupMutationKey() {
  return ['setup', '/setup', 'POST'] as const
}

export function getPostSetupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$post>>>>>,
    TError,
    InferRequestType<typeof client.setup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.$post>) {
      return parseResponse(client.setup.$post(args, options))
    },
  })
}

export function injectPostSetup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$post>>>>>,
        TError,
        InferRequestType<typeof client.setup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostSetupUserMutationKey() {
  return ['setup', '/setup/user', 'POST'] as const
}

export function getPostSetupUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.setup.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetupUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setup.user.$post>) {
      return parseResponse(client.setup.user.$post(args, options))
    },
  })
}

export function injectPostSetupUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.user.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.setup.user.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getVariablesQueryKey(args: InferRequestType<typeof client.variables.$get>) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables', keyArgs] as const
}

export function getVariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.variables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariablesQueryKey>
  >({
    queryKey: getVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.variables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostVariablesMutationKey() {
  return ['variables', '/variables', 'POST'] as const
}

export function getPostVariablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>>,
    TError,
    InferRequestType<typeof client.variables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.variables.$post>) {
      return parseResponse(client.variables.$post(args, options))
    },
  })
}

export function injectPostVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.variables.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getVariablesVariableIDQueryKey(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['variables', '/variables/:variableID', keyArgs] as const
}

export function getVariablesVariableIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variables)[':variableID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariablesVariableIDQueryKey>
  >({
    queryKey: getVariablesVariableIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variables[':variableID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVariablesVariableID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.variables)[':variableID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVariablesVariableIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariablesVariableIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPutVariablesVariableIDMutationKey() {
  return ['variables', '/variables/:variableID', 'PUT'] as const
}

export function getPutVariablesVariableIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.variables)[':variableID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVariablesVariableIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variables)[':variableID']['$put']>) {
      return parseResponse(client.variables[':variableID'].$put(args, options))
    },
  })
}

export function injectPutVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.variables)[':variableID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.variables)[':variableID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteVariablesVariableIDMutationKey() {
  return ['variables', '/variables/:variableID', 'DELETE'] as const
}

export function getDeleteVariablesVariableIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variableID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.variables)[':variableID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVariablesVariableIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variables)[':variableID']['$delete']>) {
      return parseResponse(client.variables[':variableID'].$delete(args, options))
    },
  })
}

export function injectDeleteVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variableID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.variables)[':variableID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchVariablesVariableIDMutationKey() {
  return ['variables', '/variables/:variableID', 'PATCH'] as const
}

export function getPatchVariablesVariableIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variableID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.variables)[':variableID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVariablesVariableIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variables)[':variableID']['$patch']>) {
      return parseResponse(client.variables[':variableID'].$patch(args, options))
    },
  })
}

export function injectPatchVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.variables)[':variableID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.variables)[':variableID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getBucketsBucketIDSchemaMeasurementsQueryKey(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>,
) {
  return ['buckets', '/buckets/:bucketID/schema/measurements', args] as const
}

export function getBucketsBucketIDSchemaMeasurementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDSchemaMeasurementsQueryKey>
  >({
    queryKey: getBucketsBucketIDSchemaMeasurementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].schema.measurements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIDSchemaMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.buckets)[':bucketID']['schema']['measurements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDSchemaMeasurementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDSchemaMeasurementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostBucketsBucketIDSchemaMeasurementsMutationKey() {
  return ['buckets', '/buckets/:bucketID/schema/measurements', 'POST'] as const
}

export function getPostBucketsBucketIDSchemaMeasurementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBucketsBucketIDSchemaMeasurementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.buckets)[':bucketID']['schema']['measurements']['$post']
      >,
    ) {
      return parseResponse(client.buckets[':bucketID'].schema.measurements.$post(args, options))
    },
  })
}

export function injectPostBucketsBucketIDSchemaMeasurements<
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
                ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDSchemaMeasurementsMutationOptions<
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

export function getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey(
  args: InferRequestType<
    (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
  >,
) {
  return ['buckets', '/buckets/:bucketID/schema/measurements/:measurementID', args] as const
}

export function getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey>
  >({
    queryKey: getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':bucketID'].schema.measurements[':measurementID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsBucketIDSchemaMeasurementsMeasurementID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPatchBucketsBucketIDSchemaMeasurementsMeasurementIDMutationKey() {
  return ['buckets', '/buckets/:bucketID/schema/measurements/:measurementID', 'PATCH'] as const
}

export function getPatchBucketsBucketIDSchemaMeasurementsMeasurementIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchBucketsBucketIDSchemaMeasurementsMeasurementIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$patch']
      >,
    ) {
      return parseResponse(
        client.buckets[':bucketID'].schema.measurements[':measurementID'].$patch(args, options),
      )
    },
  })
}

export function injectPatchBucketsBucketIDSchemaMeasurementsMeasurementID<
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
                  (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$patch']
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
    const mutationDefaults = getPatchBucketsBucketIDSchemaMeasurementsMeasurementIDMutationOptions<
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

export function getOrgsOrgIDLimitsQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>,
) {
  return ['orgs', '/orgs/:orgID/limits', args] as const
}

export function getOrgsOrgIDLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDLimitsQueryKey>
  >({
    queryKey: getOrgsOrgIDLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].limits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgIDLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDLimitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getOrgsOrgIDUsageQueryKey(
  args: InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>,
) {
  return ['orgs', '/orgs/:orgID/usage', args] as const
}

export function getOrgsOrgIDUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDUsageQueryKey>
  >({
    queryKey: getOrgsOrgIDUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':orgID'].usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgIDUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIDUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDashboardsQueryKey(args: InferRequestType<typeof client.dashboards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards', keyArgs] as const
}

export function getDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dashboards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDashboardsQueryKey>
  >({
    queryKey: getDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dashboards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostDashboardsMutationKey() {
  return ['dashboards', '/dashboards', 'POST'] as const
}

export function getPostDashboardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>>,
    TError,
    InferRequestType<typeof client.dashboards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.$post>) {
      return parseResponse(client.dashboards.$post(args, options))
    },
  })
}

export function injectPostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dashboards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks', keyArgs] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostTasksMutationKey() {
  return ['tasks', '/tasks', 'POST'] as const
}

export function getPostTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.$post>) {
      return parseResponse(client.tasks.$post(args, options))
    },
  })
}

export function injectPostTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getTasksTaskIDQueryKey(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tasks', '/tasks/:taskID', keyArgs] as const
}

export function getTasksTaskIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDQueryKey>
  >({
    queryKey: getTasksTaskIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':taskID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasksTaskID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':taskID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTasksTaskIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getDeleteTasksTaskIDMutationKey() {
  return ['tasks', '/tasks/:taskID', 'DELETE'] as const
}

export function getDeleteTasksTaskIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksTaskIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['$delete']>) {
      return parseResponse(client.tasks[':taskID'].$delete(args, options))
    },
  })
}

export function injectDeleteTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchTasksTaskIDMutationKey() {
  return ['tasks', '/tasks/:taskID', 'PATCH'] as const
}

export function getPatchTasksTaskIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks)[':taskID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTasksTaskIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tasks)[':taskID']['$patch']>) {
      return parseResponse(client.tasks[':taskID'].$patch(args, options))
    },
  })
}

export function injectPatchTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tasks)[':taskID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTasksTaskIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}
