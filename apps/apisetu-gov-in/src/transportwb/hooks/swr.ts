import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDrvlcKey() {
  return ['drvlc'] as const
}

export function getRvcerKey() {
  return ['rvcer'] as const
}

export function getPostDrvlcCertificateKey() {
  return ['drvlc', '/drvlc/certificate', 'POST'] as const
}

export function usePostDrvlcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.drvlc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDrvlcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.drvlc.certificate.$post> }) =>
        parseResponse(client.drvlc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRvcerCertificateKey() {
  return ['rvcer', '/rvcer/certificate', 'POST'] as const
}

export function usePostRvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rvcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rvcer.certificate.$post> }) =>
        parseResponse(client.rvcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
