import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2CustomerPartnerReferralsKey() {
  return ['v2', '/v2/customer/partner-referrals', 'POST'] as const
}

export function usePostV2CustomerPartnerReferrals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)['partner-referrals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomerPartnerReferralsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']> },
      ) => parseResponse(client.v2.customer['partner-referrals'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomerPartnerReferralsPartnerReferralIdKey(
  args: InferRequestType<
    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
  >,
) {
  return ['v2', '/v2/customer/partner-referrals/:partner_referral_id', args] as const
}

export function useGetV2CustomerPartnerReferralsPartnerReferralId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
              >
            >
          >
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
        ? getGetV2CustomerPartnerReferralsPartnerReferralIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customer['partner-referrals'][':partner_referral_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomerPartnerReferralsPartnerReferralId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
              >
            >
          >
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
        ? getGetV2CustomerPartnerReferralsPartnerReferralIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.customer['partner-referrals'][':partner_referral_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
