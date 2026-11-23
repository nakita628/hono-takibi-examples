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

export function injectPostFundsConfirmationConsents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFundsConfirmationConsentsMutationOptions<
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

export function injectFundsConfirmationConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['funds-confirmation-consents'][':ConsentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFundsConfirmationConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteFundsConfirmationConsentsConsentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFundsConfirmationConsentsConsentIdMutationOptions<
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

export function injectPostFundsConfirmations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFundsConfirmationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
