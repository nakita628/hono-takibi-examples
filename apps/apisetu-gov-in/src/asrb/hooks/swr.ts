import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMrcerKey() {
  return ['mrcer'] as const
}

export function getPostMrcerCertificateKey() {
  return ['mrcer', '/mrcer/certificate', 'POST'] as const
}

export function usePostMrcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mrcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mrcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMrcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mrcer.certificate.$post> }) =>
        parseResponse(client.mrcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
