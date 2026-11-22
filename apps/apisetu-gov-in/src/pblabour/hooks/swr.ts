import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlsfcKey() {
  return ['alsfc'] as const
}

export function getClcerKey() {
  return ['clcer'] as const
}

export function getSrcerKey() {
  return ['srcer'] as const
}

export function getPostAlsfcCertificateKey() {
  return ['alsfc', '/alsfc/certificate', 'POST'] as const
}

export function usePostAlsfcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alsfc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alsfc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlsfcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alsfc.certificate.$post> }) =>
        parseResponse(client.alsfc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClcerCertificateKey() {
  return ['clcer', '/clcer/certificate', 'POST'] as const
}

export function usePostClcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.clcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clcer.certificate.$post> }) =>
        parseResponse(client.clcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSrcerCertificateKey() {
  return ['srcer', '/srcer/certificate', 'POST'] as const
}

export function usePostSrcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.srcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.srcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSrcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.srcer.certificate.$post> }) =>
        parseResponse(client.srcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
