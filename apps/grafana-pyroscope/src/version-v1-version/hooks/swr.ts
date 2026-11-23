import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVersionV1VersionKey() {
  return ['version.v1.Version'] as const
}

export function getPostVersionV1VersionVersionKey() {
  return ['version.v1.Version', '/version.v1.Version/Version', 'POST'] as const
}

export function usePostVersionV1VersionVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['version.v1.Version']['Version']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVersionV1VersionVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['version.v1.Version']['Version']['$post']> },
      ) => parseResponse(client['version.v1.Version'].Version.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
