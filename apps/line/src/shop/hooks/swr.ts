import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShopKey() {
  return ['shop'] as const
}

export function getPostShopV3MissionKey() {
  return ['shop', '/shop/v3/mission', 'POST'] as const
}

export function usePostShopV3Mission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shop.v3.mission.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shop.v3.mission.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShopV3MissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shop.v3.mission.$post> }) =>
        parseResponse(client.shop.v3.mission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
