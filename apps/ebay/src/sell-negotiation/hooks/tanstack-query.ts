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

export function getFindEligibleItemsKey() {
  return ['find_eligible_items'] as const
}

export function getSendOfferToInterestedBuyersKey() {
  return ['send_offer_to_interested_buyers'] as const
}

export function getFindEligibleItemsQueryKey(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['find_eligible_items', '/find_eligible_items', keyArgs] as const
}

export function getFindEligibleItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.find_eligible_items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindEligibleItemsQueryKey>
  >({
    queryKey: getFindEligibleItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.find_eligible_items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFindEligibleItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindEligibleItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFindEligibleItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFindEligibleItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFindEligibleItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFindEligibleItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSendOfferToInterestedBuyersMutationKey() {
  return ['send_offer_to_interested_buyers', '/send_offer_to_interested_buyers', 'POST'] as const
}

export function getPostSendOfferToInterestedBuyersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.send_offer_to_interested_buyers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.send_offer_to_interested_buyers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendOfferToInterestedBuyersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.send_offer_to_interested_buyers.$post>) {
      return parseResponse(client.send_offer_to_interested_buyers.$post(args, options))
    },
  })
}

export function usePostSendOfferToInterestedBuyers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.send_offer_to_interested_buyers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.send_offer_to_interested_buyers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendOfferToInterestedBuyersMutationOptions<
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
