import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getPostMarketingTransactional202609SingleEmailSendKey() {
  return ['marketing', '/marketing/transactional/2026-09/single-email/send', 'POST'] as const
}

export function usePostMarketingTransactional202609SingleEmailSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingTransactional202609SingleEmailSendKey()
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
            (typeof client.marketing.transactional)['2026-09']['single-email']['send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.transactional['2026-09']['single-email'].send.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingTransactional202609SmtpTokensKey(
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
) {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens', args] as const
}

export function useGetMarketingTransactional202609SmtpTokens<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
            >
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
        ? getGetMarketingTransactional202609SmtpTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingTransactional202609SmtpTokens<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
            >
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
        ? getGetMarketingTransactional202609SmtpTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingTransactional202609SmtpTokensKey() {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens', 'POST'] as const
}

export function usePostMarketingTransactional202609SmtpTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingTransactional202609SmtpTokensKey()
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
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingTransactional202609SmtpTokensTokenIdKey(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
) {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens/:tokenId', args] as const
}

export function useGetMarketingTransactional202609SmtpTokensTokenId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMarketingTransactional202609SmtpTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingTransactional202609SmtpTokensTokenId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMarketingTransactional202609SmtpTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingTransactional202609SmtpTokensTokenIdKey() {
  return ['marketing', '/marketing/transactional/2026-09/smtp-tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteMarketingTransactional202609SmtpTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingTransactional202609SmtpTokensTokenIdKey()
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
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetKey() {
  return [
    'marketing',
    '/marketing/transactional/2026-09/smtp-tokens/:tokenId/password-reset',
    'POST',
  ] as const
}

export function usePostMarketingTransactional202609SmtpTokensTokenIdPasswordReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingTransactional202609SmtpTokensTokenIdPasswordResetKey()
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
            (typeof client.marketing.transactional)['2026-09']['smtp-tokens'][':tokenId']['password-reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.transactional['2026-09']['smtp-tokens'][':tokenId'][
            'password-reset'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
