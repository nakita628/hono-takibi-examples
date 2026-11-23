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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1BillingPlansQueryKey(
  args: InferRequestType<typeof client.v1.billing.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/billing/plans', keyArgs] as const
}

export function getV1BillingPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.billing.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingPlansQueryKey>
  >({
    queryKey: getV1BillingPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1BillingPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.billing.plans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BillingPlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BillingPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.billing.plans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BillingPlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BillingPlansMutationKey() {
  return ['v1', '/v1/billing/plans', 'POST'] as const
}

export function getPostV1BillingPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.billing.plans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.plans.$post>) {
      return parseResponse(client.v1.billing.plans.$post(args, options))
    },
  })
}

export function usePostV1BillingPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.plans.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.plans.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingPlansMutationOptions<TError, TOnMutateResult>(
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

export function getV1BillingPlansIdQueryKey(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$get']>,
) {
  return ['v1', '/v1/billing/plans/:id', args] as const
}

export function getV1BillingPlansIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingPlansIdQueryKey>
  >({
    queryKey: getV1BillingPlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.plans[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BillingPlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingPlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BillingPlansIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BillingPlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingPlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BillingPlansIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1BillingPlansIdMutationKey() {
  return ['v1', '/v1/billing/plans/:id', 'PATCH'] as const
}

export function getPatchV1BillingPlansIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.plans)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BillingPlansIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.billing.plans)[':id']['$patch']>) {
      return parseResponse(client.v1.billing.plans[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BillingPlansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.plans)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BillingPlansIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1BillingPlansIdActivateMutationKey() {
  return ['v1', '/v1/billing/plans/:id/activate', 'POST'] as const
}

export function getPostV1BillingPlansIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPlansIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>,
    ) {
      return parseResponse(client.v1.billing.plans[':id'].activate.$post(args, options))
    },
  })
}

export function usePostV1BillingPlansIdActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.plans)[':id']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingPlansIdActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1BillingPlansIdDeactivateMutationKey() {
  return ['v1', '/v1/billing/plans/:id/deactivate', 'POST'] as const
}

export function getPostV1BillingPlansIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPlansIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>,
    ) {
      return parseResponse(client.v1.billing.plans[':id'].deactivate.$post(args, options))
    },
  })
}

export function usePostV1BillingPlansIdDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.plans)[':id']['deactivate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingPlansIdDeactivateMutationOptions<
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

export function getPostV1BillingPlansIdUpdatePricingSchemesMutationKey() {
  return ['v1', '/v1/billing/plans/:id/update-pricing-schemes', 'POST'] as const
}

export function getPostV1BillingPlansIdUpdatePricingSchemesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingPlansIdUpdatePricingSchemesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.billing.plans[':id']['update-pricing-schemes'].$post(args, options),
      )
    },
  })
}

export function usePostV1BillingPlansIdUpdatePricingSchemes<
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
                    (typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.billing.plans)[':id']['update-pricing-schemes']['$post']
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
  const mutationDefaults = getPostV1BillingPlansIdUpdatePricingSchemesMutationOptions<
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

export function getPostV1BillingSubscriptionsMutationKey() {
  return ['v1', '/v1/billing/subscriptions', 'POST'] as const
}

export function getPostV1BillingSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.billing.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.billing.subscriptions.$post>) {
      return parseResponse(client.v1.billing.subscriptions.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.billing.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getV1BillingSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$get']>,
) {
  return ['v1', '/v1/billing/subscriptions/:id', args] as const
}

export function getV1BillingSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSubscriptionsIdQueryKey>
  >({
    queryKey: getV1BillingSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.subscriptions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BillingSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSubscriptionsIdQueryKey>
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
      ...getV1BillingSubscriptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BillingSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSubscriptionsIdQueryKey>
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
      ...getV1BillingSubscriptionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1BillingSubscriptionsIdMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id', 'PATCH'] as const
}

export function getPatchV1BillingSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1BillingSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1BillingSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1BillingSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1BillingSubscriptionsIdReviseMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id/revise', 'POST'] as const
}

export function getPostV1BillingSubscriptionsIdReviseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsIdReviseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].revise.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptionsIdRevise<
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
                ReturnType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['revise']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsIdReviseMutationOptions<
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

export function getPostV1BillingSubscriptionsIdSuspendMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id/suspend', 'POST'] as const
}

export function getPostV1BillingSubscriptionsIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].suspend.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptionsIdSuspend<
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
                  ReturnType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['suspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsIdSuspendMutationOptions<
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

export function getPostV1BillingSubscriptionsIdCancelMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id/cancel', 'POST'] as const
}

export function getPostV1BillingSubscriptionsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptionsIdCancel<
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
                  ReturnType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsIdCancelMutationOptions<
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

export function getPostV1BillingSubscriptionsIdActivateMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id/activate', 'POST'] as const
}

export function getPostV1BillingSubscriptionsIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].activate.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptionsIdActivate<
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
                  ReturnType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsIdActivateMutationOptions<
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

export function getPostV1BillingSubscriptionsIdCaptureMutationKey() {
  return ['v1', '/v1/billing/subscriptions/:id/capture', 'POST'] as const
}

export function getPostV1BillingSubscriptionsIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BillingSubscriptionsIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>,
    ) {
      return parseResponse(client.v1.billing.subscriptions[':id'].capture.$post(args, options))
    },
  })
}

export function usePostV1BillingSubscriptionsIdCapture<
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
                ReturnType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['capture']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BillingSubscriptionsIdCaptureMutationOptions<
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

export function getV1BillingSubscriptionsIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>,
) {
  return ['v1', '/v1/billing/subscriptions/:id/transactions', args] as const
}

export function getV1BillingSubscriptionsIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BillingSubscriptionsIdTransactionsQueryKey>
  >({
    queryKey: getV1BillingSubscriptionsIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.billing.subscriptions[':id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BillingSubscriptionsIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSubscriptionsIdTransactionsQueryKey>
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
      ...getV1BillingSubscriptionsIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1BillingSubscriptionsIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.billing.subscriptions)[':id']['transactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BillingSubscriptionsIdTransactionsQueryKey>
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
      ...getV1BillingSubscriptionsIdTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
