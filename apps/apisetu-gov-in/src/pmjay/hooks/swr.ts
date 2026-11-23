import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPmjayKey() {
  return ['pmjay'] as const
}

export function getPostPmjayCertificateKey() {
  return ['pmjay', '/pmjay/certificate', 'POST'] as const
}

export function usePostPmjayCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pmjay.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pmjay.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPmjayCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pmjay.certificate.$post> }) =>
        parseResponse(client.pmjay.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
