import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
        TError,
        InferRequestType<typeof client.account.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.email.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.email.$patch>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.account.identities.$get>,
) {
  return ['account', '/account/identities', args] as const
}

export function getAccountIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.identities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdentitiesQueryKey>
  >({
    queryKey: getAccountIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.identities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.identities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.identities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.jwts.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
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

export function getAccountLogsQueryKey(args: InferRequestType<typeof client.account.logs.$get>) {
  return ['account', '/account/logs', args] as const
}

export function getAccountLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountLogsQueryKey>
  >({
    queryKey: getAccountLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.mfa.$patch>,
        TOnMutateResult
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
      UseMutationOptions<
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

export function getAccountMfaFactorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountMfaFactorsQueryKey>
  >({
    queryKey: getAccountMfaFactorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.mfa.factors.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountMfaFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountMfaFactorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountMfaFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountMfaFactorsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountMfaRecoveryCodesQueryKey() {
  return ['account', '/account/mfa/recovery-codes'] as const
}

export function getAccountMfaRecoveryCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getAccountMfaRecoveryCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.mfa['recovery-codes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getAccountMfaRecoveryCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountMfaRecoveryCodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountMfaRecoveryCodes<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountMfaRecoveryCodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.name.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.name.$patch>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.phone.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.phone.$patch>,
        TOnMutateResult
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

export function getAccountPrefsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountPrefsQueryKey>
  >({
    queryKey: getAccountPrefsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.prefs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountPrefsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountPrefsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.account.prefs.$patch>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.recovery.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.account.recovery.$put>,
        TOnMutateResult
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

export function getAccountSessionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSessionsQueryKey>
  >({
    queryKey: getAccountSessionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.sessions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountSessionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountSessionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
) {
  return ['account', '/account/sessions/:sessionId', args] as const
}

export function getAccountSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.sessions[':sessionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountSessionsSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountSessionsSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountSessionsSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.status.$patch>>>>
        >,
        TError,
        void,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
) {
  return ['account', '/account/tokens/oauth2/:provider', args] as const
}

export function getAccountTokensOauth2ProviderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountTokensOauth2ProviderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.tokens.oauth2[':provider'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAccountTokensOauth2ProviderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountTokensOauth2ProviderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountTokensOauth2Provider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountTokensOauth2ProviderQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.account.verification.phone.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.account.verification.phone.$put>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
) {
  return ['avatars', '/avatars/browsers/:code', args] as const
}

export function getAvatarsBrowsersCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsBrowsersCodeQueryKey>
  >({
    queryKey: getAvatarsBrowsersCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.browsers[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAvatarsBrowsersCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAvatarsBrowsersCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsBrowsersCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsBrowsersCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsBrowsersCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsBrowsersCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvatarsCreditCardsCodeQueryKey(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
) {
  return ['avatars', '/avatars/credit-cards/:code', args] as const
}

export function getAvatarsCreditCardsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAvatarsCreditCardsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars['credit-cards'][':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAvatarsCreditCardsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAvatarsCreditCardsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAvatarsCreditCardsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAvatarsCreditCardsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAvatarsFaviconQueryKey(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
) {
  return ['avatars', '/avatars/favicon', args] as const
}

export function getAvatarsFaviconQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avatars.favicon.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsFaviconQueryKey>
  >({
    queryKey: getAvatarsFaviconQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.favicon.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAvatarsFavicon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsFaviconQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsFaviconQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsFavicon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.favicon.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsFaviconQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsFaviconQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvatarsFlagsCodeQueryKey(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
) {
  return ['avatars', '/avatars/flags/:code', args] as const
}

export function getAvatarsFlagsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsFlagsCodeQueryKey>
  >({
    queryKey: getAvatarsFlagsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.flags[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAvatarsFlagsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getAvatarsFlagsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsFlagsCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsFlagsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsFlagsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsFlagsCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvatarsImageQueryKey(args: InferRequestType<typeof client.avatars.image.$get>) {
  return ['avatars', '/avatars/image', args] as const
}

export function getAvatarsImageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avatars.image.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsImageQueryKey>
  >({
    queryKey: getAvatarsImageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.image.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAvatarsImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.image.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsImageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.image.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsImageQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvatarsInitialsQueryKey(
  args: InferRequestType<typeof client.avatars.initials.$get>,
) {
  return ['avatars', '/avatars/initials', args] as const
}

export function getAvatarsInitialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avatars.initials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAvatarsInitialsQueryKey>
  >({
    queryKey: getAvatarsInitialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.initials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAvatarsInitials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.initials.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsInitialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsInitialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsInitials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.initials.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsInitialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsInitialsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAvatarsQrQueryKey(args: InferRequestType<typeof client.avatars.qr.$get>) {
  return ['avatars', '/avatars/qr', args] as const
}

export function getAvatarsQrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.avatars.qr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAvatarsQrQueryKey>
  >({
    queryKey: getAvatarsQrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.avatars.qr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAvatarsQr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.qr.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAvatarsQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAvatarsQr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.avatars.qr.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAvatarsQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAvatarsQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatabasesQueryKey(args: InferRequestType<typeof client.databases.$get>) {
  return ['databases', '/databases', args] as const
}

export function getDatabasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.databases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatabasesQueryKey>
  >({
    queryKey: getDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.databases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.databases.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
) {
  return ['databases', '/databases/:databaseId', args] as const
}

export function getDatabasesDatabaseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatabasesDatabaseIdQueryKey>
  >({
    queryKey: getDatabasesDatabaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatabasesDatabaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatabasesDatabaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatabasesDatabaseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatabasesDatabaseIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
) {
  return ['databases', '/databases/:databaseId/collections', args] as const
}

export function getDatabasesDatabaseIdCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId', args] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionId<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/attributes', args] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdAttributes<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/attributes/:key',
    args,
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].attributes[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/documents', args] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/documents/:documentId',
    args,
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].documents[':documentId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
) {
  return ['databases', '/databases/:databaseId/collections/:collectionId/indexes', args] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdIndexes<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
) {
  return [
    'databases',
    '/databases/:databaseId/collections/:collectionId/indexes/:key',
    args,
  ] as const
}

export function getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.databases[':databaseId'].collections[':collectionId'].indexes[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
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
  args: InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getFunctionsQueryKey(args: InferRequestType<typeof client.functions.$get>) {
  return ['functions', '/functions', args] as const
}

export function getFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.functions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFunctionsQueryKey>
  >({
    queryKey: getFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.functions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.functions.$post>,
        TOnMutateResult
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

export function getFunctionsRuntimesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsRuntimesQueryKey>
  >({
    queryKey: getFunctionsRuntimesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.runtimes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFunctionsRuntimes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsRuntimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFunctionsRuntimesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFunctionsRuntimes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsRuntimesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFunctionsRuntimesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFunctionsSpecificationsQueryKey() {
  return ['functions', '/functions/specifications'] as const
}

export function getFunctionsSpecificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsSpecificationsQueryKey>
  >({
    queryKey: getFunctionsSpecificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.functions.specifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsSpecificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFunctionsSpecificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFunctionsSpecifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsSpecificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFunctionsSpecificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFunctionsFunctionIdQueryKey(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
) {
  return ['functions', '/functions/:functionId', args] as const
}

export function getFunctionsFunctionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFunctionsFunctionIdQueryKey>
  >({
    queryKey: getFunctionsFunctionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFunctionsFunctionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFunctionsFunctionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFunctionsFunctionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
) {
  return ['functions', '/functions/:functionId/deployments', args] as const
}

export function getFunctionsFunctionIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/deployments/:deploymentId', args] as const
}

export function getFunctionsFunctionIdDeploymentsDeploymentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdDeploymentsDeploymentId<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/deployments/:deploymentId/download', args] as const
}

export function getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].deployments[':deploymentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdDeploymentsDeploymentIdDownload<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
) {
  return ['functions', '/functions/:functionId/executions', args] as const
}

export function getFunctionsFunctionIdExecutionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].executions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdExecutionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdExecutionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdExecutionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/executions/:executionId', args] as const
}

export function getFunctionsFunctionIdExecutionsExecutionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdExecutionsExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].executions[':executionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdExecutionsExecutionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdExecutionsExecutionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdExecutionsExecutionId<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdExecutionsExecutionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
) {
  return ['functions', '/functions/:functionId/variables', args] as const
}

export function getFunctionsFunctionIdVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdVariablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdVariablesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
) {
  return ['functions', '/functions/:functionId/variables/:variableId', args] as const
}

export function getFunctionsFunctionIdVariablesVariableIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFunctionsFunctionIdVariablesVariableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.functions[':functionId'].variables[':variableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getFunctionsFunctionIdVariablesVariableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFunctionsFunctionIdVariablesVariableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFunctionsFunctionIdVariablesVariableId<
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
  args: InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getFunctionsFunctionIdVariablesVariableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFunctionsFunctionIdVariablesVariableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
        TError,
        void,
        TOnMutateResult
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

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthAntiVirusQueryKey() {
  return ['health', '/health/anti-virus'] as const
}

export function getHealthAntiVirusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthAntiVirusQueryKey>
  >({
    queryKey: getHealthAntiVirusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health['anti-virus'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthAntiVirusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthAntiVirusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthAntiVirus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthAntiVirusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthAntiVirusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthCacheQueryKey() {
  return ['health', '/health/cache'] as const
}

export function getHealthCacheQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthCacheQueryKey>
  >({
    queryKey: getHealthCacheQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.cache.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthCacheQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthCacheQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthCertificateQueryKey(
  args: InferRequestType<typeof client.health.certificate.$get>,
) {
  return ['health', '/health/certificate', args] as const
}

export function getHealthCertificateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.certificate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthCertificateQueryKey>
  >({
    queryKey: getHealthCertificateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.certificate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthCertificate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.certificate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthCertificateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthCertificateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthCertificate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.certificate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthCertificateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthCertificateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthDbQueryKey() {
  return ['health', '/health/db'] as const
}

export function getHealthDbQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthDbQueryKey>
  >({
    queryKey: getHealthDbQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.db.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthDbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthDbQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthDbQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthDbQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthPubsubQueryKey() {
  return ['health', '/health/pubsub'] as const
}

export function getHealthPubsubQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthPubsubQueryKey>
  >({
    queryKey: getHealthPubsubQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.pubsub.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthPubsub<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthPubsubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthPubsubQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthPubsub<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthPubsubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthPubsubQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueBuildsQueryKey(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
) {
  return ['health', '/health/queue/builds', args] as const
}

export function getHealthQueueBuildsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.queue.builds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueBuildsQueryKey>
  >({
    queryKey: getHealthQueueBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.builds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthQueueBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.builds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueCertificatesQueryKey(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
) {
  return ['health', '/health/queue/certificates', args] as const
}

export function getHealthQueueCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueCertificatesQueryKey>
  >({
    queryKey: getHealthQueueCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.certificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHealthQueueCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHealthQueueCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHealthQueueCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHealthQueueDatabasesQueryKey(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
) {
  return ['health', '/health/queue/databases', args] as const
}

export function getHealthQueueDatabasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueDatabasesQueryKey>
  >({
    queryKey: getHealthQueueDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.databases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.databases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueDatabasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueDeletesQueryKey(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
) {
  return ['health', '/health/queue/deletes', args] as const
}

export function getHealthQueueDeletesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.queue.deletes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueDeletesQueryKey>
  >({
    queryKey: getHealthQueueDeletesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.deletes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthQueueDeletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueDeletesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueDeletesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueDeletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueDeletesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueDeletesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueFailedNameQueryKey(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
) {
  return ['health', '/health/queue/failed/:name', args] as const
}

export function getHealthQueueFailedNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHealthQueueFailedNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.failed[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHealthQueueFailedNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHealthQueueFailedNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHealthQueueFailedName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHealthQueueFailedNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHealthQueueFunctionsQueryKey(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
) {
  return ['health', '/health/queue/functions', args] as const
}

export function getHealthQueueFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueFunctionsQueryKey>
  >({
    queryKey: getHealthQueueFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.functions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueFunctionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueLogsQueryKey(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
) {
  return ['health', '/health/queue/logs', args] as const
}

export function getHealthQueueLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.queue.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueLogsQueryKey>
  >({
    queryKey: getHealthQueueLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthQueueLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueMailsQueryKey(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
) {
  return ['health', '/health/queue/mails', args] as const
}

export function getHealthQueueMailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.health.queue.mails.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMailsQueryKey>
  >({
    queryKey: getHealthQueueMailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.mails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthQueueMails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueMailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueMails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.mails.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueMailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueMessagingQueryKey(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
) {
  return ['health', '/health/queue/messaging', args] as const
}

export function getHealthQueueMessagingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMessagingQueryKey>
  >({
    queryKey: getHealthQueueMessagingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.messaging.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueMessaging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueMessagingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueMessaging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMessagingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueMessagingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthQueueMigrationsQueryKey(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
) {
  return ['health', '/health/queue/migrations', args] as const
}

export function getHealthQueueMigrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueMigrationsQueryKey>
  >({
    queryKey: getHealthQueueMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.migrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMigrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHealthQueueMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHealthQueueMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueMigrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHealthQueueMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHealthQueueStatsResourcesQueryKey(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
) {
  return ['health', '/health/queue/stats-resources', args] as const
}

export function getHealthQueueStatsResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHealthQueueStatsResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue['stats-resources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHealthQueueStatsResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHealthQueueStatsResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHealthQueueStatsResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHealthQueueStatsResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHealthQueueStatsUsageQueryKey(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
) {
  return ['health', '/health/queue/stats-usage', args] as const
}

export function getHealthQueueStatsUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHealthQueueStatsUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue['stats-usage'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthQueueStatsUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getHealthQueueStatsUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getHealthQueueStatsUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHealthQueueStatsUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getHealthQueueStatsUsageQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getHealthQueueWebhooksQueryKey(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
) {
  return ['health', '/health/queue/webhooks', args] as const
}

export function getHealthQueueWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHealthQueueWebhooksQueryKey>
  >({
    queryKey: getHealthQueueWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.health.queue.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthQueueWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueueWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthQueueWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthQueueWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueueWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthStorageQueryKey() {
  return ['health', '/health/storage'] as const
}

export function getHealthStorageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthStorageQueryKey>
  >({
    queryKey: getHealthStorageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.storage.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthStorageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthStorageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthStorageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthStorageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthStorageLocalQueryKey() {
  return ['health', '/health/storage/local'] as const
}

export function getHealthStorageLocalQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthStorageLocalQueryKey>
  >({
    queryKey: getHealthStorageLocalQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.storage.local.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHealthStorageLocal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthStorageLocalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthStorageLocalQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthStorageLocal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHealthStorageLocalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthStorageLocalQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHealthTimeQueryKey() {
  return ['health', '/health/time'] as const
}

export function getHealthTimeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthTimeQueryKey>
  >({
    queryKey: getHealthTimeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.time.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthTimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthTimeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleQueryKey() {
  return ['locale', '/locale'] as const
}

export function getLocaleQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocaleQueryKey>
  >({
    queryKey: getLocaleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocale<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLocaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocale<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLocaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleCodesQueryKey() {
  return ['locale', '/locale/codes'] as const
}

export function getLocaleCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocaleCodesQueryKey>
  >({
    queryKey: getLocaleCodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.codes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocaleCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleCodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleCodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleContinentsQueryKey() {
  return ['locale', '/locale/continents'] as const
}

export function getLocaleContinentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleContinentsQueryKey>
  >({
    queryKey: getLocaleContinentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.continents.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLocaleContinents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleContinentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleContinentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleContinents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleContinentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleContinentsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleCountriesQueryKey() {
  return ['locale', '/locale/countries'] as const
}

export function getLocaleCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesQueryKey>
  >({
    queryKey: getLocaleCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.countries.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocaleCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleCountriesEuQueryKey() {
  return ['locale', '/locale/countries/eu'] as const
}

export function getLocaleCountriesEuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesEuQueryKey>
  >({
    queryKey: getLocaleCountriesEuQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.countries.eu.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLocaleCountriesEu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesEuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleCountriesEuQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleCountriesEu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesEuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleCountriesEuQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleCountriesPhonesQueryKey() {
  return ['locale', '/locale/countries/phones'] as const
}

export function getLocaleCountriesPhonesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCountriesPhonesQueryKey>
  >({
    queryKey: getLocaleCountriesPhonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.countries.phones.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesPhonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleCountriesPhonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleCountriesPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCountriesPhonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleCountriesPhonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleCurrenciesQueryKey() {
  return ['locale', '/locale/currencies'] as const
}

export function getLocaleCurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleCurrenciesQueryKey>
  >({
    queryKey: getLocaleCurrenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.currencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLocaleCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleCurrenciesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleCurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleCurrenciesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocaleLanguagesQueryKey() {
  return ['locale', '/locale/languages'] as const
}

export function getLocaleLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocaleLanguagesQueryKey>
  >({
    queryKey: getLocaleLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locale.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocaleLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocaleLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocaleLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocaleLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocaleLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMessagingMessagesQueryKey(
  args: InferRequestType<typeof client.messaging.messages.$get>,
) {
  return ['messaging', '/messaging/messages', args] as const
}

export function getMessagingMessagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messaging.messages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingMessagesQueryKey>
  >({
    queryKey: getMessagingMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.messages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.messages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingMessagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.email.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messaging.messages.email.$post>,
        TOnMutateResult
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId', args] as const
}

export function getMessagingMessagesMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingMessagesMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.messages[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingMessagesMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingMessagesMessageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId/logs', args] as const
}

export function getMessagingMessagesMessageIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingMessagesMessageIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.messages[':messageId'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingMessagesMessageIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingMessagesMessageIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingMessagesMessageIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingMessagesMessageIdTargetsQueryKey(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
) {
  return ['messaging', '/messaging/messages/:messageId/targets', args] as const
}

export function getMessagingMessagesMessageIdTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingMessagesMessageIdTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.messages[':messageId'].targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingMessagesMessageIdTargetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingMessagesMessageIdTargetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingMessagesMessageIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMessagingMessagesMessageIdTargetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingMessagesMessageIdTargetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingProvidersQueryKey(
  args: InferRequestType<typeof client.messaging.providers.$get>,
) {
  return ['messaging', '/messaging/providers', args] as const
}

export function getMessagingProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messaging.providers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingProvidersQueryKey>
  >({
    queryKey: getMessagingProvidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.providers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.providers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.providers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingProvidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.apns.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messaging.providers.apns.$post>,
        TOnMutateResult
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
      UseMutationOptions<
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
      UseMutationOptions<
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.msg91.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messaging.providers.msg91.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.smtp.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.messaging.providers.smtp.$post>,
        TOnMutateResult
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
) {
  return ['messaging', '/messaging/providers/:providerId', args] as const
}

export function getMessagingProvidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingProvidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.providers[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingProvidersProviderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProvidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProvidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/providers/:providerId/logs', args] as const
}

export function getMessagingProvidersProviderIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingProvidersProviderIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.providers[':providerId'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingProvidersProviderIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingProvidersProviderIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingProvidersProviderIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMessagingProvidersProviderIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingProvidersProviderIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingSubscribersSubscriberIdLogsQueryKey(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/subscribers/:subscriberId/logs', args] as const
}

export function getMessagingSubscribersSubscriberIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingSubscribersSubscriberIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.subscribers[':subscriberId'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingSubscribersSubscriberIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingSubscribersSubscriberIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingSubscribersSubscriberIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingSubscribersSubscriberIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingTopicsQueryKey(
  args: InferRequestType<typeof client.messaging.topics.$get>,
) {
  return ['messaging', '/messaging/topics', args] as const
}

export function getMessagingTopicsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.messaging.topics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagingTopicsQueryKey>
  >({
    queryKey: getMessagingTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.topics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMessagingTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.topics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMessagingTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMessagingTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messaging.topics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMessagingTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMessagingTopicsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId', args] as const
}

export function getMessagingTopicsTopicIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingTopicsTopicIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.topics[':topicId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingTopicsTopicIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingTopicsTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingTopicsTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingTopicsTopicIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId/logs', args] as const
}

export function getMessagingTopicsTopicIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingTopicsTopicIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.topics[':topicId'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingTopicsTopicIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingTopicsTopicIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingTopicsTopicIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingTopicsTopicIdLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagingTopicsTopicIdSubscribersQueryKey(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
) {
  return ['messaging', '/messaging/topics/:topicId/subscribers', args] as const
}

export function getMessagingTopicsTopicIdSubscribersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingTopicsTopicIdSubscribersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.topics[':topicId'].subscribers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingTopicsTopicIdSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingTopicsTopicIdSubscribersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingTopicsTopicIdSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMessagingTopicsTopicIdSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingTopicsTopicIdSubscribersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
) {
  return ['messaging', '/messaging/topics/:topicId/subscribers/:subscriberId', args] as const
}

export function getMessagingTopicsTopicIdSubscribersSubscriberIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messaging.topics[':topicId'].subscribers[':subscriberId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMessagingTopicsTopicIdSubscribersSubscriberIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMessagingTopicsTopicIdSubscribersSubscriberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagingTopicsTopicIdSubscribersSubscriberId<
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
  args: InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMessagingTopicsTopicIdSubscribersSubscriberIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getSitesQueryKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function getSitesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >({
    queryKey: getSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
        TError,
        InferRequestType<typeof client.sites.$post>,
        TOnMutateResult
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

export function getSitesFrameworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesFrameworksQueryKey>
  >({
    queryKey: getSitesFrameworksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.frameworks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSitesFrameworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesFrameworksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSitesFrameworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesFrameworksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSpecificationsQueryKey() {
  return ['sites', '/sites/specifications'] as const
}

export function getSitesSpecificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSpecificationsQueryKey>
  >({
    queryKey: getSitesSpecificationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.specifications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSpecifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSpecificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSpecificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSpecifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSpecificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSpecificationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
) {
  return ['sites', '/sites/:siteId', args] as const
}

export function getSitesSiteIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdQueryKey>
  >({
    queryKey: getSitesSiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sites)[':siteId']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
) {
  return ['sites', '/sites/:siteId/deployments', args] as const
}

export function getSitesSiteIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSitesSiteIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSitesSiteIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId', args] as const
}

export function getSitesSiteIdDeploymentsDeploymentIdQueryOptions<
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSitesSiteIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeploymentsDeploymentId<
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
  args: InferRequestType<(typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSitesSiteIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
) {
  return ['sites', '/sites/:siteId/deployments/:deploymentId/download', args] as const
}

export function getSitesSiteIdDeploymentsDeploymentIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].deployments[':deploymentId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdDeploymentsDeploymentIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSitesSiteIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdDeploymentsDeploymentIdDownload<
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
  args: InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSitesSiteIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
) {
  return ['sites', '/sites/:siteId/logs', args] as const
}

export function getSitesSiteIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdLogsQueryKey>
  >({
    queryKey: getSitesSiteIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSitesSiteIdLogsLogIdQueryKey(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
) {
  return ['sites', '/sites/:siteId/logs/:logId', args] as const
}

export function getSitesSiteIdLogsLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdLogsLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].logs[':logId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdLogsLogIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdLogsLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdLogsLogIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
) {
  return ['sites', '/sites/:siteId/variables', args] as const
}

export function getSitesSiteIdVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdVariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdVariablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
) {
  return ['sites', '/sites/:siteId/variables/:variableId', args] as const
}

export function getSitesSiteIdVariablesVariableIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSitesSiteIdVariablesVariableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':siteId'].variables[':variableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSitesSiteIdVariablesVariableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSitesSiteIdVariablesVariableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdVariablesVariableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getSitesSiteIdVariablesVariableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSitesSiteIdVariablesVariableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.storage.buckets.$get>,
) {
  return ['storage', '/storage/buckets', args] as const
}

export function getStorageBucketsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.storage.buckets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStorageBucketsQueryKey>
  >({
    queryKey: getStorageBucketsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStorageBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage.buckets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStorageBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStorageBucketsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStorageBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.storage.buckets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStorageBucketsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStorageBucketsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.storage.buckets.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId', args] as const
}

export function getStorageBucketsBucketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStorageBucketsBucketIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId/files', args] as const
}

export function getStorageBucketsBucketIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStorageBucketsBucketIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdFilesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId', args] as const
}

export function getStorageBucketsBucketIdFilesFileIdQueryOptions<
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketIdFilesFileId<
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
  args: InferRequestType<(typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/download', args] as const
}

export function getStorageBucketsBucketIdFilesFileIdDownloadQueryOptions<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdFilesFileIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStorageBucketsBucketIdFilesFileIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketIdFilesFileIdDownload<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdDownloadQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStorageBucketsBucketIdFilesFileIdPreviewQueryKey(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/preview', args] as const
}

export function getStorageBucketsBucketIdFilesFileIdPreviewQueryOptions<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdFilesFileIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStorageBucketsBucketIdFilesFileIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketIdFilesFileIdPreview<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdPreviewQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getStorageBucketsBucketIdFilesFileIdViewQueryKey(
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
) {
  return ['storage', '/storage/buckets/:bucketId/files/:fileId/view', args] as const
}

export function getStorageBucketsBucketIdFilesFileIdViewQueryOptions<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getStorageBucketsBucketIdFilesFileIdViewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.storage.buckets[':bucketId'].files[':fileId'].view.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getStorageBucketsBucketIdFilesFileIdViewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdViewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStorageBucketsBucketIdFilesFileIdView<
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
  args: InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStorageBucketsBucketIdFilesFileIdViewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamsQueryKey(args: InferRequestType<typeof client.teams.$get>) {
  return ['teams', '/teams', args] as const
}

export function getTeamsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsQueryKey>
  >({
    queryKey: getTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
) {
  return ['teams', '/teams/:teamId', args] as const
}

export function getTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >({
    queryKey: getTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.teams)[':teamId']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
) {
  return ['teams', '/teams/:teamId/memberships', args] as const
}

export function getTeamsTeamIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeamsTeamIdMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamsTeamIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamsTeamIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
) {
  return ['teams', '/teams/:teamId/memberships/:membershipId', args] as const
}

export function getTeamsTeamIdMembershipsMembershipIdQueryOptions<
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsTeamIdMembershipsMembershipIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].memberships[':membershipId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamsTeamIdMembershipsMembershipIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdMembershipsMembershipId<
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
  args: InferRequestType<(typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamsTeamIdMembershipsMembershipIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
) {
  return ['teams', '/teams/:teamId/prefs', args] as const
}

export function getTeamsTeamIdPrefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdPrefsQueryKey>
  >({
    queryKey: getTeamsTeamIdPrefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].prefs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getTeamsTeamIdPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIdPrefsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIdPrefsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
) {
  return ['tokens', '/tokens/buckets/:bucketId/files/:fileId', args] as const
}

export function getTokensBucketsBucketIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTokensBucketsBucketIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.buckets[':bucketId'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTokensBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTokensBucketsBucketIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTokensBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
) {
  return ['tokens', '/tokens/:tokenId', args] as const
}

export function getTokensTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenIdQueryKey>
  >({
    queryKey: getTokensTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':tokenId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tokens)[':tokenId']['$patch']>,
        TOnMutateResult
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

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
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

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.argon2.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.argon2.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.bcrypt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.bcrypt.$post>,
        TOnMutateResult
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
  args: InferRequestType<typeof client.users.identities.$get>,
) {
  return ['users', '/users/identities', args] as const
}

export function getUsersIdentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.identities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdentitiesQueryKey>
  >({
    queryKey: getUsersIdentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.identities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.identities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.users.identities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.md5.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.md5.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.phpass.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.phpass.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.scrypt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.scrypt.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.sha.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.sha.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
) {
  return ['users', '/users/:userId/logs', args] as const
}

export function getUsersUserIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdLogsQueryKey>
  >({
    queryKey: getUsersUserIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
) {
  return ['users', '/users/:userId/memberships', args] as const
}

export function getUsersUserIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdMembershipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
) {
  return ['users', '/users/:userId/mfa/factors', args] as const
}

export function getUsersUserIdMfaFactorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdMfaFactorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].mfa.factors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdMfaFactorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdMfaFactorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdMfaFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdMfaFactorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUsersUserIdMfaRecoveryCodesQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
) {
  return ['users', '/users/:userId/mfa/recovery-codes', args] as const
}

export function getUsersUserIdMfaRecoveryCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdMfaRecoveryCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].mfa['recovery-codes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdMfaRecoveryCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdMfaRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdMfaRecoveryCodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
) {
  return ['users', '/users/:userId/prefs', args] as const
}

export function getUsersUserIdPrefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPrefsQueryKey>
  >({
    queryKey: getUsersUserIdPrefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].prefs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdPrefsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPrefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdPrefsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
) {
  return ['users', '/users/:userId/sessions', args] as const
}

export function getUsersUserIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].sessions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdSessionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
) {
  return ['users', '/users/:userId/targets', args] as const
}

export function getUsersUserIdTargetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdTargetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].targets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getUsersUserIdTargetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdTargetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdTargetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
) {
  return ['users', '/users/:userId/targets/:targetId', args] as const
}

export function getUsersUserIdTargetsTargetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersUserIdTargetsTargetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].targets[':targetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdTargetsTargetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdTargetsTargetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdTargetsTargetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
