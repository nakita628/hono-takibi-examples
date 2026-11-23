import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRdcerKey() {
  return ['rdcer'] as const
}

export function getRor1bKey() {
  return ['ror1b'] as const
}

export function getPostRdcerCertificateKey() {
  return ['rdcer', '/rdcer/certificate', 'POST'] as const
}

export function usePostRdcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rdcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rdcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRdcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rdcer.certificate.$post> }) =>
        parseResponse(client.rdcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRor1bCertificateKey() {
  return ['ror1b', '/ror1b/certificate', 'POST'] as const
}

export function usePostRor1bCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ror1b.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ror1b.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRor1bCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ror1b.certificate.$post> }) =>
        parseResponse(client.ror1b.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
