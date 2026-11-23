import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNdcerKey() {
  return ['ndcer'] as const
}

export function getPostNdcerCertificateKey() {
  return ['ndcer', '/ndcer/certificate', 'POST'] as const
}

export function usePostNdcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ndcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ndcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNdcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ndcer.certificate.$post> }) =>
        parseResponse(client.ndcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
