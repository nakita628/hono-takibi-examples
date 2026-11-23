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

export function usePostV1VerificationTokensGenerate<
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
                Awaited<ReturnType<(typeof client.v1)['verificationTokens:generate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['verificationTokens:generate']['$post']>,
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
  const mutationDefaults = getPostV1VerificationTokensGenerateMutationOptions<
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

export function usePostV1LocationFetchVerificationOptions<
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
                  ReturnType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':location:fetchVerificationOptions']['$post']>,
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
  const mutationDefaults = getPostV1LocationFetchVerificationOptionsMutationOptions<
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

export function getV1NameVoiceOfMerchantStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>
  >,
) {
  return ['v1', '/v1/:name/VoiceOfMerchantState', toValue(args)] as const
}

export function getV1NameVoiceOfMerchantStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameVoiceOfMerchantStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].VoiceOfMerchantState.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameVoiceOfMerchantState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameVoiceOfMerchantStateQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':name']['VoiceOfMerchantState']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameVoiceOfMerchantStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameVoiceOfMerchantStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].VoiceOfMerchantState.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1NameComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:complete']['$post']>,
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
  const mutationDefaults = getPostV1NameCompleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1NameVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:verify']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:verify']['$post']>,
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
  const mutationDefaults = getPostV1NameVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentVerificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>>,
) {
  return ['v1', '/v1/:parent/verifications', toValue(args)] as const
}

export function getV1ParentVerificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentVerificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].verifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentVerifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['verifications']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentVerificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['verifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVerificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentVerificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].verifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
