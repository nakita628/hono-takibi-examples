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

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getArchivesKey() {
  return ['archives'] as const
}

export function getEventTypesKey() {
  return ['event_types'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPoliciesKey() {
  return ['policies'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getRegistriesKey() {
  return ['registries'] as const
}

export function getRepositoriesKey() {
  return ['repositories'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getSummariesKey() {
  return ['summaries'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getVersionKey() {
  return ['version'] as const
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

export function create<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function createPostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
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
    const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountnameQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountname']['$get']>,
) {
  return ['accounts', '/accounts/:accountname', args] as const
}

export function getAccountsAccountnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameQueryKey>
  >({
    queryKey: getAccountsAccountnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountname'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAccountnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteAccountsAccountnameMutationKey() {
  return ['accounts', '/accounts/:accountname', 'DELETE'] as const
}

export function getDeleteAccountsAccountnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':accountname']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountname']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountnameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':accountname']['$delete']>) {
      return parseResponse(client.accounts[':accountname'].$delete(args, options))
    },
  })
}

export function createDeleteAccountsAccountname<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountname']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':accountname']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAccountnameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAccountsAccountnameStateMutationKey() {
  return ['accounts', '/accounts/:accountname/state', 'PUT'] as const
}

export function getPutAccountsAccountnameStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountname']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountname']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAccountnameStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountname']['state']['$put']>,
    ) {
      return parseResponse(client.accounts[':accountname'].state.$put(args, options))
    },
  })
}

export function createPutAccountsAccountnameState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountname']['state']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountname']['state']['$put']>,
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
    const mutationDefaults = getPutAccountsAccountnameStateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAccountnameUsersQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>,
) {
  return ['accounts', '/accounts/:accountname/users', args] as const
}

export function getAccountsAccountnameUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersQueryKey>
  >({
    queryKey: getAccountsAccountnameUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountname'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountnameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountnameUsersQueryKey>
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
      ...getAccountsAccountnameUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountnameUsersMutationKey() {
  return ['accounts', '/accounts/:accountname/users', 'POST'] as const
}

export function getPostAccountsAccountnameUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':accountname']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountnameUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':accountname']['users']['$post']>,
    ) {
      return parseResponse(client.accounts[':accountname'].users.$post(args, options))
    },
  })
}

export function createPostAccountsAccountnameUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':accountname']['users']['$post']>,
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
    const mutationDefaults = getPostAccountsAccountnameUsersMutationOptions<
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

export function getAccountsAccountnameUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>,
) {
  return ['accounts', '/accounts/:accountname/users/:username', args] as const
}

export function getAccountsAccountnameUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersUsernameQueryKey>
  >({
    queryKey: getAccountsAccountnameUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountnameUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountnameUsersUsernameQueryKey>
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
      ...getAccountsAccountnameUsersUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAccountsAccountnameUsersUsernameMutationKey() {
  return ['accounts', '/accounts/:accountname/users/:username', 'DELETE'] as const
}

export function getDeleteAccountsAccountnameUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountnameUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountname']['users'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountsAccountnameUsersUsername<
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
                    (typeof client.accounts)[':accountname']['users'][':username']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAccountnameUsersUsernameMutationOptions<
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

export function getAccountsAccountnameUsersUsernameCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
  >,
) {
  return ['accounts', '/accounts/:accountname/users/:username/credentials', args] as const
}

export function getAccountsAccountnameUsersUsernameCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersUsernameCredentialsQueryKey>
  >({
    queryKey: getAccountsAccountnameUsersUsernameCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAccountnameUsersUsernameCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountnameUsersUsernameCredentialsQueryKey>
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
      ...getAccountsAccountnameUsersUsernameCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAccountsAccountnameUsersUsernameCredentialsMutationKey() {
  return ['accounts', '/accounts/:accountname/users/:username/credentials', 'POST'] as const
}

export function getPostAccountsAccountnameUsersUsernameCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAccountnameUsersUsernameCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].credentials.$post(args, options),
      )
    },
  })
}

export function createPostAccountsAccountnameUsersUsernameCredentials<
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
                  (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$post']
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
    const mutationDefaults = getPostAccountsAccountnameUsersUsernameCredentialsMutationOptions<
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

export function getDeleteAccountsAccountnameUsersUsernameCredentialsMutationKey() {
  return ['accounts', '/accounts/:accountname/users/:username/credentials', 'DELETE'] as const
}

export function getDeleteAccountsAccountnameUsersUsernameCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAccountnameUsersUsernameCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].credentials.$delete(args, options),
      )
    },
  })
}

export function createDeleteAccountsAccountnameUsersUsernameCredentials<
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
                    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$delete']
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
    const mutationDefaults = getDeleteAccountsAccountnameUsersUsernameCredentialsMutationOptions<
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

export function getArchivesQueryKey() {
  return ['archives', '/archives'] as const
}

export function getArchivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArchivesQueryKey>
  >({
    queryKey: getArchivesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getArchivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchivesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getArchivesImagesQueryKey() {
  return ['archives', '/archives/images'] as const
}

export function getArchivesImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesImagesQueryKey>
  >({
    queryKey: getArchivesImagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.images.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchivesImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchivesImagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostArchivesImagesMutationKey() {
  return ['archives', '/archives/images', 'POST'] as const
}

export function getPostArchivesImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.archives.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchivesImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.archives.images.$post>) {
      return parseResponse(client.archives.images.$post(args, options))
    },
  })
}

export function createPostArchivesImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.archives.images.$post>,
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
    const mutationDefaults = getPostArchivesImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getArchivesImagesImageDigestQueryKey(
  args: InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>,
) {
  return ['archives', '/archives/images/:imageDigest', args] as const
}

export function getArchivesImagesImageDigestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesImagesImageDigestQueryKey>
  >({
    queryKey: getArchivesImagesImageDigestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.images[':imageDigest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArchivesImagesImageDigest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesImagesImageDigestQueryKey>
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
      ...getArchivesImagesImageDigestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteArchivesImagesImageDigestMutationKey() {
  return ['archives', '/archives/images/:imageDigest', 'DELETE'] as const
}

export function getDeleteArchivesImagesImageDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.archives.images)[':imageDigest']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteArchivesImagesImageDigestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.archives.images)[':imageDigest']['$delete']>,
    ) {
      return parseResponse(client.archives.images[':imageDigest'].$delete(args, options))
    },
  })
}

export function createDeleteArchivesImagesImageDigest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.archives.images)[':imageDigest']['$delete']>,
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
    const mutationDefaults = getDeleteArchivesImagesImageDigestMutationOptions<
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

export function getArchivesRulesQueryKey(
  args: InferRequestType<typeof client.archives.rules.$get>,
) {
  return ['archives', '/archives/rules', args] as const
}

export function getArchivesRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archives.rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesRulesQueryKey>
  >({
    queryKey: getArchivesRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createArchivesRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.archives.rules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchivesRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostArchivesRulesMutationKey() {
  return ['archives', '/archives/rules', 'POST'] as const
}

export function getPostArchivesRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.archives.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchivesRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.archives.rules.$post>) {
      return parseResponse(client.archives.rules.$post(args, options))
    },
  })
}

export function createPostArchivesRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.archives.rules.$post>,
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
    const mutationDefaults = getPostArchivesRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getArchivesRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>,
) {
  return ['archives', '/archives/rules/:ruleId', args] as const
}

export function getArchivesRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesRulesRuleIdQueryKey>
  >({
    queryKey: getArchivesRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createArchivesRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getArchivesRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteArchivesRulesRuleIdMutationKey() {
  return ['archives', '/archives/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteArchivesRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.archives.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteArchivesRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.archives.rules)[':ruleId']['$delete']>) {
      return parseResponse(client.archives.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function createDeleteArchivesRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.archives.rules)[':ruleId']['$delete']>,
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
    const mutationDefaults = getDeleteArchivesRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventTypesQueryKey() {
  return ['event_types', '/event_types'] as const
}

export function getEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventTypesQueryKey>
  >({
    queryKey: getEventTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.event_types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteEventsMutationKey() {
  return ['events', '/events', 'DELETE'] as const
}

export function getDeleteEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>>,
    TError,
    InferRequestType<typeof client.events.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$delete>) {
      return parseResponse(client.events.$delete(args, options))
    },
  })
}

export function createDeleteEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.events.$delete>,
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
    const mutationDefaults = getDeleteEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/:eventId', keyArgs] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':eventId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':eventId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteEventsEventIdMutationKey() {
  return ['events', '/events/:eventId', 'DELETE'] as const
}

export function getDeleteEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':eventId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':eventId']['$delete']>) {
      return parseResponse(client.events[':eventId'].$delete(args, options))
    },
  })
}

export function createDeleteEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.events)[':eventId']['$delete']>,
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
    const mutationDefaults = getDeleteEventsEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
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
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImagesQueryKey(args: InferRequestType<typeof client.images.$get>) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images', keyArgs] as const
}

export function getImagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >({
    queryKey: getImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostImagesMutationKey() {
  return ['images', '/images', 'POST'] as const
}

export function getPostImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.$post>) {
      return parseResponse(client.images.$post(args, options))
    },
  })
}

export function createPostImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>>,
        TError,
        InferRequestType<typeof client.images.$post>,
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
    const mutationDefaults = getPostImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteImagesMutationKey() {
  return ['images', '/images', 'DELETE'] as const
}

export function getDeleteImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$delete>>>>>,
    TError,
    InferRequestType<typeof client.images.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.images.$delete>) {
      return parseResponse(client.images.$delete(args, options))
    },
  })
}

export function createDeleteImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.images.$delete>,
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
    const mutationDefaults = getDeleteImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImagesByIdImageIdQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId', keyArgs] as const
}

export function getImagesByIdImageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdQueryKey>
  >({
    queryKey: getImagesByIdImageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesByIdImageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteImagesByIdImageIdMutationKey() {
  return ['images', '/images/by_id/:imageId', 'DELETE'] as const
}

export function getDeleteImagesByIdImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.images.by_id)[':imageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesByIdImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images.by_id)[':imageId']['$delete']>) {
      return parseResponse(client.images.by_id[':imageId'].$delete(args, options))
    },
  })
}

export function createDeleteImagesByIdImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.images.by_id)[':imageId']['$delete']>,
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
    const mutationDefaults = getDeleteImagesByIdImageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImagesByIdImageIdCheckQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/check', keyArgs] as const
}

export function getImagesByIdImageIdCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdCheckQueryKey>
  >({
    queryKey: getImagesByIdImageIdCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdCheckQueryKey>
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
      ...getImagesByIdImageIdCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdContentQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/content', keyArgs] as const
}

export function getImagesByIdImageIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentQueryKey>
  >({
    queryKey: getImagesByIdImageIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdContentQueryKey>
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
      ...getImagesByIdImageIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdContentFilesQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/content/files', keyArgs] as const
}

export function getImagesByIdImageIdContentFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentFilesQueryKey>
  >({
    queryKey: getImagesByIdImageIdContentFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].content.files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdContentFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images.by_id)[':imageId']['content']['files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdContentFilesQueryKey>
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
      ...getImagesByIdImageIdContentFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdContentJavaQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/content/java', keyArgs] as const
}

export function getImagesByIdImageIdContentJavaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentJavaQueryKey>
  >({
    queryKey: getImagesByIdImageIdContentJavaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].content.java.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdContentJava<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdContentJavaQueryKey>
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
      ...getImagesByIdImageIdContentJavaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdContentCtypeQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/content/:ctype', keyArgs] as const
}

export function getImagesByIdImageIdContentCtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentCtypeQueryKey>
  >({
    queryKey: getImagesByIdImageIdContentCtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].content[':ctype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdContentCtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdContentCtypeQueryKey>
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
      ...getImagesByIdImageIdContentCtypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdVulnQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/vuln', keyArgs] as const
}

export function getImagesByIdImageIdVulnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdVulnQueryKey>
  >({
    queryKey: getImagesByIdImageIdVulnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].vuln.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdVuln<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdVulnQueryKey>
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
      ...getImagesByIdImageIdVulnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesByIdImageIdVulnVtypeQueryKey(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/by_id/:imageId/vuln/:vtype', keyArgs] as const
}

export function getImagesByIdImageIdVulnVtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdVulnVtypeQueryKey>
  >({
    queryKey: getImagesByIdImageIdVulnVtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.by_id[':imageId'].vuln[':vtype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesByIdImageIdVulnVtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesByIdImageIdVulnVtypeQueryKey>
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
      ...getImagesByIdImageIdVulnVtypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest', keyArgs] as const
}

export function getImagesImageDigestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestQueryKey>
  >({
    queryKey: getImagesImageDigestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagesImageDigestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteImagesImageDigestMutationKey() {
  return ['images', '/images/:imageDigest', 'DELETE'] as const
}

export function getDeleteImagesImageDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':imageDigest']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesImageDigestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':imageDigest']['$delete']>) {
      return parseResponse(client.images[':imageDigest'].$delete(args, options))
    },
  })
}

export function createDeleteImagesImageDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.images)[':imageDigest']['$delete']>,
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
    const mutationDefaults = getDeleteImagesImageDigestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImagesImageDigestArtifactsFileContentSearchQueryKey(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/file_content_search', args] as const
}

export function getImagesImageDigestArtifactsFileContentSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsFileContentSearchQueryKey>
  >({
    queryKey: getImagesImageDigestArtifactsFileContentSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.file_content_search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestArtifactsFileContentSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestArtifactsFileContentSearchQueryKey>
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
      ...getImagesImageDigestArtifactsFileContentSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestArtifactsRetrievedFilesQueryKey(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/retrieved_files', args] as const
}

export function getImagesImageDigestArtifactsRetrievedFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsRetrievedFilesQueryKey>
  >({
    queryKey: getImagesImageDigestArtifactsRetrievedFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.retrieved_files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestArtifactsRetrievedFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestArtifactsRetrievedFilesQueryKey>
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
      ...getImagesImageDigestArtifactsRetrievedFilesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestArtifactsSecretSearchQueryKey(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/secret_search', args] as const
}

export function getImagesImageDigestArtifactsSecretSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsSecretSearchQueryKey>
  >({
    queryKey: getImagesImageDigestArtifactsSecretSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.secret_search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestArtifactsSecretSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestArtifactsSecretSearchQueryKey>
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
      ...getImagesImageDigestArtifactsSecretSearchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestCheckQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/check', keyArgs] as const
}

export function getImagesImageDigestCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestCheckQueryKey>
  >({
    queryKey: getImagesImageDigestCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestCheckQueryKey>
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
      ...getImagesImageDigestCheckQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestContentQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/content', keyArgs] as const
}

export function getImagesImageDigestContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentQueryKey>
  >({
    queryKey: getImagesImageDigestContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestContentQueryKey>
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
      ...getImagesImageDigestContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestContentFilesQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/content/files', keyArgs] as const
}

export function getImagesImageDigestContentFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentFilesQueryKey>
  >({
    queryKey: getImagesImageDigestContentFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].content.files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestContentFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestContentFilesQueryKey>
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
      ...getImagesImageDigestContentFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestContentJavaQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/content/java', keyArgs] as const
}

export function getImagesImageDigestContentJavaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentJavaQueryKey>
  >({
    queryKey: getImagesImageDigestContentJavaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].content.java.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestContentJava<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestContentJavaQueryKey>
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
      ...getImagesImageDigestContentJavaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestContentMalwareQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/content/malware', keyArgs] as const
}

export function getImagesImageDigestContentMalwareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentMalwareQueryKey>
  >({
    queryKey: getImagesImageDigestContentMalwareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].content.malware.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestContentMalware<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images)[':imageDigest']['content']['malware']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestContentMalwareQueryKey>
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
      ...getImagesImageDigestContentMalwareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestContentCtypeQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/content/:ctype', keyArgs] as const
}

export function getImagesImageDigestContentCtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentCtypeQueryKey>
  >({
    queryKey: getImagesImageDigestContentCtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].content[':ctype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestContentCtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestContentCtypeQueryKey>
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
      ...getImagesImageDigestContentCtypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestMetadataQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/metadata', keyArgs] as const
}

export function getImagesImageDigestMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestMetadataQueryKey>
  >({
    queryKey: getImagesImageDigestMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestMetadataQueryKey>
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
      ...getImagesImageDigestMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestMetadataMtypeQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/metadata/:mtype', keyArgs] as const
}

export function getImagesImageDigestMetadataMtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestMetadataMtypeQueryKey>
  >({
    queryKey: getImagesImageDigestMetadataMtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].metadata[':mtype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestMetadataMtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestMetadataMtypeQueryKey>
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
      ...getImagesImageDigestMetadataMtypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestSbomsNativeQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/sboms/native', keyArgs] as const
}

export function getImagesImageDigestSbomsNativeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestSbomsNativeQueryKey>
  >({
    queryKey: getImagesImageDigestSbomsNativeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].sboms.native.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestSbomsNative<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestSbomsNativeQueryKey>
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
      ...getImagesImageDigestSbomsNativeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestVulnQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/vuln', keyArgs] as const
}

export function getImagesImageDigestVulnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestVulnQueryKey>
  >({
    queryKey: getImagesImageDigestVulnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].vuln.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestVuln<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestVulnQueryKey>
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
      ...getImagesImageDigestVulnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getImagesImageDigestVulnVtypeQueryKey(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['images', '/images/:imageDigest/vuln/:vtype', keyArgs] as const
}

export function getImagesImageDigestVulnVtypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestVulnVtypeQueryKey>
  >({
    queryKey: getImagesImageDigestVulnVtypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':imageDigest'].vuln[':vtype'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImagesImageDigestVulnVtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesImageDigestVulnVtypeQueryKey>
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
      ...getImagesImageDigestVulnVtypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImportImagesMutationKey() {
  return ['import', '/import/images', 'POST'] as const
}

export function getPostImportImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.images.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.import.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import.images.$post>) {
      return parseResponse(client.import.images.$post(args, options))
    },
  })
}

export function createPostImportImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.images.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.import.images.$post>,
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
    const mutationDefaults = getPostImportImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImportsImagesQueryKey() {
  return ['imports', '/imports/images'] as const
}

export function getImportsImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesQueryKey>
  >({
    queryKey: getImportsImagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImportsImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImportsImagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostImportsImagesMutationKey() {
  return ['imports', '/imports/images', 'POST'] as const
}

export function getPostImportsImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesMutationKey(),
    async mutationFn() {
      return parseResponse(client.imports.images.$post(undefined, options))
    },
  })
}

export function createPostImportsImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$post>>>>
        >,
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
    const mutationDefaults = getPostImportsImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImportsImagesOperationIdQueryKey(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>,
) {
  return ['imports', '/imports/images/:operation_id', args] as const
}

export function getImportsImagesOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdQueryKey>
  >({
    queryKey: getImportsImagesOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdQueryKey>
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
      ...getImportsImagesOperationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteImportsImagesOperationIdMutationKey() {
  return ['imports', '/imports/images/:operation_id', 'DELETE'] as const
}

export function getDeleteImportsImagesOperationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImportsImagesOperationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.imports.images)[':operation_id']['$delete']>,
    ) {
      return parseResponse(client.imports.images[':operation_id'].$delete(args, options))
    },
  })
}

export function createDeleteImportsImagesOperationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports.images)[':operation_id']['$delete']>,
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
    const mutationDefaults = getDeleteImportsImagesOperationIdMutationOptions<
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

export function getImportsImagesOperationIdDockerfileQueryKey(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>,
) {
  return ['imports', '/imports/images/:operation_id/dockerfile', args] as const
}

export function getImportsImagesOperationIdDockerfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdDockerfileQueryKey>
  >({
    queryKey: getImportsImagesOperationIdDockerfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].dockerfile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationIdDockerfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.imports.images)[':operation_id']['dockerfile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdDockerfileQueryKey>
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
      ...getImportsImagesOperationIdDockerfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImportsImagesOperationIdDockerfileMutationKey() {
  return ['imports', '/imports/images/:operation_id/dockerfile', 'POST'] as const
}

export function getPostImportsImagesOperationIdDockerfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesOperationIdDockerfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.imports.images)[':operation_id']['dockerfile']['$post']
      >,
    ) {
      return parseResponse(client.imports.images[':operation_id'].dockerfile.$post(args, options))
    },
  })
}

export function createPostImportsImagesOperationIdDockerfile<
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
                ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>,
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
    const mutationDefaults = getPostImportsImagesOperationIdDockerfileMutationOptions<
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

export function getImportsImagesOperationIdImageConfigQueryKey(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>,
) {
  return ['imports', '/imports/images/:operation_id/image_config', args] as const
}

export function getImportsImagesOperationIdImageConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdImageConfigQueryKey>
  >({
    queryKey: getImportsImagesOperationIdImageConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].image_config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationIdImageConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.imports.images)[':operation_id']['image_config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdImageConfigQueryKey>
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
      ...getImportsImagesOperationIdImageConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImportsImagesOperationIdImageConfigMutationKey() {
  return ['imports', '/imports/images/:operation_id/image_config', 'POST'] as const
}

export function getPostImportsImagesOperationIdImageConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesOperationIdImageConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.imports.images)[':operation_id']['image_config']['$post']
      >,
    ) {
      return parseResponse(client.imports.images[':operation_id'].image_config.$post(args, options))
    },
  })
}

export function createPostImportsImagesOperationIdImageConfig<
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
                ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$post']>,
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
    const mutationDefaults = getPostImportsImagesOperationIdImageConfigMutationOptions<
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

export function getImportsImagesOperationIdManifestQueryKey(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>,
) {
  return ['imports', '/imports/images/:operation_id/manifest', args] as const
}

export function getImportsImagesOperationIdManifestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdManifestQueryKey>
  >({
    queryKey: getImportsImagesOperationIdManifestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].manifest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationIdManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdManifestQueryKey>
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
      ...getImportsImagesOperationIdManifestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImportsImagesOperationIdManifestMutationKey() {
  return ['imports', '/imports/images/:operation_id/manifest', 'POST'] as const
}

export function getPostImportsImagesOperationIdManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesOperationIdManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>,
    ) {
      return parseResponse(client.imports.images[':operation_id'].manifest.$post(args, options))
    },
  })
}

export function createPostImportsImagesOperationIdManifest<
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
                ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>,
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
    const mutationDefaults = getPostImportsImagesOperationIdManifestMutationOptions<
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

export function getImportsImagesOperationIdPackagesQueryKey(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>,
) {
  return ['imports', '/imports/images/:operation_id/packages', args] as const
}

export function getImportsImagesOperationIdPackagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdPackagesQueryKey>
  >({
    queryKey: getImportsImagesOperationIdPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].packages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdPackagesQueryKey>
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
      ...getImportsImagesOperationIdPackagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostImportsImagesOperationIdPackagesMutationKey() {
  return ['imports', '/imports/images/:operation_id/packages', 'POST'] as const
}

export function getPostImportsImagesOperationIdPackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesOperationIdPackagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$post']>,
    ) {
      return parseResponse(client.imports.images[':operation_id'].packages.$post(args, options))
    },
  })
}

export function createPostImportsImagesOperationIdPackages<
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
                ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$post']>,
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
    const mutationDefaults = getPostImportsImagesOperationIdPackagesMutationOptions<
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

export function getImportsImagesOperationIdParentManifestQueryKey(
  args: InferRequestType<
    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
  >,
) {
  return ['imports', '/imports/images/:operation_id/parent_manifest', args] as const
}

export function getImportsImagesOperationIdParentManifestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdParentManifestQueryKey>
  >({
    queryKey: getImportsImagesOperationIdParentManifestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.images[':operation_id'].parent_manifest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createImportsImagesOperationIdParentManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportsImagesOperationIdParentManifestQueryKey>
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
      ...getImportsImagesOperationIdParentManifestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostImportsImagesOperationIdParentManifestMutationKey() {
  return ['imports', '/imports/images/:operation_id/parent_manifest', 'POST'] as const
}

export function getPostImportsImagesOperationIdParentManifestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsImagesOperationIdParentManifestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.imports.images)[':operation_id']['parent_manifest']['$post']
      >,
    ) {
      return parseResponse(
        client.imports.images[':operation_id'].parent_manifest.$post(args, options),
      )
    },
  })
}

export function createPostImportsImagesOperationIdParentManifest<
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
                  (typeof client.imports.images)[':operation_id']['parent_manifest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.imports.images)[':operation_id']['parent_manifest']['$post']
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
    const mutationDefaults = getPostImportsImagesOperationIdParentManifestMutationOptions<
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

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function createPostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
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
    const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPoliciesQueryKey(args: InferRequestType<typeof client.policies.$get>) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies', keyArgs] as const
}

export function getPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.policies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >({
    queryKey: getPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.policies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoliciesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPoliciesMutationKey() {
  return ['policies', '/policies', 'POST'] as const
}

export function getPostPoliciesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>>,
    TError,
    InferRequestType<typeof client.policies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.policies.$post>) {
      return parseResponse(client.policies.$post(args, options))
    },
  })
}

export function createPostPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.policies.$post>,
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
    const mutationDefaults = getPostPoliciesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPoliciesPolicyIdQueryKey(
  args: InferRequestType<(typeof client.policies)[':policyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policies', '/policies/:policyId', keyArgs] as const
}

export function getPoliciesPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policies)[':policyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyIdQueryKey>
  >({
    queryKey: getPoliciesPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policies[':policyId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPoliciesPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.policies)[':policyId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPoliciesPolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoliciesPolicyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPoliciesPolicyIdMutationKey() {
  return ['policies', '/policies/:policyId', 'PUT'] as const
}

export function getPutPoliciesPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':policyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPoliciesPolicyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':policyId']['$put']>) {
      return parseResponse(client.policies[':policyId'].$put(args, options))
    },
  })
}

export function createPutPoliciesPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.policies)[':policyId']['$put']>,
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
    const mutationDefaults = getPutPoliciesPolicyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePoliciesPolicyIdMutationKey() {
  return ['policies', '/policies/:policyId', 'DELETE'] as const
}

export function getDeletePoliciesPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.policies)[':policyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePoliciesPolicyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policies)[':policyId']['$delete']>) {
      return parseResponse(client.policies[':policyId'].$delete(args, options))
    },
  })
}

export function createDeletePoliciesPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.policies)[':policyId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.policies)[':policyId']['$delete']>,
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
    const mutationDefaults = getDeletePoliciesPolicyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryImagesByPackageQueryKey(
  args: InferRequestType<typeof client.query.images.by_package.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/images/by_package', keyArgs] as const
}

export function getQueryImagesByPackageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.query.images.by_package.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryImagesByPackageQueryKey>
  >({
    queryKey: getQueryImagesByPackageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.images.by_package.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQueryImagesByPackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.images.by_package.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryImagesByPackageQueryKey>
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
      ...getQueryImagesByPackageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getQueryImagesByVulnerabilityQueryKey(
  args: InferRequestType<typeof client.query.images.by_vulnerability.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['query', '/query/images/by_vulnerability', keyArgs] as const
}

export function getQueryImagesByVulnerabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.query.images.by_vulnerability.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryImagesByVulnerabilityQueryKey>
  >({
    queryKey: getQueryImagesByVulnerabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.images.by_vulnerability.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createQueryImagesByVulnerability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.images.by_vulnerability.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryImagesByVulnerabilityQueryKey>
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
      ...getQueryImagesByVulnerabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getQueryVulnerabilitiesQueryKey(
  args: InferRequestType<typeof client.query.vulnerabilities.$get>,
) {
  return ['query', '/query/vulnerabilities', args] as const
}

export function getQueryVulnerabilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.query.vulnerabilities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryVulnerabilitiesQueryKey>
  >({
    queryKey: getQueryVulnerabilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query.vulnerabilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryVulnerabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query.vulnerabilities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryVulnerabilitiesQueryKey>
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
      ...getQueryVulnerabilitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistriesQueryKey(args: InferRequestType<typeof client.registries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['registries', '/registries', keyArgs] as const
}

export function getRegistriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistriesQueryKey>
  >({
    queryKey: getRegistriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.registries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegistriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRegistriesMutationKey() {
  return ['registries', '/registries', 'POST'] as const
}

export function getPostRegistriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>>,
    TError,
    InferRequestType<typeof client.registries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registries.$post>) {
      return parseResponse(client.registries.$post(args, options))
    },
  })
}

export function createPostRegistries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registries.$post>,
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
    const mutationDefaults = getPostRegistriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegistriesRegistryQueryKey(
  args: InferRequestType<(typeof client.registries)[':registry']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registries', '/registries/:registry', keyArgs] as const
}

export function getRegistriesRegistryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registries)[':registry']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistriesRegistryQueryKey>
  >({
    queryKey: getRegistriesRegistryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registries[':registry'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistriesRegistry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registries)[':registry']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistriesRegistryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistriesRegistryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutRegistriesRegistryMutationKey() {
  return ['registries', '/registries/:registry', 'PUT'] as const
}

export function getPutRegistriesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.registries)[':registry']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRegistriesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registries)[':registry']['$put']>) {
      return parseResponse(client.registries[':registry'].$put(args, options))
    },
  })
}

export function createPutRegistriesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.registries)[':registry']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.registries)[':registry']['$put']>,
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
    const mutationDefaults = getPutRegistriesRegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRegistriesRegistryMutationKey() {
  return ['registries', '/registries/:registry', 'DELETE'] as const
}

export function getDeleteRegistriesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registries)[':registry']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registries)[':registry']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistriesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.registries)[':registry']['$delete']>) {
      return parseResponse(client.registries[':registry'].$delete(args, options))
    },
  })
}

export function createDeleteRegistriesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.registries)[':registry']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.registries)[':registry']['$delete']>,
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
    const mutationDefaults = getDeleteRegistriesRegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRepositoriesMutationKey() {
  return ['repositories', '/repositories', 'POST'] as const
}

export function getPostRepositoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.repositories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.repositories.$post>) {
      return parseResponse(client.repositories.$post(args, options))
    },
  })
}

export function createPostRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.repositories.$post>,
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
    const mutationDefaults = getPostRepositoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function createPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscriptions.$post>,
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
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:subscriptionId', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
      ...getSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSubscriptionsSubscriptionIdMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'PUT'] as const
}

export function getPutSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$put']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].$put(args, options))
    },
  })
}

export function createPutSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$put']>,
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
    const mutationDefaults = getPutSubscriptionsSubscriptionIdMutationOptions<
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

export function getDeleteSubscriptionsSubscriptionIdMutationKey() {
  return ['subscriptions', '/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function getDeleteSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
    ) {
      return parseResponse(client.subscriptions[':subscriptionId'].$delete(args, options))
    },
  })
}

export function createDeleteSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
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
    const mutationDefaults = getDeleteSubscriptionsSubscriptionIdMutationOptions<
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

export function getSummariesImagetagsQueryKey(
  args: InferRequestType<typeof client.summaries.imagetags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['summaries', '/summaries/imagetags', keyArgs] as const
}

export function getSummariesImagetagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.summaries.imagetags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesImagetagsQueryKey>
  >({
    queryKey: getSummariesImagetagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.summaries.imagetags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSummariesImagetags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.summaries.imagetags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSummariesImagetagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSummariesImagetagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSystemQueryKey() {
  return ['system', '/system'] as const
}

export function getSystemQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemQueryKey>
  >({
    queryKey: getSystemQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystem<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSystemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemErrorCodesQueryKey() {
  return ['system', '/system/error_codes'] as const
}

export function getSystemErrorCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemErrorCodesQueryKey>
  >({
    queryKey: getSystemErrorCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.error_codes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemErrorCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemErrorCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemErrorCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemFeedsQueryKey() {
  return ['system', '/system/feeds'] as const
}

export function getSystemFeedsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemFeedsQueryKey>
  >({
    queryKey: getSystemFeedsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.feeds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemFeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemFeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemFeedsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSystemFeedsMutationKey() {
  return ['system', '/system/feeds', 'POST'] as const
}

export function getPostSystemFeedsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.system.feeds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemFeedsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.feeds.$post>) {
      return parseResponse(client.system.feeds.$post(args, options))
    },
  })
}

export function createPostSystemFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.system.feeds.$post>,
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
    const mutationDefaults = getPostSystemFeedsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSystemFeedsFeedMutationKey() {
  return ['system', '/system/feeds/:feed', 'PUT'] as const
}

export function getPutSystemFeedsFeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.system.feeds)[':feed']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.system.feeds)[':feed']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemFeedsFeedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.system.feeds)[':feed']['$put']>) {
      return parseResponse(client.system.feeds[':feed'].$put(args, options))
    },
  })
}

export function createPutSystemFeedsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.system.feeds)[':feed']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.system.feeds)[':feed']['$put']>,
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
    const mutationDefaults = getPutSystemFeedsFeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSystemFeedsFeedMutationKey() {
  return ['system', '/system/feeds/:feed', 'DELETE'] as const
}

export function getDeleteSystemFeedsFeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.system.feeds)[':feed']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.system.feeds)[':feed']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSystemFeedsFeedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.system.feeds)[':feed']['$delete']>) {
      return parseResponse(client.system.feeds[':feed'].$delete(args, options))
    },
  })
}

export function createDeleteSystemFeedsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.feeds)[':feed']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.feeds)[':feed']['$delete']>,
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
    const mutationDefaults = getDeleteSystemFeedsFeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSystemFeedsFeedGroupMutationKey() {
  return ['system', '/system/feeds/:feed/:group', 'PUT'] as const
}

export function getPutSystemFeedsFeedGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.feeds)[':feed'][':group']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemFeedsFeedGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$put']>,
    ) {
      return parseResponse(client.system.feeds[':feed'][':group'].$put(args, options))
    },
  })
}

export function createPutSystemFeedsFeedGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.feeds)[':feed'][':group']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$put']>,
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
    const mutationDefaults = getPutSystemFeedsFeedGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSystemFeedsFeedGroupMutationKey() {
  return ['system', '/system/feeds/:feed/:group', 'DELETE'] as const
}

export function getDeleteSystemFeedsFeedGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.feeds)[':feed'][':group']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSystemFeedsFeedGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$delete']>,
    ) {
      return parseResponse(client.system.feeds[':feed'][':group'].$delete(args, options))
    },
  })
}

export function createDeleteSystemFeedsFeedGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.feeds)[':feed'][':group']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.feeds)[':feed'][':group']['$delete']>,
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
    const mutationDefaults = getDeleteSystemFeedsFeedGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSystemPolicySpecQueryKey() {
  return ['system', '/system/policy_spec'] as const
}

export function getSystemPolicySpecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemPolicySpecQueryKey>
  >({
    queryKey: getSystemPolicySpecQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.policy_spec.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemPolicySpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemPolicySpecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemPolicySpecQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemServicesQueryKey() {
  return ['system', '/system/services'] as const
}

export function getSystemServicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesQueryKey>
  >({
    queryKey: getSystemServicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemServicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemServicesServicenameQueryKey(
  args: InferRequestType<(typeof client.system.services)[':servicename']['$get']>,
) {
  return ['system', '/system/services/:servicename', args] as const
}

export function getSystemServicesServicenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.services)[':servicename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesServicenameQueryKey>
  >({
    queryKey: getSystemServicesServicenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.services[':servicename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemServicesServicename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.system.services)[':servicename']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemServicesServicenameQueryKey>
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
      ...getSystemServicesServicenameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSystemServicesServicenameHostidQueryKey(
  args: InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>,
) {
  return ['system', '/system/services/:servicename/:hostid', args] as const
}

export function getSystemServicesServicenameHostidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesServicenameHostidQueryKey>
  >({
    queryKey: getSystemServicesServicenameHostidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.services[':servicename'][':hostid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemServicesServicenameHostid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemServicesServicenameHostidQueryKey>
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
      ...getSystemServicesServicenameHostidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSystemServicesServicenameHostidMutationKey() {
  return ['system', '/system/services/:servicename/:hostid', 'DELETE'] as const
}

export function getDeleteSystemServicesServicenameHostidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSystemServicesServicenameHostidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>,
    ) {
      return parseResponse(client.system.services[':servicename'][':hostid'].$delete(args, options))
    },
  })
}

export function createDeleteSystemServicesServicenameHostid<
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
                ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>,
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
    const mutationDefaults = getDeleteSystemServicesServicenameHostidMutationOptions<
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

export function getPostSystemWebhooksWebhookTypeTestMutationKey() {
  return ['system', '/system/webhooks/:webhook_type/test', 'POST'] as const
}

export function getPostSystemWebhooksWebhookTypeTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemWebhooksWebhookTypeTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>,
    ) {
      return parseResponse(client.system.webhooks[':webhook_type'].test.$post(args, options))
    },
  })
}

export function createPostSystemWebhooksWebhookTypeTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>,
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
    const mutationDefaults = getPostSystemWebhooksWebhookTypeTestMutationOptions<
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserCredentialsQueryKey() {
  return ['user', '/user/credentials'] as const
}

export function getUserCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserCredentialsQueryKey>
  >({
    queryKey: getUserCredentialsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.credentials.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserCredentialsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUserCredentialsMutationKey() {
  return ['user', '/user/credentials', 'POST'] as const
}

export function getPostUserCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.credentials.$post>) {
      return parseResponse(client.user.credentials.$post(args, options))
    },
  })
}

export function createPostUserCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.credentials.$post>,
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
    const mutationDefaults = getPostUserCredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
