import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdcrdKey() {
  return ['adcrd'] as const
}

export function getPostAdcrdCertificateKey() {
  return ['adcrd', '/adcrd/certificate', 'POST'] as const
}

export function usePostAdcrdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adcrd.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.adcrd.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdcrdCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.adcrd.certificate.$post> }) =>
        parseResponse(client.adcrd.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
