import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNncerKey() {
  return ['nncer'] as const
}

export function getPostNncerCertificateKey() {
  return ['nncer', '/nncer/certificate', 'POST'] as const
}

export function usePostNncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nncer.certificate.$post> }) =>
        parseResponse(client.nncer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
