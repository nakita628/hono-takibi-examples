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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'funds-confirmation-consents',
    '/funds-confirmation-consents/:ConsentId',
    keyArgs,
  ] as const
}

export function getFundsConfirmationConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFundsConfirmationConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['funds-confirmation-consents'][':ConsentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFundsConfirmationConsentsConsentIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['funds-confirmation-consents'][':ConsentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFundsConfirmationConsentsConsentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFundsConfirmationConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['funds-confirmation-consents'][':ConsentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
