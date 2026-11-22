import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPodocKey() {
  return ['podoc'] as const
}

export function getPostPodocCertificateKey() {
  return ['podoc', '/podoc/certificate', 'POST'] as const
}

export function usePostPodocCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podoc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.podoc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPodocCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.podoc.certificate.$post> }) =>
        parseResponse(client.podoc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
