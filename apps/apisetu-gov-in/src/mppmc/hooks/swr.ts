import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSocerKey() {
  return ['socer'] as const
}

export function getPostSocerCertificateKey() {
  return ['socer', '/socer/certificate', 'POST'] as const
}

export function usePostSocerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.socer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSocerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.socer.certificate.$post> }) =>
        parseResponse(client.socer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
