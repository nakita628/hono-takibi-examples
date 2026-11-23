import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
) {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens', args] as const
}

export function getMarketingTransactional202609SmtpTokensQueryOptions<
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
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingTransactional202609SmtpTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMarketingTransactional202609SmtpTokensQueryKey>
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
      ...getMarketingTransactional202609SmtpTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketingTransactional202609SmtpTokens<
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
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getMarketingTransactional202609SmtpTokensQueryKey>
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
      ...getMarketingTransactional202609SmtpTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
) {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens/:tokenId', args] as const
}

export function getMarketingTransactional202609SmtpTokensTokenIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMarketingTransactional202609SmtpTokensTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getMarketingTransactional202609SmtpTokensTokenIdQueryKey>
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
      ...getMarketingTransactional202609SmtpTokensTokenIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMarketingTransactional202609SmtpTokensTokenId<
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
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getMarketingTransactional202609SmtpTokensTokenIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
