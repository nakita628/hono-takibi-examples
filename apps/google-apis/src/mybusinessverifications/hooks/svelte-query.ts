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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1VerificationTokensGenerateMutationKey() {
  return ['v1', '/v1/verificationTokens:generate', 'POST'] as const
}

export function getPostV1VerificationTokensGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['verificationTokens:generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['verificationTokens:generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VerificationTokensGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['verificationTokens:generate']['$post']>,
    ) {
      return parseResponse(client.v1['verificationTokens:generate'].$post(args, options))
    },
  })
}

export function createPostV1VerificationTokensGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['verificationTokens:generate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['verificationTokens:generate']['$post']>,
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
    const mutationDefaults = getPostV1VerificationTokensGenerateMutationOptions<
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

export function getPostV1LocationFetchVerificationOptionsMutationKey() {
  return ['v1', '/v1/:location:fetchVerificationOptions', 'POST'] as const
}

export function getPostV1LocationFetchVerificationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LocationFetchVerificationOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>,
    ) {
      return parseResponse(client.v1[':location:fetchVerificationOptions'].$post(args, options))
    },
  })
}

export function createPostV1LocationFetchVerificationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>,
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
    const mutationDefaults = getPostV1LocationFetchVerificationOptionsMutationOptions<
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

export function getV1NameVoiceOfMerchantStateQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>,
) {
  return ['v1', '/v1/:name/VoiceOfMerchantState', args] as const
}

export function getV1NameVoiceOfMerchantStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameVoiceOfMerchantStateQueryKey>
  >({
    queryKey: getV1NameVoiceOfMerchantStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].VoiceOfMerchantState.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1NameVoiceOfMerchantState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameVoiceOfMerchantStateQueryKey>
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
      ...getV1NameVoiceOfMerchantStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1NameCompleteMutationKey() {
  return ['v1', '/v1/:name:complete', 'POST'] as const
}

export function getPostV1NameCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCompleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:complete']['$post']>) {
      return parseResponse(client.v1[':name:complete'].$post(args, options))
    },
  })
}

export function createPostV1NameComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
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
    const mutationDefaults = getPostV1NameCompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameVerifyMutationKey() {
  return ['v1', '/v1/:name:verify', 'POST'] as const
}

export function getPostV1NameVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:verify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:verify']['$post']>) {
      return parseResponse(client.v1[':name:verify'].$post(args, options))
    },
  })
}

export function createPostV1NameVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:verify']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:verify']['$post']>,
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
    const mutationDefaults = getPostV1NameVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentVerificationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>,
) {
  return ['v1', '/v1/:parent/verifications', args] as const
}

export function getV1ParentVerificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVerificationsQueryKey>
  >({
    queryKey: getV1ParentVerificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].verifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentVerificationsQueryKey>
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
      ...getV1ParentVerificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
