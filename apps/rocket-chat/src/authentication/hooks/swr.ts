import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1LoginKey() {
  return ['api', '/api/v1/login', 'POST'] as const
}

export function usePostApiV1Login<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.login.$post> }) =>
        parseResponse(client.api.v1.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LogoutKey() {
  return ['api', '/api/v1/logout', 'POST'] as const
}

export function usePostApiV1Logout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.logout.$post> }) =>
        parseResponse(client.api.v1.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1LoginCodeRedeemKey() {
  return ['api', '/api/v1/loginCode.redeem', 'POST'] as const
}

export function usePostApiV1LoginCodeRedeem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['loginCode.redeem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1LoginCodeRedeemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['loginCode.redeem']['$post']> },
      ) => parseResponse(client.api.v1['loginCode.redeem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MeKey(args: InferRequestType<typeof client.api.v1.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/me', keyArgs] as const
}

export function useGetApiV1Me<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Me<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1Users2faEnableEmailKey() {
  return ['api', '/api/v1/users.2fa.enableEmail', 'POST'] as const
}

export function usePostApiV1Users2faEnableEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1Users2faEnableEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['users.2fa.enableEmail']['$post']> },
      ) => parseResponse(client.api.v1['users.2fa.enableEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1Users2faSendEmailCodeKey() {
  return ['api', '/api/v1/users.2fa.sendEmailCode', 'POST'] as const
}

export function usePostApiV1Users2faSendEmailCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1Users2faSendEmailCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['users.2fa.sendEmailCode']['$post']> },
      ) => parseResponse(client.api.v1['users.2fa.sendEmailCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1Users2faDisableEmailKey() {
  return ['api', '/api/v1/users.2fa.disableEmail', 'POST'] as const
}

export function usePostApiV1Users2faDisableEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1Users2faDisableEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['users.2fa.disableEmail']['$post']> },
      ) => parseResponse(client.api.v1['users.2fa.disableEmail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersEnableTotpKey() {
  return ['api', '/api/v1/users.enableTotp', 'POST'] as const
}

export function usePostApiV1UsersEnableTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.enableTotp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersEnableTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['users.enableTotp']['$post']> },
      ) => parseResponse(client.api.v1['users.enableTotp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersValidateTotpKey() {
  return ['api', '/api/v1/users.validateTotp', 'POST'] as const
}

export function usePostApiV1UsersValidateTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.validateTotp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersValidateTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['users.validateTotp']['$post']> },
      ) => parseResponse(client.api.v1['users.validateTotp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersDisableTotpKey() {
  return ['api', '/api/v1/users.disableTotp', 'POST'] as const
}

export function usePostApiV1UsersDisableTotp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.disableTotp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersDisableTotpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['users.disableTotp']['$post']> },
      ) => parseResponse(client.api.v1['users.disableTotp'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1UsersRegenerateTotpCodesKey() {
  return ['api', '/api/v1/users.regenerateTotpCodes', 'POST'] as const
}

export function usePostApiV1UsersRegenerateTotpCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1UsersRegenerateTotpCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']> },
      ) => parseResponse(client.api.v1['users.regenerateTotpCodes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1UsersTotpCodesRemainingKey(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.totpCodesRemaining', keyArgs] as const
}

export function useGetApiV1UsersTotpCodesRemaining<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1UsersTotpCodesRemainingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['users.totpCodesRemaining'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1UsersTotpCodesRemaining<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1UsersTotpCodesRemainingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1['users.totpCodesRemaining'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1TwoFactorChallengesSendEmailCodeKey() {
  return ['api', '/api/v1/twoFactorChallenges.sendEmailCode', 'POST'] as const
}

export function usePostApiV1TwoFactorChallengesSendEmailCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TwoFactorChallengesSendEmailCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1['twoFactorChallenges.sendEmailCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1TwoFactorChallengesVerifyChallengeKey() {
  return ['api', '/api/v1/twoFactorChallenges.verifyChallenge', 'POST'] as const
}

export function usePostApiV1TwoFactorChallengesVerifyChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1TwoFactorChallengesVerifyChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1['twoFactorChallenges.verifyChallenge'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
