import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSslcrKey() {
  return ['sslcr'] as const
}

export function getPostSslcrCertificateKey() {
  return ['sslcr', '/sslcr/certificate', 'POST'] as const
}

export function usePostSslcrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sslcr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSslcrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sslcr.certificate.$post> }) =>
        parseResponse(client.sslcr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
