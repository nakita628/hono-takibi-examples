import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTrcerKey() {
  return ['trcer'] as const
}

export function getPostTrcerCertificateKey() {
  return ['trcer', '/trcer/certificate', 'POST'] as const
}

export function usePostTrcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.trcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.trcer.certificate.$post> }) =>
        parseResponse(client.trcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
