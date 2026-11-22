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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2PaymentsAuthorizationsAuthorizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/payments/authorizations/:authorization_id', keyArgs] as const
}

export function getV2PaymentsAuthorizationsAuthorizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentsAuthorizationsAuthorizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payments.authorizations[':authorization_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentsAuthorizationsAuthorizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
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
                    (typeof client.v2.payments.authorizations)[':authorization_id']['$get']
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
                    (typeof client.v2.payments.authorizations)[':authorization_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PaymentsAuthorizationsAuthorizationIdQueryKey>
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
            ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsAuthorizationsAuthorizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentsAuthorizationsAuthorizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payments.authorizations[':authorization_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdCaptureMutationKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/capture', 'POST'] as const
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsAuthorizationsAuthorizationIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.payments.authorizations[':authorization_id'].capture.$post(args, options),
      )
    },
  })
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdCapture<
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
                    (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.payments.authorizations)[':authorization_id']['capture']['$post']
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
  const mutationDefaults = getPostV2PaymentsAuthorizationsAuthorizationIdCaptureMutationOptions<
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

export function getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeMutationKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/reauthorize', 'POST'] as const
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.payments.authorizations[':authorization_id'].reauthorize.$post(args, options),
      )
    },
  })
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdReauthorize<
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
                    (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.payments.authorizations)[':authorization_id']['reauthorize']['$post']
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
  const mutationDefaults = getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeMutationOptions<
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

export function getPostV2PaymentsAuthorizationsAuthorizationIdVoidMutationKey() {
  return ['v2', '/v2/payments/authorizations/:authorization_id/void', 'POST'] as const
}

export function getPostV2PaymentsAuthorizationsAuthorizationIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsAuthorizationsAuthorizationIdVoidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.payments.authorizations[':authorization_id'].void.$post(args, options),
      )
    },
  })
}

export function usePostV2PaymentsAuthorizationsAuthorizationIdVoid<
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
                      (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.payments.authorizations)[':authorization_id']['void']['$post']
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
  const mutationDefaults = getPostV2PaymentsAuthorizationsAuthorizationIdVoidMutationOptions<
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

export function getV2PaymentsCapturesCaptureIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/payments/captures/:capture_id', keyArgs] as const
}

export function getV2PaymentsCapturesCaptureIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentsCapturesCaptureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payments.captures[':capture_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentsCapturesCaptureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PaymentsCapturesCaptureIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsCapturesCaptureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentsCapturesCaptureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payments.captures[':capture_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PaymentsCapturesCaptureIdRefundMutationKey() {
  return ['v2', '/v2/payments/captures/:capture_id/refund', 'POST'] as const
}

export function getPostV2PaymentsCapturesCaptureIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsCapturesCaptureIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.payments.captures)[':capture_id']['refund']['$post']
      >,
    ) {
      return parseResponse(client.v2.payments.captures[':capture_id'].refund.$post(args, options))
    },
  })
}

export function usePostV2PaymentsCapturesCaptureIdRefund<
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
                  ReturnType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['refund']['$post']>,
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
  const mutationDefaults = getPostV2PaymentsCapturesCaptureIdRefundMutationOptions<
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

export function getPostV2PaymentsFindEligibleMethodsMutationKey() {
  return ['v2', '/v2/payments/find-eligible-methods', 'POST'] as const
}

export function getPostV2PaymentsFindEligibleMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)['find-eligible-methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PaymentsFindEligibleMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']>,
    ) {
      return parseResponse(client.v2.payments['find-eligible-methods'].$post(args, options))
    },
  })
}

export function usePostV2PaymentsFindEligibleMethods<
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
                Awaited<ReturnType<(typeof client.v2.payments)['find-eligible-methods']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.payments)['find-eligible-methods']['$post']>,
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
  const mutationDefaults = getPostV2PaymentsFindEligibleMethodsMutationOptions<
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

export function getV2PaymentsRefundsRefundIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/payments/refunds/:refund_id', keyArgs] as const
}

export function getV2PaymentsRefundsRefundIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PaymentsRefundsRefundIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payments.refunds[':refund_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PaymentsRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PaymentsRefundsRefundIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PaymentsRefundsRefundIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PaymentsRefundsRefundIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payments.refunds[':refund_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
