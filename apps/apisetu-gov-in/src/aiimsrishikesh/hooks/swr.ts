import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDgcerKey() {
  return ['dgcer'] as const
}

export function getPostDgcerCertificateKey() {
  return ['dgcer', '/dgcer/certificate', 'POST'] as const
}

export function usePostDgcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dgcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDgcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dgcer.certificate.$post> }) =>
        parseResponse(client.dgcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
