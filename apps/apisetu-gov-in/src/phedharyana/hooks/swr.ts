import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEtcerKey() {
  return ['etcer'] as const
}

export function getGovidKey() {
  return ['govid'] as const
}

export function getSicerKey() {
  return ['sicer'] as const
}

export function getPostEtcerCertificateKey() {
  return ['etcer', '/etcer/certificate', 'POST'] as const
}

export function usePostEtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.etcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.etcer.certificate.$post> }) =>
        parseResponse(client.etcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getPostSicerCertificateKey() {
  return ['sicer', '/sicer/certificate', 'POST'] as const
}

export function usePostSicerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sicer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sicer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSicerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sicer.certificate.$post> }) =>
        parseResponse(client.sicer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
