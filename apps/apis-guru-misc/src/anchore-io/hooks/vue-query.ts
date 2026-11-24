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

export function getQueryKey2() {
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

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  return ['accounts', '/accounts', toValue(args)] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.accounts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountsAccountnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountname']['$get']>>,
) {
  return ['accounts', '/accounts/:accountname', toValue(args)] as const
}

export function getAccountsAccountnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':accountname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountsAccountname<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountnameMutationOptions<TError, TOnMutateResult>(
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

export function usePutAccountsAccountnameState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountsAccountnameStateMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountnameUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountname/users', toValue(args)] as const
}

export function getAccountsAccountnameUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountnameUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountname'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountnameUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountnameUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':accountname']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountnameUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountname'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountnameUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountnameUsersMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAccountnameUsersUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
  >,
) {
  return ['accounts', '/accounts/:accountname/users/:username', toValue(args)] as const
}

export function getAccountsAccountnameUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountnameUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountnameUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountnameUsersUsernameQueryKey>
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
            ReturnType<(typeof client.accounts)[':accountname']['users'][':username']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountnameUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountname'].users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAccountsAccountnameUsersUsername<
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
                      (typeof client.accounts)[':accountname']['users'][':username']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.accounts)[':accountname']['users'][':username']['$delete']
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
  const mutationDefaults = getDeleteAccountsAccountnameUsersUsernameMutationOptions<
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

export function getAccountsAccountnameUsersUsernameCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
    >
  >,
) {
  return ['accounts', '/accounts/:accountname/users/:username/credentials', toValue(args)] as const
}

export function getAccountsAccountnameUsersUsernameCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountnameUsersUsernameCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':accountname'].users[':username'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountnameUsersUsernameCredentials<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
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
                    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
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
                    (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAccountnameUsersUsernameCredentialsQueryKey>
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
              (typeof client.accounts)[':accountname']['users'][':username']['credentials']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountnameUsersUsernameCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountnameUsersUsernameCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':accountname'].users[':username'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccountsAccountnameUsersUsernameCredentials<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsAccountnameUsersUsernameCredentialsMutationOptions<
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

export function useDeleteAccountsAccountnameUsersUsernameCredentials<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountsAccountnameUsersUsernameCredentialsMutationOptions<
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

export function getArchivesQueryKey() {
  return ['archives', '/archives'] as const
}

export function getArchivesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArchivesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArchives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>
          >,
          ReturnType<typeof getArchivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getArchivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArchivesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchivesImagesQueryKey() {
  return ['archives', '/archives/images'] as const
}

export function getArchivesImagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getArchivesImagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.images.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useArchivesImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>
            >
          >,
          ReturnType<typeof getArchivesImagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getArchivesImagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.images.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostArchivesImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.images.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.archives.images.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArchivesImagesMutationOptions<TError, TOnMutateResult>(
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

export function getArchivesImagesImageDigestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>>,
) {
  return ['archives', '/archives/images/:imageDigest', toValue(args)] as const
}

export function getArchivesImagesImageDigestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchivesImagesImageDigestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.images[':imageDigest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchivesImagesImageDigest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.images)[':imageDigest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArchivesImagesImageDigestQueryKey>
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
          Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesImagesImageDigestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchivesImagesImageDigestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.images[':imageDigest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteArchivesImagesImageDigest<
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
                Awaited<ReturnType<(typeof client.archives.images)[':imageDigest']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.archives.images)[':imageDigest']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteArchivesImagesImageDigestMutationOptions<
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

export function getArchivesRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.rules.$get>>,
) {
  return ['archives', '/archives/rules', toValue(args)] as const
}

export function getArchivesRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchivesRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchivesRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
          >,
          ReturnType<typeof getArchivesRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchivesRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostArchivesRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.rules.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.archives.rules.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArchivesRulesMutationOptions<TError, TOnMutateResult>(
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

export function getArchivesRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>>,
) {
  return ['archives', '/archives/rules/:ruleId', toValue(args)] as const
}

export function getArchivesRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchivesRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchivesRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.archives.rules)[':ruleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getArchivesRulesRuleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.archives.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchivesRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteArchivesRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteArchivesRulesRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getEventTypesQueryKey() {
  return ['event_types', '/event_types'] as const
}

export function getEventTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event_types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>
          >,
          ReturnType<typeof getEventTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.event_types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events', keyArgs] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.events.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/:eventId', keyArgs] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':eventId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':eventId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsEventIdMutationOptions<TError, TOnMutateResult>(
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images', keyArgs] as const
}

export function getImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.images.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.images.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesByIdImageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId', keyArgs] as const
}

export function getImagesByIdImageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.by_id)[':imageId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteImagesByIdImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesByIdImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getImagesByIdImageIdCheckQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/check', keyArgs] as const
}

export function getImagesByIdImageIdCheckQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['check']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdCheckQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/content', keyArgs] as const
}

export function getImagesByIdImageIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdContentQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdContentFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/content/files', keyArgs] as const
}

export function getImagesByIdImageIdContentFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdContentFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].content.files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdContentFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdContentFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdContentFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].content.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdContentJavaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/content/java', keyArgs] as const
}

export function getImagesByIdImageIdContentJavaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdContentJavaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].content.java.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdContentJava<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdContentJavaQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content']['java']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentJavaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdContentJavaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].content.java.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdContentCtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/content/:ctype', keyArgs] as const
}

export function getImagesByIdImageIdContentCtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdContentCtypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].content[':ctype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdContentCtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdContentCtypeQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['content'][':ctype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdContentCtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdContentCtypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].content[':ctype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdVulnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/vuln', keyArgs] as const
}

export function getImagesByIdImageIdVulnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdVulnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].vuln.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdVuln<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdVulnQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdVulnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdVulnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].vuln.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesByIdImageIdVulnVtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/by_id/:imageId/vuln/:vtype', keyArgs] as const
}

export function getImagesByIdImageIdVulnVtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesByIdImageIdVulnVtypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.by_id[':imageId'].vuln[':vtype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesByIdImageIdVulnVtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesByIdImageIdVulnVtypeQueryKey>
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
          Awaited<ReturnType<(typeof client.images.by_id)[':imageId']['vuln'][':vtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesByIdImageIdVulnVtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesByIdImageIdVulnVtypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.by_id[':imageId'].vuln[':vtype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest', keyArgs] as const
}

export function getImagesImageDigestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':imageDigest']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteImagesImageDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesImageDigestMutationOptions<TError, TOnMutateResult>(
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

export function getImagesImageDigestArtifactsFileContentSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
    >
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/file_content_search', toValue(args)] as const
}

export function getImagesImageDigestArtifactsFileContentSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestArtifactsFileContentSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.file_content_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestArtifactsFileContentSearch<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
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
                    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
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
                    (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestArtifactsFileContentSearchQueryKey>
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
              (typeof client.images)[':imageDigest']['artifacts']['file_content_search']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsFileContentSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestArtifactsFileContentSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].artifacts.file_content_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestArtifactsRetrievedFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']>
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/retrieved_files', toValue(args)] as const
}

export function getImagesImageDigestArtifactsRetrievedFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestArtifactsRetrievedFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.retrieved_files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestArtifactsRetrievedFiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']>
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
                    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
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
                    (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestArtifactsRetrievedFilesQueryKey>
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
              (typeof client.images)[':imageDigest']['artifacts']['retrieved_files']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsRetrievedFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestArtifactsRetrievedFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].artifacts.retrieved_files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestArtifactsSecretSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
  >,
) {
  return ['images', '/images/:imageDigest/artifacts/secret_search', toValue(args)] as const
}

export function getImagesImageDigestArtifactsSecretSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestArtifactsSecretSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].artifacts.secret_search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestArtifactsSecretSearch<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
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
                    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
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
                    (typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestArtifactsSecretSearchQueryKey>
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
            ReturnType<(typeof client.images)[':imageDigest']['artifacts']['secret_search']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestArtifactsSecretSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestArtifactsSecretSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].artifacts.secret_search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/check', keyArgs] as const
}

export function getImagesImageDigestCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['check']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestCheckQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/content', keyArgs] as const
}

export function getImagesImageDigestContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestContentQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestContentFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/content/files', keyArgs] as const
}

export function getImagesImageDigestContentFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestContentFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].content.files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestContentFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestContentFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestContentFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].content.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestContentJavaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/content/java', keyArgs] as const
}

export function getImagesImageDigestContentJavaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestContentJavaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].content.java.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestContentJava<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['java']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>
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
                  ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestContentJavaQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['java']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentJavaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestContentJavaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].content.java.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestContentMalwareQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/content/malware', keyArgs] as const
}

export function getImagesImageDigestContentMalwareQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestContentMalwareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].content.malware.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestContentMalware<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestContentMalwareQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content']['malware']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentMalwareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestContentMalwareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].content.malware.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestContentCtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/content/:ctype', keyArgs] as const
}

export function getImagesImageDigestContentCtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestContentCtypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].content[':ctype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestContentCtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestContentCtypeQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['content'][':ctype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestContentCtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestContentCtypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].content[':ctype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/metadata', keyArgs] as const
}

export function getImagesImageDigestMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestMetadataMtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/metadata/:mtype', keyArgs] as const
}

export function getImagesImageDigestMetadataMtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestMetadataMtypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].metadata[':mtype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestMetadataMtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestMetadataMtypeQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['metadata'][':mtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestMetadataMtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestMetadataMtypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].metadata[':mtype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestSbomsNativeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/sboms/native', keyArgs] as const
}

export function getImagesImageDigestSbomsNativeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestSbomsNativeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].sboms.native.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestSbomsNative<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>
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
                  ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestSbomsNativeQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['sboms']['native']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestSbomsNativeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestSbomsNativeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].sboms.native.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestVulnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/vuln', keyArgs] as const
}

export function getImagesImageDigestVulnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestVulnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].vuln.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestVuln<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':imageDigest']['vuln']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestVulnQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestVulnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestVulnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].vuln.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesImageDigestVulnVtypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['images', '/images/:imageDigest/vuln/:vtype', keyArgs] as const
}

export function getImagesImageDigestVulnVtypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesImageDigestVulnVtypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':imageDigest'].vuln[':vtype'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesImageDigestVulnVtype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>
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
                  ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImagesImageDigestVulnVtypeQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':imageDigest']['vuln'][':vtype']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesImageDigestVulnVtypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesImageDigestVulnVtypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':imageDigest'].vuln[':vtype'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.import.images.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportImagesMutationOptions<TError, TOnMutateResult>(
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

export function getImportsImagesQueryKey() {
  return ['imports', '/imports/images'] as const
}

export function getImportsImagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImportsImagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImportsImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
          >,
          ReturnType<typeof getImportsImagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImportsImagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.imports.images.$post>>>
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
  const mutationDefaults = getPostImportsImagesMutationOptions<TError, TOnMutateResult>(
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

export function getImportsImagesOperationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>>,
) {
  return ['imports', '/imports/images/:operation_id', toValue(args)] as const
}

export function getImportsImagesOperationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.imports.images)[':operation_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteImportsImagesOperationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImportsImagesOperationIdMutationOptions<
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

export function getImportsImagesOperationIdDockerfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>
  >,
) {
  return ['imports', '/imports/images/:operation_id/dockerfile', toValue(args)] as const
}

export function getImportsImagesOperationIdDockerfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdDockerfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].dockerfile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationIdDockerfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdDockerfileQueryKey>
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
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdDockerfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdDockerfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].dockerfile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImagesOperationIdDockerfile<
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
                  ReturnType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.imports.images)[':operation_id']['dockerfile']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsImagesOperationIdDockerfileMutationOptions<
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

export function getImportsImagesOperationIdImageConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
  >,
) {
  return ['imports', '/imports/images/:operation_id/image_config', toValue(args)] as const
}

export function getImportsImagesOperationIdImageConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdImageConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].image_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationIdImageConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
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
                    (typeof client.imports.images)[':operation_id']['image_config']['$get']
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
                    (typeof client.imports.images)[':operation_id']['image_config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdImageConfigQueryKey>
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
            ReturnType<(typeof client.imports.images)[':operation_id']['image_config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdImageConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdImageConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].image_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImagesOperationIdImageConfig<
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
                    (typeof client.imports.images)[':operation_id']['image_config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.imports.images)[':operation_id']['image_config']['$post']
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
  const mutationDefaults = getPostImportsImagesOperationIdImageConfigMutationOptions<
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

export function getImportsImagesOperationIdManifestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>
  >,
) {
  return ['imports', '/imports/images/:operation_id/manifest', toValue(args)] as const
}

export function getImportsImagesOperationIdManifestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdManifestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].manifest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationIdManifest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdManifestQueryKey>
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
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdManifestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].manifest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImagesOperationIdManifest<
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
                  ReturnType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.imports.images)[':operation_id']['manifest']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsImagesOperationIdManifestMutationOptions<
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

export function getImportsImagesOperationIdPackagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>
  >,
) {
  return ['imports', '/imports/images/:operation_id/packages', toValue(args)] as const
}

export function getImportsImagesOperationIdPackagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdPackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationIdPackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdPackagesQueryKey>
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
          Awaited<ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdPackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdPackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImagesOperationIdPackages<
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
                  ReturnType<(typeof client.imports.images)[':operation_id']['packages']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.imports.images)[':operation_id']['packages']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsImagesOperationIdPackagesMutationOptions<
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

export function getImportsImagesOperationIdParentManifestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
  >,
) {
  return ['imports', '/imports/images/:operation_id/parent_manifest', toValue(args)] as const
}

export function getImportsImagesOperationIdParentManifestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportsImagesOperationIdParentManifestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.imports.images[':operation_id'].parent_manifest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportsImagesOperationIdParentManifest<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
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
                    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
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
                    (typeof client.imports.images)[':operation_id']['parent_manifest']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getImportsImagesOperationIdParentManifestQueryKey>
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
            ReturnType<(typeof client.imports.images)[':operation_id']['parent_manifest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportsImagesOperationIdParentManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportsImagesOperationIdParentManifestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.imports.images[':operation_id'].parent_manifest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostImportsImagesOperationIdParentManifest<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportsImagesOperationIdParentManifestMutationOptions<
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

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies', keyArgs] as const
}

export function getPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePolicies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>
          >,
          ReturnType<typeof getPoliciesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.policies.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPoliciesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoliciesPolicyIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policies', '/policies/:policyId', keyArgs] as const
}

export function getPoliciesPolicyIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoliciesPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policies[':policyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoliciesPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policies)[':policyId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPoliciesPolicyIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.policies)[':policyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoliciesPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoliciesPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policies[':policyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPoliciesPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policies)[':policyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policies)[':policyId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPoliciesPolicyIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeletePoliciesPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePoliciesPolicyIdMutationOptions<TError, TOnMutateResult>(
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

export function getQueryImagesByPackageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_package.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/images/by_package', keyArgs] as const
}

export function getQueryImagesByPackageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_package.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryImagesByPackageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.images.by_package.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryImagesByPackage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_package.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
            >
          >,
          ReturnType<typeof getQueryImagesByPackageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_package.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryImagesByPackageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryImagesByPackageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.images.by_package.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryImagesByVulnerabilityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_vulnerability.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['query', '/query/images/by_vulnerability', keyArgs] as const
}

export function getQueryImagesByVulnerabilityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_vulnerability.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryImagesByVulnerabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.images.by_vulnerability.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryImagesByVulnerability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.images.by_vulnerability.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>
              >
            >
          >,
          ReturnType<typeof getQueryImagesByVulnerabilityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.query.images.by_vulnerability.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryImagesByVulnerabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryImagesByVulnerabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.images.by_vulnerability.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryVulnerabilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.vulnerabilities.$get>>,
) {
  return ['query', '/query/vulnerabilities', toValue(args)] as const
}

export function getQueryVulnerabilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.vulnerabilities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryVulnerabilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.query.vulnerabilities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryVulnerabilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.query.vulnerabilities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>
            >
          >,
          ReturnType<typeof getQueryVulnerabilitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.query.vulnerabilities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryVulnerabilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryVulnerabilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.query.vulnerabilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registries', '/registries', keyArgs] as const
}

export function getRegistriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registries.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegistries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>
          >,
          ReturnType<typeof getRegistriesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegistriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRegistries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registries.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.registries.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegistriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRegistriesRegistryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':registry']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registries', '/registries/:registry', keyArgs] as const
}

export function getRegistriesRegistryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':registry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistriesRegistryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registries[':registry'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistriesRegistry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registries)[':registry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistriesRegistryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.registries)[':registry']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistriesRegistryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistriesRegistryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registries[':registry'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRegistriesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRegistriesRegistryMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRegistriesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRegistriesRegistryMutationOptions<TError, TOnMutateResult>(
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

export function usePostRepositories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repositories.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.repositories.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRepositoriesMutationOptions<TError, TOnMutateResult>(
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:subscriptionId', keyArgs] as const
}

export function getSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':subscriptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':subscriptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSubscriptionsSubscriptionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscriptionsSubscriptionIdMutationOptions<
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

export function useDeleteSubscriptionsSubscriptionId<
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
                Awaited<ReturnType<(typeof client.subscriptions)[':subscriptionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':subscriptionId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscriptionsSubscriptionIdMutationOptions<
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

export function getSummariesImagetagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.imagetags.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['summaries', '/summaries/imagetags', keyArgs] as const
}

export function getSummariesImagetagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.imagetags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSummariesImagetagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.summaries.imagetags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSummariesImagetags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.summaries.imagetags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>
            >
          >,
          ReturnType<typeof getSummariesImagetagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summaries.imagetags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSummariesImagetagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSummariesImagetagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.summaries.imagetags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemQueryKey() {
  return ['system', '/system'] as const
}

export function getSystemQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystem<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
          ReturnType<typeof getSystemQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemErrorCodesQueryKey() {
  return ['system', '/system/error_codes'] as const
}

export function getSystemErrorCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemErrorCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.error_codes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemErrorCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>
            >
          >,
          ReturnType<typeof getSystemErrorCodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.error_codes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemErrorCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemErrorCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.error_codes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemFeedsQueryKey() {
  return ['system', '/system/feeds'] as const
}

export function getSystemFeedsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemFeedsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.feeds.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemFeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>
          >,
          ReturnType<typeof getSystemFeedsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemFeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemFeedsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.feeds.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSystemFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.feeds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.system.feeds.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemFeedsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutSystemFeedsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.feeds)[':feed']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system.feeds)[':feed']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSystemFeedsFeedMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSystemFeedsFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSystemFeedsFeedMutationOptions<TError, TOnMutateResult>(
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

export function usePutSystemFeedsFeedGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSystemFeedsFeedGroupMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSystemFeedsFeedGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSystemFeedsFeedGroupMutationOptions<TError, TOnMutateResult>(
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

export function getSystemPolicySpecQueryKey() {
  return ['system', '/system/policy_spec'] as const
}

export function getSystemPolicySpecQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemPolicySpecQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.policy_spec.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemPolicySpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>
            >
          >,
          ReturnType<typeof getSystemPolicySpecQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.policy_spec.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemPolicySpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemPolicySpecQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.policy_spec.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemServicesQueryKey() {
  return ['system', '/system/services'] as const
}

export function getSystemServicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemServicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.services.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>
            >
          >,
          ReturnType<typeof getSystemServicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.services.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemServicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.services.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemServicesServicenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.services)[':servicename']['$get']>>,
) {
  return ['system', '/system/services/:servicename', toValue(args)] as const
}

export function getSystemServicesServicenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.services)[':servicename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemServicesServicenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.services[':servicename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemServicesServicename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.services)[':servicename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemServicesServicenameQueryKey>
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
          Awaited<ReturnType<(typeof client.system.services)[':servicename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesServicenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemServicesServicenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.services[':servicename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemServicesServicenameHostidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>
  >,
) {
  return ['system', '/system/services/:servicename/:hostid', toValue(args)] as const
}

export function getSystemServicesServicenameHostidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemServicesServicenameHostidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.services[':servicename'][':hostid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemServicesServicenameHostid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSystemServicesServicenameHostidQueryKey>
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
          Awaited<ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemServicesServicenameHostidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemServicesServicenameHostidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.services[':servicename'][':hostid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSystemServicesServicenameHostid<
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
                  ReturnType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system.services)[':servicename'][':hostid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSystemServicesServicenameHostidMutationOptions<
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

export function usePostSystemWebhooksWebhookTypeTest<
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
                  ReturnType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system.webhooks)[':webhook_type']['test']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemWebhooksWebhookTypeTestMutationOptions<
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserCredentialsQueryKey() {
  return ['user', '/user/credentials'] as const
}

export function getUserCredentialsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserCredentialsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.credentials.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>
            >
          >,
          ReturnType<typeof getUserCredentialsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserCredentialsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.credentials.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.credentials.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.credentials.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserCredentialsMutationOptions<TError, TOnMutateResult>(
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

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
