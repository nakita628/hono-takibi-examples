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
  args: InferRequestType<typeof client.account.agents.$get>,
) {
  return ['account', '/account/agents', args] as const
}

export function getAccountAgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.agents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAgentsQueryKey>
  >({
    queryKey: getAccountAgentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.agents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.agents.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.agents.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountAgentsQueryKey>
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
    return { ...getAccountAgentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountCredentialsQueryKey(
  args: InferRequestType<typeof client.account.credentials.$get>,
) {
  return ['account', '/account/credentials', args] as const
}

export function getAccountCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.credentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCredentialsQueryKey>
  >({
    queryKey: getAccountCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.credentials.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountCredentialsQueryKey>
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
    return { ...getAccountCredentialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.credentials.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.credentials.$put>,
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
    const mutationDefaults = getPutAccountCredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountCredentialsCredentialIdQueryKey(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
) {
  return ['account', '/account/credentials/:credential_id', args] as const
}

export function getAccountCredentialsCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountCredentialsCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.credentials[':credential_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountCredentialsCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.credentials)[':credential_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAccountCredentialsCredentialIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountCredentialsCredentialId<
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
                    ReturnType<(typeof client.account.credentials)[':credential_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountCredentialsCredentialIdMutationOptions<
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

export function getAccountEventsJsonQueryKey(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
) {
  return ['account', '/account/events.json', args] as const
}

export function getAccountEventsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsJsonQueryKey>
  >({
    queryKey: getAccountEventsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['events.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountEventsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)['events.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountEventsJsonQueryKey>
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
    return { ...getAccountEventsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountEventsJsonlQueryKey(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
) {
  return ['account', '/account/events.jsonl', args] as const
}

export function getAccountEventsJsonlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEventsJsonlQueryKey>
  >({
    queryKey: getAccountEventsJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account['events.jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountEventsJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)['events.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountEventsJsonlQueryKey>
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
    return { ...getAccountEventsJsonlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountGroupsQueryKey() {
  return ['account', '/account/groups'] as const
}

export function getAccountGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountGroupsQueryKey>
  >({
    queryKey: getAccountGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountGroupsQueryKey>
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
    return { ...getAccountGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.groups.$put>,
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
    const mutationDefaults = getPutAccountGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.groups.$post>,
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
    const mutationDefaults = getPostAccountGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
) {
  return ['account', '/account/groups/:group_id', args] as const
}

export function getAccountGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.groups)[':group_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAccountGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteAccountGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountKeysQueryKey() {
  return ['account', '/account/keys'] as const
}

export function getAccountKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountKeysQueryKey>
  >({
    queryKey: getAccountKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountKeysQueryKey>
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
    return { ...getAccountKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.keys.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.keys.$put>,
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
    const mutationDefaults = getPutAccountKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
) {
  return ['account', '/account/keys/:key_id', args] as const
}

export function getAccountKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountKeysKeyIdQueryKey>
  >({
    queryKey: getAccountKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.keys[':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.keys)[':key_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountKeysKeyIdQueryKey>
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
    return { ...getAccountKeysKeyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccountKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteAccountKeysKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAccountKeysKeyIdRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchAccountKeysKeyIdRotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountLicenseQueryKey() {
  return ['account', '/account/license'] as const
}

export function getAccountLicenseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountLicenseQueryKey>
  >({
    queryKey: getAccountLicenseQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.license.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountLicense<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.license.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountLicenseQueryKey>
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
    return { ...getAccountLicenseQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountOrgsQueryKey(args: InferRequestType<typeof client.account.orgs.$get>) {
  return ['account', '/account/orgs', args] as const
}

export function getAccountOrgsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.orgs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountOrgsQueryKey>
  >({
    queryKey: getAccountOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.orgs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountOrgs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.orgs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountOrgsQueryKey>
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
    return { ...getAccountOrgsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.orgs.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.orgs.$put>,
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
    const mutationDefaults = getPutAccountOrgsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountOrgsOrgIdQueryKey(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
) {
  return ['account', '/account/orgs/:org_id', args] as const
}

export function getAccountOrgsOrgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountOrgsOrgIdQueryKey>
  >({
    queryKey: getAccountOrgsOrgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.orgs[':org_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountOrgsOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.orgs)[':org_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountOrgsOrgIdQueryKey>
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
    return { ...getAccountOrgsOrgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccountOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteAccountOrgsOrgIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAccountOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchAccountOrgsOrgIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAccountOrgsOrgIdExportToken<
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
                    ReturnType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>,
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
    const mutationDefaults = getDeleteAccountOrgsOrgIdExportTokenMutationOptions<
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

export function createPatchAccountOrgsOrgIdExportTokenRotate<
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
    const mutationDefaults = getPatchAccountOrgsOrgIdExportTokenRotateMutationOptions<
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

export function getAccountSitesQueryKey(args: InferRequestType<typeof client.account.sites.$get>) {
  return ['account', '/account/sites', args] as const
}

export function getAccountSitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSitesQueryKey>
  >({
    queryKey: getAccountSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.sites.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sites.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountSitesQueryKey>
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
    return { ...getAccountSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountSsoGroupsQueryKey() {
  return ['account', '/account/sso/groups'] as const
}

export function getAccountSsoGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSsoGroupsQueryKey>
  >({
    queryKey: getAccountSsoGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.sso.groups.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountSsoGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountSsoGroupsQueryKey>
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
    return { ...getAccountSsoGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountSsoGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sso.groups.$put>,
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
    const mutationDefaults = getPutAccountSsoGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountSsoGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sso.groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sso.groups.$post>,
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
    const mutationDefaults = getPostAccountSsoGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountSsoGroupsGroupMappingIdQueryKey(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
) {
  return ['account', '/account/sso/groups/:group_mapping_id', args] as const
}

export function getAccountSsoGroupsGroupMappingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountSsoGroupsGroupMappingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.sso.groups[':group_mapping_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountSsoGroupsGroupMappingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAccountSsoGroupsGroupMappingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountSsoGroupsGroupMappingId<
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
                    ReturnType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountSsoGroupsGroupMappingIdMutationOptions<
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

export function getAccountTasksQueryKey(args: InferRequestType<typeof client.account.tasks.$get>) {
  return ['account', '/account/tasks', args] as const
}

export function getAccountTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTasksQueryKey>
  >({
    queryKey: getAccountTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.tasks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountTasksQueryKey>
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
    return { ...getAccountTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountTasksTemplatesQueryKey(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
) {
  return ['account', '/account/tasks/templates', args] as const
}

export function getAccountTasksTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTasksTemplatesQueryKey>
  >({
    queryKey: getAccountTasksTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.tasks.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountTasksTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.tasks.templates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountTasksTemplatesQueryKey>
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
      ...getAccountTasksTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountTasksTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tasks.templates.$put>,
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
    const mutationDefaults = getPutAccountTasksTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountTasksTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tasks.templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tasks.templates.$post>,
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
    const mutationDefaults = getPostAccountTasksTemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountTasksTemplatesScanTemplateIdQueryKey(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
) {
  return ['account', '/account/tasks/templates/:scan_template_id', args] as const
}

export function getAccountTasksTemplatesScanTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountTasksTemplatesScanTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.tasks.templates[':scan_template_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountTasksTemplatesScanTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.tasks.templates)[':scan_template_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAccountTasksTemplatesScanTemplateIdQueryKey>
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
      ...getAccountTasksTemplatesScanTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountTasksTemplatesScanTemplateId<
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
                    (typeof client.account.tasks.templates)[':scan_template_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountTasksTemplatesScanTemplateIdMutationOptions<
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

export function getAccountUsersQueryKey() {
  return ['account', '/account/users'] as const
}

export function getAccountUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersQueryKey>
  >({
    queryKey: getAccountUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountUsersQueryKey>
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
    return { ...getAccountUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.users.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.account.users.$put>,
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
    const mutationDefaults = getPutAccountUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAccountUsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.users.invite.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.users.invite.$put>,
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
    const mutationDefaults = getPutAccountUsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
) {
  return ['account', '/account/users/:user_id', args] as const
}

export function getAccountUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountUsersUserIdQueryKey>
  >({
    queryKey: getAccountUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountUsersUserIdQueryKey>
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
    return { ...getAccountUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccountUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteAccountUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAccountUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchAccountUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAccountUsersUserIdResetLockout<
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
                  ReturnType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>,
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
    const mutationDefaults = getPatchAccountUsersUserIdResetLockoutMutationOptions<
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

export function createPatchAccountUsersUserIdResetMFA<
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
                Awaited<ReturnType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>,
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
    const mutationDefaults = getPatchAccountUsersUserIdResetMFAMutationOptions<
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

export function createPatchAccountUsersUserIdResetPassword<
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
                  ReturnType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>,
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
    const mutationDefaults = getPatchAccountUsersUserIdResetPasswordMutationOptions<
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

export function getExportOrgAssetsCiscoCsvQueryKey(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
) {
  return ['export', '/export/org/assets.cisco.csv', args] as const
}

export function getExportOrgAssetsCiscoCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsCiscoCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.cisco.csv'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsCiscoCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.cisco.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgAssetsCiscoCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsCsvQueryKey(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
) {
  return ['export', '/export/org/assets.csv', args] as const
}

export function getExportOrgAssetsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsCsvQueryKey>
  >({
    queryKey: getExportOrgAssetsCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.csv'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgAssetsCsvQueryKey>
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
    return { ...getExportOrgAssetsCsvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getExportOrgAssetsJsonQueryKey(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets.json', args] as const
}

export function getExportOrgAssetsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgAssetsJsonQueryKey>
  >({
    queryKey: getExportOrgAssetsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['assets.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgAssetsJsonQueryKey>
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
    return { ...getExportOrgAssetsJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getExportOrgAssetsJsonlQueryKey(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
) {
  return ['export', '/export/org/assets.jsonl', args] as const
}

export function getExportOrgAssetsJsonlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['assets.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgAssetsJsonlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsNmapXmlQueryKey(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
) {
  return ['export', '/export/org/assets.nmap.xml', args] as const
}

export function getExportOrgAssetsNmapXmlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsNmapXmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.nmap.xml'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsNmapXml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.nmap.xml']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgAssetsNmapXmlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsServicenowCsvQueryKey() {
  return ['export', '/export/org/assets.servicenow.csv'] as const
}

export function getExportOrgAssetsServicenowCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsServicenowCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.servicenow.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsServicenowCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
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
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgAssetsServicenowCsvQueryKey>
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
      ...getExportOrgAssetsServicenowCsvQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsServicenowJsonQueryKey() {
  return ['export', '/export/org/assets.servicenow.json'] as const
}

export function getExportOrgAssetsServicenowJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsServicenowJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['assets.servicenow.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsServicenowJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
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
                Awaited<ReturnType<(typeof client.export.org)['assets.servicenow.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgAssetsServicenowJsonQueryKey>
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
      ...getExportOrgAssetsServicenowJsonQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsSyncCreatedAssetsJsonQueryKey(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets/sync/created/assets.json', args] as const
}

export function getExportOrgAssetsSyncCreatedAssetsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsSyncCreatedAssetsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org.assets.sync.created['assets.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsSyncCreatedAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.export.org.assets.sync.created)['assets.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getExportOrgAssetsSyncCreatedAssetsJsonQueryKey>
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
      ...getExportOrgAssetsSyncCreatedAssetsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
) {
  return ['export', '/export/org/assets/sync/updated/assets.json', args] as const
}

export function getExportOrgAssetsSyncUpdatedAssetsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org.assets.sync.updated['assets.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgAssetsSyncUpdatedAssetsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.export.org.assets.sync.updated)['assets.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getExportOrgAssetsSyncUpdatedAssetsJsonQueryKey>
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
      ...getExportOrgAssetsSyncUpdatedAssetsJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgServicesCsvQueryKey(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
) {
  return ['export', '/export/org/services.csv', args] as const
}

export function getExportOrgServicesCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgServicesCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['services.csv'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgServicesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgServicesCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgServicesJsonQueryKey(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
) {
  return ['export', '/export/org/services.json', args] as const
}

export function getExportOrgServicesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgServicesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['services.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgServicesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['services.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['services.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgServicesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgServicesJsonlQueryKey(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
) {
  return ['export', '/export/org/services.jsonl', args] as const
}

export function getExportOrgServicesJsonlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgServicesJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['services.jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgServicesJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgServicesJsonlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgServicesServicenowCsvQueryKey() {
  return ['export', '/export/org/services.servicenow.csv'] as const
}

export function getExportOrgServicesServicenowCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgServicesServicenowCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['services.servicenow.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgServicesServicenowCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
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
                Awaited<ReturnType<(typeof client.export.org)['services.servicenow.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgServicesServicenowCsvQueryKey>
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
      ...getExportOrgServicesServicenowCsvQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgSitesCsvQueryKey() {
  return ['export', '/export/org/sites.csv'] as const
}

export function getExportOrgSitesCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesCsvQueryKey>
  >({
    queryKey: getExportOrgSitesCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['sites.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgSitesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.export.org)['sites.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgSitesCsvQueryKey>
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
    return { ...getExportOrgSitesCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getExportOrgSitesJsonQueryKey(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
) {
  return ['export', '/export/org/sites.json', args] as const
}

export function getExportOrgSitesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesJsonQueryKey>
  >({
    queryKey: getExportOrgSitesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['sites.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgSitesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgSitesJsonQueryKey>
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
    return { ...getExportOrgSitesJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getExportOrgSitesJsonlQueryKey(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
) {
  return ['export', '/export/org/sites.jsonl', args] as const
}

export function getExportOrgSitesJsonlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportOrgSitesJsonlQueryKey>
  >({
    queryKey: getExportOrgSitesJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['sites.jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgSitesJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export.org)['sites.jsonl']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportOrgSitesJsonlQueryKey>
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
    return { ...getExportOrgSitesJsonlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getExportOrgWirelessCsvQueryKey(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
) {
  return ['export', '/export/org/wireless.csv', args] as const
}

export function getExportOrgWirelessCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgWirelessCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['wireless.csv'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgWirelessCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgWirelessCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgWirelessJsonQueryKey(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
) {
  return ['export', '/export/org/wireless.json', args] as const
}

export function getExportOrgWirelessJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgWirelessJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['wireless.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgWirelessJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export.org)['wireless.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgWirelessJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getExportOrgWirelessJsonlQueryKey(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
) {
  return ['export', '/export/org/wireless.jsonl', args] as const
}

export function getExportOrgWirelessJsonlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExportOrgWirelessJsonlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export.org['wireless.jsonl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportOrgWirelessJsonl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.export.org)['wireless.jsonl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getExportOrgWirelessJsonlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >({
    queryKey: getOrgQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getOrgQueryKey>
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
    return { ...getOrgQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$patch>>>>>,
          TError,
          InferRequestType<typeof client.org.$patch>,
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
    const mutationDefaults = getPatchOrgMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgAgentsQueryKey() {
  return ['org', '/org/agents'] as const
}

export function getOrgAgentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgAgentsQueryKey>
  >({
    queryKey: getOrgAgentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.agents.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgAgents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.agents.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAgentsQueryKey>
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
    return { ...getOrgAgentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgAgentsAgentIdQueryKey(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
) {
  return ['org', '/org/agents/:agent_id', args] as const
}

export function getOrgAgentsAgentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAgentsAgentIdQueryKey>
  >({
    queryKey: getOrgAgentsAgentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.agents[':agent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAgentsAgentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.agents)[':agent_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAgentsAgentIdQueryKey>
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
    return { ...getOrgAgentsAgentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteOrgAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrgAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgAgentsAgentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchOrgAgentsAgentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostOrgAgentsAgentIdUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostOrgAgentsAgentIdUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgAssetsQueryKey(args: InferRequestType<typeof client.org.assets.$get>) {
  return ['org', '/org/assets', args] as const
}

export function getOrgAssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsQueryKey>
  >({
    queryKey: getOrgAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.assets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsQueryKey>
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
    return { ...getOrgAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgAssetsBulkClearTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostOrgAssetsBulkClearTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgAssetsBulkTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.assets.bulk.tags.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.org.assets.bulk.tags.$patch>,
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
    const mutationDefaults = getPatchOrgAssetsBulkTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgAssetsTopHwCsvQueryKey() {
  return ['org', '/org/assets/top.hw.csv'] as const
}

export function getOrgAssetsTopHwCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopHwCsvQueryKey>
  >({
    queryKey: getOrgAssetsTopHwCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets['top.hw.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAssetsTopHwCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.assets)['top.hw.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsTopHwCsvQueryKey>
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
    return { ...getOrgAssetsTopHwCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgAssetsTopOsCsvQueryKey() {
  return ['org', '/org/assets/top.os.csv'] as const
}

export function getOrgAssetsTopOsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsTopOsCsvQueryKey>
  >({
    queryKey: getOrgAssetsTopOsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets['top.os.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAssetsTopOsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.assets)['top.os.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsTopOsCsvQueryKey>
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
    return { ...getOrgAssetsTopOsCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgAssetsTopTagsCsvQueryKey() {
  return ['org', '/org/assets/top.tags.csv'] as const
}

export function getOrgAssetsTopTagsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgAssetsTopTagsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets['top.tags.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAssetsTopTagsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.assets)['top.tags.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsTopTagsCsvQueryKey>
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
    return { ...getOrgAssetsTopTagsCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgAssetsTopTypesCsvQueryKey() {
  return ['org', '/org/assets/top.types.csv'] as const
}

export function getOrgAssetsTopTypesCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgAssetsTopTypesCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets['top.types.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAssetsTopTypesCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.assets)['top.types.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsTopTypesCsvQueryKey>
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
    return { ...getOrgAssetsTopTypesCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgAssetsAssetIdQueryKey(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
) {
  return ['org', '/org/assets/:asset_id', args] as const
}

export function getOrgAssetsAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgAssetsAssetIdQueryKey>
  >({
    queryKey: getOrgAssetsAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.assets[':asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgAssetsAssetIdQueryKey>
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
    return { ...getOrgAssetsAssetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteOrgAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrgAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgAssetsAssetIdComments<
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
                Awaited<ReturnType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>,
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
    const mutationDefaults = getPatchOrgAssetsAssetIdCommentsMutationOptions<
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

export function createPatchOrgAssetsAssetIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchOrgAssetsAssetIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgKeyQueryKey() {
  return ['org', '/org/key'] as const
}

export function getOrgKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgKeyQueryKey>
  >({
    queryKey: getOrgKeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.key.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgKeyQueryKey>
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
    return { ...getOrgKeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeleteOrgKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.key.$delete>>>>
            >
          | undefined,
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
    const mutationDefaults = getDeleteOrgKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgKeyRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.key.rotate.$patch>>>
            >
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
    const mutationDefaults = getPatchOrgKeyRotateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgServicesQueryKey(args: InferRequestType<typeof client.org.services.$get>) {
  return ['org', '/org/services', args] as const
}

export function getOrgServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.services.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgServicesQueryKey>
  >({
    queryKey: getOrgServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.services.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.services.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgServicesQueryKey>
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
    return { ...getOrgServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrgServicesSubnetStatsCsvQueryKey(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
) {
  return ['org', '/org/services/subnet.stats.csv', args] as const
}

export function getOrgServicesSubnetStatsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesSubnetStatsCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services['subnet.stats.csv'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesSubnetStatsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['subnet.stats.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrgServicesSubnetStatsCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrgServicesTopProductsCsvQueryKey() {
  return ['org', '/org/services/top.products.csv'] as const
}

export function getOrgServicesTopProductsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesTopProductsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services['top.products.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesTopProductsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
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
                Awaited<ReturnType<(typeof client.org.services)['top.products.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgServicesTopProductsCsvQueryKey>
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
    return { ...getOrgServicesTopProductsCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgServicesTopProtocolsCsvQueryKey() {
  return ['org', '/org/services/top.protocols.csv'] as const
}

export function getOrgServicesTopProtocolsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesTopProtocolsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services['top.protocols.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesTopProtocolsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
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
                Awaited<ReturnType<(typeof client.org.services)['top.protocols.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgServicesTopProtocolsCsvQueryKey>
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
    return { ...getOrgServicesTopProtocolsCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgServicesTopTcpCsvQueryKey() {
  return ['org', '/org/services/top.tcp.csv'] as const
}

export function getOrgServicesTopTcpCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesTopTcpCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services['top.tcp.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesTopTcpCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.services)['top.tcp.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgServicesTopTcpCsvQueryKey>
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
    return { ...getOrgServicesTopTcpCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgServicesTopUdpCsvQueryKey() {
  return ['org', '/org/services/top.udp.csv'] as const
}

export function getOrgServicesTopUdpCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesTopUdpCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services['top.udp.csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesTopUdpCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>>
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
                Awaited<ReturnType<(typeof client.org.services)['top.udp.csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgServicesTopUdpCsvQueryKey>
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
    return { ...getOrgServicesTopUdpCsvQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrgServicesServiceIdQueryKey(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
) {
  return ['org', '/org/services/:service_id', args] as const
}

export function getOrgServicesServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgServicesServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.services[':service_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgServicesServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.services)[':service_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrgServicesServiceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrgServicesServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrgServicesServiceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgSitesQueryKey() {
  return ['org', '/org/sites'] as const
}

export function getOrgSitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgSitesQueryKey>
  >({
    queryKey: getOrgSitesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.sites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgSites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgSitesQueryKey>
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
    return { ...getOrgSitesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutOrgSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.sites.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.org.sites.$put>,
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
    const mutationDefaults = getPutOrgSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgSitesSiteIdQueryKey(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
) {
  return ['org', '/org/sites/:site_id', args] as const
}

export function getOrgSitesSiteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgSitesSiteIdQueryKey>
  >({
    queryKey: getOrgSitesSiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.sites[':site_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgSitesSiteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.sites)[':site_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgSitesSiteIdQueryKey>
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
    return { ...getOrgSitesSiteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteOrgSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrgSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchOrgSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchOrgSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrgSitesSiteIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutOrgSitesSiteIdImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutOrgSitesSiteIdImportNessus<
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
                  ReturnType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>,
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
    const mutationDefaults = getPutOrgSitesSiteIdImportNessusMutationOptions<
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

export function createPutOrgSitesSiteIdScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutOrgSitesSiteIdScanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgTasksQueryKey(args: InferRequestType<typeof client.org.tasks.$get>) {
  return ['org', '/org/tasks', args] as const
}

export function getOrgTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgTasksQueryKey>
  >({
    queryKey: getOrgTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.tasks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.tasks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgTasksQueryKey>
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
    return { ...getOrgTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrgTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
) {
  return ['org', '/org/tasks/:task_id', args] as const
}

export function getOrgTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgTasksTaskIdQueryKey>
  >({
    queryKey: getOrgTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.tasks[':task_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrgTasksTaskIdQueryKey>
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
    return { ...getOrgTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchOrgTasksTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPatchOrgTasksTaskIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgTasksTaskIdChangesQueryKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/changes', args] as const
}

export function getOrgTasksTaskIdChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgTasksTaskIdChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.tasks[':task_id'].changes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgTasksTaskIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrgTasksTaskIdChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrgTasksTaskIdDataQueryKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/data', args] as const
}

export function getOrgTasksTaskIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgTasksTaskIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.tasks[':task_id'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgTasksTaskIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getOrgTasksTaskIdDataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgTasksTaskIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostOrgTasksTaskIdHideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgTasksTaskIdLogQueryKey(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
) {
  return ['org', '/org/tasks/:task_id/log', args] as const
}

export function getOrgTasksTaskIdLogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgTasksTaskIdLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.tasks[':task_id'].log.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgTasksTaskIdLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.tasks)[':task_id']['log']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getOrgTasksTaskIdLogQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostOrgTasksTaskIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostOrgTasksTaskIdStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOrgWirelessQueryKey(args: InferRequestType<typeof client.org.wireless.$get>) {
  return ['org', '/org/wireless', args] as const
}

export function getOrgWirelessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.wireless.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgWirelessQueryKey>
  >({
    queryKey: getOrgWirelessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.wireless.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrgWireless<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.wireless.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.wireless.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOrgWirelessQueryKey>
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
    return { ...getOrgWirelessQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrgWirelessWirelessIdQueryKey(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
) {
  return ['org', '/org/wireless/:wireless_id', args] as const
}

export function getOrgWirelessWirelessIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getOrgWirelessWirelessIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.wireless[':wireless_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrgWirelessWirelessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org.wireless)[':wireless_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getOrgWirelessWirelessIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteOrgWirelessWirelessId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteOrgWirelessWirelessIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReleasesAgentVersionQueryKey() {
  return ['releases', '/releases/agent/version'] as const
}

export function getReleasesAgentVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesAgentVersionQueryKey>
  >({
    queryKey: getReleasesAgentVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.releases.agent.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReleasesAgentVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.agent.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReleasesAgentVersionQueryKey>
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
    return { ...getReleasesAgentVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getReleasesPlatformVersionQueryKey() {
  return ['releases', '/releases/platform/version'] as const
}

export function getReleasesPlatformVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesPlatformVersionQueryKey>
  >({
    queryKey: getReleasesPlatformVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.releases.platform.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReleasesPlatformVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.platform.version.$get>>>
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
                Awaited<ReturnType<typeof client.releases.platform.version.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReleasesPlatformVersionQueryKey>
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
    return { ...getReleasesPlatformVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getReleasesScannerVersionQueryKey() {
  return ['releases', '/releases/scanner/version'] as const
}

export function getReleasesScannerVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReleasesScannerVersionQueryKey>
  >({
    queryKey: getReleasesScannerVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.releases.scanner.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReleasesScannerVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.releases.scanner.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReleasesScannerVersionQueryKey>
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
    return { ...getReleasesScannerVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
