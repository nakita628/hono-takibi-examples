import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1p3beta1Key() {
  return ['v1p3beta1'] as const
}

export function getPostV1p3beta1VideosAnnotateKey() {
  return ['v1p3beta1', '/v1p3beta1/videos:annotate', 'POST'] as const
}

export function usePostV1p3beta1VideosAnnotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p3beta1)['videos:annotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1p3beta1VideosAnnotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1p3beta1)['videos:annotate']['$post']> },
      ) => parseResponse(client.v1p3beta1['videos:annotate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
