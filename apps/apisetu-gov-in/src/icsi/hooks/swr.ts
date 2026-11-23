import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGovidKey() {
  return ['govid'] as const
}

export function getMbcerKey() {
  return ['mbcer'] as const
}

export function getPostGovidCertificateKey() {
  return ['govid', '/govid/certificate', 'POST'] as const
}

export function usePostGovidCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.govid.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGovidCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.govid.certificate.$post> }) =>
        parseResponse(client.govid.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMbcerCertificateKey() {
  return ['mbcer', '/mbcer/certificate', 'POST'] as const
}

export function usePostMbcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mbcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMbcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mbcer.certificate.$post> }) =>
        parseResponse(client.mbcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
