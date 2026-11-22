import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDpicrKey() {
  return ['dpicr'] as const
}

export function getPostDpicrCertificateKey() {
  return ['dpicr', '/dpicr/certificate', 'POST'] as const
}

export function usePostDpicrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dpicr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDpicrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dpicr.certificate.$post> }) =>
        parseResponse(client.dpicr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
