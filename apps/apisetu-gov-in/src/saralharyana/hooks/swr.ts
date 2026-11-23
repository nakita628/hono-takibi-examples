import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNbcerKey() {
  return ['nbcer'] as const
}

export function getPostNbcerCertificateKey() {
  return ['nbcer', '/nbcer/certificate', 'POST'] as const
}

export function usePostNbcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nbcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nbcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNbcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nbcer.certificate.$post> }) =>
        parseResponse(client.nbcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
