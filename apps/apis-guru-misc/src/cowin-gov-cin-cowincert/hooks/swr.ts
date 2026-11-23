import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPdfKey() {
  return ['pdf'] as const
}

export function getPostPdfCertificateKey() {
  return ['pdf', '/pdf/certificate', 'POST'] as const
}

export function usePostPdfCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pdf.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pdf.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPdfCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pdf.certificate.$post> }) =>
        parseResponse(client.pdf.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
