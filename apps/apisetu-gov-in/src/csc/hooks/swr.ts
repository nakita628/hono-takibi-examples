import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSkcerKey() {
  return ['skcer'] as const
}

export function getPostSkcerCertificateKey() {
  return ['skcer', '/skcer/certificate', 'POST'] as const
}

export function usePostSkcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.skcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.skcer.certificate.$post> }) =>
        parseResponse(client.skcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
