import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getPostDpcerCertificateKey() {
  return ['dpcer', '/dpcer/certificate', 'POST'] as const
}

export function usePostDpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dpcer.certificate.$post> }) =>
        parseResponse(client.dpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
