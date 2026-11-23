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

export function getQueryKey() {
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

export function usePostSignin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signin.$post>>>>
            >
          | undefined,
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

export function usePostSignout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signout.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.signout.$post>,
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
  const mutationDefaults = getPostSignoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPingQueryKey() {
  return ['ping', '/ping'] as const
}

export function getPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePing<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
          ReturnType<typeof getPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useHeadPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ping.$head>>>>>
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
  const mutationDefaults = getHeadPingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['', '/', keyArgs] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
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
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDbrpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dbrps.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dbrps', '/dbrps', keyArgs] as const
}

export function getDbrpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dbrps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbrpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dbrps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDbrps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dbrps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
          ReturnType<typeof getDbrpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbrpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbrpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dbrps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDbrps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dbrps.$post>>>>>,
          TError,
          InferRequestType<typeof client.dbrps.$post>,
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
  const mutationDefaults = getPostDbrpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDbrpsDbrpIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dbrps', '/dbrps/:dbrpID', keyArgs] as const
}

export function getDbrpsDbrpIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbrpsDbrpIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dbrps[':dbrpID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDbrpsDbrpID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dbrps)[':dbrpID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
            >
          >,
          ReturnType<typeof getDbrpsDbrpIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDbrpsDbrpIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbrpsDbrpIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dbrps[':dbrpID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dbrps)[':dbrpID']['$delete']>,
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
  const mutationDefaults = getDeleteDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDbrpsDbrpID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dbrps)[':dbrpID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dbrps)[':dbrpID']['$patch']>,
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
  const mutationDefaults = getPatchDbrpsDbrpIDMutationOptions<TError, TOnMutateResult>(
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

export function getTelegrafPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegraf.plugins.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegraf', '/telegraf/plugins', keyArgs] as const
}

export function getTelegrafPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegraf.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegraf.plugins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelegrafPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegraf.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>
            >
          >,
          ReturnType<typeof getTelegrafPluginsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegraf.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegraf.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTelegrafsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegrafs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegrafs', '/telegrafs', keyArgs] as const
}

export function getTelegrafsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegrafs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegrafs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTelegrafs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.telegrafs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>
          >,
          ReturnType<typeof getTelegrafsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTelegrafsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegrafs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTelegrafs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.telegrafs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.telegrafs.$post>,
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
  const mutationDefaults = getPostTelegrafsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTelegrafsTelegrafIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegrafs', '/telegrafs/:telegrafID', keyArgs] as const
}

export function getTelegrafsTelegrafIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafsTelegrafIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegrafs[':telegrafID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelegrafsTelegrafID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.telegrafs)[':telegrafID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTelegrafsTelegrafIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafsTelegrafIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegrafs[':telegrafID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTelegrafsTelegrafID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTelegrafsTelegrafIDMutationOptions<TError, TOnMutateResult>(
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

export function getTelegrafsTelegrafIDLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegrafs', '/telegrafs/:telegrafID/labels', keyArgs] as const
}

export function getTelegrafsTelegrafIDLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafsTelegrafIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegrafs[':telegrafID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelegrafsTelegrafIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTelegrafsTelegrafIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafsTelegrafIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegrafs[':telegrafID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTelegrafsTelegrafIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelegrafsTelegrafIDLabelsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTelegrafsTelegrafIDLabelsLabelID<
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
                      (typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.telegrafs)[':telegrafID']['labels'][':labelID']['$delete']
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
  const mutationDefaults = getDeleteTelegrafsTelegrafIDLabelsLabelIDMutationOptions<
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

export function getTelegrafsTelegrafIDMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegrafs', '/telegrafs/:telegrafID/members', keyArgs] as const
}

export function getTelegrafsTelegrafIDMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafsTelegrafIDMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegrafs[':telegrafID'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelegrafsTelegrafIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTelegrafsTelegrafIDMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafsTelegrafIDMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegrafs[':telegrafID'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTelegrafsTelegrafIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelegrafsTelegrafIDMembersMutationOptions<
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

export function useDeleteTelegrafsTelegrafIDMembersUserID<
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
                      (typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.telegrafs)[':telegrafID']['members'][':userID']['$delete']
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
  const mutationDefaults = getDeleteTelegrafsTelegrafIDMembersUserIDMutationOptions<
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

export function getTelegrafsTelegrafIDOwnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['telegrafs', '/telegrafs/:telegrafID/owners', keyArgs] as const
}

export function getTelegrafsTelegrafIDOwnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTelegrafsTelegrafIDOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.telegrafs[':telegrafID'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTelegrafsTelegrafIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTelegrafsTelegrafIDOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client.telegrafs)[':telegrafID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTelegrafsTelegrafIDOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTelegrafsTelegrafIDOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.telegrafs[':telegrafID'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTelegrafsTelegrafIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTelegrafsTelegrafIDOwnersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTelegrafsTelegrafIDOwnersUserID<
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
                      (typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.telegrafs)[':telegrafID']['owners'][':userID']['$delete']
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
  const mutationDefaults = getDeleteTelegrafsTelegrafIDOwnersUserIDMutationOptions<
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

export function getVariablesVariableIDLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['variables', '/variables/:variableID/labels', keyArgs] as const
}

export function getVariablesVariableIDLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariablesVariableIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variables[':variableID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariablesVariableIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.variables)[':variableID']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariablesVariableIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.variables)[':variableID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariablesVariableIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariablesVariableIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variables[':variableID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVariablesVariableIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVariablesVariableIDLabelsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteVariablesVariableIDLabelsLabelID<
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
                      (typeof client.variables)[':variableID']['labels'][':labelID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.variables)[':variableID']['labels'][':labelID']['$delete']
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
  const mutationDefaults = getDeleteVariablesVariableIDLabelsLabelIDMutationOptions<
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

export function usePostWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.write.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.write.$post>,
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
  const mutationDefaults = getPostWriteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.delete.$post>,
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
  const mutationDefaults = getPostDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels', keyArgs] as const
}

export function getLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          ReturnType<typeof getLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.labels.$post>,
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
  const mutationDefaults = getPostLabelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelsLabelIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':labelID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels/:labelID', keyArgs] as const
}

export function getLabelsLabelIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':labelID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsLabelIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels[':labelID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsLabelID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels)[':labelID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
            >
          >,
          ReturnType<typeof getLabelsLabelIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':labelID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsLabelIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsLabelIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels[':labelID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels)[':labelID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.labels)[':labelID']['$patch']>,
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
  const mutationDefaults = getPatchLabelsLabelIDMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardsDashboardIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardID', keyArgs] as const
}

export function getDashboardsDashboardIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIDQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchDashboardsDashboardID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDashboardsDashboardIDMutationOptions<TError, TOnMutateResult>(
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

export function usePutDashboardsDashboardIDCells<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDashboardsDashboardIDCellsMutationOptions<TError, TOnMutateResult>(
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

export function usePostDashboardsDashboardIDCells<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsDashboardIDCellsMutationOptions<
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

export function useDeleteDashboardsDashboardIDCellsCellID<
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
                      (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$delete']
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
  const mutationDefaults = getDeleteDashboardsDashboardIDCellsCellIDMutationOptions<
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

export function usePatchDashboardsDashboardIDCellsCellID<
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
                    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['$patch']
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
  const mutationDefaults = getPatchDashboardsDashboardIDCellsCellIDMutationOptions<
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

export function getDashboardsDashboardIDCellsCellIDViewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardID/cells/:cellID/view', keyArgs] as const
}

export function getDashboardsDashboardIDCellsCellIDViewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIDCellsCellIDViewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardID'].cells[':cellID'].view.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardIDCellsCellIDView<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']>
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
                    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
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
                    (typeof client.dashboards)[':dashboardID']['cells'][':cellID']['view']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIDCellsCellIDViewQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIDCellsCellIDViewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardID'].cells[':cellID'].view.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchDashboardsDashboardIDCellsCellIDView<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDashboardsDashboardIDCellsCellIDViewMutationOptions<
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

export function getDashboardsDashboardIDLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardID/labels', keyArgs] as const
}

export function getDashboardsDashboardIDLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsDashboardIDLabels<
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
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboards)[':dashboardID']['labels']['$post']>,
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
  const mutationDefaults = getPostDashboardsDashboardIDLabelsMutationOptions<
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

export function useDeleteDashboardsDashboardIDLabelsLabelID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsDashboardIDLabelsLabelIDMutationOptions<
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

export function getDashboardsDashboardIDMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardID/members', keyArgs] as const
}

export function getDashboardsDashboardIDMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIDMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardID'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIDMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIDMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardID'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsDashboardIDMembers<
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
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboards)[':dashboardID']['members']['$post']>,
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
  const mutationDefaults = getPostDashboardsDashboardIDMembersMutationOptions<
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

export function useDeleteDashboardsDashboardIDMembersUserID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsDashboardIDMembersUserIDMutationOptions<
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

export function getDashboardsDashboardIDOwnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardID/owners', keyArgs] as const
}

export function getDashboardsDashboardIDOwnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIDOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardID'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIDOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIDOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIDOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardID'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsDashboardIDOwners<
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
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboards)[':dashboardID']['owners']['$post']>,
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
  const mutationDefaults = getPostDashboardsDashboardIDOwnersMutationOptions<
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

export function useDeleteDashboardsDashboardIDOwnersUserID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsDashboardIDOwnersUserIDMutationOptions<
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

export function usePostQueryAst<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.ast.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query.ast.$post>,
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
  const mutationDefaults = getPostQueryAstMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuerySuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.suggestions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/suggestions', keyArgs] as const
}

export function getQuerySuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuerySuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuerySuggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>
            >
          >,
          ReturnType<typeof getQuerySuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuerySuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuerySuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQuerySuggestionsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.suggestions)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/suggestions/:name', keyArgs] as const
}

export function getQuerySuggestionsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.suggestions)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQuerySuggestionsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.suggestions[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQuerySuggestionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.query.suggestions)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getQuerySuggestionsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.query.suggestions)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuerySuggestionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQuerySuggestionsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.suggestions[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQueryAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.analyze.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.query.analyze.$post>,
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
  const mutationDefaults = getPostQueryAnalyzeMutationOptions<TError, TOnMutateResult>(
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

export function usePostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
          TError,
          InferRequestType<typeof client.query.$post>,
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
  const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBucketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets', keyArgs] as const
}

export function getBucketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.buckets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>
          >,
          ReturnType<typeof getBucketsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.buckets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.buckets.$post>,
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
  const mutationDefaults = getPostBucketsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBucketsBucketIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucketID', keyArgs] as const
}

export function getBucketsBucketIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.buckets)[':bucketID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBucketsBucketID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBucketsBucketIDMutationOptions<TError, TOnMutateResult>(
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

export function getBucketsBucketIDLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucketID/labels', keyArgs] as const
}

export function getBucketsBucketIDLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBucketsBucketIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBucketsBucketIDLabelsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBucketsBucketIDLabelsLabelID<
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
                      (typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.buckets)[':bucketID']['labels'][':labelID']['$delete']>,
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
  const mutationDefaults = getDeleteBucketsBucketIDLabelsLabelIDMutationOptions<
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

export function getBucketsBucketIDMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucketID/members', keyArgs] as const
}

export function getBucketsBucketIDMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBucketsBucketIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBucketsBucketIDMembersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBucketsBucketIDMembersUserID<
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
                      (typeof client.buckets)[':bucketID']['members'][':userID']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.buckets)[':bucketID']['members'][':userID']['$delete']>,
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
  const mutationDefaults = getDeleteBucketsBucketIDMembersUserIDMutationOptions<
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

export function getBucketsBucketIDOwnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:bucketID/owners', keyArgs] as const
}

export function getBucketsBucketIDOwnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.buckets)[':bucketID']['owners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client.buckets)[':bucketID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBucketsBucketIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBucketsBucketIDOwnersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBucketsBucketIDOwnersUserID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBucketsBucketIDOwnersUserIDMutationOptions<
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

export function getOrgsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orgs', '/orgs', keyArgs] as const
}

export function getOrgsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
          ReturnType<typeof getOrgsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
          TError,
          InferRequestType<typeof client.orgs.$post>,
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
  const mutationDefaults = getPostOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgsOrgIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orgs', '/orgs/:orgID', keyArgs] as const
}

export function getOrgsOrgIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>
            >
          >,
          ReturnType<typeof getOrgsOrgIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgsOrgIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchOrgsOrgID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.orgs)[':orgID']['$patch']>,
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
  const mutationDefaults = getPatchOrgsOrgIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgsOrgIDSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orgs', '/orgs/:orgID/secrets', keyArgs] as const
}

export function getOrgsOrgIDSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIDSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['secrets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIDSecretsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['secrets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchOrgsOrgIDSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrgsOrgIDSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsOrgIDMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orgs', '/orgs/:orgID/members', keyArgs] as const
}

export function getOrgsOrgIDMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIDMembersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgsOrgIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsOrgIDMembersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteOrgsOrgIDMembersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.orgs)[':orgID']['members'][':userID']['$delete']>,
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
  const mutationDefaults = getDeleteOrgsOrgIDMembersUserIDMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsOrgIDOwnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orgs', '/orgs/:orgID/owners', keyArgs] as const
}

export function getOrgsOrgIDOwnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['owners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIDOwnersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['owners']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgsOrgIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsOrgIDOwnersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteOrgsOrgIDOwnersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.orgs)[':orgID']['owners'][':userID']['$delete']>,
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
  const mutationDefaults = getDeleteOrgsOrgIDOwnersUserIDMutationOptions<TError, TOnMutateResult>(
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

export function usePostOrgsOrgIDSecretsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsOrgIDSecretsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteOrgsOrgIDSecretsSecretID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgsOrgIDSecretsSecretIDMutationOptions<
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

export function getResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources', keyArgs] as const
}

export function getResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useResources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>
          >,
          ReturnType<typeof getResourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStacksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
) {
  return ['stacks', '/stacks', toValue(args)] as const
}

export function getStacksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStacks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stacks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
          ReturnType<typeof getStacksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStacksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostStacks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stacks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.stacks.$post>,
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
  const mutationDefaults = getPostStacksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStacksStackIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':stack_id']['$get']>>,
) {
  return ['stacks', '/stacks/:stack_id', toValue(args)] as const
}

export function getStacksStackIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':stack_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStacksStackIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stacks[':stack_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStacksStackId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stacks)[':stack_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
            >
          >,
          ReturnType<typeof getStacksStackIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStacksStackIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStacksStackIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stacks[':stack_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStacksStackIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchStacksStackId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.stacks)[':stack_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.stacks)[':stack_id']['$patch']>,
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
  const mutationDefaults = getPatchStacksStackIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostStacksStackIdUninstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStacksStackIdUninstallMutationOptions<TError, TOnMutateResult>(
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

export function usePostTemplatesApply<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.apply.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.templates.apply.$post>,
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
  const mutationDefaults = getPostTemplatesApplyMutationOptions<TError, TOnMutateResult>(
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

export function usePostTemplatesExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.templates.export.$post>,
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
  const mutationDefaults = getPostTemplatesExportMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIDRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/runs', keyArgs] as const
}

export function getTasksTaskIDRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['runs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIDRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIDRunsMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIDRunsRunIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/runs/:runID', keyArgs] as const
}

export function getTasksTaskIDRunsRunIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDRunsRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].runs[':runID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDRunsRunID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDRunsRunIDQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDRunsRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].runs[':runID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTasksTaskIDRunsRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskIDRunsRunIDMutationOptions<TError, TOnMutateResult>(
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

export function usePostTasksTaskIDRunsRunIDRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIDRunsRunIDRetryMutationOptions<TError, TOnMutateResult>(
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

export function getTasksTaskIDLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/logs', keyArgs] as const
}

export function getTasksTaskIDLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksTaskIDRunsRunIDLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/runs/:runID/logs', keyArgs] as const
}

export function getTasksTaskIDRunsRunIDLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDRunsRunIDLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].runs[':runID'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDRunsRunIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDRunsRunIDLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['runs'][':runID']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDRunsRunIDLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDRunsRunIDLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].runs[':runID'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksTaskIDLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/labels', keyArgs] as const
}

export function getTasksTaskIDLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIDLabelsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTasksTaskIDLabelsLabelID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskIDLabelsLabelIDMutationOptions<
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

export function getFlagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flags.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['flags', '/flags', keyArgs] as const
}

export function getFlagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFlagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.flags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFlags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.flags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
          ReturnType<typeof getFlagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFlagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.flags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['me', '/me', keyArgs] as const
}

export function getMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.password.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.me.password.$put>,
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
  const mutationDefaults = getPutMePasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskIDMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/members', keyArgs] as const
}

export function getTasksTaskIDMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIDMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIDMembersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTasksTaskIDMembersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskIDMembersUserIDMutationOptions<
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

export function getTasksTaskIDOwnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID/owners', keyArgs] as const
}

export function getTasksTaskIDOwnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDOwnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].owners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskIDOwners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['owners']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksTaskIDOwnersQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks)[':taskID']['owners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDOwnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDOwnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].owners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksTaskIDOwners<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTasksTaskIDOwnersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTasksTaskIDOwnersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTasksTaskIDOwnersUserIDMutationOptions<TError, TOnMutateResult>(
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

export function usePutUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersUserIDPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIDPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getChecksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checks', '/checks', keyArgs] as const
}

export function getChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChecks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.checks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
          ReturnType<typeof getChecksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.checks.$post>,
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
  const mutationDefaults = getPostChecksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChecksCheckIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checks', '/checks/:checkID', keyArgs] as const
}

export function getChecksCheckIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksCheckIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks[':checkID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecksCheckID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
            >
          >,
          ReturnType<typeof getChecksCheckIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksCheckIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks[':checkID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.checks)[':checkID']['$put']>,
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
  const mutationDefaults = getPutChecksCheckIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChecksCheckIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchChecksCheckID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.checks)[':checkID']['$patch']>,
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
  const mutationDefaults = getPatchChecksCheckIDMutationOptions<TError, TOnMutateResult>(
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

export function getChecksCheckIDLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checks', '/checks/:checkID/labels', keyArgs] as const
}

export function getChecksCheckIDLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksCheckIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks[':checkID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecksCheckIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecksCheckIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.checks)[':checkID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksCheckIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks[':checkID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChecksCheckIDLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChecksCheckIDLabelsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteChecksCheckIDLabelsLabelID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChecksCheckIDLabelsLabelIDMutationOptions<
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

export function getNotificationRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationRules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationRules', '/notificationRules', keyArgs] as const
}

export function getNotificationRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationRules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationRules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationRules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>
            >
          >,
          ReturnType<typeof getNotificationRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationRules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationRules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notificationRules.$post>,
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
  const mutationDefaults = getPostNotificationRulesMutationOptions<TError, TOnMutateResult>(
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

export function getChecksCheckIDQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['checks', '/checks/:checkID/query', keyArgs] as const
}

export function getChecksCheckIDQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChecksCheckIDQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.checks[':checkID'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChecksCheckIDQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.checks)[':checkID']['query']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChecksCheckIDQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.checks)[':checkID']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChecksCheckIDQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChecksCheckIDQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.checks[':checkID'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationRulesRuleIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationRules', '/notificationRules/:ruleID', keyArgs] as const
}

export function getNotificationRulesRuleIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationRulesRuleIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationRules[':ruleID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationRulesRuleID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.notificationRules)[':ruleID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationRulesRuleIDQueryKey>
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
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationRulesRuleIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationRules[':ruleID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutNotificationRulesRuleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationRulesRuleIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteNotificationRulesRuleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationRulesRuleIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchNotificationRulesRuleID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNotificationRulesRuleIDMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationRulesRuleIDLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationRules', '/notificationRules/:ruleID/labels', keyArgs] as const
}

export function getNotificationRulesRuleIDLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationRulesRuleIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationRules[':ruleID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationRulesRuleIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationRulesRuleIDLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationRulesRuleIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationRules[':ruleID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationRulesRuleIDLabels<
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
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notificationRules)[':ruleID']['labels']['$post']>,
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
  const mutationDefaults = getPostNotificationRulesRuleIDLabelsMutationOptions<
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

export function useDeleteNotificationRulesRuleIDLabelsLabelID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationRulesRuleIDLabelsLabelIDMutationOptions<
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

export function getNotificationRulesRuleIDQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationRules', '/notificationRules/:ruleID/query', keyArgs] as const
}

export function getNotificationRulesRuleIDQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationRulesRuleIDQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationRules[':ruleID'].query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationRulesRuleIDQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationRules)[':ruleID']['query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationRulesRuleIDQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.notificationRules)[':ruleID']['query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationRulesRuleIDQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationRulesRuleIDQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationRules[':ruleID'].query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationEndpoints.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationEndpoints', '/notificationEndpoints', keyArgs] as const
}

export function getNotificationEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationEndpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationEndpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notificationEndpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
            >
          >,
          ReturnType<typeof getNotificationEndpointsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationEndpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notificationEndpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notificationEndpoints.$post>,
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
  const mutationDefaults = getPostNotificationEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getNotificationEndpointsEndpointIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID', keyArgs] as const
}

export function getNotificationEndpointsEndpointIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationEndpointsEndpointIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationEndpoints[':endpointID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationEndpointsEndpointID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationEndpointsEndpointIDQueryKey>
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
          Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsEndpointIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationEndpointsEndpointIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationEndpoints[':endpointID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutNotificationEndpointsEndpointID<
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
                Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$put']>,
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
  const mutationDefaults = getPutNotificationEndpointsEndpointIDMutationOptions<
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

export function useDeleteNotificationEndpointsEndpointID<
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
                    ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$delete']>,
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
  const mutationDefaults = getDeleteNotificationEndpointsEndpointIDMutationOptions<
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

export function usePatchNotificationEndpointsEndpointID<
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
                Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['$patch']>,
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
  const mutationDefaults = getPatchNotificationEndpointsEndpointIDMutationOptions<
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

export function getNotificationEndpointsEndpointIDLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notificationEndpoints', '/notificationEndpoints/:endpointID/labels', keyArgs] as const
}

export function getNotificationEndpointsEndpointIDLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationEndpointsEndpointIDLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notificationEndpoints[':endpointID'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationEndpointsEndpointIDLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationEndpointsEndpointIDLabelsQueryKey>
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
            ReturnType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationEndpointsEndpointIDLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationEndpointsEndpointIDLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notificationEndpoints[':endpointID'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationEndpointsEndpointIDLabels<
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
                    (typeof client.notificationEndpoints)[':endpointID']['labels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notificationEndpoints)[':endpointID']['labels']['$post']>,
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
  const mutationDefaults = getPostNotificationEndpointsEndpointIDLabelsMutationOptions<
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

export function useDeleteNotificationEndpointsEndpointIDLabelsLabelID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationEndpointsEndpointIDLabelsLabelIDMutationOptions<
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

export function getAuthorizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authorizations', '/authorizations', keyArgs] as const
}

export function getAuthorizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.authorizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
          >,
          ReturnType<typeof getAuthorizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthorizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorizations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorizations.$post>,
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
  const mutationDefaults = getPostAuthorizationsMutationOptions<TError, TOnMutateResult>(
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

export function getAuthorizationsAuthIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizations)[':authID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authorizations', '/authorizations/:authID', keyArgs] as const
}

export function getAuthorizationsAuthIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizations)[':authID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthorizationsAuthIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.authorizations[':authID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthorizationsAuthID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.authorizations)[':authID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthorizationsAuthIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.authorizations)[':authID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthorizationsAuthIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthorizationsAuthIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.authorizations[':authID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchAuthorizationsAuthID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAuthorizationsAuthIDMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users', keyArgs] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
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
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/:userID', keyArgs] as const
}

export function getUsersUserIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userID']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchUsersUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userID']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIDMutationOptions<TError, TOnMutateResult>(
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

export function getSetupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['setup', '/setup', keyArgs] as const
}

export function getSetupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setup.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSetup<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
          ReturnType<typeof getSetupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSetupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSetup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.$post>>>>>,
          TError,
          InferRequestType<typeof client.setup.$post>,
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
  const mutationDefaults = getPostSetupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSetupUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setup.user.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.setup.user.$post>,
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
  const mutationDefaults = getPostSetupUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['variables', '/variables', keyArgs] as const
}

export function getVariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
          >,
          ReturnType<typeof getVariablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.variables.$post>,
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
  const mutationDefaults = getPostVariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVariablesVariableIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variableID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['variables', '/variables/:variableID', keyArgs] as const
}

export function getVariablesVariableIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variableID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariablesVariableIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variables[':variableID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariablesVariableID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variableID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariablesVariableIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variableID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariablesVariableIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariablesVariableIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variables[':variableID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchVariablesVariableID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchVariablesVariableIDMutationOptions<TError, TOnMutateResult>(
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

export function getBucketsBucketIDSchemaMeasurementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
  >,
) {
  return ['buckets', '/buckets/:bucketID/schema/measurements', toValue(args)] as const
}

export function getBucketsBucketIDSchemaMeasurementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDSchemaMeasurementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].schema.measurements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIDSchemaMeasurements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDSchemaMeasurementsQueryKey>
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
            ReturnType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsBucketIDSchemaMeasurementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDSchemaMeasurementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].schema.measurements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBucketsBucketIDSchemaMeasurements<
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
                    (typeof client.buckets)[':bucketID']['schema']['measurements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.buckets)[':bucketID']['schema']['measurements']['$post']>,
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
  const mutationDefaults = getPostBucketsBucketIDSchemaMeasurementsMutationOptions<
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

export function getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
    >
  >,
) {
  return [
    'buckets',
    '/buckets/:bucketID/schema/measurements/:measurementID',
    toValue(args),
  ] as const
}

export function getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':bucketID'].schema.measurements[':measurementID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsBucketIDSchemaMeasurementsMeasurementID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
    >
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
                    (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
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
                    (typeof client.buckets)[':bucketID']['schema']['measurements'][':measurementID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsBucketIDSchemaMeasurementsMeasurementIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':bucketID'].schema.measurements[':measurementID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchBucketsBucketIDSchemaMeasurementsMeasurementID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBucketsBucketIDSchemaMeasurementsMeasurementIDMutationOptions<
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

export function getOrgsOrgIDLimitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>>,
) {
  return ['orgs', '/orgs/:orgID/limits', toValue(args)] as const
}

export function getOrgsOrgIDLimitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDLimitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].limits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIDLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['limits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIDLimitsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['limits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDLimitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDLimitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].limits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsOrgIDUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>>,
) {
  return ['orgs', '/orgs/:orgID/usage', toValue(args)] as const
}

export function getOrgsOrgIDUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIDUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':orgID'].usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIDUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':orgID']['usage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIDUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':orgID']['usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIDUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIDUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':orgID'].usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards', keyArgs] as const
}

export function getDashboardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDashboards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>
          >,
          ReturnType<typeof getDashboardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dashboards.$post>,
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
  const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks', keyArgs] as const
}

export function getTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          ReturnType<typeof getTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$post>>>>>,
          TError,
          InferRequestType<typeof client.tasks.$post>,
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
  const mutationDefaults = getPostTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasksTaskIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tasks', '/tasks/:taskID', keyArgs] as const
}

export function getTasksTaskIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksTaskIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks[':taskID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksTaskID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks)[':taskID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
            >
          >,
          ReturnType<typeof getTasksTaskIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksTaskIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksTaskIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks[':taskID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tasks)[':taskID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tasks)[':taskID']['$delete']>,
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
  const mutationDefaults = getDeleteTasksTaskIDMutationOptions<TError, TOnMutateResult>(
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

export function usePatchTasksTaskID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':taskID']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks)[':taskID']['$patch']>,
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
  const mutationDefaults = getPatchTasksTaskIDMutationOptions<TError, TOnMutateResult>(
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
