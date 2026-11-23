import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckCodeKey() {
  return ['checkCode'] as const
}

export function getSendCodeKey() {
  return ['sendCode'] as const
}

export function getPostCheckCodeKey() {
  return ['checkCode', '/checkCode', 'POST'] as const
}

export function usePostCheckCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkCode.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.checkCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checkCode.$post> }) =>
        parseResponse(client.checkCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendCodeKey() {
  return ['sendCode', '/sendCode', 'POST'] as const
}

export function usePostSendCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sendCode.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sendCode.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sendCode.$post> }) =>
        parseResponse(client.sendCode.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
