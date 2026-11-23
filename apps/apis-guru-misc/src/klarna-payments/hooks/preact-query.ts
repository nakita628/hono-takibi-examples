import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getDeletePaymentsV1AuthorizationsAuthorizationTokenMutationKey() {
  return ['payments', '/payments/v1/authorizations/:authorizationToken', 'DELETE'] as const
}

export function getDeletePaymentsV1AuthorizationsAuthorizationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentsV1AuthorizationsAuthorizationTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
      >,
    ) {
      return parseResponse(
        client.payments.v1.authorizations[':authorizationToken'].$delete(args, options),
      )
    },
  })
}

export function useDeletePaymentsV1AuthorizationsAuthorizationToken<
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
                    (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.payments.v1.authorizations)[':authorizationToken']['$delete']
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
  const mutationDefaults = getDeletePaymentsV1AuthorizationsAuthorizationTokenMutationOptions<
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

export function getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenMutationKey() {
  return [
    'payments',
    '/payments/v1/authorizations/:authorizationToken/customer-token',
    'POST',
  ] as const
}

export function getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
      >,
    ) {
      return parseResponse(
        client.payments.v1.authorizations[':authorizationToken']['customer-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostPaymentsV1AuthorizationsAuthorizationTokenCustomerToken<
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
                  (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.payments.v1.authorizations)[':authorizationToken']['customer-token']['$post']
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
    getPostPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenMutationOptions<
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

export function getPostPaymentsV1AuthorizationsAuthorizationTokenOrderMutationKey() {
  return ['payments', '/payments/v1/authorizations/:authorizationToken/order', 'POST'] as const
}

export function getPostPaymentsV1AuthorizationsAuthorizationTokenOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsV1AuthorizationsAuthorizationTokenOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
      >,
    ) {
      return parseResponse(
        client.payments.v1.authorizations[':authorizationToken'].order.$post(args, options),
      )
    },
  })
}

export function usePostPaymentsV1AuthorizationsAuthorizationTokenOrder<
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
                  (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.payments.v1.authorizations)[':authorizationToken']['order']['$post']
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
  const mutationDefaults = getPostPaymentsV1AuthorizationsAuthorizationTokenOrderMutationOptions<
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

export function getPostPaymentsV1SessionsMutationKey() {
  return ['payments', '/payments/v1/sessions', 'POST'] as const
}

export function getPostPaymentsV1SessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.v1.sessions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.payments.v1.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsV1SessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.v1.sessions.$post>) {
      return parseResponse(client.payments.v1.sessions.$post(args, options))
    },
  })
}

export function usePostPaymentsV1Sessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.v1.sessions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.payments.v1.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentsV1SessionsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentsV1SessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
) {
  return ['payments', '/payments/v1/sessions/:session_id', args] as const
}

export function getPaymentsV1SessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsV1SessionsSessionIdQueryKey>
  >({
    queryKey: getPaymentsV1SessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.v1.sessions[':session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsV1SessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsV1SessionsSessionIdQueryKey>
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
      ...getPaymentsV1SessionsSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentsV1SessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsV1SessionsSessionIdQueryKey>
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
      ...getPaymentsV1SessionsSessionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPaymentsV1SessionsSessionIdMutationKey() {
  return ['payments', '/payments/v1/sessions/:session_id', 'POST'] as const
}

export function getPostPaymentsV1SessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsV1SessionsSessionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']>,
    ) {
      return parseResponse(client.payments.v1.sessions[':session_id'].$post(args, options))
    },
  })
}

export function usePostPaymentsV1SessionsSessionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments.v1.sessions)[':session_id']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.payments.v1.sessions)[':session_id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentsV1SessionsSessionIdMutationOptions<
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
