import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLabrpKey() {
  return ['labrp'] as const
}

export function getPostLabrpCertificateKey() {
  return ['labrp', '/labrp/certificate', 'POST'] as const
}

export function usePostLabrpCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.labrp.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabrpCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.labrp.certificate.$post> }) =>
        parseResponse(client.labrp.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
