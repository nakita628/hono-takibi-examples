import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLlcerKey() {
  return ['llcer'] as const
}

export function getPostLlcerCertificateKey() {
  return ['llcer', '/llcer/certificate', 'POST'] as const
}

export function usePostLlcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.llcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.llcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLlcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.llcer.certificate.$post> }) =>
        parseResponse(client.llcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
