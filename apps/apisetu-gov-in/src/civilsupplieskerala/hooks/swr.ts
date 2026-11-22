import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRatcrKey() {
  return ['ratcr'] as const
}

export function getPostRatcrCertificateKey() {
  return ['ratcr', '/ratcr/certificate', 'POST'] as const
}

export function usePostRatcrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ratcr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRatcrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ratcr.certificate.$post> }) =>
        parseResponse(client.ratcr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
