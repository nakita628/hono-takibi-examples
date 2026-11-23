import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFundsConfirmationConsentsKey() {
  return ['funds-confirmation-consents'] as const
}

export function getFundsConfirmationsKey() {
  return ['funds-confirmations'] as const
}

export function getPostFundsConfirmationConsentsKey() {
  return ['funds-confirmation-consents', '/funds-confirmation-consents', 'POST'] as const
}

export function usePostFundsConfirmationConsents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['funds-confirmation-consents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['funds-confirmation-consents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFundsConfirmationConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['funds-confirmation-consents']['$post']> },
      ) => parseResponse(client['funds-confirmation-consents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFundsConfirmationConsentsConsentIdKey(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'funds-confirmation-consents',
    '/funds-confirmation-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function useGetFundsConfirmationConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
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
        ? getGetFundsConfirmationConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['funds-confirmation-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFundsConfirmationConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
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
        ? getGetFundsConfirmationConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['funds-confirmation-consents'][':ConsentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteFundsConfirmationConsentsConsentIdKey() {
  return [
    'funds-confirmation-consents',
    '/funds-confirmation-consents/:ConsentId',
    'DELETE',
  ] as const
}

export function useDeleteFundsConfirmationConsentsConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFundsConfirmationConsentsConsentIdKey()
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
            (typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['funds-confirmation-consents'][':ConsentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFundsConfirmationsKey() {
  return ['funds-confirmations', '/funds-confirmations', 'POST'] as const
}

export function usePostFundsConfirmations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['funds-confirmations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['funds-confirmations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFundsConfirmationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['funds-confirmations']['$post']> },
      ) => parseResponse(client['funds-confirmations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
