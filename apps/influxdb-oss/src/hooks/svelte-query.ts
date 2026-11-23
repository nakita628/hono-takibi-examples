import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthorizationsKey() {
  return ['authorizations'] as const
}

export function getBackupKey() {
  return ['backup'] as const
}

export function getBucketsKey() {
  return ['buckets'] as const
}

export function getChecksKey() {
  return ['checks'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDbrpsKey() {
  return ['dbrps'] as const
}

export function getDebugKey() {
  return ['debug'] as const
}

export function getDeleteKey() {
  return ['delete'] as const
}

export function getFlagsKey() {
  return ['flags'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
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

export function getQueryKey() {
  return ['query'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getRemotesKey() {
  return ['remotes'] as const
}

export function getReplicationsKey() {
  return ['replications'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getRestoreKey() {
  return ['restore'] as const
}

export function getScrapersKey() {
  return ['scrapers'] as const
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

export function getSourcesKey() {
  return ['sources'] as const
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

export function createPostSignin<TError = DefaultError, TOnMutateResult = unknown>(
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

export function createPostSignout<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSignoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPing<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function create<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDbrps<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDbrpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDbrps<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDbrpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDbrpsDbrpID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDbrpsDbrpIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTelegrafPlugins<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafPluginsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTelegrafs<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTelegrafs<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTelegrafsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTelegrafsTelegrafID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTelegrafsTelegrafIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTelegrafsTelegrafIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTelegrafsTelegrafIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteTelegrafsTelegrafIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createTelegrafsTelegrafIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTelegrafsTelegrafIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteTelegrafsTelegrafIDMembersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createTelegrafsTelegrafIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTelegrafsTelegrafIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTelegrafsTelegrafIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteTelegrafsTelegrafIDOwnersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createVariablesVariableIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVariablesVariableIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostVariablesVariableIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteVariablesVariableIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPostWrite<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWriteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDelete<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostLabels<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsLabelIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDashboardsDashboardID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutDashboardsDashboardIDCells<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPostDashboardsDashboardIDCells<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteDashboardsDashboardIDCellsCellID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPatchDashboardsDashboardIDCellsCellID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDashboardsDashboardIDCellsCellIDView<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDCellsCellIDViewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchDashboardsDashboardIDCellsCellIDView<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDashboardsDashboardIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDashboardsDashboardIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteDashboardsDashboardIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDashboardsDashboardIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDashboardsDashboardIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteDashboardsDashboardIDMembersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDashboardsDashboardIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDashboardsDashboardIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDashboardsDashboardIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteDashboardsDashboardIDOwnersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPostQueryAst<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryAstMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createQuerySuggestions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuerySuggestionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createQuerySuggestionsName<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getQuerySuggestionsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostQueryAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryAnalyzeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createBuckets<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBuckets<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createBucketsBucketID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBucketsBucketIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createBucketsBucketIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBucketsBucketIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBucketsBucketIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createBucketsBucketIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBucketsBucketIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBucketsBucketIDMembersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createBucketsBucketIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsBucketIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostBucketsBucketIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBucketsBucketIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteBucketsBucketIDOwnersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createOrgs<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgs<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createOrgsOrgID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgsOrgIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createOrgsOrgIDSecrets<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDSecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchOrgsOrgIDSecrets<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchOrgsOrgIDSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createOrgsOrgIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgsOrgIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteOrgsOrgIDMembersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createOrgsOrgIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIDOwnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgsOrgIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteOrgsOrgIDOwnersUserID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrgsOrgIDOwnersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrgsOrgIDSecretsDelete<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrgsOrgIDSecretsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteOrgsOrgIDSecretsSecretID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createResources<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createStacks<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostStacks<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createStacksStackId<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStacksStackIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStacksStackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchStacksStackIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStacksStackIdUninstall<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStacksStackIdUninstallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTemplatesApply<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesApplyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTemplatesExport<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTemplatesExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTasksTaskIDRuns<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTasksTaskIDRuns<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTasksTaskIDRunsRunID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTasksTaskIDRunsRunIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteTasksTaskIDRunsRunID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDRunsRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostTasksTaskIDRunsRunIDRetry<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createTasksTaskIDLogs<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createTasksTaskIDRunsRunIDLogs<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTasksTaskIDRunsRunIDLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTasksTaskIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTasksTaskIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTasksTaskIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createFlags<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFlagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createMe<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutMePassword<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutMePasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTasksTaskIDMembers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTasksTaskIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTasksTaskIDMembersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createTasksTaskIDOwners<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDOwnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTasksTaskIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksTaskIDOwnersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTasksTaskIDOwnersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPutUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createChecks<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChecks<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createChecksCheckID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchChecksCheckIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createChecksCheckIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChecksCheckIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChecksCheckIDLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteChecksCheckIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createNotificationRules<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostNotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createChecksCheckIDQuery<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChecksCheckIDQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createNotificationRulesRuleID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNotificationRulesRuleID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutNotificationRulesRuleIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteNotificationRulesRuleID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPatchNotificationRulesRuleID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createNotificationRulesRuleIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNotificationRulesRuleIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteNotificationRulesRuleIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createNotificationRulesRuleIDQuery<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationRulesRuleIDQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createNotificationEndpoints<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNotificationEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createNotificationEndpointsEndpointID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsEndpointIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutNotificationEndpointsEndpointID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteNotificationEndpointsEndpointID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createPatchNotificationEndpointsEndpointID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createNotificationEndpointsEndpointIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNotificationEndpointsEndpointIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostNotificationEndpointsEndpointIDLabels<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createDeleteNotificationEndpointsEndpointIDLabelsLabelID<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
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
  }, queryClient)
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

export function createAuthorizations<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthorizationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAuthorizations<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAuthorizationsAuthID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAuthorizationsAuthIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDebugPprofAllQueryKey(
  args: InferRequestType<typeof client.debug.pprof.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/all', keyArgs] as const
}

export function getDebugPprofAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofAllQueryKey>
  >({
    queryKey: getDebugPprofAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofAllocsQueryKey(
  args: InferRequestType<typeof client.debug.pprof.allocs.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/allocs', keyArgs] as const
}

export function getDebugPprofAllocsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.allocs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofAllocsQueryKey>
  >({
    queryKey: getDebugPprofAllocsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.allocs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofAllocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.allocs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.allocs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofAllocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofAllocsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofBlockQueryKey(
  args: InferRequestType<typeof client.debug.pprof.block.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/block', keyArgs] as const
}

export function getDebugPprofBlockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.block.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofBlockQueryKey>
  >({
    queryKey: getDebugPprofBlockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.block.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofBlock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.block.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.block.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofBlockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofBlockQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofCmdlineQueryKey(
  args: InferRequestType<typeof client.debug.pprof.cmdline.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/cmdline', keyArgs] as const
}

export function getDebugPprofCmdlineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.cmdline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofCmdlineQueryKey>
  >({
    queryKey: getDebugPprofCmdlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.cmdline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofCmdline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.cmdline.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.cmdline.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofCmdlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofCmdlineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofGoroutineQueryKey(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/goroutine', keyArgs] as const
}

export function getDebugPprofGoroutineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.debug.pprof.goroutine.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofGoroutineQueryKey>
  >({
    queryKey: getDebugPprofGoroutineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.goroutine.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofGoroutine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.goroutine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.goroutine.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofGoroutineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofGoroutineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofHeapQueryKey(
  args: InferRequestType<typeof client.debug.pprof.heap.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/heap', keyArgs] as const
}

export function getDebugPprofHeapQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.heap.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofHeapQueryKey>
  >({
    queryKey: getDebugPprofHeapQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.heap.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofHeap<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.heap.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.heap.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofHeapQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofHeapQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofMutexQueryKey(
  args: InferRequestType<typeof client.debug.pprof.mutex.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/mutex', keyArgs] as const
}

export function getDebugPprofMutexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.mutex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofMutexQueryKey>
  >({
    queryKey: getDebugPprofMutexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.mutex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofMutex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.mutex.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.mutex.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofMutexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofMutexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofProfileQueryKey(
  args: InferRequestType<typeof client.debug.pprof.profile.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/profile', keyArgs] as const
}

export function getDebugPprofProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofProfileQueryKey>
  >({
    queryKey: getDebugPprofProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.profile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.profile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDebugPprofThreadcreateQueryKey(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/threadcreate', keyArgs] as const
}

export function getDebugPprofThreadcreateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofThreadcreateQueryKey>
  >({
    queryKey: getDebugPprofThreadcreateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.threadcreate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDebugPprofThreadcreate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.threadcreate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.threadcreate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofThreadcreateQueryKey>
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
      ...getDebugPprofThreadcreateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDebugPprofTraceQueryKey(
  args: InferRequestType<typeof client.debug.pprof.trace.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['debug', '/debug/pprof/trace', keyArgs] as const
}

export function getDebugPprofTraceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.debug.pprof.trace.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugPprofTraceQueryKey>
  >({
    queryKey: getDebugPprofTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.debug.pprof.trace.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDebugPprofTrace<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.debug.pprof.trace.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.debug.pprof.trace.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDebugPprofTraceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugPprofTraceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHealthQueryKey(args: InferRequestType<typeof client.health.$get>) {
  const { header: _, ...keyArgs } = args
  return ['health', '/health', keyArgs] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsQueryKey(args: InferRequestType<typeof client.metrics.$get>) {
  const { header: _, ...keyArgs } = args
  return ['metrics', '/metrics', keyArgs] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReadyQueryKey(args: InferRequestType<typeof client.ready.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ready', '/ready', keyArgs] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ready.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ready.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createUsers<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createUsersUserID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createSetup<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSetupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSetup<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSetupMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createVariables<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVariables<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createVariablesVariableID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariablesVariableIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSourcesQueryKey(args: InferRequestType<typeof client.sources.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources', keyArgs] as const
}

export function getSourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSourcesQueryKey>
  >({
    queryKey: getSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSourcesMutationKey() {
  return ['sources', '/sources', 'POST'] as const
}

export function getPostSourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>>,
    TError,
    InferRequestType<typeof client.sources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sources.$post>) {
      return parseResponse(client.sources.$post(args, options))
    },
  })
}

export function createPostSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sources.$post>>>>>,
        TError,
        InferRequestType<typeof client.sources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSourcesSourceIDQueryKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID', keyArgs] as const
}

export function getSourcesSourceIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesSourceIDQueryKey>
  >({
    queryKey: getSourcesSourceIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':sourceID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSourcesSourceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sources)[':sourceID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesSourceIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSourcesSourceIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSourcesSourceIDMutationKey() {
  return ['sources', '/sources/:sourceID', 'DELETE'] as const
}

export function getDeleteSourcesSourceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sources)[':sourceID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSourcesSourceIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':sourceID']['$delete']>) {
      return parseResponse(client.sources[':sourceID'].$delete(args, options))
    },
  })
}

export function createDeleteSourcesSourceID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sources)[':sourceID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sources)[':sourceID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSourcesSourceIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSourcesSourceIDMutationKey() {
  return ['sources', '/sources/:sourceID', 'PATCH'] as const
}

export function getPatchSourcesSourceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sources)[':sourceID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sources)[':sourceID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSourcesSourceIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sources)[':sourceID']['$patch']>) {
      return parseResponse(client.sources[':sourceID'].$patch(args, options))
    },
  })
}

export function createPatchSourcesSourceID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sources)[':sourceID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sources)[':sourceID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSourcesSourceIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSourcesSourceIDHealthQueryKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID/health', keyArgs] as const
}

export function getSourcesSourceIDHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesSourceIDHealthQueryKey>
  >({
    queryKey: getSourcesSourceIDHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':sourceID'].health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSourcesSourceIDHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sources)[':sourceID']['health']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sources)[':sourceID']['health']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesSourceIDHealthQueryKey>
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
      ...getSourcesSourceIDHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSourcesSourceIDBucketsQueryKey(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sources', '/sources/:sourceID/buckets', keyArgs] as const
}

export function getSourcesSourceIDBucketsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourcesSourceIDBucketsQueryKey>
  >({
    queryKey: getSourcesSourceIDBucketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sources[':sourceID'].buckets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSourcesSourceIDBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sources)[':sourceID']['buckets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sources)[':sourceID']['buckets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSourcesSourceIDBucketsQueryKey>
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
      ...getSourcesSourceIDBucketsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScrapersQueryKey(args: InferRequestType<typeof client.scrapers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers', keyArgs] as const
}

export function getScrapersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.scrapers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScrapersQueryKey>
  >({
    queryKey: getScrapersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrapers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createScrapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.scrapers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getScrapersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScrapersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostScrapersMutationKey() {
  return ['scrapers', '/scrapers', 'POST'] as const
}

export function getPostScrapersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$post>>>>>,
    TError,
    InferRequestType<typeof client.scrapers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrapers.$post>) {
      return parseResponse(client.scrapers.$post(args, options))
    },
  })
}

export function createPostScrapers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrapers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.scrapers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrapersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getScrapersScraperTargetIDQueryKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID', keyArgs] as const
}

export function getScrapersScraperTargetIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapersScraperTargetIDQueryKey>
  >({
    queryKey: getScrapersScraperTargetIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScrapersScraperTargetID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapersScraperTargetIDQueryKey>
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
      ...getScrapersScraperTargetIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteScrapersScraperTargetIDMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID', 'DELETE'] as const
}

export function getDeleteScrapersScraperTargetIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScrapersScraperTargetIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']>,
    ) {
      return parseResponse(client.scrapers[':scraperTargetID'].$delete(args, options))
    },
  })
}

export function createDeleteScrapersScraperTargetID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScrapersScraperTargetIDMutationOptions<
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

export function getPatchScrapersScraperTargetIDMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID', 'PATCH'] as const
}

export function getPatchScrapersScraperTargetIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchScrapersScraperTargetIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']>,
    ) {
      return parseResponse(client.scrapers[':scraperTargetID'].$patch(args, options))
    },
  })
}

export function createPatchScrapersScraperTargetID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrapers)[':scraperTargetID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchScrapersScraperTargetIDMutationOptions<
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

export function getScrapersScraperTargetIDLabelsQueryKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/labels', keyArgs] as const
}

export function getScrapersScraperTargetIDLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapersScraperTargetIDLabelsQueryKey>
  >({
    queryKey: getScrapersScraperTargetIDLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScrapersScraperTargetIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapersScraperTargetIDLabelsQueryKey>
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
      ...getScrapersScraperTargetIDLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostScrapersScraperTargetIDLabelsMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/labels', 'POST'] as const
}

export function getPostScrapersScraperTargetIDLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapersScraperTargetIDLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>,
    ) {
      return parseResponse(client.scrapers[':scraperTargetID'].labels.$post(args, options))
    },
  })
}

export function createPostScrapersScraperTargetIDLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrapersScraperTargetIDLabelsMutationOptions<
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

export function getDeleteScrapersScraperTargetIDLabelsLabelIDMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/labels/:labelID', 'DELETE'] as const
}

export function getDeleteScrapersScraperTargetIDLabelsLabelIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScrapersScraperTargetIDLabelsLabelIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
      >,
    ) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].labels[':labelID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteScrapersScraperTargetIDLabelsLabelID<
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
                    (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scrapers)[':scraperTargetID']['labels'][':labelID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScrapersScraperTargetIDLabelsLabelIDMutationOptions<
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

export function getScrapersScraperTargetIDMembersQueryKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/members', keyArgs] as const
}

export function getScrapersScraperTargetIDMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapersScraperTargetIDMembersQueryKey>
  >({
    queryKey: getScrapersScraperTargetIDMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScrapersScraperTargetIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapersScraperTargetIDMembersQueryKey>
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
      ...getScrapersScraperTargetIDMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostScrapersScraperTargetIDMembersMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/members', 'POST'] as const
}

export function getPostScrapersScraperTargetIDMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapersScraperTargetIDMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>,
    ) {
      return parseResponse(client.scrapers[':scraperTargetID'].members.$post(args, options))
    },
  })
}

export function createPostScrapersScraperTargetIDMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrapersScraperTargetIDMembersMutationOptions<
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

export function getDeleteScrapersScraperTargetIDMembersUserIDMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/members/:userID', 'DELETE'] as const
}

export function getDeleteScrapersScraperTargetIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScrapersScraperTargetIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].members[':userID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteScrapersScraperTargetIDMembersUserID<
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
                    (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scrapers)[':scraperTargetID']['members'][':userID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScrapersScraperTargetIDMembersUserIDMutationOptions<
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

export function getScrapersScraperTargetIDOwnersQueryKey(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scrapers', '/scrapers/:scraperTargetID/owners', keyArgs] as const
}

export function getScrapersScraperTargetIDOwnersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapersScraperTargetIDOwnersQueryKey>
  >({
    queryKey: getScrapersScraperTargetIDOwnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].owners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createScrapersScraperTargetIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapersScraperTargetIDOwnersQueryKey>
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
      ...getScrapersScraperTargetIDOwnersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostScrapersScraperTargetIDOwnersMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/owners', 'POST'] as const
}

export function getPostScrapersScraperTargetIDOwnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapersScraperTargetIDOwnersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>,
    ) {
      return parseResponse(client.scrapers[':scraperTargetID'].owners.$post(args, options))
    },
  })
}

export function createPostScrapersScraperTargetIDOwners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostScrapersScraperTargetIDOwnersMutationOptions<
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

export function getDeleteScrapersScraperTargetIDOwnersUserIDMutationKey() {
  return ['scrapers', '/scrapers/:scraperTargetID/owners/:userID', 'DELETE'] as const
}

export function getDeleteScrapersScraperTargetIDOwnersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScrapersScraperTargetIDOwnersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
      >,
    ) {
      return parseResponse(
        client.scrapers[':scraperTargetID'].owners[':userID'].$delete(args, options),
      )
    },
  })
}

export function createDeleteScrapersScraperTargetIDOwnersUserID<
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
                    (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.scrapers)[':scraperTargetID']['owners'][':userID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteScrapersScraperTargetIDOwnersUserIDMutationOptions<
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

export function getBackupKvQueryKey(args: InferRequestType<typeof client.backup.kv.$get>) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/kv', keyArgs] as const
}

export function getBackupKvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.backup.kv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackupKvQueryKey>
  >({
    queryKey: getBackupKvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.kv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackupKv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.backup.kv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.kv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBackupKvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackupKvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBackupMetadataQueryKey(
  args: InferRequestType<typeof client.backup.metadata.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/metadata', keyArgs] as const
}

export function getBackupMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.backup.metadata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBackupMetadataQueryKey>
  >({
    queryKey: getBackupMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.metadata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBackupMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.backup.metadata.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.metadata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBackupMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackupMetadataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBackupShardsShardIDQueryKey(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/shards/:shardID', keyArgs] as const
}

export function getBackupShardsShardIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupShardsShardIDQueryKey>
  >({
    queryKey: getBackupShardsShardIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.shards[':shardID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBackupShardsShardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.backup.shards)[':shardID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backup.shards)[':shardID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupShardsShardIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackupShardsShardIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRestoreKvMutationKey() {
  return ['restore', '/restore/kv', 'POST'] as const
}

export function getPostRestoreKvMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.kv.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.restore.kv.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreKvMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restore.kv.$post>) {
      return parseResponse(client.restore.kv.$post(args, options))
    },
  })
}

export function createPostRestoreKv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.kv.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.restore.kv.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreKvMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRestoreSqlMutationKey() {
  return ['restore', '/restore/sql', 'POST'] as const
}

export function getPostRestoreSqlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.sql.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.restore.sql.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreSqlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restore.sql.$post>) {
      return parseResponse(client.restore.sql.$post(args, options))
    },
  })
}

export function createPostRestoreSql<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restore.sql.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.restore.sql.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreSqlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRestoreBucketBucketIDMutationKey() {
  return ['restore', '/restore/bucket/:bucketID', 'POST'] as const
}

export function getPostRestoreBucketBucketIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.restore.bucket)[':bucketID']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreBucketBucketIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']>) {
      return parseResponse(client.restore.bucket[':bucketID'].$post(args, options))
    },
  })
}

export function createPostRestoreBucketBucketID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.restore.bucket)[':bucketID']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.restore.bucket)[':bucketID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreBucketBucketIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRestoreBucketMetadataMutationKey() {
  return ['restore', '/restore/bucketMetadata', 'POST'] as const
}

export function getPostRestoreBucketMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.restore.bucketMetadata.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.restore.bucketMetadata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreBucketMetadataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.restore.bucketMetadata.$post>) {
      return parseResponse(client.restore.bucketMetadata.$post(args, options))
    },
  })
}

export function createPostRestoreBucketMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.restore.bucketMetadata.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.restore.bucketMetadata.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreBucketMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRestoreShardsShardIDMutationKey() {
  return ['restore', '/restore/shards/:shardID', 'POST'] as const
}

export function getPostRestoreShardsShardIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.restore.shards)[':shardID']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.restore.shards)[':shardID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRestoreShardsShardIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.restore.shards)[':shardID']['$post']>) {
      return parseResponse(client.restore.shards[':shardID'].$post(args, options))
    },
  })
}

export function createPostRestoreShardsShardID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.restore.shards)[':shardID']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.restore.shards)[':shardID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestoreShardsShardIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['config', '/config', keyArgs] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRemotesQueryKey(args: InferRequestType<typeof client.remotes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['remotes', '/remotes', keyArgs] as const
}

export function getRemotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.remotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRemotesQueryKey>
  >({
    queryKey: getRemotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.remotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRemotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemotesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRemotesMutationKey() {
  return ['remotes', '/remotes', 'POST'] as const
}

export function getPostRemotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$post>>>>>,
    TError,
    InferRequestType<typeof client.remotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.remotes.$post>) {
      return parseResponse(client.remotes.$post(args, options))
    },
  })
}

export function createPostRemotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.remotes.$post>>>>>,
        TError,
        InferRequestType<typeof client.remotes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRemotesRemoteIDQueryKey(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['remotes', '/remotes/:remoteID', keyArgs] as const
}

export function getRemotesRemoteIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRemotesRemoteIDQueryKey>
  >({
    queryKey: getRemotesRemoteIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.remotes[':remoteID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRemotesRemoteID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.remotes)[':remoteID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRemotesRemoteIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRemotesRemoteIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteRemotesRemoteIDMutationKey() {
  return ['remotes', '/remotes/:remoteID', 'DELETE'] as const
}

export function getDeleteRemotesRemoteIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.remotes)[':remoteID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRemotesRemoteIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.remotes)[':remoteID']['$delete']>) {
      return parseResponse(client.remotes[':remoteID'].$delete(args, options))
    },
  })
}

export function createDeleteRemotesRemoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.remotes)[':remoteID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRemotesRemoteIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchRemotesRemoteIDMutationKey() {
  return ['remotes', '/remotes/:remoteID', 'PATCH'] as const
}

export function getPatchRemotesRemoteIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.remotes)[':remoteID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRemotesRemoteIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.remotes)[':remoteID']['$patch']>) {
      return parseResponse(client.remotes[':remoteID'].$patch(args, options))
    },
  })
}

export function createPatchRemotesRemoteID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.remotes)[':remoteID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.remotes)[':remoteID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRemotesRemoteIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReplicationsQueryKey(args: InferRequestType<typeof client.replications.$get>) {
  const { header: _, ...keyArgs } = args
  return ['replications', '/replications', keyArgs] as const
}

export function getReplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.replications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReplicationsQueryKey>
  >({
    queryKey: getReplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.replications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.replications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReplicationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostReplicationsMutationKey() {
  return ['replications', '/replications', 'POST'] as const
}

export function getPostReplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.replications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.replications.$post>) {
      return parseResponse(client.replications.$post(args, options))
    },
  })
}

export function createPostReplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replications.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.replications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReplicationsReplicationIDQueryKey(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['replications', '/replications/:replicationID', keyArgs] as const
}

export function getReplicationsReplicationIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReplicationsReplicationIDQueryKey>
  >({
    queryKey: getReplicationsReplicationIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.replications[':replicationID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReplicationsReplicationID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.replications)[':replicationID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.replications)[':replicationID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReplicationsReplicationIDQueryKey>
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
      ...getReplicationsReplicationIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteReplicationsReplicationIDMutationKey() {
  return ['replications', '/replications/:replicationID', 'DELETE'] as const
}

export function getDeleteReplicationsReplicationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.replications)[':replicationID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReplicationsReplicationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.replications)[':replicationID']['$delete']>,
    ) {
      return parseResponse(client.replications[':replicationID'].$delete(args, options))
    },
  })
}

export function createDeleteReplicationsReplicationID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.replications)[':replicationID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.replications)[':replicationID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReplicationsReplicationIDMutationOptions<
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

export function getPatchReplicationsReplicationIDMutationKey() {
  return ['replications', '/replications/:replicationID', 'PATCH'] as const
}

export function getPatchReplicationsReplicationIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.replications)[':replicationID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReplicationsReplicationIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.replications)[':replicationID']['$patch']>,
    ) {
      return parseResponse(client.replications[':replicationID'].$patch(args, options))
    },
  })
}

export function createPatchReplicationsReplicationID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.replications)[':replicationID']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.replications)[':replicationID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchReplicationsReplicationIDMutationOptions<
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

export function getPostReplicationsReplicationIDValidateMutationKey() {
  return ['replications', '/replications/:replicationID/validate', 'POST'] as const
}

export function getPostReplicationsReplicationIDValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.replications)[':replicationID']['validate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReplicationsReplicationIDValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>,
    ) {
      return parseResponse(client.replications[':replicationID'].validate.$post(args, options))
    },
  })
}

export function createPostReplicationsReplicationIDValidate<
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
                  ReturnType<(typeof client.replications)[':replicationID']['validate']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.replications)[':replicationID']['validate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReplicationsReplicationIDValidateMutationOptions<
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

export function createDashboards<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTasks<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTasks<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTasksTaskID<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksTaskIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTasksTaskIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTasksTaskIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
