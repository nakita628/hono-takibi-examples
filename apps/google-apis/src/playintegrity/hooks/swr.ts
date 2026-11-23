import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PackageNameDecodeIntegrityTokenKey() {
  return ['v1', '/v1/:packageName:decodeIntegrityToken', 'POST'] as const
}

export function usePostV1PackageNameDecodeIntegrityToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PackageNameDecodeIntegrityTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':packageName:decodeIntegrityToken']['$post']>
        },
      ) => parseResponse(client.v1[':packageName:decodeIntegrityToken'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
