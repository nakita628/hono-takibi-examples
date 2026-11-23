import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getDtcerKey() {
  return ['dtcer'] as const
}

export function getPostBtcerCertificateKey() {
  return ['btcer', '/btcer/certificate', 'POST'] as const
}

export function usePostBtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.btcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.btcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.btcer.certificate.$post> }) =>
        parseResponse(client.btcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDtcerCertificateKey() {
  return ['dtcer', '/dtcer/certificate', 'POST'] as const
}

export function usePostDtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dtcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dtcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dtcer.certificate.$post> }) =>
        parseResponse(client.dtcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
