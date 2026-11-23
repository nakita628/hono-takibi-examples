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

export function getAccountKey() {
  return ['account'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getReleasesKey() {
  return ['releases'] as const
}

export function getAccountAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.agents.$get>>,
) {
  return ['account', '/account/agents', toValue(args)] as const
}

export function getAccountAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.agents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.agents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
          >,
          ReturnType<typeof getAccountAgentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountCredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.credentials.$get>>,
) {
  return ['account', '/account/credentials', toValue(args)] as const
}

export function getAccountCredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.credentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.credentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
            >
          >,
          ReturnType<typeof getAccountCredentialsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountCredentialsMutationKey() {
  return ['account', '/account/credentials', 'PUT'] as const
}

export function getPutAccountCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.credentials.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.credentials.$put>) {
      return parseResponse(client.account.credentials.$put(args, options))
    },
  })
}

export function usePutAccountCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.credentials.$put>,
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
  const mutationDefaults = getPutAccountCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountCredentialsCredentialIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>
  >,
) {
  return ['account', '/account/credentials/:credential_id', toValue(args)] as const
}

export function getAccountCredentialsCredentialIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCredentialsCredentialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.credentials[':credential_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountCredentialsCredentialIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCredentialsCredentialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCredentialsCredentialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.credentials[':credential_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountCredentialsCredentialIdMutationKey() {
  return ['account', '/account/credentials/:credential_id', 'DELETE'] as const
}

export function getDeleteAccountCredentialsCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountCredentialsCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>,
    ) {
      return parseResponse(client.account.credentials[':credential_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountCredentialsCredentialId<
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
                    ReturnType<(typeof client.account.credentials)[':credential_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountCredentialsCredentialIdMutationOptions<
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

export function getAccountEventsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.json']['$get']>>,
) {
  return ['account', '/account/events.json', toValue(args)] as const
}

export function getAccountEventsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEventsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['events.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountEventsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEventsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['events.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountEventsJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.jsonl']['$get']>>,
) {
  return ['account', '/account/events.jsonl', toValue(args)] as const
}

export function getAccountEventsJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEventsJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account['events.jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEventsJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)['events.jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountEventsJsonlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEventsJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account['events.jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountGroupsQueryKey() {
  return ['account', '/account/groups'] as const
}

export function getAccountGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
          >,
          ReturnType<typeof getAccountGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountGroupsMutationKey() {
  return ['account', '/account/groups', 'PUT'] as const
}

export function getPutAccountGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.groups.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.groups.$put>) {
      return parseResponse(client.account.groups.$put(args, options))
    },
  })
}

export function usePutAccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.groups.$put>,
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
  const mutationDefaults = getPutAccountGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountGroupsMutationKey() {
  return ['account', '/account/groups', 'POST'] as const
}

export function getPostAccountGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.groups.$post>) {
      return parseResponse(client.account.groups.$post(args, options))
    },
  })
}

export function usePostAccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.groups.$post>,
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
  const mutationDefaults = getPostAccountGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.groups)[':group_id']['$get']>>,
) {
  return ['account', '/account/groups/:group_id', toValue(args)] as const
}

export function getAccountGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.groups)[':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.groups)[':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountGroupsGroupIdMutationKey() {
  return ['account', '/account/groups/:group_id', 'DELETE'] as const
}

export function getDeleteAccountGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.groups)[':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.groups)[':group_id']['$delete']>,
    ) {
      return parseResponse(client.account.groups[':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.groups)[':group_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountKeysQueryKey() {
  return ['account', '/account/keys'] as const
}

export function getAccountKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
          >,
          ReturnType<typeof getAccountKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountKeysMutationKey() {
  return ['account', '/account/keys', 'PUT'] as const
}

export function getPutAccountKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.keys.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.keys.$put>) {
      return parseResponse(client.account.keys.$put(args, options))
    },
  })
}

export function usePutAccountKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.keys.$put>,
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
  const mutationDefaults = getPutAccountKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.keys)[':key_id']['$get']>>,
) {
  return ['account', '/account/keys/:key_id', toValue(args)] as const
}

export function getAccountKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.keys)[':key_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.keys[':key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.keys)[':key_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountKeysKeyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.keys[':key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountKeysKeyIdMutationKey() {
  return ['account', '/account/keys/:key_id', 'DELETE'] as const
}

export function getDeleteAccountKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.keys)[':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountKeysKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.keys)[':key_id']['$delete']>) {
      return parseResponse(client.account.keys[':key_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.keys)[':key_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountKeysKeyIdRotateMutationKey() {
  return ['account', '/account/keys/:key_id/rotate', 'PATCH'] as const
}

export function getPatchAccountKeysKeyIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountKeysKeyIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>,
    ) {
      return parseResponse(client.account.keys[':key_id'].rotate.$patch(args, options))
    },
  })
}

export function usePatchAccountKeysKeyIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>,
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
  const mutationDefaults = getPatchAccountKeysKeyIdRotateMutationOptions<TError, TOnMutateResult>(
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

export function getAccountLicenseQueryKey() {
  return ['account', '/account/license'] as const
}

export function getAccountLicenseQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountLicenseQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>
            >
          >,
          ReturnType<typeof getAccountLicenseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLicenseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountLicenseQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.license.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountOrgsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.orgs.$get>>,
) {
  return ['account', '/account/orgs', toValue(args)] as const
}

export function getAccountOrgsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.orgs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOrgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.orgs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountOrgs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.orgs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
          >,
          ReturnType<typeof getAccountOrgsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOrgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.orgs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountOrgsMutationKey() {
  return ['account', '/account/orgs', 'PUT'] as const
}

export function getPutAccountOrgsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$put>>>>>,
    TError,
    InferRequestType<typeof client.account.orgs.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountOrgsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.orgs.$put>) {
      return parseResponse(client.account.orgs.$put(args, options))
    },
  })
}

export function usePutAccountOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.orgs.$put>,
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
  const mutationDefaults = getPutAccountOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountOrgsOrgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>>,
) {
  return ['account', '/account/orgs/:org_id', toValue(args)] as const
}

export function getAccountOrgsOrgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountOrgsOrgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.orgs[':org_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountOrgsOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountOrgsOrgIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOrgsOrgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountOrgsOrgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.orgs[':org_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountOrgsOrgIdMutationKey() {
  return ['account', '/account/orgs/:org_id', 'DELETE'] as const
}

export function getDeleteAccountOrgsOrgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountOrgsOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']>) {
      return parseResponse(client.account.orgs[':org_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountOrgsOrgIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountOrgsOrgIdMutationKey() {
  return ['account', '/account/orgs/:org_id', 'PATCH'] as const
}

export function getPatchAccountOrgsOrgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountOrgsOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']>) {
      return parseResponse(client.account.orgs[':org_id'].$patch(args, options))
    },
  })
}

export function usePatchAccountOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']>,
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
  const mutationDefaults = getPatchAccountOrgsOrgIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountOrgsOrgIdExportTokenMutationKey() {
  return ['account', '/account/orgs/:org_id/exportToken', 'DELETE'] as const
}

export function getDeleteAccountOrgsOrgIdExportTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountOrgsOrgIdExportTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>,
    ) {
      return parseResponse(client.account.orgs[':org_id'].exportToken.$delete(args, options))
    },
  })
}

export function useDeleteAccountOrgsOrgIdExportToken<
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
                    ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>,
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
  const mutationDefaults = getDeleteAccountOrgsOrgIdExportTokenMutationOptions<
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

export function getPatchAccountOrgsOrgIdExportTokenRotateMutationKey() {
  return ['account', '/account/orgs/:org_id/exportToken/rotate', 'PATCH'] as const
}

export function getPatchAccountOrgsOrgIdExportTokenRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountOrgsOrgIdExportTokenRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']
      >,
    ) {
      return parseResponse(client.account.orgs[':org_id'].exportToken.rotate.$patch(args, options))
    },
  })
}

export function usePatchAccountOrgsOrgIdExportTokenRotate<
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
                    (typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']
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
  const mutationDefaults = getPatchAccountOrgsOrgIdExportTokenRotateMutationOptions<
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

export function getAccountSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.sites.$get>>,
) {
  return ['account', '/account/sites', toValue(args)] as const
}

export function getAccountSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
          >,
          ReturnType<typeof getAccountSitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountSsoGroupsQueryKey() {
  return ['account', '/account/sso/groups'] as const
}

export function getAccountSsoGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountSsoGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.sso.groups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSsoGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>
            >
          >,
          ReturnType<typeof getAccountSsoGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSsoGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountSsoGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.sso.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountSsoGroupsMutationKey() {
  return ['account', '/account/sso/groups', 'PUT'] as const
}

export function getPutAccountSsoGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.sso.groups.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSsoGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.sso.groups.$put>) {
      return parseResponse(client.account.sso.groups.$put(args, options))
    },
  })
}

export function usePutAccountSsoGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sso.groups.$put>,
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
  const mutationDefaults = getPutAccountSsoGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSsoGroupsMutationKey() {
  return ['account', '/account/sso/groups', 'POST'] as const
}

export function getPostAccountSsoGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.sso.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSsoGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.sso.groups.$post>) {
      return parseResponse(client.account.sso.groups.$post(args, options))
    },
  })
}

export function usePostAccountSsoGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sso.groups.$post>,
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
  const mutationDefaults = getPostAccountSsoGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSsoGroupsGroupMappingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>
  >,
) {
  return ['account', '/account/sso/groups/:group_mapping_id', toValue(args)] as const
}

export function getAccountSsoGroupsGroupMappingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSsoGroupsGroupMappingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.sso.groups[':group_mapping_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSsoGroupsGroupMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountSsoGroupsGroupMappingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSsoGroupsGroupMappingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSsoGroupsGroupMappingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.sso.groups[':group_mapping_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountSsoGroupsGroupMappingIdMutationKey() {
  return ['account', '/account/sso/groups/:group_mapping_id', 'DELETE'] as const
}

export function getDeleteAccountSsoGroupsGroupMappingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountSsoGroupsGroupMappingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>,
    ) {
      return parseResponse(client.account.sso.groups[':group_mapping_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountSsoGroupsGroupMappingId<
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
                    ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountSsoGroupsGroupMappingIdMutationOptions<
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

export function getAccountTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.$get>>,
) {
  return ['account', '/account/tasks', toValue(args)] as const
}

export function getAccountTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
          >,
          ReturnType<typeof getAccountTasksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountTasksTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.templates.$get>>,
) {
  return ['account', '/account/tasks/templates', toValue(args)] as const
}

export function getAccountTasksTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTasksTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.tasks.templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTasksTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.tasks.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
            >
          >,
          ReturnType<typeof getAccountTasksTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTasksTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTasksTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.tasks.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountTasksTemplatesMutationKey() {
  return ['account', '/account/tasks/templates', 'PUT'] as const
}

export function getPutAccountTasksTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.tasks.templates.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountTasksTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.tasks.templates.$put>) {
      return parseResponse(client.account.tasks.templates.$put(args, options))
    },
  })
}

export function usePutAccountTasksTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tasks.templates.$put>,
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
  const mutationDefaults = getPutAccountTasksTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountTasksTemplatesMutationKey() {
  return ['account', '/account/tasks/templates', 'POST'] as const
}

export function getPostAccountTasksTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.tasks.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTasksTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.tasks.templates.$post>) {
      return parseResponse(client.account.tasks.templates.$post(args, options))
    },
  })
}

export function usePostAccountTasksTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tasks.templates.$post>,
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
  const mutationDefaults = getPostAccountTasksTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountTasksTemplatesScanTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
  >,
) {
  return ['account', '/account/tasks/templates/:scan_template_id', toValue(args)] as const
}

export function getAccountTasksTemplatesScanTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTasksTemplatesScanTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.tasks.templates[':scan_template_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTasksTemplatesScanTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
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
                  ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountTasksTemplatesScanTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTasksTemplatesScanTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTasksTemplatesScanTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.tasks.templates[':scan_template_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountTasksTemplatesScanTemplateIdMutationKey() {
  return ['account', '/account/tasks/templates/:scan_template_id', 'DELETE'] as const
}

export function getDeleteAccountTasksTemplatesScanTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountTasksTemplatesScanTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.account.tasks.templates)[':scan_template_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.account.tasks.templates[':scan_template_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountTasksTemplatesScanTemplateId<
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
                    (typeof client.account.tasks.templates)[':scan_template_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountTasksTemplatesScanTemplateIdMutationOptions<
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

export function getAccountUsersQueryKey() {
  return ['account', '/account/users'] as const
}

export function getAccountUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
          >,
          ReturnType<typeof getAccountUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountUsersMutationKey() {
  return ['account', '/account/users', 'PUT'] as const
}

export function getPutAccountUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.users.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.users.$put>) {
      return parseResponse(client.account.users.$put(args, options))
    },
  })
}

export function usePutAccountUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.users.$put>,
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
  const mutationDefaults = getPutAccountUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountUsersInviteMutationKey() {
  return ['account', '/account/users/invite', 'PUT'] as const
}

export function getPutAccountUsersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.invite.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.users.invite.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountUsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.users.invite.$put>) {
      return parseResponse(client.account.users.invite.$put(args, options))
    },
  })
}

export function usePutAccountUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.users.invite.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.users.invite.$put>,
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
  const mutationDefaults = getPutAccountUsersInviteMutationOptions<TError, TOnMutateResult>(
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

export function getAccountUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':user_id']['$get']>>,
) {
  return ['account', '/account/users/:user_id', toValue(args)] as const
}

export function getAccountUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountUsersUserIdMutationKey() {
  return ['account', '/account/users/:user_id', 'DELETE'] as const
}

export function getDeleteAccountUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.users)[':user_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.users)[':user_id']['$delete']>) {
      return parseResponse(client.account.users[':user_id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.users)[':user_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountUsersUserIdMutationKey() {
  return ['account', '/account/users/:user_id', 'PATCH'] as const
}

export function getPatchAccountUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.users)[':user_id']['$patch']>) {
      return parseResponse(client.account.users[':user_id'].$patch(args, options))
    },
  })
}

export function usePatchAccountUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['$patch']>,
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
  const mutationDefaults = getPatchAccountUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountUsersUserIdResetLockoutMutationKey() {
  return ['account', '/account/users/:user_id/resetLockout', 'PATCH'] as const
}

export function getPatchAccountUsersUserIdResetLockoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountUsersUserIdResetLockoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>,
    ) {
      return parseResponse(client.account.users[':user_id'].resetLockout.$patch(args, options))
    },
  })
}

export function usePatchAccountUsersUserIdResetLockout<
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
                  ReturnType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>,
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
  const mutationDefaults = getPatchAccountUsersUserIdResetLockoutMutationOptions<
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

export function getPatchAccountUsersUserIdResetMFAMutationKey() {
  return ['account', '/account/users/:user_id/resetMFA', 'PATCH'] as const
}

export function getPatchAccountUsersUserIdResetMFAMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountUsersUserIdResetMFAMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>,
    ) {
      return parseResponse(client.account.users[':user_id'].resetMFA.$patch(args, options))
    },
  })
}

export function usePatchAccountUsersUserIdResetMFA<
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
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>,
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
  const mutationDefaults = getPatchAccountUsersUserIdResetMFAMutationOptions<
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

export function getPatchAccountUsersUserIdResetPasswordMutationKey() {
  return ['account', '/account/users/:user_id/resetPassword', 'PATCH'] as const
}

export function getPatchAccountUsersUserIdResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountUsersUserIdResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>,
    ) {
      return parseResponse(client.account.users[':user_id'].resetPassword.$patch(args, options))
    },
  })
}

export function usePatchAccountUsersUserIdResetPassword<
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
                  ReturnType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>,
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
  const mutationDefaults = getPatchAccountUsersUserIdResetPasswordMutationOptions<
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

export function getExportOrgAssetsCiscoCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>>,
) {
  return ['export', '/export/org/assets.cisco.csv', toValue(args)] as const
}

export function getExportOrgAssetsCiscoCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsCiscoCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.cisco.csv'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsCiscoCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsCiscoCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsCiscoCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsCiscoCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.cisco.csv'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.csv']['$get']>>,
) {
  return ['export', '/export/org/assets.csv', toValue(args)] as const
}

export function getExportOrgAssetsCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.csv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.csv'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.csv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsCsvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.csv'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.json']['$get']>>,
) {
  return ['export', '/export/org/assets.json', toValue(args)] as const
}

export function getExportOrgAssetsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>>,
) {
  return ['export', '/export/org/assets.jsonl', toValue(args)] as const
}

export function getExportOrgAssetsJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsJsonlQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsNmapXmlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>>,
) {
  return ['export', '/export/org/assets.nmap.xml', toValue(args)] as const
}

export function getExportOrgAssetsNmapXmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsNmapXmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.nmap.xml'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsNmapXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsNmapXmlQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsNmapXmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsNmapXmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.nmap.xml'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsServicenowCsvQueryKey() {
  return ['export', '/export/org/assets.servicenow.csv'] as const
}

export function getExportOrgAssetsServicenowCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportOrgAssetsServicenowCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.servicenow.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsServicenowCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsServicenowCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsServicenowCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportOrgAssetsServicenowCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.servicenow.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsServicenowJsonQueryKey() {
  return ['export', '/export/org/assets.servicenow.json'] as const
}

export function getExportOrgAssetsServicenowJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportOrgAssetsServicenowJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['assets.servicenow.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsServicenowJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsServicenowJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsServicenowJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportOrgAssetsServicenowJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['assets.servicenow.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsSyncCreatedAssetsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
  >,
) {
  return ['export', '/export/org/assets/sync/created/assets.json', toValue(args)] as const
}

export function getExportOrgAssetsSyncCreatedAssetsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsSyncCreatedAssetsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org.assets.sync.created['assets.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsSyncCreatedAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
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
                  ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsSyncCreatedAssetsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsSyncCreatedAssetsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsSyncCreatedAssetsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org.assets.sync.created['assets.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
  >,
) {
  return ['export', '/export/org/assets/sync/updated/assets.json', toValue(args)] as const
}

export function getExportOrgAssetsSyncUpdatedAssetsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org.assets.sync.updated['assets.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgAssetsSyncUpdatedAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
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
                  ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org.assets.sync.updated['assets.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgServicesCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.csv']['$get']>>,
) {
  return ['export', '/export/org/services.csv', toValue(args)] as const
}

export function getExportOrgServicesCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.csv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgServicesCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['services.csv'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgServicesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.csv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgServicesCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgServicesCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgServicesCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['services.csv'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgServicesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.json']['$get']>>,
) {
  return ['export', '/export/org/services.json', toValue(args)] as const
}

export function getExportOrgServicesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgServicesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['services.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgServicesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgServicesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgServicesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgServicesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['services.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgServicesJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>>,
) {
  return ['export', '/export/org/services.jsonl', toValue(args)] as const
}

export function getExportOrgServicesJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgServicesJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['services.jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgServicesJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgServicesJsonlQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgServicesJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgServicesJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['services.jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgServicesServicenowCsvQueryKey() {
  return ['export', '/export/org/services.servicenow.csv'] as const
}

export function getExportOrgServicesServicenowCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportOrgServicesServicenowCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['services.servicenow.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgServicesServicenowCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgServicesServicenowCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgServicesServicenowCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportOrgServicesServicenowCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['services.servicenow.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgSitesCsvQueryKey() {
  return ['export', '/export/org/sites.csv'] as const
}

export function getExportOrgSitesCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExportOrgSitesCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['sites.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgSitesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgSitesCsvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExportOrgSitesCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['sites.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgSitesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.json']['$get']>>,
) {
  return ['export', '/export/org/sites.json', toValue(args)] as const
}

export function getExportOrgSitesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgSitesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['sites.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgSitesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgSitesJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgSitesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['sites.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgSitesJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>>,
) {
  return ['export', '/export/org/sites.jsonl', toValue(args)] as const
}

export function getExportOrgSitesJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgSitesJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['sites.jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgSitesJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgSitesJsonlQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgSitesJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['sites.jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgWirelessCsvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>>,
) {
  return ['export', '/export/org/wireless.csv', toValue(args)] as const
}

export function getExportOrgWirelessCsvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgWirelessCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['wireless.csv'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgWirelessCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgWirelessCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgWirelessCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgWirelessCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['wireless.csv'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgWirelessJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.json']['$get']>>,
) {
  return ['export', '/export/org/wireless.json', toValue(args)] as const
}

export function getExportOrgWirelessJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgWirelessJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['wireless.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgWirelessJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgWirelessJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgWirelessJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgWirelessJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['wireless.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExportOrgWirelessJsonlQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>>,
) {
  return ['export', '/export/org/wireless.jsonl', toValue(args)] as const
}

export function getExportOrgWirelessJsonlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportOrgWirelessJsonlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.org['wireless.jsonl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportOrgWirelessJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportOrgWirelessJsonlQueryKey>
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
          Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgWirelessJsonlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportOrgWirelessJsonlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.org['wireless.jsonl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          ReturnType<typeof getOrgQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchOrgMutationKey() {
  return ['org', '/org', 'PATCH'] as const
}

export function getPatchOrgMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$patch>>>>>,
    TError,
    InferRequestType<typeof client.org.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.$patch>) {
      return parseResponse(client.org.$patch(args, options))
    },
  })
}

export function usePatchOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$patch>>>>>,
          TError,
          InferRequestType<typeof client.org.$patch>,
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
  const mutationDefaults = getPatchOrgMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgAgentsQueryKey() {
  return ['org', '/org/agents'] as const
}

export function getOrgAgentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgAgentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.agents.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
          >,
          ReturnType<typeof getOrgAgentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgAgentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.agents.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgAgentsAgentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>>,
) {
  return ['org', '/org/agents/:agent_id', toValue(args)] as const
}

export function getOrgAgentsAgentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgAgentsAgentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.agents[':agent_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAgentsAgentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAgentsAgentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgAgentsAgentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.agents[':agent_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgAgentsAgentIdMutationKey() {
  return ['org', '/org/agents/:agent_id', 'DELETE'] as const
}

export function getDeleteOrgAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']>) {
      return parseResponse(client.org.agents[':agent_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrgAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOrgAgentsAgentIdMutationKey() {
  return ['org', '/org/agents/:agent_id', 'PATCH'] as const
}

export function getPatchOrgAgentsAgentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgAgentsAgentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']>) {
      return parseResponse(client.org.agents[':agent_id'].$patch(args, options))
    },
  })
}

export function usePatchOrgAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']>,
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
  const mutationDefaults = getPatchOrgAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrgAgentsAgentIdUpdateMutationKey() {
  return ['org', '/org/agents/:agent_id/update', 'POST'] as const
}

export function getPostOrgAgentsAgentIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['update']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgAgentsAgentIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']>,
    ) {
      return parseResponse(client.org.agents[':agent_id'].update.$post(args, options))
    },
  })
}

export function usePostOrgAgentsAgentIdUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['update']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']>,
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
  const mutationDefaults = getPostOrgAgentsAgentIdUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getOrgAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.assets.$get>>,
) {
  return ['org', '/org/assets', toValue(args)] as const
}

export function getOrgAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
          >,
          ReturnType<typeof getOrgAssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrgAssetsBulkClearTagsMutationKey() {
  return ['org', '/org/assets/bulk/clearTags', 'POST'] as const
}

export function getPostOrgAssetsBulkClearTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.clearTags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.org.assets.bulk.clearTags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgAssetsBulkClearTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.assets.bulk.clearTags.$post>) {
      return parseResponse(client.org.assets.bulk.clearTags.$post(args, options))
    },
  })
}

export function usePostOrgAssetsBulkClearTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.org.assets.bulk.clearTags.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.org.assets.bulk.clearTags.$post>,
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
  const mutationDefaults = getPostOrgAssetsBulkClearTagsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOrgAssetsBulkTagsMutationKey() {
  return ['org', '/org/assets/bulk/tags', 'PATCH'] as const
}

export function getPatchOrgAssetsBulkTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.tags.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.org.assets.bulk.tags.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgAssetsBulkTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.assets.bulk.tags.$patch>) {
      return parseResponse(client.org.assets.bulk.tags.$patch(args, options))
    },
  })
}

export function usePatchOrgAssetsBulkTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.tags.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.org.assets.bulk.tags.$patch>,
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
  const mutationDefaults = getPatchOrgAssetsBulkTagsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgAssetsTopHwCsvQueryKey() {
  return ['org', '/org/assets/top.hw.csv'] as const
}

export function getOrgAssetsTopHwCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgAssetsTopHwCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets['top.hw.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAssetsTopHwCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAssetsTopHwCsvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopHwCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgAssetsTopHwCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets['top.hw.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgAssetsTopOsCsvQueryKey() {
  return ['org', '/org/assets/top.os.csv'] as const
}

export function getOrgAssetsTopOsCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgAssetsTopOsCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets['top.os.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAssetsTopOsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAssetsTopOsCsvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopOsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgAssetsTopOsCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets['top.os.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgAssetsTopTagsCsvQueryKey() {
  return ['org', '/org/assets/top.tags.csv'] as const
}

export function getOrgAssetsTopTagsCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgAssetsTopTagsCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets['top.tags.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAssetsTopTagsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAssetsTopTagsCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopTagsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgAssetsTopTagsCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets['top.tags.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgAssetsTopTypesCsvQueryKey() {
  return ['org', '/org/assets/top.types.csv'] as const
}

export function getOrgAssetsTopTypesCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgAssetsTopTypesCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets['top.types.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAssetsTopTypesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAssetsTopTypesCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopTypesCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgAssetsTopTypesCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets['top.types.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>>,
) {
  return ['org', '/org/assets/:asset_id', toValue(args)] as const
}

export function getOrgAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.assets[':asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgAssetsAssetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.assets[':asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgAssetsAssetIdMutationKey() {
  return ['org', '/org/assets/:asset_id', 'DELETE'] as const
}

export function getDeleteOrgAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']>) {
      return parseResponse(client.org.assets[':asset_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrgAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOrgAssetsAssetIdCommentsMutationKey() {
  return ['org', '/org/assets/:asset_id/comments', 'PATCH'] as const
}

export function getPatchOrgAssetsAssetIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgAssetsAssetIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>,
    ) {
      return parseResponse(client.org.assets[':asset_id'].comments.$patch(args, options))
    },
  })
}

export function usePatchOrgAssetsAssetIdComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>,
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
  const mutationDefaults = getPatchOrgAssetsAssetIdCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOrgAssetsAssetIdTagsMutationKey() {
  return ['org', '/org/assets/:asset_id/tags', 'PATCH'] as const
}

export function getPatchOrgAssetsAssetIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgAssetsAssetIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>,
    ) {
      return parseResponse(client.org.assets[':asset_id'].tags.$patch(args, options))
    },
  })
}

export function usePatchOrgAssetsAssetIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>,
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
  const mutationDefaults = getPatchOrgAssetsAssetIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgKeyQueryKey() {
  return ['org', '/org/key'] as const
}

export function getOrgKeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgKeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.key.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
          >,
          ReturnType<typeof getOrgKeyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgKeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.key.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgKeyMutationKey() {
  return ['org', '/org/key', 'DELETE'] as const
}

export function getDeleteOrgKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.org.key.$delete(undefined, options))
    },
  })
}

export function useDeleteOrgKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$delete>>>>
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
  const mutationDefaults = getDeleteOrgKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchOrgKeyRotateMutationKey() {
  return ['org', '/org/key/rotate', 'PATCH'] as const
}

export function getPatchOrgKeyRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.rotate.$patch>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgKeyRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.org.key.rotate.$patch(undefined, options))
    },
  })
}

export function usePatchOrgKeyRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.key.rotate.$patch>>>
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
  const mutationDefaults = getPatchOrgKeyRotateMutationOptions<TError, TOnMutateResult>(
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

export function getOrgServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.services.$get>>,
) {
  return ['org', '/org/services', toValue(args)] as const
}

export function getOrgServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
          >,
          ReturnType<typeof getOrgServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesSubnetStatsCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>
  >,
) {
  return ['org', '/org/services/subnet.stats.csv', toValue(args)] as const
}

export function getOrgServicesSubnetStatsCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgServicesSubnetStatsCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services['subnet.stats.csv'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesSubnetStatsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesSubnetStatsCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesSubnetStatsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgServicesSubnetStatsCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services['subnet.stats.csv'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesTopProductsCsvQueryKey() {
  return ['org', '/org/services/top.products.csv'] as const
}

export function getOrgServicesTopProductsCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgServicesTopProductsCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services['top.products.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesTopProductsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesTopProductsCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesTopProductsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgServicesTopProductsCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services['top.products.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesTopProtocolsCsvQueryKey() {
  return ['org', '/org/services/top.protocols.csv'] as const
}

export function getOrgServicesTopProtocolsCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgServicesTopProtocolsCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services['top.protocols.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesTopProtocolsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesTopProtocolsCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesTopProtocolsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgServicesTopProtocolsCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services['top.protocols.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesTopTcpCsvQueryKey() {
  return ['org', '/org/services/top.tcp.csv'] as const
}

export function getOrgServicesTopTcpCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgServicesTopTcpCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services['top.tcp.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesTopTcpCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesTopTcpCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesTopTcpCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgServicesTopTcpCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services['top.tcp.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesTopUdpCsvQueryKey() {
  return ['org', '/org/services/top.udp.csv'] as const
}

export function getOrgServicesTopUdpCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgServicesTopUdpCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services['top.udp.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesTopUdpCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesTopUdpCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesTopUdpCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgServicesTopUdpCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services['top.udp.csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgServicesServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.services)[':service_id']['$get']>>,
) {
  return ['org', '/org/services/:service_id', toValue(args)] as const
}

export function getOrgServicesServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.services)[':service_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgServicesServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.services[':service_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.services)[':service_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgServicesServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgServicesServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgServicesServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.services[':service_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgServicesServiceIdMutationKey() {
  return ['org', '/org/services/:service_id', 'DELETE'] as const
}

export function getDeleteOrgServicesServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.services)[':service_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.services)[':service_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgServicesServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.services)[':service_id']['$delete']>,
    ) {
      return parseResponse(client.org.services[':service_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrgServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.services)[':service_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.services)[':service_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgServicesServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrgSitesQueryKey() {
  return ['org', '/org/sites'] as const
}

export function getOrgSitesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgSitesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.sites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
          >,
          ReturnType<typeof getOrgSitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgSitesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.sites.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrgSitesMutationKey() {
  return ['org', '/org/sites', 'PUT'] as const
}

export function getPutOrgSitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$put>>>>>,
    TError,
    InferRequestType<typeof client.org.sites.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgSitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.sites.$put>) {
      return parseResponse(client.org.sites.$put(args, options))
    },
  })
}

export function usePutOrgSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.org.sites.$put>,
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
  const mutationDefaults = getPutOrgSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgSitesSiteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.sites)[':site_id']['$get']>>,
) {
  return ['org', '/org/sites/:site_id', toValue(args)] as const
}

export function getOrgSitesSiteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.sites)[':site_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgSitesSiteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.sites[':site_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgSitesSiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.sites)[':site_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgSitesSiteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgSitesSiteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgSitesSiteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.sites[':site_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgSitesSiteIdMutationKey() {
  return ['org', '/org/sites/:site_id', 'DELETE'] as const
}

export function getDeleteOrgSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.sites)[':site_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.sites)[':site_id']['$delete']>) {
      return parseResponse(client.org.sites[':site_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrgSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOrgSitesSiteIdMutationKey() {
  return ['org', '/org/sites/:site_id', 'PATCH'] as const
}

export function getPatchOrgSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org.sites)[':site_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.sites)[':site_id']['$patch']>) {
      return parseResponse(client.org.sites[':site_id'].$patch(args, options))
    },
  })
}

export function usePatchOrgSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['$patch']>,
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
  const mutationDefaults = getPatchOrgSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrgSitesSiteIdImportMutationKey() {
  return ['org', '/org/sites/:site_id/import', 'PUT'] as const
}

export function getPutOrgSitesSiteIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['import']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgSitesSiteIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']>,
    ) {
      return parseResponse(client.org.sites[':site_id'].import.$put(args, options))
    },
  })
}

export function usePutOrgSitesSiteIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['import']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']>,
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
  const mutationDefaults = getPutOrgSitesSiteIdImportMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrgSitesSiteIdImportNessusMutationKey() {
  return ['org', '/org/sites/:site_id/import/nessus', 'PUT'] as const
}

export function getPutOrgSitesSiteIdImportNessusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgSitesSiteIdImportNessusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>,
    ) {
      return parseResponse(client.org.sites[':site_id'].import.nessus.$put(args, options))
    },
  })
}

export function usePutOrgSitesSiteIdImportNessus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>,
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
  const mutationDefaults = getPutOrgSitesSiteIdImportNessusMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrgSitesSiteIdScanMutationKey() {
  return ['org', '/org/sites/:site_id/scan', 'PUT'] as const
}

export function getPutOrgSitesSiteIdScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.sites)[':site_id']['scan']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgSitesSiteIdScanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']>,
    ) {
      return parseResponse(client.org.sites[':site_id'].scan.$put(args, options))
    },
  })
}

export function usePutOrgSitesSiteIdScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['scan']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']>,
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
  const mutationDefaults = getPutOrgSitesSiteIdScanMutationOptions<TError, TOnMutateResult>(
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

export function getOrgTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.tasks.$get>>,
) {
  return ['org', '/org/tasks', toValue(args)] as const
}

export function getOrgTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
          >,
          ReturnType<typeof getOrgTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>>,
) {
  return ['org', '/org/tasks/:task_id', toValue(args)] as const
}

export function getOrgTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgTasksTaskIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchOrgTasksTaskIdMutationKey() {
  return ['org', '/org/tasks/:task_id', 'PATCH'] as const
}

export function getPatchOrgTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgTasksTaskIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']>) {
      return parseResponse(client.org.tasks[':task_id'].$patch(args, options))
    },
  })
}

export function usePatchOrgTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']>,
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
  const mutationDefaults = getPatchOrgTasksTaskIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrgTasksTaskIdChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>
  >,
) {
  return ['org', '/org/tasks/:task_id/changes', toValue(args)] as const
}

export function getOrgTasksTaskIdChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgTasksTaskIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.tasks[':task_id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgTasksTaskIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgTasksTaskIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgTasksTaskIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgTasksTaskIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.tasks[':task_id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgTasksTaskIdDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>>,
) {
  return ['org', '/org/tasks/:task_id/data', toValue(args)] as const
}

export function getOrgTasksTaskIdDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgTasksTaskIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.tasks[':task_id'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgTasksTaskIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgTasksTaskIdDataQueryKey>
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
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgTasksTaskIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgTasksTaskIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.tasks[':task_id'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrgTasksTaskIdHideMutationKey() {
  return ['org', '/org/tasks/:task_id/hide', 'POST'] as const
}

export function getPostOrgTasksTaskIdHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['hide']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgTasksTaskIdHideMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']>,
    ) {
      return parseResponse(client.org.tasks[':task_id'].hide.$post(args, options))
    },
  })
}

export function usePostOrgTasksTaskIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['hide']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']>,
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
  const mutationDefaults = getPostOrgTasksTaskIdHideMutationOptions<TError, TOnMutateResult>(
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

export function getOrgTasksTaskIdLogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>>,
) {
  return ['org', '/org/tasks/:task_id/log', toValue(args)] as const
}

export function getOrgTasksTaskIdLogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgTasksTaskIdLogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.tasks[':task_id'].log.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgTasksTaskIdLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgTasksTaskIdLogQueryKey>
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
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgTasksTaskIdLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgTasksTaskIdLogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.tasks[':task_id'].log.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrgTasksTaskIdStopMutationKey() {
  return ['org', '/org/tasks/:task_id/stop', 'POST'] as const
}

export function getPostOrgTasksTaskIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgTasksTaskIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']>,
    ) {
      return parseResponse(client.org.tasks[':task_id'].stop.$post(args, options))
    },
  })
}

export function usePostOrgTasksTaskIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']>,
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
  const mutationDefaults = getPostOrgTasksTaskIdStopMutationOptions<TError, TOnMutateResult>(
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

export function getOrgWirelessQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.wireless.$get>>,
) {
  return ['org', '/org/wireless', toValue(args)] as const
}

export function getOrgWirelessQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.wireless.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgWirelessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.wireless.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgWireless<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.wireless.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
          >,
          ReturnType<typeof getOrgWirelessQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgWirelessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgWirelessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.wireless.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgWirelessWirelessIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>>,
) {
  return ['org', '/org/wireless/:wireless_id', toValue(args)] as const
}

export function getOrgWirelessWirelessIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgWirelessWirelessIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.wireless[':wireless_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgWirelessWirelessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgWirelessWirelessIdQueryKey>
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
          Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgWirelessWirelessIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgWirelessWirelessIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.wireless[':wireless_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrgWirelessWirelessIdMutationKey() {
  return ['org', '/org/wireless/:wireless_id', 'DELETE'] as const
}

export function getDeleteOrgWirelessWirelessIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgWirelessWirelessIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']>,
    ) {
      return parseResponse(client.org.wireless[':wireless_id'].$delete(args, options))
    },
  })
}

export function useDeleteOrgWirelessWirelessId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgWirelessWirelessIdMutationOptions<TError, TOnMutateResult>(
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

export function getReleasesAgentVersionQueryKey() {
  return ['releases', '/releases/agent/version'] as const
}

export function getReleasesAgentVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReleasesAgentVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.releases.agent.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReleasesAgentVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
            >
          >,
          ReturnType<typeof getReleasesAgentVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesAgentVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReleasesAgentVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.releases.agent.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReleasesPlatformVersionQueryKey() {
  return ['releases', '/releases/platform/version'] as const
}

export function getReleasesPlatformVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReleasesPlatformVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.releases.platform.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReleasesPlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.releases.platform.version.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.releases.platform.version.$get>>
              >
            >
          >,
          ReturnType<typeof getReleasesPlatformVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesPlatformVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReleasesPlatformVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.releases.platform.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReleasesScannerVersionQueryKey() {
  return ['releases', '/releases/scanner/version'] as const
}

export function getReleasesScannerVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReleasesScannerVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.releases.scanner.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReleasesScannerVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
            >
          >,
          ReturnType<typeof getReleasesScannerVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesScannerVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReleasesScannerVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.releases.scanner.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
