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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CustomerDisputesQueryKey(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
) {
  return ['v1', '/v1/customer/disputes', args] as const
}

export function getV1CustomerDisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.customer.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerDisputesQueryKey>
  >({
    queryKey: getV1CustomerDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customer.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1CustomerDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CustomerDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CustomerDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.customer.disputes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.customer.disputes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CustomerDisputesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1CustomerDisputesIdQueryKey(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
) {
  return ['v1', '/v1/customer/disputes/:id', args] as const
}

export function getV1CustomerDisputesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerDisputesIdQueryKey>
  >({
    queryKey: getV1CustomerDisputesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.customer.disputes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1CustomerDisputesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerDisputesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1CustomerDisputesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1CustomerDisputesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1CustomerDisputesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1CustomerDisputesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1CustomerDisputesIdMutationKey() {
  return ['v1', '/v1/customer/disputes/:id', 'PATCH'] as const
}

export function getPatchV1CustomerDisputesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1CustomerDisputesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id'].$patch(args, options))
    },
  })
}

export function usePatchV1CustomerDisputesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1CustomerDisputesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1CustomerDisputesIdProvideEvidenceMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/provide-evidence', 'POST'] as const
}

export function getPostV1CustomerDisputesIdProvideEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdProvideEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.customer.disputes[':id']['provide-evidence'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerDisputesIdProvideEvidence<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['provide-evidence']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdProvideEvidenceMutationOptions<
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

export function getPostV1CustomerDisputesIdAppealMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/appeal', 'POST'] as const
}

export function getPostV1CustomerDisputesIdAppealMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdAppealMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id'].appeal.$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdAppeal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['appeal']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdAppealMutationOptions<
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

export function getPostV1CustomerDisputesIdAcceptClaimMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/accept-claim', 'POST'] as const
}

export function getPostV1CustomerDisputesIdAcceptClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdAcceptClaimMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id']['accept-claim'].$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdAcceptClaim<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-claim']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdAcceptClaimMutationOptions<
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

export function getPostV1CustomerDisputesIdAdjudicateMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/adjudicate', 'POST'] as const
}

export function getPostV1CustomerDisputesIdAdjudicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdAdjudicateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id'].adjudicate.$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdAdjudicate<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['adjudicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdAdjudicateMutationOptions<
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

export function getPostV1CustomerDisputesIdRequireEvidenceMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/require-evidence', 'POST'] as const
}

export function getPostV1CustomerDisputesIdRequireEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdRequireEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.customer.disputes[':id']['require-evidence'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerDisputesIdRequireEvidence<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['require-evidence']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdRequireEvidenceMutationOptions<
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

export function getPostV1CustomerDisputesIdEscalateMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/escalate', 'POST'] as const
}

export function getPostV1CustomerDisputesIdEscalateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdEscalateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id'].escalate.$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdEscalate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['escalate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdEscalateMutationOptions<
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

export function getPostV1CustomerDisputesIdSendMessageMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/send-message', 'POST'] as const
}

export function getPostV1CustomerDisputesIdSendMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdSendMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id']['send-message'].$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdSendMessage<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['send-message']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdSendMessageMutationOptions<
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

export function getPostV1CustomerDisputesIdMakeOfferMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/make-offer', 'POST'] as const
}

export function getPostV1CustomerDisputesIdMakeOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdMakeOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id']['make-offer'].$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdMakeOffer<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['make-offer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdMakeOfferMutationOptions<
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

export function getPostV1CustomerDisputesIdAcceptOfferMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/accept-offer', 'POST'] as const
}

export function getPostV1CustomerDisputesIdAcceptOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdAcceptOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id']['accept-offer'].$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdAcceptOffer<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['accept-offer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdAcceptOfferMutationOptions<
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

export function getPostV1CustomerDisputesIdDenyOfferMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/deny-offer', 'POST'] as const
}

export function getPostV1CustomerDisputesIdDenyOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdDenyOfferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>,
    ) {
      return parseResponse(client.v1.customer.disputes[':id']['deny-offer'].$post(args, options))
    },
  })
}

export function usePostV1CustomerDisputesIdDenyOffer<
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
                ReturnType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.customer.disputes)[':id']['deny-offer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1CustomerDisputesIdDenyOfferMutationOptions<
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

export function getPostV1CustomerDisputesIdAcknowledgeReturnItemMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/acknowledge-return-item', 'POST'] as const
}

export function getPostV1CustomerDisputesIdAcknowledgeReturnItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdAcknowledgeReturnItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.customer.disputes[':id']['acknowledge-return-item'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerDisputesIdAcknowledgeReturnItem<
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
                  (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.customer.disputes)[':id']['acknowledge-return-item']['$post']
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
  const mutationDefaults = getPostV1CustomerDisputesIdAcknowledgeReturnItemMutationOptions<
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

export function getPostV1CustomerDisputesIdProvideSupportingInfoMutationKey() {
  return ['v1', '/v1/customer/disputes/:id/provide-supporting-info', 'POST'] as const
}

export function getPostV1CustomerDisputesIdProvideSupportingInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerDisputesIdProvideSupportingInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.customer.disputes[':id']['provide-supporting-info'].$post(args, options),
      )
    },
  })
}

export function usePostV1CustomerDisputesIdProvideSupportingInfo<
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
                  (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.customer.disputes)[':id']['provide-supporting-info']['$post']
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
  const mutationDefaults = getPostV1CustomerDisputesIdProvideSupportingInfoMutationOptions<
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
