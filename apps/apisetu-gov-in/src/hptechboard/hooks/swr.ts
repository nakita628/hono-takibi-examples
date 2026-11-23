import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDipcrKey() {
  return ['dipcr'] as const
}

export function getPostDipcrCertificateKey() {
  return ['dipcr', '/dipcr/certificate', 'POST'] as const
}

export function usePostDipcrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dipcr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dipcr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDipcrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dipcr.certificate.$post> }) =>
        parseResponse(client.dipcr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
