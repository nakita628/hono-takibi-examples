import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOtcerKey() {
  return ['otcer'] as const
}

export function getPostOtcerCertificateKey() {
  return ['otcer', '/otcer/certificate', 'POST'] as const
}

export function usePostOtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.otcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.otcer.certificate.$post> }) =>
        parseResponse(client.otcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
