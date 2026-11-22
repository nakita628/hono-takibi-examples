import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getPostMarketingEmailCampaigns202609SingleSendKey() {
  return ['marketing', '/marketing/email-campaigns/2026-09/single-send', 'POST'] as const
}

export function usePostMarketingEmailCampaigns202609SingleSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingEmailCampaigns202609SingleSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['email-campaigns']['2026-09']['single-send']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['email-campaigns']['2026-09']['single-send'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
