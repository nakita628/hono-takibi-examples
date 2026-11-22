import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostMarketingEmailCampaigns202609SingleSend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarketingEmailCampaigns202609SingleSendMutationOptions<
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
