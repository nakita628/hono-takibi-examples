import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPancrKey() {
  return ['pancr'] as const
}

export function getPostPancrCertificateKey() {
  return ['pancr', '/pancr/certificate', 'POST'] as const
}

export function usePostPancrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pancr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pancr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPancrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pancr.certificate.$post> }) =>
        parseResponse(client.pancr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
