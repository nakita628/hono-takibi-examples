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

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getPostMarketingTransactional202609SingleEmailSendMutationKey() {
  return ['marketing', '/marketing/transactional/2026-09/single-email/send', 'POST'] as const
}

export function getPostMarketingTransactional202609SingleEmailSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingTransactional202609SingleEmailSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.transactional['2026-09']['single-email'].send.$post(args, options),
      )
    },
  })
}

export function usePostMarketingTransactional202609SingleEmailSend<
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
                    (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
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
  const mutationDefaults = getPostMarketingTransactional202609SingleEmailSendMutationOptions<
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

export function getMarketingTransactional202609SmtpTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
  >,
) {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens', toValue(args)] as const
}

export function getMarketingTransactional202609SmtpTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingTransactional202609SmtpTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingTransactional202609SmtpTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingTransactional202609SmtpTokensQueryKey>
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
            ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingTransactional202609SmtpTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingTransactional202609SmtpTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMarketingTransactional202609SmtpTokensMutationKey() {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens', 'POST'] as const
}

export function getPostMarketingTransactional202609SmtpTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingTransactional202609SmtpTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'].$post(args, options),
      )
    },
  })
}

export function usePostMarketingTransactional202609SmtpTokens<
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']
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
  const mutationDefaults = getPostMarketingTransactional202609SmtpTokensMutationOptions<
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

export function getMarketingTransactional202609SmtpTokensTokenIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
    >
  >,
) {
  return [
    'marketing',
    '/marketing/transactional/2026-09/smtp-tokens/:tokenId',
    toValue(args),
  ] as const
}

export function getMarketingTransactional202609SmtpTokensTokenIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMarketingTransactional202609SmtpTokensTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMarketingTransactional202609SmtpTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMarketingTransactional202609SmtpTokensTokenIdQueryKey>
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
              (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMarketingTransactional202609SmtpTokensTokenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMarketingTransactional202609SmtpTokensTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMarketingTransactional202609SmtpTokensTokenIdMutationKey() {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteMarketingTransactional202609SmtpTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMarketingTransactional202609SmtpTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
      >,
    ) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMarketingTransactional202609SmtpTokensTokenId<
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
                      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
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
  const mutationDefaults = getDeleteMarketingTransactional202609SmtpTokensTokenIdMutationOptions<
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

export function getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetMutationKey() {
  return [
    'marketing',
    '/marketing/transactional/2026-09/smtp-tokens/:tokenId/password-reset',
    'POST',
  ] as const
}

export function getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'][
          'password-reset'
        ].$post(args, options),
      )
    },
  })
}

export function usePostMarketingTransactional202609SmtpTokensTokenIdPasswordReset<
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
                    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
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
    getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetMutationOptions<
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
