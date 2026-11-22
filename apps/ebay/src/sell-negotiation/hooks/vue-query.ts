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

export function getFindEligibleItemsKey() {
  return ['find_eligible_items'] as const
}

export function getSendOfferToInterestedBuyersKey() {
  return ['send_offer_to_interested_buyers'] as const
}

export function getFindEligibleItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_eligible_items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['find_eligible_items', '/find_eligible_items', keyArgs] as const
}

export function getFindEligibleItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_eligible_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindEligibleItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.find_eligible_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindEligibleItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.find_eligible_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
            >
          >,
          ReturnType<typeof getFindEligibleItemsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFindEligibleItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindEligibleItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.find_eligible_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
