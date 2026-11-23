import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRsbycKey() {
  return ['rsbyc'] as const
}

export function getPostRsbycCertificateKey() {
  return ['rsbyc', '/rsbyc/certificate', 'POST'] as const
}

export function usePostRsbycCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsbyc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rsbyc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRsbycCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rsbyc.certificate.$post> }) =>
        parseResponse(client.rsbyc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
