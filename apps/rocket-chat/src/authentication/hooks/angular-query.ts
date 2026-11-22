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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1LoginMutationKey() {
  return ['api', '/api/v1/login', 'POST'] as const
}

export function getPostApiV1LoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.login.$post>) {
      return parseResponse(client.api.v1.login.$post(args, options))
    },
  })
}

export function injectPostApiV1Login<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.login.$post>,
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
    const mutationDefaults = getPostApiV1LoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1LogoutMutationKey() {
  return ['api', '/api/v1/logout', 'POST'] as const
}

export function getPostApiV1LogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.logout.$post>) {
      return parseResponse(client.api.v1.logout.$post(args, options))
    },
  })
}

export function injectPostApiV1Logout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.logout.$post>,
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
    const mutationDefaults = getPostApiV1LogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1LoginCodeRedeemMutationKey() {
  return ['api', '/api/v1/loginCode.redeem', 'POST'] as const
}

export function getPostApiV1LoginCodeRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['loginCode.redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LoginCodeRedeemMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']>) {
      return parseResponse(client.api.v1['loginCode.redeem'].$post(args, options))
    },
  })
}

export function injectPostApiV1LoginCodeRedeem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['loginCode.redeem']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']>,
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
    const mutationDefaults = getPostApiV1LoginCodeRedeemMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1MeQueryKey(args: InferRequestType<typeof client.api.v1.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me', keyArgs] as const
}

export function getApiV1MeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1MeQueryKey>
  >({
    queryKey: getApiV1MeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1MeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1Users2faEnableEmailMutationKey() {
  return ['api', '/api/v1/users.2fa.enableEmail', 'POST'] as const
}

export function getPostApiV1Users2faEnableEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1Users2faEnableEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.2fa.enableEmail'].$post(args, options))
    },
  })
}

export function injectPostApiV1Users2faEnableEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>,
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
    const mutationDefaults = getPostApiV1Users2faEnableEmailMutationOptions<
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

export function getPostApiV1Users2faSendEmailCodeMutationKey() {
  return ['api', '/api/v1/users.2fa.sendEmailCode', 'POST'] as const
}

export function getPostApiV1Users2faSendEmailCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1Users2faSendEmailCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.2fa.sendEmailCode'].$post(args, options))
    },
  })
}

export function injectPostApiV1Users2faSendEmailCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>,
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
    const mutationDefaults = getPostApiV1Users2faSendEmailCodeMutationOptions<
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

export function getPostApiV1Users2faDisableEmailMutationKey() {
  return ['api', '/api/v1/users.2fa.disableEmail', 'POST'] as const
}

export function getPostApiV1Users2faDisableEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1Users2faDisableEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.2fa.disableEmail'].$post(args, options))
    },
  })
}

export function injectPostApiV1Users2faDisableEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>,
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
    const mutationDefaults = getPostApiV1Users2faDisableEmailMutationOptions<
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

export function getPostApiV1UsersEnableTotpMutationKey() {
  return ['api', '/api/v1/users.enableTotp', 'POST'] as const
}

export function getPostApiV1UsersEnableTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.enableTotp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersEnableTotpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']>) {
      return parseResponse(client.api.v1['users.enableTotp'].$post(args, options))
    },
  })
}

export function injectPostApiV1UsersEnableTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.enableTotp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersEnableTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersValidateTotpMutationKey() {
  return ['api', '/api/v1/users.validateTotp', 'POST'] as const
}

export function getPostApiV1UsersValidateTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.validateTotp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersValidateTotpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.validateTotp'].$post(args, options))
    },
  })
}

export function injectPostApiV1UsersValidateTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.validateTotp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersValidateTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersDisableTotpMutationKey() {
  return ['api', '/api/v1/users.disableTotp', 'POST'] as const
}

export function getPostApiV1UsersDisableTotpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.disableTotp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersDisableTotpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']>) {
      return parseResponse(client.api.v1['users.disableTotp'].$post(args, options))
    },
  })
}

export function injectPostApiV1UsersDisableTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.disableTotp']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersDisableTotpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiV1UsersRegenerateTotpCodesMutationKey() {
  return ['api', '/api/v1/users.regenerateTotpCodes', 'POST'] as const
}

export function getPostApiV1UsersRegenerateTotpCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegenerateTotpCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.regenerateTotpCodes'].$post(args, options))
    },
  })
}

export function injectPostApiV1UsersRegenerateTotpCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersRegenerateTotpCodesMutationOptions<
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

export function getApiV1UsersTotpCodesRemainingQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.totpCodesRemaining', keyArgs] as const
}

export function getApiV1UsersTotpCodesRemainingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersTotpCodesRemainingQueryKey>
  >({
    queryKey: getApiV1UsersTotpCodesRemainingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.totpCodesRemaining'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1UsersTotpCodesRemaining<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1UsersTotpCodesRemainingQueryKey>
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
      ...getApiV1UsersTotpCodesRemainingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1TwoFactorChallengesSendEmailCodeMutationKey() {
  return ['api', '/api/v1/twoFactorChallenges.sendEmailCode', 'POST'] as const
}

export function getPostApiV1TwoFactorChallengesSendEmailCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TwoFactorChallengesSendEmailCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>,
    ) {
      return parseResponse(client.api.v1['twoFactorChallenges.sendEmailCode'].$post(args, options))
    },
  })
}

export function injectPostApiV1TwoFactorChallengesSendEmailCode<
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
                ReturnType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>,
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
    const mutationDefaults = getPostApiV1TwoFactorChallengesSendEmailCodeMutationOptions<
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

export function getPostApiV1TwoFactorChallengesVerifyChallengeMutationKey() {
  return ['api', '/api/v1/twoFactorChallenges.verifyChallenge', 'POST'] as const
}

export function getPostApiV1TwoFactorChallengesVerifyChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1TwoFactorChallengesVerifyChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['twoFactorChallenges.verifyChallenge'].$post(args, options),
      )
    },
  })
}

export function injectPostApiV1TwoFactorChallengesVerifyChallenge<
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
                ReturnType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>,
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
    const mutationDefaults = getPostApiV1TwoFactorChallengesVerifyChallengeMutationOptions<
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
