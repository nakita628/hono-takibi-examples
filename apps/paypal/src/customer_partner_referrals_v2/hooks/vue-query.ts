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

export function getPostV2CustomerPartnerReferralsMutationKey() {
  return ['v2', '/v2/customer/partner-referrals', 'POST'] as const
}

export function getPostV2CustomerPartnerReferralsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customer)['partner-referrals']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomerPartnerReferralsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']>,
    ) {
      return parseResponse(client.v2.customer['partner-referrals'].$post(args, options))
    },
  })
}

export function usePostV2CustomerPartnerReferrals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customer)['partner-referrals']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.customer)['partner-referrals']['$post']>,
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
  const mutationDefaults = getPostV2CustomerPartnerReferralsMutationOptions<
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

export function getV2CustomerPartnerReferralsPartnerReferralIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/customer/partner-referrals/:partner_referral_id', toValue(args)] as const
}

export function getV2CustomerPartnerReferralsPartnerReferralIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomerPartnerReferralsPartnerReferralIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customer['partner-referrals'][':partner_referral_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomerPartnerReferralsPartnerReferralId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
    >
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
                    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
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
                    (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomerPartnerReferralsPartnerReferralIdQueryKey>
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
            ReturnType<
              (typeof client.v2.customer)['partner-referrals'][':partner_referral_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomerPartnerReferralsPartnerReferralIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomerPartnerReferralsPartnerReferralIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customer['partner-referrals'][':partner_referral_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
