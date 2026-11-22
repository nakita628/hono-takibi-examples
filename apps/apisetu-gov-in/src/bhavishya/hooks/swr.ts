import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPecerKey() {
  return ['pecer'] as const
}

export function getPostPecerCertificateKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function usePostPecerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pecer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPecerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pecer.certificate.$post> }) =>
        parseResponse(client.pecer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
