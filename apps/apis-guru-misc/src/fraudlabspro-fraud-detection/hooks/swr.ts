import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1OrderFeedbackKey() {
  return ['v1', '/v1/order/feedback', 'POST'] as const
}

export function usePostV1OrderFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.feedback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.order.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.order.feedback.$post> }) =>
        parseResponse(client.v1.order.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1OrderScreenKey() {
  return ['v1', '/v1/order/screen', 'POST'] as const
}

export function usePostV1OrderScreen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.order.screen.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.order.screen.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrderScreenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.order.screen.$post> }) =>
        parseResponse(client.v1.order.screen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
