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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2PaymentsAuthorizationsAuthorizationIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/authorizations/:authorization_id', keyArgs] as const
}

export function getV2PaymentsAuthorizationsAuthorizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PaymentsAuthorizationsAuthorizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments.authorizations[':authorization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2PaymentsAuthorizationsAuthorizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.authorizations)[':authorization_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.payments.authorizations)[':authorization_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PaymentsAuthorizationsAuthorizationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV2PaymentsAuthorizationsAuthorizationIdCapture<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PaymentsAuthorizationsAuthorizationIdCaptureMutationOptions<
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

export function createPostV2PaymentsAuthorizationsAuthorizationIdReauthorize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2PaymentsAuthorizationsAuthorizationIdReauthorizeMutationOptions<
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

export function createPostV2PaymentsAuthorizationsAuthorizationIdVoid<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PaymentsAuthorizationsAuthorizationIdVoidMutationOptions<
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

export function getV2PaymentsCapturesCaptureIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/captures/:capture_id', keyArgs] as const
}

export function getV2PaymentsCapturesCaptureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PaymentsCapturesCaptureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments.captures[':capture_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2PaymentsCapturesCaptureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.captures)[':capture_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.payments.captures)[':capture_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PaymentsCapturesCaptureIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2PaymentsCapturesCaptureIdRefund<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PaymentsCapturesCaptureIdRefundMutationOptions<
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

export function createPostV2PaymentsFindEligibleMethods<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PaymentsFindEligibleMethodsMutationOptions<
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

export function getV2PaymentsRefundsRefundIdQueryKey(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/refunds/:refund_id', keyArgs] as const
}

export function getV2PaymentsRefundsRefundIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PaymentsRefundsRefundIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payments.refunds[':refund_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2PaymentsRefundsRefundId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.payments.refunds)[':refund_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PaymentsRefundsRefundIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
