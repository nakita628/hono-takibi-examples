import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEpfscKey() {
  return ['epfsc'] as const
}

export function getPecerKey() {
  return ['pecer'] as const
}

export function getUncrdKey() {
  return ['uncrd'] as const
}

export function getPostEpfscCertificateKey() {
  return ['epfsc', '/epfsc/certificate', 'POST'] as const
}

export function usePostEpfscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epfsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.epfsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEpfscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.epfsc.certificate.$post> }) =>
        parseResponse(client.epfsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPecerCertificateKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function usePostPecerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pecer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPecerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pecer.certificate.$post> }) =>
        parseResponse(client.pecer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUncrdCertificateKey() {
  return ['uncrd', '/uncrd/certificate', 'POST'] as const
}

export function usePostUncrdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uncrd.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.uncrd.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUncrdCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uncrd.certificate.$post> }) =>
        parseResponse(client.uncrd.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
