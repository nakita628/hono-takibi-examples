import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMicerKey() {
  return ['micer'] as const
}

export function getPvcerKey() {
  return ['pvcer'] as const
}

export function getPostMicerCertificateKey() {
  return ['micer', '/micer/certificate', 'POST'] as const
}

export function usePostMicerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.micer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMicerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.micer.certificate.$post> }) =>
        parseResponse(client.micer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPvcerCertificateKey() {
  return ['pvcer', '/pvcer/certificate', 'POST'] as const
}

export function usePostPvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pvcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pvcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pvcer.certificate.$post> }) =>
        parseResponse(client.pvcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
