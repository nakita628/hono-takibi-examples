import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSmsKey() {
  return ['sms'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getPostSmsKey() {
  return ['sms', '/sms', 'POST'] as const
}

export function usePostSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.$post> }) =>
        parseResponse(client.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceKey() {
  return ['voice', '/voice', 'POST'] as const
}

export function usePostVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.voice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voice.$post> }) =>
        parseResponse(client.voice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
