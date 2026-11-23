import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAccount<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
        TError,
        InferRequestType<typeof client.account.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.identities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountIdentitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteAccountIdentitiesIdentityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountIdentitiesIdentityIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountJwts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountJwtsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchAccountMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountMfaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountMfaAuthenticatorsType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountMfaAuthenticatorsTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountMfaAuthenticatorsType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountMfaAuthenticatorsTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountMfaAuthenticatorsType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountMfaAuthenticatorsTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountMfaChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountMfaChallengeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountMfaChallenge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountMfaChallengeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountMfaFactorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectAccountMfaRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.mfa)['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountMfaRecoveryCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAccountMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountMfaRecoveryCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountMfaRecoveryCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountMfaRecoveryCodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountPhoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountPrefs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.prefs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountPrefsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchAccountPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountPrefsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountRecoveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountRecovery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountRecoveryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountSessions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.sessions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountSessionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteAccountSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountSessionsAnonymous<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountSessionsAnonymousMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountSessionsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountSessionsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountSessionsMagicUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountSessionsMagicUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountSessionsPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountSessionsPhoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountSessionsToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountSessionsTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.sessions)[':sessionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.sessions)[':sessionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteAccountSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountSessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchAccountStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountTokensEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountTokensEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountTokensMagicUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountTokensMagicUrlMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountTokensOauth2Provider<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.tokens.oauth2)[':provider']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.tokens.oauth2)[':provider']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountTokensOauth2ProviderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountTokensPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountTokensPhoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountVerificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountVerification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountVerificationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutAccountVerificationPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountVerificationPhoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountVerificationPhone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountVerificationPhoneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAvatarsBrowsersCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.browsers)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.avatars.browsers)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsBrowsersCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAvatarsCreditCardsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.avatars)['credit-cards'][':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.avatars)['credit-cards'][':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAvatarsCreditCardsCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAvatarsFavicon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.favicon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avatars.favicon.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsFaviconQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAvatarsFlagsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.avatars.flags)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.avatars.flags)[':code']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsFlagsCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAvatarsImage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.image.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avatars.image.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsImageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAvatarsInitials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.initials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avatars.initials.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsInitialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAvatarsQr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.avatars.qr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.avatars.qr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAvatarsQrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.databases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatabasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDatabases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatabasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.databases)[':databaseId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.databases)[':databaseId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatabasesDatabaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDatabasesDatabaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatabasesDatabaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatabasesDatabaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.databases)[':databaseId']['collections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.databases)[':databaseId']['collections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatabasesDatabaseIdCollectionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionId<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDatabasesDatabaseIdCollectionsCollectionId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseIdCollectionsCollectionId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatabasesDatabaseIdCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdAttributes<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBoolean<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetime<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmail<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnum<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloat<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesInteger<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIp<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesIpMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationship<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesString<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesStringMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrl<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['attributes'][':key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationship<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdDocuments<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['documents'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrement<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrement<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdIndexes<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDatabasesDatabaseIdCollectionsCollectionIdIndexes<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDatabasesDatabaseIdCollectionsCollectionIdIndexesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
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
  args: () => InferRequestType<
    (typeof client.databases)[':databaseId']['collections'][':collectionId']['indexes'][':key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKey<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.functions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsRuntimes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.runtimes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsRuntimesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectFunctionsSpecifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.functions.specifications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsSpecificationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectFunctionsFunctionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.functions)[':functionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions)[':functionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFunctionsFunctionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutFunctionsFunctionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFunctionsFunctionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFunctionsFunctionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFunctionsFunctionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchFunctionsFunctionIdDeployment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchFunctionsFunctionIdDeploymentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions)[':functionId']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdDeploymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdDeploymentsDuplicate<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdDeploymentsDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdDeploymentsTemplate<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdDeploymentsTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdDeploymentsVcs<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdDeploymentsVcsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdDeploymentsDeploymentId<
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
  args: () => InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteFunctionsFunctionIdDeploymentsDeploymentId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFunctionsFunctionIdDeploymentsDeploymentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdDeploymentsDeploymentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.functions)[':functionId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchFunctionsFunctionIdDeploymentsDeploymentIdStatus<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchFunctionsFunctionIdDeploymentsDeploymentIdStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions)[':functionId']['executions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdExecutionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdExecutionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdExecutionsExecutionId<
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
  args: () => InferRequestType<
    (typeof client.functions)[':functionId']['executions'][':executionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdExecutionsExecutionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteFunctionsFunctionIdExecutionsExecutionId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFunctionsFunctionIdExecutionsExecutionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.functions)[':functionId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.functions)[':functionId']['variables']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostFunctionsFunctionIdVariables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFunctionsFunctionIdVariablesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFunctionsFunctionIdVariablesVariableId<
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
  args: () => InferRequestType<
    (typeof client.functions)[':functionId']['variables'][':variableId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFunctionsFunctionIdVariablesVariableIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutFunctionsFunctionIdVariablesVariableId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFunctionsFunctionIdVariablesVariableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteFunctionsFunctionIdVariablesVariableId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFunctionsFunctionIdVariablesVariableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGraphql<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.graphql.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGraphqlMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostGraphqlMutation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGraphqlMutationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectHealth<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthAntiVirus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health)['anti-virus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthAntiVirusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthCacheQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthCertificate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.certificate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.certificate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthCertificateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.db.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthDbQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthPubsub<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.pubsub.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthPubsubQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthQueueBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.builds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueueBuildsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthQueueCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.certificates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.certificates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueCertificatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueDatabases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.databases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueDatabasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueDeletes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.deletes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.deletes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueueDeletesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthQueueFailedName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue.failed)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.health.queue.failed)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueFailedNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.functions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueFunctionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueueLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthQueueMails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.mails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.mails.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueueMailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthQueueMessaging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.messaging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.messaging.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueMessagingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.migrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.migrations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueMigrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueStatsResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.health.queue)['stats-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.health.queue)['stats-resources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueStatsResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueStatsUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.health.queue)['stats-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.health.queue)['stats-usage']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHealthQueueStatsUsageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectHealthQueueWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.queue.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.health.queue.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueueWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthStorageQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthStorageLocal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.storage.local.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthStorageLocalQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHealthTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.time.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthTimeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocale<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLocaleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.codes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleCodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleContinents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.continents.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleContinentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleCountriesEu<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.eu.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleCountriesEuQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleCountriesPhones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.locale.countries.phones.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleCountriesPhonesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleCurrenciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectLocaleLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locale.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocaleLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectMessagingMessages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.messages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.messaging.messages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagingMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagingMessagesEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingMessagesEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingMessagesEmailMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingMessagesEmailMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingMessagesPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingMessagesPushMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingMessagesPushMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingMessagesPushMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingMessagesSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingMessagesSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingMessagesSmsMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingMessagesSmsMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingMessagesMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.messages)[':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingMessagesMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMessagingMessagesMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessagingMessagesMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingMessagesMessageIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.messages)[':messageId']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingMessagesMessageIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMessagingMessagesMessageIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.messages)[':messageId']['targets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingMessagesMessageIdTargetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMessagingProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.messaging.providers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagingProvidersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagingProvidersApns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersApnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersApnsProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersApnsProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersFcm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersFcmMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersFcmProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersFcmProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersMailgun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersMailgunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersMailgunProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersMailgunProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersMsg91<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersMsg91MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersMsg91ProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersMsg91ProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersSendgrid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersSendgridMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersSendgridProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersSendgridProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersSmtp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersSmtpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersSmtpProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersSmtpProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersTelesign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersTelesignMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersTelesignProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersTelesignProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersTextmagic<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersTextmagicMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersTextmagicProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersTextmagicProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersTwilio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersTwilioMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersTwilioProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersTwilioProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostMessagingProvidersVonage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingProvidersVonageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingProvidersVonageProviderId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingProvidersVonageProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingProvidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.providers)[':providerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingProvidersProviderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMessagingProvidersProviderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessagingProvidersProviderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingProvidersProviderIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.providers)[':providerId']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingProvidersProviderIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMessagingSubscribersSubscriberIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.messaging.subscribers)[':subscriberId']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingSubscribersSubscriberIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMessagingTopics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messaging.topics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.messaging.topics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMessagingTopicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostMessagingTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingTopicsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingTopicsTopicId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.topics)[':topicId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingTopicsTopicIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMessagingTopicsTopicId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessagingTopicsTopicIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchMessagingTopicsTopicId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchMessagingTopicsTopicIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingTopicsTopicIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.topics)[':topicId']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingTopicsTopicIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectMessagingTopicsTopicIdSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messaging.topics)[':topicId']['subscribers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingTopicsTopicIdSubscribersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMessagingTopicsTopicIdSubscribers<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMessagingTopicsTopicIdSubscribersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectMessagingTopicsTopicIdSubscribersSubscriberId<
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
  args: () => InferRequestType<
    (typeof client.messaging.topics)[':topicId']['subscribers'][':subscriberId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMessagingTopicsTopicIdSubscribersSubscriberIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteMessagingTopicsTopicIdSubscribersSubscriberId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMessagingTopicsTopicIdSubscribersSubscriberIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sites.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
        TError,
        InferRequestType<typeof client.sites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesFrameworksQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSitesSpecifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.specifications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesSpecificationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesSiteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchSitesSiteIdDeployment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSitesSiteIdDeploymentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteId']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSitesSiteIdDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteIdDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSitesSiteIdDeploymentsDuplicate<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteIdDeploymentsDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSitesSiteIdDeploymentsTemplate<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteIdDeploymentsTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSitesSiteIdDeploymentsVcs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteIdDeploymentsVcsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdDeploymentsDeploymentId<
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
  args: () => InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSitesSiteIdDeploymentsDeploymentId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteIdDeploymentsDeploymentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdDeploymentsDeploymentIdDownload<
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
  args: () => InferRequestType<
    (typeof client.sites)[':siteId']['deployments'][':deploymentId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdDeploymentsDeploymentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchSitesSiteIdDeploymentsDeploymentIdStatus<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchSitesSiteIdDeploymentsDeploymentIdStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':siteId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteId']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSitesSiteIdLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSitesSiteIdLogsLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteId']['logs'][':logId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdLogsLogIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteSitesSiteIdLogsLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteIdLogsLogIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sites)[':siteId']['variables']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSitesSiteIdVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSitesSiteIdVariablesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSitesSiteIdVariablesVariableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':siteId']['variables'][':variableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.sites)[':siteId']['variables'][':variableId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSitesSiteIdVariablesVariableIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutSitesSiteIdVariablesVariableId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSitesSiteIdVariablesVariableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSitesSiteIdVariablesVariableId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSitesSiteIdVariablesVariableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStorageBuckets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.buckets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.storage.buckets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStorageBucketsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStorageBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStorageBucketsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.storage.buckets)[':bucketId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutStorageBucketsBucketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStorageBucketsBucketIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteStorageBucketsBucketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStorageBucketsBucketIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.storage.buckets)[':bucketId']['files']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostStorageBucketsBucketIdFiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStorageBucketsBucketIdFilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketIdFilesFileId<
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
  args: () => InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutStorageBucketsBucketIdFilesFileId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStorageBucketsBucketIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteStorageBucketsBucketIdFilesFileId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStorageBucketsBucketIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketIdFilesFileIdDownload<
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
  args: () => InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdFilesFileIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketIdFilesFileIdPreview<
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
  args: () => InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['preview']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdFilesFileIdPreviewQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectStorageBucketsBucketIdFilesFileIdView<
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
  args: () => InferRequestType<
    (typeof client.storage.buckets)[':bucketId']['files'][':fileId']['view']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getStorageBucketsBucketIdFilesFileIdViewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectTeams<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTeamsTeamIdMemberships<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTeamsTeamIdMembershipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdMembershipsMembershipId<
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
  args: () => InferRequestType<
    (typeof client.teams)[':teamId']['memberships'][':membershipId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTeamsTeamIdMembershipsMembershipIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteTeamsTeamIdMembershipsMembershipId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsTeamIdMembershipsMembershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTeamsTeamIdMembershipsMembershipId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTeamsTeamIdMembershipsMembershipIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTeamsTeamIdMembershipsMembershipIdStatus<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTeamsTeamIdMembershipsMembershipIdStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTeamsTeamIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['prefs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdPrefsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutTeamsTeamIdPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamsTeamIdPrefsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTokensBucketsBucketIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.tokens.buckets)[':bucketId']['files'][':fileId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTokensBucketsBucketIdFilesFileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostTokensBucketsBucketIdFilesFileId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTokensBucketsBucketIdFilesFileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':tokenId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTokensTokenIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTokensTokenIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTokensTokenIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersArgon2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersArgon2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersBcrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersBcryptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersIdentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.identities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.identities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIdentitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteUsersIdentitiesIdentityId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersIdentitiesIdentityIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersMd5<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMd5MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersPhpass<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersPhpassMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersScrypt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersScryptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersScryptModified<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersScryptModifiedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersSha<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersShaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersUserIdJwts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdJwtsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutUsersUserIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIdLabelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectUsersUserIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdMfa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdMfaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersUserIdMfaAuthenticatorsType<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdMfaAuthenticatorsTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdMfaFactors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['factors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['mfa']['factors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdMfaFactorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectUsersUserIdMfaRecoveryCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['mfa']['recovery-codes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdMfaRecoveryCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutUsersUserIdMfaRecoveryCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUserIdMfaRecoveryCodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdMfaRecoveryCodes<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdMfaRecoveryCodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdPhone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdPhoneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdPrefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['prefs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['prefs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdPrefsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchUsersUserIdPrefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdPrefsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['sessions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersUserIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersUserIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteUsersUserIdSessionsSessionId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdSessionsSessionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdTargets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['targets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['targets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdTargetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsersUserIdTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdTargetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUsersUserIdTargetsTargetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userId']['targets'][':targetId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUsersUserIdTargetsTargetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteUsersUserIdTargetsTargetId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUserIdTargetsTargetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdTargetsTargetId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdTargetsTargetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostUsersUserIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersUserIdTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdVerificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUserIdVerificationPhone<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUserIdVerificationPhoneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
