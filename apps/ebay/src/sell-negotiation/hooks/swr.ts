import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFindEligibleItemsKey() {
  return ['find_eligible_items'] as const
}

export function getSendOfferToInterestedBuyersKey() {
  return ['send_offer_to_interested_buyers'] as const
}

export function getGetFindEligibleItemsKey(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['find_eligible_items', '/find_eligible_items', keyArgs] as const
}

export function useGetFindEligibleItems<TError = unknown>(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindEligibleItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_eligible_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFindEligibleItems<TError = unknown>(
  args: InferRequestType<typeof client.find_eligible_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFindEligibleItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.find_eligible_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.find_eligible_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSendOfferToInterestedBuyersKey() {
  return ['send_offer_to_interested_buyers', '/send_offer_to_interested_buyers', 'POST'] as const
}

export function usePostSendOfferToInterestedBuyers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.send_offer_to_interested_buyers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.send_offer_to_interested_buyers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendOfferToInterestedBuyersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.send_offer_to_interested_buyers.$post> },
      ) => parseResponse(client.send_offer_to_interested_buyers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
