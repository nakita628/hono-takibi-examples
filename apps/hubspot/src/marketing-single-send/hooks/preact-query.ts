import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getPostMarketingEmailCampaigns202609SingleSendMutationKey() {
  return ['marketing', '/marketing/email-campaigns/2026-09/single-send', 'POST'] as const
}

export function getPostMarketingEmailCampaigns202609SingleSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMarketingEmailCampaigns202609SingleSendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
      >,
    ) {
      return parseResponse(
        client.marketing['email-campaigns']['2026-09']['single-send'].$post(args, options),
      )
    },
  })
}

export function usePostMarketingEmailCampaigns202609SingleSend<
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
                  (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
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
  const mutationDefaults = getPostMarketingEmailCampaigns202609SingleSendMutationOptions<
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
