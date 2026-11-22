import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ChallengeGenerateKey() {
  return ['v2', '/v2/challenge:generate', 'POST'] as const
}

export function usePostV2ChallengeGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['challenge:generate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['challenge:generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ChallengeGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['challenge:generate']['$post']> },
      ) => parseResponse(client.v2['challenge:generate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ChallengeVerifyKey() {
  return ['v2', '/v2/challenge:verify', 'POST'] as const
}

export function usePostV2ChallengeVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['challenge:verify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['challenge:verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ChallengeVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['challenge:verify']['$post']> },
      ) => parseResponse(client.v2['challenge:verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
