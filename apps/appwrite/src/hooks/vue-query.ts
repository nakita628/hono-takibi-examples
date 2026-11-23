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

export function getAvatarsKey() {
  return ['avatars'] as const
}

export function getDatabasesKey() {
  return ['databases'] as const
}

export function getFunctionsKey() {
  return ['functions'] as const
}

export function getGraphqlKey() {
  return ['graphql'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getLocaleKey() {
  return ['locale'] as const
}

export function getMessagingKey() {
  return ['messaging'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getStorageKey() {
  return ['storage'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getUsersKey() {
  return ['users'] as const
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

export function getPostAccountMutationKey() {
  return ['account', '/account', 'POST'] as const
}

export function getPostAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    InferRequestType<typeof client.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$post>) {
      return parseResponse(client.account.$post(args, options))
    },
  })
}

export function usePostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAccountEmailMutationKey() {
  return ['account', '/account/email', 'PATCH'] as const
}

export function getPatchAccountEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.email.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.email.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.email.$patch>) {
      return parseResponse(client.account.email.$patch(args, options))
    },
  })
}

export function usePatchAccountEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.email.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.email.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountEmailMutationOptions<TError, TOnMutateResult>(
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

export function getAccountIdentitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.identities.$get>>,
) {
  return ['account', '/account/identities', toValue(args)] as const
}

export function getAccountIdentitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.identities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.identities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>
            >
          >,
          ReturnType<typeof getAccountIdentitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountIdentitiesIdentityIdMutationKey() {
  return ['account', '/account/identities/:identityId', 'DELETE'] as const
}

export function getDeleteAccountIdentitiesIdentityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.identities)[':identityId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.identities)[':identityId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdentitiesIdentityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.identities)[':identityId']['$delete']>,
    ) {
      return parseResponse(client.account.identities[':identityId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountIdentitiesIdentityId<
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
                  Awaited<ReturnType<(typeof client.account.identities)[':identityId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.identities)[':identityId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountIdentitiesIdentityIdMutationOptions<
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

export function getPostAccountJwtsMutationKey() {
  return ['account', '/account/jwts', 'POST'] as const
}

export function getPostAccountJwtsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.jwts.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountJwtsMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.jwts.$post(undefined, options))
    },
  })
}

export function usePostAccountJwts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.jwts.$post>>>>
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
  const mutationDefaults = getPostAccountJwtsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.logs.$get>>,
) {
  return ['account', '/account/logs', toValue(args)] as const
}

export function getAccountLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
          >,
          ReturnType<typeof getAccountLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchAccountMfaMutationKey() {
  return ['account', '/account/mfa', 'PATCH'] as const
}

export function getPatchAccountMfaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.mfa.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMfaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.mfa.$patch>) {
      return parseResponse(client.account.mfa.$patch(args, options))
    },
  })
}

export function usePatchAccountMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.account.mfa.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountMfaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutAccountMfaAuthenticatorsTypeMutationKey() {
  return ['account', '/account/mfa/authenticators/:type', 'PUT'] as const
}

export function getPutAccountMfaAuthenticatorsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMfaAuthenticatorsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']>,
    ) {
      return parseResponse(client.account.mfa.authenticators[':type'].$put(args, options))
    },
  })
}

export function usePutAccountMfaAuthenticatorsType<
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
                Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMfaAuthenticatorsTypeMutationOptions<
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

export function getPostAccountMfaAuthenticatorsTypeMutationKey() {
  return ['account', '/account/mfa/authenticators/:type', 'POST'] as const
}

export function getPostAccountMfaAuthenticatorsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMfaAuthenticatorsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']>,
    ) {
      return parseResponse(client.account.mfa.authenticators[':type'].$post(args, options))
    },
  })
}

export function usePostAccountMfaAuthenticatorsType<
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
                Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountMfaAuthenticatorsTypeMutationOptions<
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

export function getDeleteAccountMfaAuthenticatorsTypeMutationKey() {
  return ['account', '/account/mfa/authenticators/:type', 'DELETE'] as const
}

export function getDeleteAccountMfaAuthenticatorsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.mfa.authenticators)[':type']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountMfaAuthenticatorsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>,
    ) {
      return parseResponse(client.account.mfa.authenticators[':type'].$delete(args, options))
    },
  })
}

export function useDeleteAccountMfaAuthenticatorsType<
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
                    ReturnType<(typeof client.account.mfa.authenticators)[':type']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.mfa.authenticators)[':type']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountMfaAuthenticatorsTypeMutationOptions<
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

export function getPutAccountMfaChallengeMutationKey() {
  return ['account', '/account/mfa/challenge', 'PUT'] as const
}

export function getPutAccountMfaChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.mfa.challenge.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountMfaChallengeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.mfa.challenge.$put>) {
      return parseResponse(client.account.mfa.challenge.$put(args, options))
    },
  })
}

export function usePutAccountMfaChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.mfa.challenge.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountMfaChallengeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountMfaChallengeMutationKey() {
  return ['account', '/account/mfa/challenge', 'POST'] as const
}

export function getPostAccountMfaChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.mfa.challenge.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMfaChallengeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.mfa.challenge.$post>) {
      return parseResponse(client.account.mfa.challenge.$post(args, options))
    },
  })
}

export function usePostAccountMfaChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.challenge.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.mfa.challenge.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountMfaChallengeMutationOptions<TError, TOnMutateResult>(
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

export function getAccountMfaFactorsQueryKey() {
  return ['account', '/account/mfa/factors'] as const
}

export function getAccountMfaFactorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountMfaFactorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.mfa.factors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
            >
          >,
          ReturnType<typeof getAccountMfaFactorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMfaFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountMfaFactorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.mfa.factors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountMfaRecoveryCodesQueryKey() {
  return ['account', '/account/mfa/recovery-codes'] as const
}

export function getAccountMfaRecoveryCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountMfaRecoveryCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.mfa['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountMfaRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
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
                Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountMfaRecoveryCodesQueryKey>
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
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMfaRecoveryCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountMfaRecoveryCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.mfa['recovery-codes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountMfaRecoveryCodesMutationKey() {
  return ['account', '/account/mfa/recovery-codes', 'POST'] as const
}

export function getPostAccountMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMfaRecoveryCodesMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.mfa['recovery-codes'].$post(undefined, options))
    },
  })
}

export function usePostAccountMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$post']>>
              >
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
  const mutationDefaults = getPostAccountMfaRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountMfaRecoveryCodesMutationKey() {
  return ['account', '/account/mfa/recovery-codes', 'PATCH'] as const
}

export function getPatchAccountMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$patch']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMfaRecoveryCodesMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.mfa['recovery-codes'].$patch(undefined, options))
    },
  })
}

export function usePatchAccountMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$patch']>>
              >
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
  const mutationDefaults = getPatchAccountMfaRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountNameMutationKey() {
  return ['account', '/account/name', 'PATCH'] as const
}

export function getPatchAccountNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.name.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.name.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountNameMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.name.$patch>) {
      return parseResponse(client.account.name.$patch(args, options))
    },
  })
}

export function usePatchAccountName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.name.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.account.name.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountPasswordMutationKey() {
  return ['account', '/account/password', 'PATCH'] as const
}

export function getPatchAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.password.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.password.$patch>) {
      return parseResponse(client.account.password.$patch(args, options))
    },
  })
}

export function usePatchAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.password.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountPhoneMutationKey() {
  return ['account', '/account/phone', 'PATCH'] as const
}

export function getPatchAccountPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.phone.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.phone.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountPhoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.phone.$patch>) {
      return parseResponse(client.account.phone.$patch(args, options))
    },
  })
}

export function usePatchAccountPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.phone.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.phone.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getAccountPrefsQueryKey() {
  return ['account', '/account/prefs'] as const
}

export function getAccountPrefsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountPrefsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.prefs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
          >,
          ReturnType<typeof getAccountPrefsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountPrefsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.prefs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchAccountPrefsMutationKey() {
  return ['account', '/account/prefs', 'PATCH'] as const
}

export function getPatchAccountPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.account.prefs.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountPrefsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.prefs.$patch>) {
      return parseResponse(client.account.prefs.$patch(args, options))
    },
  })
}

export function usePatchAccountPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.prefs.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountPrefsMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountRecoveryMutationKey() {
  return ['account', '/account/recovery', 'PUT'] as const
}

export function getPutAccountRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.recovery.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountRecoveryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.recovery.$put>) {
      return parseResponse(client.account.recovery.$put(args, options))
    },
  })
}

export function usePutAccountRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.recovery.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountRecoveryMutationKey() {
  return ['account', '/account/recovery', 'POST'] as const
}

export function getPostAccountRecoveryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.recovery.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRecoveryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.recovery.$post>) {
      return parseResponse(client.account.recovery.$post(args, options))
    },
  })
}

export function usePostAccountRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.recovery.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountRecoveryMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSessionsQueryKey() {
  return ['account', '/account/sessions'] as const
}

export function getAccountSessionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountSessionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>
            >
          >,
          ReturnType<typeof getAccountSessionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountSessionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.sessions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountSessionsMutationKey() {
  return ['account', '/account/sessions', 'DELETE'] as const
}

export function getDeleteAccountSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$delete>>>
        >
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountSessionsMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.sessions.$delete(undefined, options))
    },
  })
}

export function useDeleteAccountSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$delete>>>
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
  const mutationDefaults = getDeleteAccountSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSessionsAnonymousMutationKey() {
  return ['account', '/account/sessions/anonymous', 'POST'] as const
}

export function getPostAccountSessionsAnonymousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.anonymous.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSessionsAnonymousMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.sessions.anonymous.$post(undefined, options))
    },
  })
}

export function usePostAccountSessionsAnonymous<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.sessions.anonymous.$post>>
              >
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
  const mutationDefaults = getPostAccountSessionsAnonymousMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSessionsEmailMutationKey() {
  return ['account', '/account/sessions/email', 'POST'] as const
}

export function getPostAccountSessionsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.sessions.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSessionsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.sessions.email.$post>) {
      return parseResponse(client.account.sessions.email.$post(args, options))
    },
  })
}

export function usePostAccountSessionsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.email.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sessions.email.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountSessionsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountSessionsMagicUrlMutationKey() {
  return ['account', '/account/sessions/magic-url', 'PUT'] as const
}

export function getPutAccountSessionsMagicUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.sessions)['magic-url']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.sessions)['magic-url']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSessionsMagicUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.sessions)['magic-url']['$put']>,
    ) {
      return parseResponse(client.account.sessions['magic-url'].$put(args, options))
    },
  })
}

export function usePutAccountSessionsMagicUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sessions)['magic-url']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.sessions)['magic-url']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountSessionsMagicUrlMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountSessionsPhoneMutationKey() {
  return ['account', '/account/sessions/phone', 'PUT'] as const
}

export function getPutAccountSessionsPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.phone.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.sessions.phone.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSessionsPhoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.sessions.phone.$put>) {
      return parseResponse(client.account.sessions.phone.$put(args, options))
    },
  })
}

export function usePutAccountSessionsPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.phone.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sessions.phone.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountSessionsPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountSessionsTokenMutationKey() {
  return ['account', '/account/sessions/token', 'POST'] as const
}

export function getPostAccountSessionsTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.sessions.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountSessionsTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.sessions.token.$post>) {
      return parseResponse(client.account.sessions.token.$post(args, options))
    },
  })
}

export function usePostAccountSessionsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.sessions.token.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountSessionsTokenMutationOptions<TError, TOnMutateResult>(
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

export function getAccountSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>>,
) {
  return ['account', '/account/sessions/:sessionId', toValue(args)] as const
}

export function getAccountSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.sessions[':sessionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountSessionsSessionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.sessions[':sessionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountSessionsSessionIdMutationKey() {
  return ['account', '/account/sessions/:sessionId', 'DELETE'] as const
}

export function getDeleteAccountSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']>,
    ) {
      return parseResponse(client.account.sessions[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.sessions)[':sessionId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountSessionsSessionIdMutationOptions<
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

export function getPatchAccountSessionsSessionIdMutationKey() {
  return ['account', '/account/sessions/:sessionId', 'PATCH'] as const
}

export function getPatchAccountSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']>,
    ) {
      return parseResponse(client.account.sessions[':sessionId'].$patch(args, options))
    },
  })
}

export function usePatchAccountSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.sessions)[':sessionId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAccountSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountStatusMutationKey() {
  return ['account', '/account/status', 'PATCH'] as const
}

export function getPatchAccountStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$patch>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountStatusMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.status.$patch(undefined, options))
    },
  })
}

export function usePatchAccountStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$patch>>>
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
  const mutationDefaults = getPatchAccountStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountTokensEmailMutationKey() {
  return ['account', '/account/tokens/email', 'POST'] as const
}

export function getPostAccountTokensEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.tokens.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTokensEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.tokens.email.$post>) {
      return parseResponse(client.account.tokens.email.$post(args, options))
    },
  })
}

export function usePostAccountTokensEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.email.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tokens.email.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountTokensEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountTokensMagicUrlMutationKey() {
  return ['account', '/account/tokens/magic-url', 'POST'] as const
}

export function getPostAccountTokensMagicUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.tokens)['magic-url']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.tokens)['magic-url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTokensMagicUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.tokens)['magic-url']['$post']>) {
      return parseResponse(client.account.tokens['magic-url'].$post(args, options))
    },
  })
}

export function usePostAccountTokensMagicUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.tokens)['magic-url']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.tokens)['magic-url']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountTokensMagicUrlMutationOptions<TError, TOnMutateResult>(
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

export function getAccountTokensOauth2ProviderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>
  >,
) {
  return ['account', '/account/tokens/oauth2/:provider', toValue(args)] as const
}

export function getAccountTokensOauth2ProviderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountTokensOauth2ProviderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.tokens.oauth2[':provider'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountTokensOauth2Provider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountTokensOauth2ProviderQueryKey>
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
          Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountTokensOauth2ProviderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountTokensOauth2ProviderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.tokens.oauth2[':provider'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountTokensPhoneMutationKey() {
  return ['account', '/account/tokens/phone', 'POST'] as const
}

export function getPostAccountTokensPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.phone.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.tokens.phone.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountTokensPhoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.tokens.phone.$post>) {
      return parseResponse(client.account.tokens.phone.$post(args, options))
    },
  })
}

export function usePostAccountTokensPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.tokens.phone.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.tokens.phone.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountTokensPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountVerificationMutationKey() {
  return ['account', '/account/verification', 'PUT'] as const
}

export function getPutAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.account.verification.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountVerificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verification.$put>) {
      return parseResponse(client.account.verification.$put(args, options))
    },
  })
}

export function usePutAccountVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verification.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountVerificationMutationKey() {
  return ['account', '/account/verification', 'POST'] as const
}

export function getPostAccountVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.verification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verification.$post>) {
      return parseResponse(client.account.verification.$post(args, options))
    },
  })
}

export function usePostAccountVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verification.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountVerificationPhoneMutationKey() {
  return ['account', '/account/verification/phone', 'PUT'] as const
}

export function getPutAccountVerificationPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.phone.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.verification.phone.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountVerificationPhoneMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verification.phone.$put>) {
      return parseResponse(client.account.verification.phone.$put(args, options))
    },
  })
}

export function usePutAccountVerificationPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.verification.phone.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.verification.phone.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountVerificationPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountVerificationPhoneMutationKey() {
  return ['account', '/account/verification/phone', 'POST'] as const
}

export function getPostAccountVerificationPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.phone.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerificationPhoneMutationKey(),
    async mutationFn() {
      return parseResponse(client.account.verification.phone.$post(undefined, options))
    },
  })
}

export function usePostAccountVerificationPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.verification.phone.$post>>
              >
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
  const mutationDefaults = getPostAccountVerificationPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getAvatarsBrowsersCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>>,
) {
  return ['avatars', '/avatars/browsers/:code', toValue(args)] as const
}

export function getAvatarsBrowsersCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsBrowsersCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.browsers[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsBrowsersCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAvatarsBrowsersCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsBrowsersCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsBrowsersCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.browsers[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsCreditCardsCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>
  >,
) {
  return ['avatars', '/avatars/credit-cards/:code', toValue(args)] as const
}

export function getAvatarsCreditCardsCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsCreditCardsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars['credit-cards'][':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsCreditCardsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAvatarsCreditCardsCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsCreditCardsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsCreditCardsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars['credit-cards'][':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsFaviconQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.favicon.$get>>,
) {
  return ['avatars', '/avatars/favicon', toValue(args)] as const
}

export function getAvatarsFaviconQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.favicon.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsFaviconQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.favicon.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsFavicon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.favicon.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>
            >
          >,
          ReturnType<typeof getAvatarsFaviconQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsFaviconQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsFaviconQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.favicon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsFlagsCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.flags)[':code']['$get']>>,
) {
  return ['avatars', '/avatars/flags/:code', toValue(args)] as const
}

export function getAvatarsFlagsCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.flags)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsFlagsCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.flags[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsFlagsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.avatars.flags)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAvatarsFlagsCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsFlagsCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsFlagsCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.flags[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsImageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.image.$get>>,
) {
  return ['avatars', '/avatars/image', toValue(args)] as const
}

export function getAvatarsImageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.image.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsImageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.image.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.image.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
          >,
          ReturnType<typeof getAvatarsImageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsImageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.image.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsInitialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.initials.$get>>,
) {
  return ['avatars', '/avatars/initials', toValue(args)] as const
}

export function getAvatarsInitialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.initials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsInitialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.initials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAvatarsInitials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.initials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>
            >
          >,
          ReturnType<typeof getAvatarsInitialsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsInitialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsInitialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.initials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAvatarsQrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.qr.$get>>,
) {
  return ['avatars', '/avatars/qr', toValue(args)] as const
}

export function getAvatarsQrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.qr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAvatarsQrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.avatars.qr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAvatarsQr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.avatars.qr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
          >,
          ReturnType<typeof getAvatarsQrQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvatarsQrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAvatarsQrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.avatars.qr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatabasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.$get>>,
) {
  return ['databases', '/databases', toValue(args)] as const
}

export function getDatabasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.databases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
          >,
          ReturnType<typeof getDatabasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesMutationKey() {
  return ['databases', '/databases', 'POST'] as const
}

export function getPostDatabasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>>,
    TError,
    InferRequestType<typeof client.databases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.databases.$post>) {
      return parseResponse(client.databases.$post(args, options))
    },
  })
}

export function usePostDatabases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.databases.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatabasesDatabaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':databaseId']['$get']>>,
) {
  return ['databases', '/databases/:databaseId', toValue(args)] as const
}

export function getDatabasesDatabaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':databaseId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesDatabaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.databases)[':databaseId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesDatabaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesDatabaseIdMutationKey() {
  return ['databases', '/databases/:databaseId', 'PUT'] as const
}

export function getPutDatabasesDatabaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.databases)[':databaseId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesDatabaseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.databases)[':databaseId']['$put']>) {
      return parseResponse(client.databases[':databaseId'].$put(args, options))
    },
  })
}

export function usePutDatabasesDatabaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':databaseId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases)[':databaseId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatabasesDatabaseIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatabasesDatabaseIdMutationKey() {
  return ['databases', '/databases/:databaseId', 'DELETE'] as const
}

export function getDeleteDatabasesDatabaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.databases)[':databaseId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.databases)[':databaseId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesDatabaseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.databases)[':databaseId']['$delete']>) {
      return parseResponse(client.databases[':databaseId'].$delete(args, options))
    },
  })
}

export function useDeleteDatabasesDatabaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.databases)[':databaseId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.databases)[':databaseId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatabasesDatabaseIdMutationOptions<TError, TOnMutateResult>(
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

export function getDatabasesDatabaseIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>
  >,
) {
  return ['databases', '/databases/:databaseId/collections', toValue(args)] as const
}

export function getDatabasesDatabaseIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesDatabaseIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesDatabaseIdCollectionsMutationKey() {
  return ['databases', '/databases/:databaseId/collections', 'POST'] as const
}

export function getPostDatabasesDatabaseIdCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>,
    ) {
      return parseResponse(client.databases[':databaseId'].collections.$post(args, options))
    },
  })
}

export function usePostDatabasesDatabaseIdCollections<
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
                  ReturnType<(typeof client.databases)[':databaseId']['collections']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.databases)[':databaseId']['collections']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatabasesDatabaseIdCollectionsMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
    >
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId', toValue(args)] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdMutationKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId', 'PUT'] as const
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesDatabaseIdCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].$put(args, options),
      )
    },
  })
}

export function usePutDatabasesDatabaseIdCollectionsCollectionId<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['$put']
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
  const mutationDefaults = getPutDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
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

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdMutationKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId', 'DELETE'] as const
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesDatabaseIdCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionId<
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
                      (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['$delete']
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
  const mutationDefaults = getDeleteDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/boolean',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.boolean.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesBoolean<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/boolean/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.boolean[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['boolean'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/datetime',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.datetime.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetime<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/datetime/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.datetime[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['datetime'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/email',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.email.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmail<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/email/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.email[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['email'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/enum',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.enum.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnum<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/enum/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.enum[':key'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['enum'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/float',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.float.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloat<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/float/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.float[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['float'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/integer',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.integer.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesInteger<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/integer/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.integer[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['integer'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/ip',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.ip.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesIp<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/ip/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.ip[':key'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['ip'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/relationship',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.relationship.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationship<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['relationship']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/string',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.string.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesString<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/string/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.string[
          ':key'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['string'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/url',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.url.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrl<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/url/:key',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.url[':key'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['url'][':key']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
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
                      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$delete']
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
  const mutationDefaults =
    getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key/relationship',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes[
          ':key'
        ].relationship.$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationship<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['relationship']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId/documents', 'PUT'] as const
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$put(args, options),
      )
    },
  })
}

export function usePutDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$put']
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
  const mutationDefaults = getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
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

export function getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'POST',
  ] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$post']
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
  const mutationDefaults =
    getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
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

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$delete']
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
  const mutationDefaults =
    getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey
          >
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].documents[
            ':documentId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'PUT',
  ] as const
}

export function getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$put']
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
  const mutationDefaults =
    getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
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

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[
          ':documentId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
                      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$delete']
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
  const mutationDefaults =
    getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[
          ':documentId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/decrement',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
          ':attribute'
        ].decrement.$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrement<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['decrement']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementMutationOptions<
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

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId/:attribute/increment',
    'PATCH',
  ] as const
}

export function getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'][
          ':attribute'
        ].increment.$patch(args, options),
      )
    },
  })
}

export function usePatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrement<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId'][':attribute']['increment']['$patch']
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
  const mutationDefaults =
    getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdIndexes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].indexes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesMutationKey() {
  return ['databases', '/databases/:databaseId/collections/:collectionId/indexes', 'POST'] as const
}

export function getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes.$post(args, options),
      )
    },
  })
}

export function usePostDatabasesDatabaseIdCollectionsCollectionIdIndexes<
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$post']
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
  const mutationDefaults = getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesMutationOptions<
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

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
    >
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes/:key',
    toValue(args),
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
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
                    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey>
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
              (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyMutationKey() {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes/:key',
    'DELETE',
  ] as const
}

export function getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
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
                      (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$delete']
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
  const mutationDefaults =
    getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyMutationOptions<
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

export function getFunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
) {
  return ['functions', '/functions', toValue(args)] as const
}

export function getFunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.functions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
          >,
          ReturnType<typeof getFunctionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFunctionsMutationKey() {
  return ['functions', '/functions', 'POST'] as const
}

export function getPostFunctionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>>,
    TError,
    InferRequestType<typeof client.functions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.functions.$post>) {
      return parseResponse(client.functions.$post(args, options))
    },
  })
}

export function usePostFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.functions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFunctionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFunctionsRuntimesQueryKey() {
  return ['functions', '/functions/runtimes'] as const
}

export function getFunctionsRuntimesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFunctionsRuntimesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions.runtimes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsRuntimes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>
            >
          >,
          ReturnType<typeof getFunctionsRuntimesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsRuntimesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFunctionsRuntimesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.functions.runtimes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFunctionsSpecificationsQueryKey() {
  return ['functions', '/functions/specifications'] as const
}

export function getFunctionsSpecificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFunctionsSpecificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions.specifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsSpecifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
            >
          >,
          ReturnType<typeof getFunctionsSpecificationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsSpecificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFunctionsSpecificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.functions.specifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFunctionsFunctionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':functionId']['$get']>>,
) {
  return ['functions', '/functions/:functionId', toValue(args)] as const
}

export function getFunctionsFunctionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':functionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.functions)[':functionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFunctionsFunctionIdMutationKey() {
  return ['functions', '/functions/:functionId', 'PUT'] as const
}

export function getPutFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFunctionsFunctionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.functions)[':functionId']['$put']>) {
      return parseResponse(client.functions[':functionId'].$put(args, options))
    },
  })
}

export function usePutFunctionsFunctionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFunctionsFunctionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFunctionsFunctionIdMutationKey() {
  return ['functions', '/functions/:functionId', 'DELETE'] as const
}

export function getDeleteFunctionsFunctionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions)[':functionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFunctionsFunctionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.functions)[':functionId']['$delete']>) {
      return parseResponse(client.functions[':functionId'].$delete(args, options))
    },
  })
}

export function useDeleteFunctionsFunctionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.functions)[':functionId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFunctionsFunctionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchFunctionsFunctionIdDeploymentMutationKey() {
  return ['functions', '/functions/:functionId/deployment', 'PATCH'] as const
}

export function getPatchFunctionsFunctionIdDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['deployment']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFunctionsFunctionIdDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>,
    ) {
      return parseResponse(client.functions[':functionId'].deployment.$patch(args, options))
    },
  })
}

export function usePatchFunctionsFunctionIdDeployment<
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
                  ReturnType<(typeof client.functions)[':functionId']['deployment']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['deployment']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFunctionsFunctionIdDeploymentMutationOptions<
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

export function getFunctionsFunctionIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>
  >,
) {
  return ['functions', '/functions/:functionId/deployments', toValue(args)] as const
}

export function getFunctionsFunctionIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFunctionsFunctionIdDeploymentsMutationKey() {
  return ['functions', '/functions/:functionId/deployments', 'POST'] as const
}

export function getPostFunctionsFunctionIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>,
    ) {
      return parseResponse(client.functions[':functionId'].deployments.$post(args, options))
    },
  })
}

export function usePostFunctionsFunctionIdDeployments<
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
                  ReturnType<(typeof client.functions)[':functionId']['deployments']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['deployments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFunctionsFunctionIdDeploymentsMutationOptions<
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

export function getPostFunctionsFunctionIdDeploymentsDuplicateMutationKey() {
  return ['functions', '/functions/:functionId/deployments/duplicate', 'POST'] as const
}

export function getPostFunctionsFunctionIdDeploymentsDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdDeploymentsDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].deployments.duplicate.$post(args, options),
      )
    },
  })
}

export function usePostFunctionsFunctionIdDeploymentsDuplicate<
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
                    (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['deployments']['duplicate']['$post']
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
  const mutationDefaults = getPostFunctionsFunctionIdDeploymentsDuplicateMutationOptions<
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

export function getPostFunctionsFunctionIdDeploymentsTemplateMutationKey() {
  return ['functions', '/functions/:functionId/deployments/template', 'POST'] as const
}

export function getPostFunctionsFunctionIdDeploymentsTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['deployments']['template']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['template']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdDeploymentsTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['deployments']['template']['$post']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].deployments.template.$post(args, options),
      )
    },
  })
}

export function usePostFunctionsFunctionIdDeploymentsTemplate<
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
                    (typeof client.functions)[':functionId']['deployments']['template']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['deployments']['template']['$post']
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
  const mutationDefaults = getPostFunctionsFunctionIdDeploymentsTemplateMutationOptions<
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

export function getPostFunctionsFunctionIdDeploymentsVcsMutationKey() {
  return ['functions', '/functions/:functionId/deployments/vcs', 'POST'] as const
}

export function getPostFunctionsFunctionIdDeploymentsVcsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdDeploymentsVcsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['deployments']['vcs']['$post']
      >,
    ) {
      return parseResponse(client.functions[':functionId'].deployments.vcs.$post(args, options))
    },
  })
}

export function usePostFunctionsFunctionIdDeploymentsVcs<
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
                    (typeof client.functions)[':functionId']['deployments']['vcs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['deployments']['vcs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFunctionsFunctionIdDeploymentsVcsMutationOptions<
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

export function getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
    >
  >,
) {
  return ['functions', '/functions/:functionId/deployments/:deploymentId', toValue(args)] as const
}

export function getFunctionsFunctionIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey>
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
              (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].deployments[':deploymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFunctionsFunctionIdDeploymentsDeploymentIdMutationKey() {
  return ['functions', '/functions/:functionId/deployments/:deploymentId', 'DELETE'] as const
}

export function getDeleteFunctionsFunctionIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFunctionsFunctionIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFunctionsFunctionIdDeploymentsDeploymentId<
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
                      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$delete']
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
  const mutationDefaults = getDeleteFunctionsFunctionIdDeploymentsDeploymentIdMutationOptions<
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

export function getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
    >
  >,
) {
  return [
    'functions',
    '/functions/:functionId/deployments/:deploymentId/download',
    toValue(args),
  ] as const
}

export function getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdDeploymentsDeploymentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
                    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
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
                    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey>
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
              (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].deployments[':deploymentId'].download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusMutationKey() {
  return ['functions', '/functions/:functionId/deployments/:deploymentId/status', 'PATCH'] as const
}

export function getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchFunctionsFunctionIdDeploymentsDeploymentIdStatus<
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
                    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['deployments'][':deploymentId']['status']['$patch']
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
  const mutationDefaults = getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusMutationOptions<
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

export function getFunctionsFunctionIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>
  >,
) {
  return ['functions', '/functions/:functionId/executions', toValue(args)] as const
}

export function getFunctionsFunctionIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFunctionsFunctionIdExecutionsMutationKey() {
  return ['functions', '/functions/:functionId/executions', 'POST'] as const
}

export function getPostFunctionsFunctionIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>,
    ) {
      return parseResponse(client.functions[':functionId'].executions.$post(args, options))
    },
  })
}

export function usePostFunctionsFunctionIdExecutions<
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
                Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['executions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFunctionsFunctionIdExecutionsMutationOptions<
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

export function getFunctionsFunctionIdExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions'][':executionId']['$get']>
  >,
) {
  return ['functions', '/functions/:functionId/executions/:executionId', toValue(args)] as const
}

export function getFunctionsFunctionIdExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions'][':executionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].executions[':executionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.functions)[':functionId']['executions'][':executionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['executions'][':executionId']['$get']>
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
                    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
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
                    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdExecutionsExecutionIdQueryKey>
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
              (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].executions[':executionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteFunctionsFunctionIdExecutionsExecutionIdMutationKey() {
  return ['functions', '/functions/:functionId/executions/:executionId', 'DELETE'] as const
}

export function getDeleteFunctionsFunctionIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFunctionsFunctionIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].executions[':executionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFunctionsFunctionIdExecutionsExecutionId<
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
                      (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['executions'][':executionId']['$delete']
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
  const mutationDefaults = getDeleteFunctionsFunctionIdExecutionsExecutionIdMutationOptions<
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

export function getFunctionsFunctionIdVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>
  >,
) {
  return ['functions', '/functions/:functionId/variables', toValue(args)] as const
}

export function getFunctionsFunctionIdVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdVariablesQueryKey>
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
          Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFunctionsFunctionIdVariablesMutationKey() {
  return ['functions', '/functions/:functionId/variables', 'POST'] as const
}

export function getPostFunctionsFunctionIdVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionsFunctionIdVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>,
    ) {
      return parseResponse(client.functions[':functionId'].variables.$post(args, options))
    },
  })
}

export function usePostFunctionsFunctionIdVariables<
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
                Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.functions)[':functionId']['variables']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFunctionsFunctionIdVariablesMutationOptions<
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

export function getFunctionsFunctionIdVariablesVariableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables'][':variableId']['$get']>
  >,
) {
  return ['functions', '/functions/:functionId/variables/:variableId', toValue(args)] as const
}

export function getFunctionsFunctionIdVariablesVariableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables'][':variableId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFunctionsFunctionIdVariablesVariableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.functions[':functionId'].variables[':variableId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFunctionsFunctionIdVariablesVariableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.functions)[':functionId']['variables'][':variableId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.functions)[':functionId']['variables'][':variableId']['$get']>
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
                    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
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
                    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFunctionsFunctionIdVariablesVariableIdQueryKey>
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
            ReturnType<(typeof client.functions)[':functionId']['variables'][':variableId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdVariablesVariableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFunctionsFunctionIdVariablesVariableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.functions[':functionId'].variables[':variableId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFunctionsFunctionIdVariablesVariableIdMutationKey() {
  return ['functions', '/functions/:functionId/variables/:variableId', 'PUT'] as const
}

export function getPutFunctionsFunctionIdVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.functions)[':functionId']['variables'][':variableId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.functions)[':functionId']['variables'][':variableId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFunctionsFunctionIdVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['variables'][':variableId']['$put']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].variables[':variableId'].$put(args, options),
      )
    },
  })
}

export function usePutFunctionsFunctionIdVariablesVariableId<
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
                    (typeof client.functions)[':functionId']['variables'][':variableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['variables'][':variableId']['$put']
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
  const mutationDefaults = getPutFunctionsFunctionIdVariablesVariableIdMutationOptions<
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

export function getDeleteFunctionsFunctionIdVariablesVariableIdMutationKey() {
  return ['functions', '/functions/:functionId/variables/:variableId', 'DELETE'] as const
}

export function getDeleteFunctionsFunctionIdVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteFunctionsFunctionIdVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.functions[':functionId'].variables[':variableId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFunctionsFunctionIdVariablesVariableId<
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
                      (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.functions)[':functionId']['variables'][':variableId']['$delete']
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
  const mutationDefaults = getDeleteFunctionsFunctionIdVariablesVariableIdMutationOptions<
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

export function getPostGraphqlMutationKey() {
  return ['graphql', '/graphql', 'POST'] as const
}

export function getPostGraphqlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGraphqlMutationKey(),
    async mutationFn() {
      return parseResponse(client.graphql.$post(undefined, options))
    },
  })
}

export function usePostGraphql<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>
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
  const mutationDefaults = getPostGraphqlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGraphqlMutationMutationKey() {
  return ['graphql', '/graphql/mutation', 'POST'] as const
}

export function getPostGraphqlMutationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.mutation.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostGraphqlMutationMutationKey(),
    async mutationFn() {
      return parseResponse(client.graphql.mutation.$post(undefined, options))
    },
  })
}

export function usePostGraphqlMutation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.graphql.mutation.$post>>>
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
  const mutationDefaults = getPostGraphqlMutationMutationOptions<TError, TOnMutateResult>(
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

export function getHealthAntiVirusQueryKey() {
  return ['health', '/health/anti-virus'] as const
}

export function getHealthAntiVirusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthAntiVirusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health['anti-virus'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthAntiVirus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
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
                Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHealthAntiVirusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthAntiVirusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthAntiVirusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health['anti-virus'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthCacheQueryKey() {
  return ['health', '/health/cache'] as const
}

export function getHealthCacheQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthCacheQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.cache.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
          >,
          ReturnType<typeof getHealthCacheQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthCacheQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.cache.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthCertificateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.certificate.$get>>,
) {
  return ['health', '/health/certificate', toValue(args)] as const
}

export function getHealthCertificateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.certificate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthCertificateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.certificate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthCertificate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.certificate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>
            >
          >,
          ReturnType<typeof getHealthCertificateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthCertificateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthCertificateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.certificate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthDbQueryKey() {
  return ['health', '/health/db'] as const
}

export function getHealthDbQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthDbQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.db.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
          >,
          ReturnType<typeof getHealthDbQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthDbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthDbQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.db.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthPubsubQueryKey() {
  return ['health', '/health/pubsub'] as const
}

export function getHealthPubsubQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthPubsubQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.pubsub.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthPubsub<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
          >,
          ReturnType<typeof getHealthPubsubQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthPubsubQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthPubsubQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.pubsub.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueBuildsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.builds.$get>>,
) {
  return ['health', '/health/queue/builds', toValue(args)] as const
}

export function getHealthQueueBuildsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.builds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.builds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueBuildsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueBuildsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.certificates.$get>>,
) {
  return ['health', '/health/queue/certificates', toValue(args)] as const
}

export function getHealthQueueCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.health.queue.certificates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.health.queue.certificates.$get>>
              >
            >
          >,
          ReturnType<typeof getHealthQueueCertificatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueDatabasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.databases.$get>>,
) {
  return ['health', '/health/queue/databases', toValue(args)] as const
}

export function getHealthQueueDatabasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.databases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueDatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.databases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.databases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueDatabasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueDatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueDatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueDeletesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.deletes.$get>>,
) {
  return ['health', '/health/queue/deletes', toValue(args)] as const
}

export function getHealthQueueDeletesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.deletes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueDeletesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.deletes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueDeletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.deletes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueDeletesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueDeletesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueDeletesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.deletes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueFailedNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>>,
) {
  return ['health', '/health/queue/failed/:name', toValue(args)] as const
}

export function getHealthQueueFailedNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueFailedNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.failed[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueFailedName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHealthQueueFailedNameQueryKey>
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
          Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueFailedNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueFailedNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.failed[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueFunctionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.functions.$get>>,
) {
  return ['health', '/health/queue/functions', toValue(args)] as const
}

export function getHealthQueueFunctionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.functions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueFunctionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.functions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.functions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueFunctionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueFunctionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.functions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.logs.$get>>,
) {
  return ['health', '/health/queue/logs', toValue(args)] as const
}

export function getHealthQueueLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueMailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.mails.$get>>,
) {
  return ['health', '/health/queue/mails', toValue(args)] as const
}

export function getHealthQueueMailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.mails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueMailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.mails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueMails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.mails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueMailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueMailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.mails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueMessagingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.messaging.$get>>,
) {
  return ['health', '/health/queue/messaging', toValue(args)] as const
}

export function getHealthQueueMessagingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.messaging.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueMessagingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.messaging.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueMessaging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.messaging.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueMessagingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMessagingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueMessagingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.messaging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueMigrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.migrations.$get>>,
) {
  return ['health', '/health/queue/migrations', toValue(args)] as const
}

export function getHealthQueueMigrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.migrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueMigrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.migrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.migrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueMigrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMigrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueMigrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.migrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueStatsResourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>>,
) {
  return ['health', '/health/queue/stats-resources', toValue(args)] as const
}

export function getHealthQueueStatsResourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueStatsResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue['stats-resources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueStatsResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHealthQueueStatsResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueStatsResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueStatsResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue['stats-resources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueStatsUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>>,
) {
  return ['health', '/health/queue/stats-usage', toValue(args)] as const
}

export function getHealthQueueStatsUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueStatsUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue['stats-usage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueStatsUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHealthQueueStatsUsageQueryKey>
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
          Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueStatsUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueStatsUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue['stats-usage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueueWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.webhooks.$get>>,
) {
  return ['health', '/health/queue/webhooks', toValue(args)] as const
}

export function getHealthQueueWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHealthQueueWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.queue.webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthQueueWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.health.queue.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
            >
          >,
          ReturnType<typeof getHealthQueueWebhooksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHealthQueueWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.health.queue.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthStorageQueryKey() {
  return ['health', '/health/storage'] as const
}

export function getHealthStorageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthStorageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.storage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
          >,
          ReturnType<typeof getHealthStorageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthStorageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.storage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthStorageLocalQueryKey() {
  return ['health', '/health/storage/local'] as const
}

export function getHealthStorageLocalQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthStorageLocalQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.storage.local.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHealthStorageLocal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
            >
          >,
          ReturnType<typeof getHealthStorageLocalQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthStorageLocalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthStorageLocalQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.storage.local.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthTimeQueryKey() {
  return ['health', '/health/time'] as const
}

export function getHealthTimeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthTimeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.time.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
          >,
          ReturnType<typeof getHealthTimeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthTimeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.time.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleQueryKey() {
  return ['locale', '/locale'] as const
}

export function getLocaleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocale<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
          ReturnType<typeof getLocaleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocaleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleCodesQueryKey() {
  return ['locale', '/locale/codes'] as const
}

export function getLocaleCodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleCodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.codes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocaleCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
          >,
          ReturnType<typeof getLocaleCodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocaleCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleCodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.codes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleContinentsQueryKey() {
  return ['locale', '/locale/continents'] as const
}

export function getLocaleContinentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleContinentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.continents.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocaleContinents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>
            >
          >,
          ReturnType<typeof getLocaleContinentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleContinentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleContinentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.continents.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleCountriesQueryKey() {
  return ['locale', '/locale/countries'] as const
}

export function getLocaleCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocaleCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>
            >
          >,
          ReturnType<typeof getLocaleCountriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleCountriesEuQueryKey() {
  return ['locale', '/locale/countries/eu'] as const
}

export function getLocaleCountriesEuQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleCountriesEuQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.countries.eu.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocaleCountriesEu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
            >
          >,
          ReturnType<typeof getLocaleCountriesEuQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesEuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleCountriesEuQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.countries.eu.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleCountriesPhonesQueryKey() {
  return ['locale', '/locale/countries/phones'] as const
}

export function getLocaleCountriesPhonesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleCountriesPhonesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.countries.phones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocaleCountriesPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
            >
          >,
          ReturnType<typeof getLocaleCountriesPhonesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesPhonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleCountriesPhonesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.countries.phones.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleCurrenciesQueryKey() {
  return ['locale', '/locale/currencies'] as const
}

export function getLocaleCurrenciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleCurrenciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.currencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocaleCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>
            >
          >,
          ReturnType<typeof getLocaleCurrenciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleCurrenciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.currencies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocaleLanguagesQueryKey() {
  return ['locale', '/locale/languages'] as const
}

export function getLocaleLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocaleLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locale.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocaleLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>
            >
          >,
          ReturnType<typeof getLocaleLanguagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocaleLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locale.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.messages.$get>>,
) {
  return ['messaging', '/messaging/messages', toValue(args)] as const
}

export function getMessagingMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.messages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.messages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>
            >
          >,
          ReturnType<typeof getMessagingMessagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagingMessagesEmailMutationKey() {
  return ['messaging', '/messaging/messages/email', 'POST'] as const
}

export function getPostMessagingMessagesEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.messages.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingMessagesEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.messages.email.$post>) {
      return parseResponse(client.messaging.messages.email.$post(args, options))
    },
  })
}

export function usePostMessagingMessagesEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.messages.email.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.messages.email.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingMessagesEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingMessagesEmailMessageIdMutationKey() {
  return ['messaging', '/messaging/messages/email/:messageId', 'PATCH'] as const
}

export function getPatchMessagingMessagesEmailMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.email)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingMessagesEmailMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>,
    ) {
      return parseResponse(client.messaging.messages.email[':messageId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingMessagesEmailMessageId<
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
                  ReturnType<(typeof client.messaging.messages.email)[':messageId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.messages.email)[':messageId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingMessagesEmailMessageIdMutationOptions<
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

export function getPostMessagingMessagesPushMutationKey() {
  return ['messaging', '/messaging/messages/push', 'POST'] as const
}

export function getPostMessagingMessagesPushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.push.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.messages.push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingMessagesPushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.messages.push.$post>) {
      return parseResponse(client.messaging.messages.push.$post(args, options))
    },
  })
}

export function usePostMessagingMessagesPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.push.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.messages.push.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingMessagesPushMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingMessagesPushMessageIdMutationKey() {
  return ['messaging', '/messaging/messages/push/:messageId', 'PATCH'] as const
}

export function getPatchMessagingMessagesPushMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.push)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingMessagesPushMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>,
    ) {
      return parseResponse(client.messaging.messages.push[':messageId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingMessagesPushMessageId<
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
                Awaited<ReturnType<(typeof client.messaging.messages.push)[':messageId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.messages.push)[':messageId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingMessagesPushMessageIdMutationOptions<
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

export function getPostMessagingMessagesSmsMutationKey() {
  return ['messaging', '/messaging/messages/sms', 'POST'] as const
}

export function getPostMessagingMessagesSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.sms.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.messages.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingMessagesSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.messages.sms.$post>) {
      return parseResponse(client.messaging.messages.sms.$post(args, options))
    },
  })
}

export function usePostMessagingMessagesSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.sms.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.messages.sms.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingMessagesSmsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingMessagesSmsMessageIdMutationKey() {
  return ['messaging', '/messaging/messages/sms/:messageId', 'PATCH'] as const
}

export function getPatchMessagingMessagesSmsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingMessagesSmsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>,
    ) {
      return parseResponse(client.messaging.messages.sms[':messageId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingMessagesSmsMessageId<
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
                Awaited<ReturnType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.messages.sms)[':messageId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingMessagesSmsMessageIdMutationOptions<
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

export function getMessagingMessagesMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>
  >,
) {
  return ['messaging', '/messaging/messages/:messageId', toValue(args)] as const
}

export function getMessagingMessagesMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingMessagesMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.messages[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagingMessagesMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingMessagesMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingMessagesMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.messages[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessagingMessagesMessageIdMutationKey() {
  return ['messaging', '/messaging/messages/:messageId', 'DELETE'] as const
}

export function getDeleteMessagingMessagesMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingMessagesMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']>,
    ) {
      return parseResponse(client.messaging.messages[':messageId'].$delete(args, options))
    },
  })
}

export function useDeleteMessagingMessagesMessageId<
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
                  Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.messaging.messages)[':messageId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMessagingMessagesMessageIdMutationOptions<
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

export function getMessagingMessagesMessageIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>
  >,
) {
  return ['messaging', '/messaging/messages/:messageId/logs', toValue(args)] as const
}

export function getMessagingMessagesMessageIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingMessagesMessageIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.messages[':messageId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingMessagesMessageIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>
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
                  ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagingMessagesMessageIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingMessagesMessageIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingMessagesMessageIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.messages[':messageId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingMessagesMessageIdTargetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>
  >,
) {
  return ['messaging', '/messaging/messages/:messageId/targets', toValue(args)] as const
}

export function getMessagingMessagesMessageIdTargetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingMessagesMessageIdTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.messages[':messageId'].targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingMessagesMessageIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>
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
                  ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagingMessagesMessageIdTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingMessagesMessageIdTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingMessagesMessageIdTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.messages[':messageId'].targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.providers.$get>>,
) {
  return ['messaging', '/messaging/providers', toValue(args)] as const
}

export function getMessagingProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.providers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.providers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.providers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
            >
          >,
          ReturnType<typeof getMessagingProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.providers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagingProvidersApnsMutationKey() {
  return ['messaging', '/messaging/providers/apns', 'POST'] as const
}

export function getPostMessagingProvidersApnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.apns.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.apns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersApnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.apns.$post>) {
      return parseResponse(client.messaging.providers.apns.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersApns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.apns.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.apns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersApnsMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersApnsProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/apns/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersApnsProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersApnsProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.apns[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersApnsProviderId<
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
                  ReturnType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.apns)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersApnsProviderIdMutationOptions<
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

export function getPostMessagingProvidersFcmMutationKey() {
  return ['messaging', '/messaging/providers/fcm', 'POST'] as const
}

export function getPostMessagingProvidersFcmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.fcm.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.fcm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersFcmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.fcm.$post>) {
      return parseResponse(client.messaging.providers.fcm.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersFcm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.fcm.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.fcm.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersFcmMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersFcmProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/fcm/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersFcmProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersFcmProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.fcm[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersFcmProviderId<
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
                  ReturnType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.fcm)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersFcmProviderIdMutationOptions<
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

export function getPostMessagingProvidersMailgunMutationKey() {
  return ['messaging', '/messaging/providers/mailgun', 'POST'] as const
}

export function getPostMessagingProvidersMailgunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.mailgun.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.mailgun.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersMailgunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.mailgun.$post>) {
      return parseResponse(client.messaging.providers.mailgun.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersMailgun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.mailgun.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.mailgun.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersMailgunMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersMailgunProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/mailgun/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersMailgunProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersMailgunProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.mailgun[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersMailgunProviderId<
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
                  ReturnType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.mailgun)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersMailgunProviderIdMutationOptions<
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

export function getPostMessagingProvidersMsg91MutationKey() {
  return ['messaging', '/messaging/providers/msg91', 'POST'] as const
}

export function getPostMessagingProvidersMsg91MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.msg91.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.msg91.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersMsg91MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.msg91.$post>) {
      return parseResponse(client.messaging.providers.msg91.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersMsg91<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.msg91.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.msg91.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersMsg91MutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersMsg91ProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/msg91/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersMsg91ProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersMsg91ProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.msg91[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersMsg91ProviderId<
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
                  ReturnType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.msg91)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersMsg91ProviderIdMutationOptions<
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

export function getPostMessagingProvidersSendgridMutationKey() {
  return ['messaging', '/messaging/providers/sendgrid', 'POST'] as const
}

export function getPostMessagingProvidersSendgridMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.sendgrid.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.sendgrid.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersSendgridMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.sendgrid.$post>) {
      return parseResponse(client.messaging.providers.sendgrid.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersSendgrid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.sendgrid.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.sendgrid.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersSendgridMutationOptions<
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

export function getPatchMessagingProvidersSendgridProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/sendgrid/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersSendgridProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersSendgridProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.sendgrid[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersSendgridProviderId<
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
                  ReturnType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.sendgrid)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersSendgridProviderIdMutationOptions<
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

export function getPostMessagingProvidersSmtpMutationKey() {
  return ['messaging', '/messaging/providers/smtp', 'POST'] as const
}

export function getPostMessagingProvidersSmtpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.smtp.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.smtp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersSmtpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.smtp.$post>) {
      return parseResponse(client.messaging.providers.smtp.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersSmtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.smtp.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.smtp.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersSmtpMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersSmtpProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/smtp/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersSmtpProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersSmtpProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.smtp[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersSmtpProviderId<
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
                  ReturnType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.smtp)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersSmtpProviderIdMutationOptions<
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

export function getPostMessagingProvidersTelesignMutationKey() {
  return ['messaging', '/messaging/providers/telesign', 'POST'] as const
}

export function getPostMessagingProvidersTelesignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.telesign.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.telesign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersTelesignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.telesign.$post>) {
      return parseResponse(client.messaging.providers.telesign.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersTelesign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.telesign.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.telesign.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersTelesignMutationOptions<
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

export function getPatchMessagingProvidersTelesignProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/telesign/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersTelesignProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersTelesignProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.telesign[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersTelesignProviderId<
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
                  ReturnType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.telesign)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersTelesignProviderIdMutationOptions<
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

export function getPostMessagingProvidersTextmagicMutationKey() {
  return ['messaging', '/messaging/providers/textmagic', 'POST'] as const
}

export function getPostMessagingProvidersTextmagicMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.textmagic.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.textmagic.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersTextmagicMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.textmagic.$post>) {
      return parseResponse(client.messaging.providers.textmagic.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersTextmagic<
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
                Awaited<ReturnType<typeof client.messaging.providers.textmagic.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.textmagic.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersTextmagicMutationOptions<
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

export function getPatchMessagingProvidersTextmagicProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/textmagic/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersTextmagicProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersTextmagicProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.messaging.providers.textmagic)[':providerId']['$patch']
      >,
    ) {
      return parseResponse(
        client.messaging.providers.textmagic[':providerId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMessagingProvidersTextmagicProviderId<
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
                  ReturnType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.textmagic)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersTextmagicProviderIdMutationOptions<
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

export function getPostMessagingProvidersTwilioMutationKey() {
  return ['messaging', '/messaging/providers/twilio', 'POST'] as const
}

export function getPostMessagingProvidersTwilioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.twilio.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.twilio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersTwilioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.twilio.$post>) {
      return parseResponse(client.messaging.providers.twilio.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersTwilio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.twilio.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.twilio.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersTwilioMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersTwilioProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/twilio/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersTwilioProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersTwilioProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.twilio[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersTwilioProviderId<
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
                  ReturnType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.twilio)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersTwilioProviderIdMutationOptions<
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

export function getPostMessagingProvidersVonageMutationKey() {
  return ['messaging', '/messaging/providers/vonage', 'POST'] as const
}

export function getPostMessagingProvidersVonageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.vonage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.messaging.providers.vonage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingProvidersVonageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.providers.vonage.$post>) {
      return parseResponse(client.messaging.providers.vonage.$post(args, options))
    },
  })
}

export function usePostMessagingProvidersVonage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messaging.providers.vonage.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.providers.vonage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingProvidersVonageMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingProvidersVonageProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/vonage/:providerId', 'PATCH'] as const
}

export function getPatchMessagingProvidersVonageProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingProvidersVonageProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>,
    ) {
      return parseResponse(client.messaging.providers.vonage[':providerId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingProvidersVonageProviderId<
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
                  ReturnType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.providers.vonage)[':providerId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingProvidersVonageProviderIdMutationOptions<
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

export function getMessagingProvidersProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>
  >,
) {
  return ['messaging', '/messaging/providers/:providerId', toValue(args)] as const
}

export function getMessagingProvidersProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingProvidersProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.providers[':providerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagingProvidersProviderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProvidersProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingProvidersProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.providers[':providerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessagingProvidersProviderIdMutationKey() {
  return ['messaging', '/messaging/providers/:providerId', 'DELETE'] as const
}

export function getDeleteMessagingProvidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingProvidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']>,
    ) {
      return parseResponse(client.messaging.providers[':providerId'].$delete(args, options))
    },
  })
}

export function useDeleteMessagingProvidersProviderId<
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
                  Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.messaging.providers)[':providerId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMessagingProvidersProviderIdMutationOptions<
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

export function getMessagingProvidersProviderIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>
  >,
) {
  return ['messaging', '/messaging/providers/:providerId/logs', toValue(args)] as const
}

export function getMessagingProvidersProviderIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingProvidersProviderIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.providers[':providerId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingProvidersProviderIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>
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
                  ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagingProvidersProviderIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProvidersProviderIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingProvidersProviderIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.providers[':providerId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingSubscribersSubscriberIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
  >,
) {
  return ['messaging', '/messaging/subscribers/:subscriberId/logs', toValue(args)] as const
}

export function getMessagingSubscribersSubscriberIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingSubscribersSubscriberIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.subscribers[':subscriberId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingSubscribersSubscriberIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
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
                  ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagingSubscribersSubscriberIdLogsQueryKey>
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
            ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingSubscribersSubscriberIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingSubscribersSubscriberIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.subscribers[':subscriberId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.topics.$get>>,
) {
  return ['messaging', '/messaging/topics', toValue(args)] as const
}

export function getMessagingTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.topics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messaging.topics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>
            >
          >,
          ReturnType<typeof getMessagingTopicsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagingTopicsMutationKey() {
  return ['messaging', '/messaging/topics', 'POST'] as const
}

export function getPostMessagingTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.messaging.topics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingTopicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messaging.topics.$post>) {
      return parseResponse(client.messaging.topics.$post(args, options))
    },
  })
}

export function usePostMessagingTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.messaging.topics.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingTopicsMutationOptions<TError, TOnMutateResult>(
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

export function getMessagingTopicsTopicIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>>,
) {
  return ['messaging', '/messaging/topics/:topicId', toValue(args)] as const
}

export function getMessagingTopicsTopicIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingTopicsTopicIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.topics[':topicId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingTopicsTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagingTopicsTopicIdQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsTopicIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingTopicsTopicIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.topics[':topicId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessagingTopicsTopicIdMutationKey() {
  return ['messaging', '/messaging/topics/:topicId', 'DELETE'] as const
}

export function getDeleteMessagingTopicsTopicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingTopicsTopicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']>,
    ) {
      return parseResponse(client.messaging.topics[':topicId'].$delete(args, options))
    },
  })
}

export function useDeleteMessagingTopicsTopicId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.messaging.topics)[':topicId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMessagingTopicsTopicIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchMessagingTopicsTopicIdMutationKey() {
  return ['messaging', '/messaging/topics/:topicId', 'PATCH'] as const
}

export function getPatchMessagingTopicsTopicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMessagingTopicsTopicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']>,
    ) {
      return parseResponse(client.messaging.topics[':topicId'].$patch(args, options))
    },
  })
}

export function usePatchMessagingTopicsTopicId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.topics)[':topicId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMessagingTopicsTopicIdMutationOptions<TError, TOnMutateResult>(
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

export function getMessagingTopicsTopicIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>
  >,
) {
  return ['messaging', '/messaging/topics/:topicId/logs', toValue(args)] as const
}

export function getMessagingTopicsTopicIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingTopicsTopicIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.topics[':topicId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingTopicsTopicIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMessagingTopicsTopicIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsTopicIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingTopicsTopicIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.topics[':topicId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagingTopicsTopicIdSubscribersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>
  >,
) {
  return ['messaging', '/messaging/topics/:topicId/subscribers', toValue(args)] as const
}

export function getMessagingTopicsTopicIdSubscribersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingTopicsTopicIdSubscribersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.topics[':topicId'].subscribers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingTopicsTopicIdSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>
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
                  ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMessagingTopicsTopicIdSubscribersQueryKey>
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
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsTopicIdSubscribersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingTopicsTopicIdSubscribersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.topics[':topicId'].subscribers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMessagingTopicsTopicIdSubscribersMutationKey() {
  return ['messaging', '/messaging/topics/:topicId/subscribers', 'POST'] as const
}

export function getPostMessagingTopicsTopicIdSubscribersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagingTopicsTopicIdSubscribersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>,
    ) {
      return parseResponse(client.messaging.topics[':topicId'].subscribers.$post(args, options))
    },
  })
}

export function usePostMessagingTopicsTopicIdSubscribers<
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
                  ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagingTopicsTopicIdSubscribersMutationOptions<
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

export function getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
    >
  >,
) {
  return [
    'messaging',
    '/messaging/topics/:topicId/subscribers/:subscriberId',
    toValue(args),
  ] as const
}

export function getMessagingTopicsTopicIdSubscribersSubscriberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagingTopicsTopicIdSubscribersSubscriberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
                    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
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
                    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey>
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
              (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdMutationKey() {
  return ['messaging', '/messaging/topics/:topicId/subscribers/:subscriberId', 'DELETE'] as const
}

export function getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.messaging.topics[':topicId'].subscribers[':subscriberId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMessagingTopicsTopicIdSubscribersSubscriberId<
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
                      (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$delete']
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
  const mutationDefaults = getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdMutationOptions<
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

export function getSitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
) {
  return ['sites', '/sites', toValue(args)] as const
}

export function getSitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
          ReturnType<typeof getSitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesMutationKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function getPostSitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    InferRequestType<typeof client.sites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sites.$post>) {
      return parseResponse(client.sites.$post(args, options))
    },
  })
}

export function usePostSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
          TError,
          InferRequestType<typeof client.sites.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSitesFrameworksQueryKey() {
  return ['sites', '/sites/frameworks'] as const
}

export function getSitesFrameworksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSitesFrameworksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites.frameworks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSitesFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>
            >
          >,
          ReturnType<typeof getSitesFrameworksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesFrameworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSitesFrameworksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sites.frameworks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSpecificationsQueryKey() {
  return ['sites', '/sites/specifications'] as const
}

export function getSitesSpecificationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSitesSpecificationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites.specifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSpecifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
            >
          >,
          ReturnType<typeof getSitesSpecificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSpecificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSitesSpecificationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sites.specifications.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['$get']>>,
) {
  return ['sites', '/sites/:siteId', toValue(args)] as const
}

export function getSitesSiteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
            >
          >,
          ReturnType<typeof getSitesSiteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdMutationKey() {
  return ['sites', '/sites/:siteId', 'PUT'] as const
}

export function getPutSitesSiteIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':siteId']['$put']>) {
      return parseResponse(client.sites[':siteId'].$put(args, options))
    },
  })
}

export function usePutSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdMutationKey() {
  return ['sites', '/sites/:siteId', 'DELETE'] as const
}

export function getDeleteSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':siteId']['$delete']>) {
      return parseResponse(client.sites[':siteId'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':siteId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSitesSiteIdDeploymentMutationKey() {
  return ['sites', '/sites/:siteId/deployment', 'PATCH'] as const
}

export function getPatchSitesSiteIdDeploymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployment']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdDeploymentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']>,
    ) {
      return parseResponse(client.sites[':siteId'].deployment.$patch(args, options))
    },
  })
}

export function usePatchSitesSiteIdDeployment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['deployment']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['deployment']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSitesSiteIdDeploymentMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>>,
) {
  return ['sites', '/sites/:siteId/deployments', toValue(args)] as const
}

export function getSitesSiteIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdDeploymentsMutationKey() {
  return ['sites', '/sites/:siteId/deployments', 'POST'] as const
}

export function getPostSitesSiteIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']>,
    ) {
      return parseResponse(client.sites[':siteId'].deployments.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['deployments']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdDeploymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSitesSiteIdDeploymentsDuplicateMutationKey() {
  return ['sites', '/sites/:siteId/deployments/duplicate', 'POST'] as const
}

export function getPostSitesSiteIdDeploymentsDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploymentsDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>,
    ) {
      return parseResponse(client.sites[':siteId'].deployments.duplicate.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDeploymentsDuplicate<
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
                  ReturnType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['deployments']['duplicate']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdDeploymentsDuplicateMutationOptions<
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

export function getPostSitesSiteIdDeploymentsTemplateMutationKey() {
  return ['sites', '/sites/:siteId/deployments/template', 'POST'] as const
}

export function getPostSitesSiteIdDeploymentsTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploymentsTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>,
    ) {
      return parseResponse(client.sites[':siteId'].deployments.template.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDeploymentsTemplate<
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
                  ReturnType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['deployments']['template']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdDeploymentsTemplateMutationOptions<
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

export function getPostSitesSiteIdDeploymentsVcsMutationKey() {
  return ['sites', '/sites/:siteId/deployments/vcs', 'POST'] as const
}

export function getPostSitesSiteIdDeploymentsVcsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdDeploymentsVcsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>,
    ) {
      return parseResponse(client.sites[':siteId'].deployments.vcs.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdDeploymentsVcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['deployments']['vcs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdDeploymentsVcsMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
  >,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId', toValue(args)] as const
}

export function getSitesSiteIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
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
                    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']
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
                    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeploymentsDeploymentIdQueryKey>
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
            ReturnType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdDeploymentsDeploymentIdMutationKey() {
  return ['sites', '/sites/:siteId/deployments/:deploymentId', 'DELETE'] as const
}

export function getDeleteSitesSiteIdDeploymentsDeploymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdDeploymentsDeploymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSitesSiteIdDeploymentsDeploymentId<
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
                      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$delete']
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
  const mutationDefaults = getDeleteSitesSiteIdDeploymentsDeploymentIdMutationOptions<
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

export function getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
    >
  >,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId/download', toValue(args)] as const
}

export function getSitesSiteIdDeploymentsDeploymentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdDeploymentsDeploymentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
                    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
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
                    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey>
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
              (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].deployments[':deploymentId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSitesSiteIdDeploymentsDeploymentIdStatusMutationKey() {
  return ['sites', '/sites/:siteId/deployments/:deploymentId/status', 'PATCH'] as const
}

export function getPatchSitesSiteIdDeploymentsDeploymentIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdDeploymentsDeploymentIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchSitesSiteIdDeploymentsDeploymentIdStatus<
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
                    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sites)[':siteId']['deployments'][':deploymentId']['status']['$patch']
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
  const mutationDefaults = getPatchSitesSiteIdDeploymentsDeploymentIdStatusMutationOptions<
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

export function getSitesSiteIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>>,
) {
  return ['sites', '/sites/:siteId/logs', toValue(args)] as const
}

export function getSitesSiteIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSitesSiteIdLogsLogIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>
  >,
) {
  return ['sites', '/sites/:siteId/logs/:logId', toValue(args)] as const
}

export function getSitesSiteIdLogsLogIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdLogsLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].logs[':logId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdLogsLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdLogsLogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdLogsLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdLogsLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].logs[':logId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSitesSiteIdLogsLogIdMutationKey() {
  return ['sites', '/sites/:siteId/logs/:logId', 'DELETE'] as const
}

export function getDeleteSitesSiteIdLogsLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdLogsLogIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>,
    ) {
      return parseResponse(client.sites[':siteId'].logs[':logId'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdLogsLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdLogsLogIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdVariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>>,
) {
  return ['sites', '/sites/:siteId/variables', toValue(args)] as const
}

export function getSitesSiteIdVariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdVariablesQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSitesSiteIdVariablesMutationKey() {
  return ['sites', '/sites/:siteId/variables', 'POST'] as const
}

export function getPostSitesSiteIdVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesSiteIdVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']>,
    ) {
      return parseResponse(client.sites[':siteId'].variables.$post(args, options))
    },
  })
}

export function usePostSitesSiteIdVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['variables']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesSiteIdVariablesMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdVariablesVariableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
  >,
) {
  return ['sites', '/sites/:siteId/variables/:variableId', toValue(args)] as const
}

export function getSitesSiteIdVariablesVariableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSitesSiteIdVariablesVariableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sites[':siteId'].variables[':variableId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSitesSiteIdVariablesVariableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
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
                  ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSitesSiteIdVariablesVariableIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdVariablesVariableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSitesSiteIdVariablesVariableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sites[':siteId'].variables[':variableId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSitesSiteIdVariablesVariableIdMutationKey() {
  return ['sites', '/sites/:siteId/variables/:variableId', 'PUT'] as const
}

export function getPutSitesSiteIdVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>,
    ) {
      return parseResponse(client.sites[':siteId'].variables[':variableId'].$put(args, options))
    },
  })
}

export function usePutSitesSiteIdVariablesVariableId<
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
                  ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteIdVariablesVariableIdMutationOptions<
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

export function getDeleteSitesSiteIdVariablesVariableIdMutationKey() {
  return ['sites', '/sites/:siteId/variables/:variableId', 'DELETE'] as const
}

export function getDeleteSitesSiteIdVariablesVariableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdVariablesVariableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sites)[':siteId']['variables'][':variableId']['$delete']
      >,
    ) {
      return parseResponse(client.sites[':siteId'].variables[':variableId'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteIdVariablesVariableId<
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
                      (typeof client.sites)[':siteId']['variables'][':variableId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdVariablesVariableIdMutationOptions<
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

export function getStorageBucketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage.buckets.$get>>,
) {
  return ['storage', '/storage/buckets', toValue(args)] as const
}

export function getStorageBucketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage.buckets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.storage.buckets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>
            >
          >,
          ReturnType<typeof getStorageBucketsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStorageBucketsMutationKey() {
  return ['storage', '/storage/buckets', 'POST'] as const
}

export function getPostStorageBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.storage.buckets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStorageBucketsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.storage.buckets.$post>) {
      return parseResponse(client.storage.buckets.$post(args, options))
    },
  })
}

export function usePostStorageBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.storage.buckets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStorageBucketsMutationOptions<TError, TOnMutateResult>(
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

export function getStorageBucketsBucketIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>>,
) {
  return ['storage', '/storage/buckets/:bucketId', toValue(args)] as const
}

export function getStorageBucketsBucketIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdQueryKey>
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
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStorageBucketsBucketIdMutationKey() {
  return ['storage', '/storage/buckets/:bucketId', 'PUT'] as const
}

export function getPutStorageBucketsBucketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStorageBucketsBucketIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']>) {
      return parseResponse(client.storage.buckets[':bucketId'].$put(args, options))
    },
  })
}

export function usePutStorageBucketsBucketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.storage.buckets)[':bucketId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutStorageBucketsBucketIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteStorageBucketsBucketIdMutationKey() {
  return ['storage', '/storage/buckets/:bucketId', 'DELETE'] as const
}

export function getDeleteStorageBucketsBucketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStorageBucketsBucketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']>,
    ) {
      return parseResponse(client.storage.buckets[':bucketId'].$delete(args, options))
    },
  })
}

export function useDeleteStorageBucketsBucketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.storage.buckets)[':bucketId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteStorageBucketsBucketIdMutationOptions<TError, TOnMutateResult>(
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

export function getStorageBucketsBucketIdFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files', toValue(args)] as const
}

export function getStorageBucketsBucketIdFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdFilesQueryKey>
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
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStorageBucketsBucketIdFilesMutationKey() {
  return ['storage', '/storage/buckets/:bucketId/files', 'POST'] as const
}

export function getPostStorageBucketsBucketIdFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStorageBucketsBucketIdFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>,
    ) {
      return parseResponse(client.storage.buckets[':bucketId'].files.$post(args, options))
    },
  })
}

export function usePostStorageBucketsBucketIdFiles<
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
                Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStorageBucketsBucketIdFilesMutationOptions<
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

export function getStorageBucketsBucketIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', toValue(args)] as const
}

export function getStorageBucketsBucketIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdFilesFileIdQueryKey>
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
            ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStorageBucketsBucketIdFilesFileIdMutationKey() {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', 'PUT'] as const
}

export function getPutStorageBucketsBucketIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStorageBucketsBucketIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']
      >,
    ) {
      return parseResponse(client.storage.buckets[':bucketId'].files[':fileId'].$put(args, options))
    },
  })
}

export function usePutStorageBucketsBucketIdFilesFileId<
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$put']
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
  const mutationDefaults = getPutStorageBucketsBucketIdFilesFileIdMutationOptions<
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

export function getDeleteStorageBucketsBucketIdFilesFileIdMutationKey() {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', 'DELETE'] as const
}

export function getDeleteStorageBucketsBucketIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStorageBucketsBucketIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteStorageBucketsBucketIdFilesFileId<
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
                      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$delete']
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
  const mutationDefaults = getDeleteStorageBucketsBucketIdFilesFileIdMutationOptions<
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

export function getStorageBucketsBucketIdFilesFileIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
    >
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/download', toValue(args)] as const
}

export function getStorageBucketsBucketIdFilesFileIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketIdFilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdFilesFileIdDownloadQueryKey>
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
              (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdFilesFileIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStorageBucketsBucketIdFilesFileIdPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
    >
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/preview', toValue(args)] as const
}

export function getStorageBucketsBucketIdFilesFileIdPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketIdFilesFileIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdFilesFileIdPreviewQueryKey>
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
              (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdFilesFileIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStorageBucketsBucketIdFilesFileIdViewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
    >
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/view', toValue(args)] as const
}

export function getStorageBucketsBucketIdFilesFileIdViewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdViewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].view.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStorageBucketsBucketIdFilesFileIdView<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
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
                    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getStorageBucketsBucketIdFilesFileIdViewQueryKey>
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
              (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsBucketIdFilesFileIdViewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStorageBucketsBucketIdFilesFileIdViewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.storage.buckets[':bucketId'].files[':fileId'].view.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
) {
  return ['teams', '/teams', toValue(args)] as const
}

export function getTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
          ReturnType<typeof getTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsMutationKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function getPostTeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.$post>) {
      return parseResponse(client.teams.$post(args, options))
    },
  })
}

export function usePostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
          TError,
          InferRequestType<typeof client.teams.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
) {
  return ['teams', '/teams/:teamId', toValue(args)] as const
}

export function getTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTeamsTeamIdMutationKey() {
  return ['teams', '/teams/:teamId', 'PUT'] as const
}

export function getPutTeamsTeamIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':teamId']['$put']>) {
      return parseResponse(client.teams[':teamId'].$put(args, options))
    },
  })
}

export function usePutTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamsTeamIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTeamsTeamIdMutationKey() {
  return ['teams', '/teams/:teamId', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':teamId']['$delete']>) {
      return parseResponse(client.teams[':teamId'].$delete(args, options))
    },
  })
}

export function useDeleteTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.teams)[':teamId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
) {
  return ['teams', '/teams/:teamId/memberships', toValue(args)] as const
}

export function getTeamsTeamIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsTeamIdMembershipsMutationKey() {
  return ['teams', '/teams/:teamId/memberships', 'POST'] as const
}

export function getPostTeamsTeamIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
    ) {
      return parseResponse(client.teams[':teamId'].memberships.$post(args, options))
    },
  })
}

export function usePostTeamsTeamIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['memberships']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamIdMembershipsMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdMembershipsMembershipIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/memberships/:membershipId', toValue(args)] as const
}

export function getTeamsTeamIdMembershipsMembershipIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMembershipsMembershipIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].memberships[':membershipId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdMembershipsMembershipId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
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
                    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']
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
                    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMembershipsMembershipIdQueryKey>
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
            ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMembershipsMembershipIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMembershipsMembershipIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].memberships[':membershipId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTeamsTeamIdMembershipsMembershipIdMutationKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdMembershipsMembershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdMembershipsMembershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
      >,
    ) {
      return parseResponse(
        client.teams[':teamId'].memberships[':membershipId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTeamsTeamIdMembershipsMembershipId<
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
                      (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['$delete']
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
  const mutationDefaults = getDeleteTeamsTeamIdMembershipsMembershipIdMutationOptions<
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

export function getPatchTeamsTeamIdMembershipsMembershipIdMutationKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId', 'PATCH'] as const
}

export function getPatchTeamsTeamIdMembershipsMembershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTeamsTeamIdMembershipsMembershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']
      >,
    ) {
      return parseResponse(
        client.teams[':teamId'].memberships[':membershipId'].$patch(args, options),
      )
    },
  })
}

export function usePatchTeamsTeamIdMembershipsMembershipId<
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
                    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['$patch']
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
  const mutationDefaults = getPatchTeamsTeamIdMembershipsMembershipIdMutationOptions<
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

export function getPatchTeamsTeamIdMembershipsMembershipIdStatusMutationKey() {
  return ['teams', '/teams/:teamId/memberships/:membershipId/status', 'PATCH'] as const
}

export function getPatchTeamsTeamIdMembershipsMembershipIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTeamsTeamIdMembershipsMembershipIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.teams[':teamId'].memberships[':membershipId'].status.$patch(args, options),
      )
    },
  })
}

export function usePatchTeamsTeamIdMembershipsMembershipIdStatus<
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
                    (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.teams)[':teamId']['memberships'][':membershipId']['status']['$patch']
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
  const mutationDefaults = getPatchTeamsTeamIdMembershipsMembershipIdStatusMutationOptions<
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

export function getTeamsTeamIdPrefsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>>,
) {
  return ['teams', '/teams/:teamId/prefs', toValue(args)] as const
}

export function getTeamsTeamIdPrefsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdPrefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].prefs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdPrefsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdPrefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].prefs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTeamsTeamIdPrefsMutationKey() {
  return ['teams', '/teams/:teamId/prefs', 'PUT'] as const
}

export function getPutTeamsTeamIdPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdPrefsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']>) {
      return parseResponse(client.teams[':teamId'].prefs.$put(args, options))
    },
  })
}

export function usePutTeamsTeamIdPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':teamId']['prefs']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamsTeamIdPrefsMutationOptions<TError, TOnMutateResult>(
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

export function getTokensBucketsBucketIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
  >,
) {
  return ['tokens', '/tokens/buckets/:bucketId/files/:fileId', toValue(args)] as const
}

export function getTokensBucketsBucketIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensBucketsBucketIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.buckets[':bucketId'].files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensBucketsBucketIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
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
                    (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']
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
                    (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTokensBucketsBucketIdFilesFileIdQueryKey>
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
            ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensBucketsBucketIdFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensBucketsBucketIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.buckets[':bucketId'].files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTokensBucketsBucketIdFilesFileIdMutationKey() {
  return ['tokens', '/tokens/buckets/:bucketId/files/:fileId', 'POST'] as const
}

export function getPostTokensBucketsBucketIdFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTokensBucketsBucketIdFilesFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']
      >,
    ) {
      return parseResponse(client.tokens.buckets[':bucketId'].files[':fileId'].$post(args, options))
    },
  })
}

export function usePostTokensBucketsBucketIdFilesFileId<
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
                    (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$post']
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
  const mutationDefaults = getPostTokensBucketsBucketIdFilesFileIdMutationOptions<
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

export function getTokensTokenIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':tokenId']['$get']>>,
) {
  return ['tokens', '/tokens/:tokenId', toValue(args)] as const
}

export function getTokensTokenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':tokenId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':tokenId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
            >
          >,
          ReturnType<typeof getTokensTokenIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTokensTokenIdMutationKey() {
  return ['tokens', '/tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tokens)[':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTokensTokenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':tokenId']['$delete']>) {
      return parseResponse(client.tokens[':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tokens)[':tokenId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTokensTokenIdMutationKey() {
  return ['tokens', '/tokens/:tokenId', 'PATCH'] as const
}

export function getPatchTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTokensTokenIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>) {
      return parseResponse(client.tokens[':tokenId'].$patch(args, options))
    },
  })
}

export function usePatchTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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
  return ['users', '/users', toValue(args)] as const
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

export function getPostUsersArgon2MutationKey() {
  return ['users', '/users/argon2', 'POST'] as const
}

export function getPostUsersArgon2MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.argon2.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.argon2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersArgon2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.argon2.$post>) {
      return parseResponse(client.users.argon2.$post(args, options))
    },
  })
}

export function usePostUsersArgon2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.argon2.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.argon2.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersArgon2MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersBcryptMutationKey() {
  return ['users', '/users/bcrypt', 'POST'] as const
}

export function getPostUsersBcryptMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.bcrypt.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.bcrypt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersBcryptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.bcrypt.$post>) {
      return parseResponse(client.users.bcrypt.$post(args, options))
    },
  })
}

export function usePostUsersBcrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.bcrypt.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.bcrypt.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersBcryptMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdentitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.identities.$get>>,
) {
  return ['users', '/users/identities', toValue(args)] as const
}

export function getUsersIdentitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.identities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersIdentitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.identities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.identities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>
            >
          >,
          ReturnType<typeof getUsersIdentitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdentitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersIdentitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.identities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersIdentitiesIdentityIdMutationKey() {
  return ['users', '/users/identities/:identityId', 'DELETE'] as const
}

export function getDeleteUsersIdentitiesIdentityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users.identities)[':identityId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users.identities)[':identityId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersIdentitiesIdentityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users.identities)[':identityId']['$delete']>,
    ) {
      return parseResponse(client.users.identities[':identityId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersIdentitiesIdentityId<
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
                  Awaited<ReturnType<(typeof client.users.identities)[':identityId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users.identities)[':identityId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersIdentitiesIdentityIdMutationOptions<
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

export function getPostUsersMd5MutationKey() {
  return ['users', '/users/md5', 'POST'] as const
}

export function getPostUsersMd5MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.md5.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.md5.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMd5MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.md5.$post>) {
      return parseResponse(client.users.md5.$post(args, options))
    },
  })
}

export function usePostUsersMd5<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.md5.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.md5.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMd5MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersPhpassMutationKey() {
  return ['users', '/users/phpass', 'POST'] as const
}

export function getPostUsersPhpassMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.phpass.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.phpass.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersPhpassMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.phpass.$post>) {
      return parseResponse(client.users.phpass.$post(args, options))
    },
  })
}

export function usePostUsersPhpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.phpass.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.phpass.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersPhpassMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersScryptMutationKey() {
  return ['users', '/users/scrypt', 'POST'] as const
}

export function getPostUsersScryptMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.scrypt.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.scrypt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersScryptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.scrypt.$post>) {
      return parseResponse(client.users.scrypt.$post(args, options))
    },
  })
}

export function usePostUsersScrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.scrypt.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.scrypt.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersScryptMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUsersScryptModifiedMutationKey() {
  return ['users', '/users/scrypt-modified', 'POST'] as const
}

export function getPostUsersScryptModifiedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)['scrypt-modified']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['scrypt-modified']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersScryptModifiedMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)['scrypt-modified']['$post']>) {
      return parseResponse(client.users['scrypt-modified'].$post(args, options))
    },
  })
}

export function usePostUsersScryptModified<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)['scrypt-modified']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)['scrypt-modified']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersScryptModifiedMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersShaMutationKey() {
  return ['users', '/users/sha', 'POST'] as const
}

export function getPostUsersShaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.sha.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.sha.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersShaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.sha.$post>) {
      return parseResponse(client.users.sha.$post(args, options))
    },
  })
}

export function usePostUsersSha<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.sha.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.sha.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersShaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdEmailMutationKey() {
  return ['users', '/users/:userId/email', 'PATCH'] as const
}

export function getPatchUsersUserIdEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['email']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['email']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['email']['$patch']>) {
      return parseResponse(client.users[':userId'].email.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['email']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['email']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdEmailMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersUserIdJwtsMutationKey() {
  return ['users', '/users/:userId/jwts', 'POST'] as const
}

export function getPostUsersUserIdJwtsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['jwts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['jwts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdJwtsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['jwts']['$post']>) {
      return parseResponse(client.users[':userId'].jwts.$post(args, options))
    },
  })
}

export function usePostUsersUserIdJwts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['jwts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['jwts']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdJwtsMutationOptions<TError, TOnMutateResult>(
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

export function getPutUsersUserIdLabelsMutationKey() {
  return ['users', '/users/:userId/labels', 'PUT'] as const
}

export function getPutUsersUserIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['labels']['$put']>) {
      return parseResponse(client.users[':userId'].labels.$put(args, options))
    },
  })
}

export function usePutUsersUserIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['labels']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['labels']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['logs']['$get']>>,
) {
  return ['users', '/users/:userId/logs', toValue(args)] as const
}

export function getUsersUserIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>>,
) {
  return ['users', '/users/:userId/memberships', toValue(args)] as const
}

export function getUsersUserIdMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersUserIdMfaMutationKey() {
  return ['users', '/users/:userId/mfa', 'PATCH'] as const
}

export function getPatchUsersUserIdMfaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMfaMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']>) {
      return parseResponse(client.users[':userId'].mfa.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['mfa']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdMfaMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdMfaAuthenticatorsTypeMutationKey() {
  return ['users', '/users/:userId/mfa/authenticators/:type', 'DELETE'] as const
}

export function getDeleteUsersUserIdMfaAuthenticatorsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMfaAuthenticatorsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':userId'].mfa.authenticators[':type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersUserIdMfaAuthenticatorsType<
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
                      (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':userId']['mfa']['authenticators'][':type']['$delete']
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
  const mutationDefaults = getDeleteUsersUserIdMfaAuthenticatorsTypeMutationOptions<
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

export function getUsersUserIdMfaFactorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>
  >,
) {
  return ['users', '/users/:userId/mfa/factors', toValue(args)] as const
}

export function getUsersUserIdMfaFactorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMfaFactorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].mfa.factors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdMfaFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMfaFactorsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMfaFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMfaFactorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].mfa.factors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdMfaRecoveryCodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>
  >,
) {
  return ['users', '/users/:userId/mfa/recovery-codes', toValue(args)] as const
}

export function getUsersUserIdMfaRecoveryCodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdMfaRecoveryCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].mfa['recovery-codes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdMfaRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>
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
                  ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdMfaRecoveryCodesQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdMfaRecoveryCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdMfaRecoveryCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].mfa['recovery-codes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersUserIdMfaRecoveryCodesMutationKey() {
  return ['users', '/users/:userId/mfa/recovery-codes', 'PUT'] as const
}

export function getPutUsersUserIdMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMfaRecoveryCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>,
    ) {
      return parseResponse(client.users[':userId'].mfa['recovery-codes'].$put(args, options))
    },
  })
}

export function usePutUsersUserIdMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdMfaRecoveryCodesMutationOptions<
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

export function getPatchUsersUserIdMfaRecoveryCodesMutationKey() {
  return ['users', '/users/:userId/mfa/recovery-codes', 'PATCH'] as const
}

export function getPatchUsersUserIdMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMfaRecoveryCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].mfa['recovery-codes'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdMfaRecoveryCodes<
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
                  ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdMfaRecoveryCodesMutationOptions<
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

export function getPatchUsersUserIdNameMutationKey() {
  return ['users', '/users/:userId/name', 'PATCH'] as const
}

export function getPatchUsersUserIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['name']['$patch']>) {
      return parseResponse(client.users[':userId'].name.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['name']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdPasswordMutationKey() {
  return ['users', '/users/:userId/password', 'PATCH'] as const
}

export function getPatchUsersUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['password']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['password']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['password']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].password.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['password']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['password']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdPhoneMutationKey() {
  return ['users', '/users/:userId/phone', 'PATCH'] as const
}

export function getPatchUsersUserIdPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['phone']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['phone']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdPhoneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['phone']['$patch']>) {
      return parseResponse(client.users[':userId'].phone.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['phone']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['phone']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdPhoneMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdPrefsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>>,
) {
  return ['users', '/users/:userId/prefs', toValue(args)] as const
}

export function getUsersUserIdPrefsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPrefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].prefs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPrefsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPrefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPrefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].prefs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchUsersUserIdPrefsMutationKey() {
  return ['users', '/users/:userId/prefs', 'PATCH'] as const
}

export function getPatchUsersUserIdPrefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdPrefsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']>) {
      return parseResponse(client.users[':userId'].prefs.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['prefs']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdPrefsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>>,
) {
  return ['users', '/users/:userId/sessions', toValue(args)] as const
}

export function getUsersUserIdSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdSessionsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdSessionsMutationKey() {
  return ['users', '/users/:userId/sessions', 'POST'] as const
}

export function getPostUsersUserIdSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['sessions']['$post']>,
    ) {
      return parseResponse(client.users[':userId'].sessions.$post(args, options))
    },
  })
}

export function usePostUsersUserIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['sessions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdSessionsMutationKey() {
  return ['users', '/users/:userId/sessions', 'DELETE'] as const
}

export function getDeleteUsersUserIdSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].sessions.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['sessions']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdSessionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdSessionsSessionIdMutationKey() {
  return ['users', '/users/:userId/sessions/:sessionId', 'DELETE'] as const
}

export function getDeleteUsersUserIdSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdSessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].sessions[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdSessionsSessionId<
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
                      (typeof client.users)[':userId']['sessions'][':sessionId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['sessions'][':sessionId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdSessionsSessionIdMutationOptions<
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

export function getPatchUsersUserIdStatusMutationKey() {
  return ['users', '/users/:userId/status', 'PATCH'] as const
}

export function getPatchUsersUserIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['status']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['status']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['status']['$patch']>) {
      return parseResponse(client.users[':userId'].status.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['status']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['status']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdTargetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['targets']['$get']>>,
) {
  return ['users', '/users/:userId/targets', toValue(args)] as const
}

export function getUsersUserIdTargetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['targets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTargetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].targets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['targets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTargetsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTargetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTargetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].targets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersUserIdTargetsMutationKey() {
  return ['users', '/users/:userId/targets', 'POST'] as const
}

export function getPostUsersUserIdTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['targets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdTargetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['targets']['$post']>) {
      return parseResponse(client.users[':userId'].targets.$post(args, options))
    },
  })
}

export function usePostUsersUserIdTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['targets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdTargetsMutationOptions<TError, TOnMutateResult>(
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

export function getUsersUserIdTargetsTargetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>
  >,
) {
  return ['users', '/users/:userId/targets/:targetId', toValue(args)] as const
}

export function getUsersUserIdTargetsTargetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTargetsTargetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].targets[':targetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTargetsTargetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>
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
                  ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTargetsTargetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTargetsTargetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTargetsTargetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].targets[':targetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdTargetsTargetIdMutationKey() {
  return ['users', '/users/:userId/targets/:targetId', 'DELETE'] as const
}

export function getDeleteUsersUserIdTargetsTargetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdTargetsTargetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].targets[':targetId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdTargetsTargetId<
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
                    ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdTargetsTargetIdMutationOptions<
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

export function getPatchUsersUserIdTargetsTargetIdMutationKey() {
  return ['users', '/users/:userId/targets/:targetId', 'PATCH'] as const
}

export function getPatchUsersUserIdTargetsTargetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdTargetsTargetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].targets[':targetId'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdTargetsTargetId<
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
                  ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdTargetsTargetIdMutationOptions<
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

export function getPostUsersUserIdTokensMutationKey() {
  return ['users', '/users/:userId/tokens', 'POST'] as const
}

export function getPostUsersUserIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['tokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['tokens']['$post']>) {
      return parseResponse(client.users[':userId'].tokens.$post(args, options))
    },
  })
}

export function usePostUsersUserIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['tokens']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersUserIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdVerificationMutationKey() {
  return ['users', '/users/:userId/verification', 'PATCH'] as const
}

export function getPatchUsersUserIdVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['verification']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['verification']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['verification']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].verification.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['verification']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['verification']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdVerificationMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdVerificationPhoneMutationKey() {
  return ['users', '/users/:userId/verification/phone', 'PATCH'] as const
}

export function getPatchUsersUserIdVerificationPhoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['verification']['phone']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdVerificationPhoneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>,
    ) {
      return parseResponse(client.users[':userId'].verification.phone.$patch(args, options))
    },
  })
}

export function usePatchUsersUserIdVerificationPhone<
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
                  ReturnType<(typeof client.users)[':userId']['verification']['phone']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['verification']['phone']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdVerificationPhoneMutationOptions<
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
