import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTdcerKey() {
  return ['tdcer'] as const
}

export function getPostTdcerCertificateKey() {
  return ['tdcer', '/tdcer/certificate', 'POST'] as const
}

export function usePostTdcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tdcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tdcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTdcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tdcer.certificate.$post> }) =>
        parseResponse(client.tdcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
