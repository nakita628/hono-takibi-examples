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

export function getFundsConfirmationConsentsKey() {
  return ['funds-confirmation-consents'] as const
}

export function getFundsConfirmationsKey() {
  return ['funds-confirmations'] as const
}

export function getPostFundsConfirmationConsentsMutationKey() {
  return ['funds-confirmation-consents', '/funds-confirmation-consents', 'POST'] as const
}

export function getPostFundsConfirmationConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['funds-confirmation-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['funds-confirmation-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFundsConfirmationConsentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['funds-confirmation-consents']['$post']>,
    ) {
      return parseResponse(client['funds-confirmation-consents'].$post(args, options))
    },
  })
}

export function usePostFundsConfirmationConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['funds-confirmation-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['funds-confirmation-consents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFundsConfirmationConsentsMutationOptions<TError, TOnMutateResult>(
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

export function getFundsConfirmationConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'funds-confirmation-consents',
    '/funds-confirmation-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getFundsConfirmationConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFundsConfirmationConsentsConsentIdQueryKey>
  >({
    queryKey: getFundsConfirmationConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['funds-confirmation-consents'][':ConsentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFundsConfirmationConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFundsConfirmationConsentsConsentIdQueryKey>
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
      ...getFundsConfirmationConsentsConsentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFundsConfirmationConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFundsConfirmationConsentsConsentIdQueryKey>
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
      ...getFundsConfirmationConsentsConsentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteFundsConfirmationConsentsConsentIdMutationKey() {
  return [
    'funds-confirmation-consents',
    '/funds-confirmation-consents/:ConsentId',
    'DELETE',
  ] as const
}

export function getDeleteFundsConfirmationConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFundsConfirmationConsentsConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']
      >,
    ) {
      return parseResponse(
        client['funds-confirmation-consents'][':ConsentId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteFundsConfirmationConsentsConsentId<
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
                    (typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFundsConfirmationConsentsConsentIdMutationOptions<
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

export function getPostFundsConfirmationsMutationKey() {
  return ['funds-confirmations', '/funds-confirmations', 'POST'] as const
}

export function getPostFundsConfirmationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['funds-confirmations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['funds-confirmations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFundsConfirmationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['funds-confirmations']['$post']>) {
      return parseResponse(client['funds-confirmations'].$post(args, options))
    },
  })
}

export function usePostFundsConfirmations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['funds-confirmations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['funds-confirmations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFundsConfirmationsMutationOptions<TError, TOnMutateResult>(
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
