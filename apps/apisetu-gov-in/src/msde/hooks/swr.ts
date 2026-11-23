import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIticrKey() {
  return ['iticr'] as const
}

export function getPostIticrCertificateKey() {
  return ['iticr', '/iticr/certificate', 'POST'] as const
}

export function usePostIticrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iticr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.iticr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIticrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.iticr.certificate.$post> }) =>
        parseResponse(client.iticr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
