import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIlpmtKey() {
  return ['ilpmt'] as const
}

export function getPostIlpmtCertificateKey() {
  return ['ilpmt', '/ilpmt/certificate', 'POST'] as const
}

export function usePostIlpmtCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ilpmt.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ilpmt.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIlpmtCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ilpmt.certificate.$post> }) =>
        parseResponse(client.ilpmt.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
