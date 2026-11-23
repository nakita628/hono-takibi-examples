import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLicerKey() {
  return ['licer'] as const
}

export function getPostLicerCertificateKey() {
  return ['licer', '/licer/certificate', 'POST'] as const
}

export function usePostLicerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.licer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.licer.certificate.$post> }) =>
        parseResponse(client.licer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
