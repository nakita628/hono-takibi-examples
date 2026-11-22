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

export function usePostApiV1Login<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.login.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1Logout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.logout.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.logout.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1LoginCodeRedeem<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1LoginCodeRedeemMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.me.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/me', keyArgs] as const
}

export function getApiV1MeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.me.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Me<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>
          >,
          ReturnType<typeof getApiV1MeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1MeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Users2faEnableEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1Users2faEnableEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1Users2faSendEmailCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1Users2faSendEmailCodeMutationOptions<
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

export function usePostApiV1Users2faDisableEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1Users2faDisableEmailMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1UsersEnableTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersEnableTotpMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1UsersValidateTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersValidateTotpMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1UsersDisableTotp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersDisableTotpMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1UsersRegenerateTotpCodes<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.regenerateTotpCodes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1UsersRegenerateTotpCodesMutationOptions<
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

export function getApiV1UsersTotpCodesRemainingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.totpCodesRemaining', keyArgs] as const
}

export function getApiV1UsersTotpCodesRemainingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersTotpCodesRemainingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.totpCodesRemaining'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersTotpCodesRemaining<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersTotpCodesRemainingQueryKey>
        >,
        { queryKey: unknown }
      >,
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
          Awaited<ReturnType<(typeof client.api.v1)['users.totpCodesRemaining']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersTotpCodesRemainingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersTotpCodesRemainingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.totpCodesRemaining'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1TwoFactorChallengesSendEmailCode<
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
                  ReturnType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['twoFactorChallenges.sendEmailCode']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TwoFactorChallengesSendEmailCodeMutationOptions<
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

export function usePostApiV1TwoFactorChallengesVerifyChallenge<
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
                  ReturnType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['twoFactorChallenges.verifyChallenge']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1TwoFactorChallengesVerifyChallengeMutationOptions<
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
