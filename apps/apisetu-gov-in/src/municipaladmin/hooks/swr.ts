import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getKecerKey() {
  return ['kecer'] as const
}

export function getTapcnKey() {
  return ['tapcn'] as const
}

export function getTdlcsKey() {
  return ['tdlcs'] as const
}

export function getUgdcnKey() {
  return ['ugdcn'] as const
}

export function getPostKecerCertificateKey() {
  return ['kecer', '/kecer/certificate', 'POST'] as const
}

export function usePostKecerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kecer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.kecer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKecerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.kecer.certificate.$post> }) =>
        parseResponse(client.kecer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTapcnCertificateKey() {
  return ['tapcn', '/tapcn/certificate', 'POST'] as const
}

export function usePostTapcnCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tapcn.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tapcn.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTapcnCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tapcn.certificate.$post> }) =>
        parseResponse(client.tapcn.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTdlcsCertificateKey() {
  return ['tdlcs', '/tdlcs/certificate', 'POST'] as const
}

export function usePostTdlcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tdlcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tdlcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTdlcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tdlcs.certificate.$post> }) =>
        parseResponse(client.tdlcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUgdcnCertificateKey() {
  return ['ugdcn', '/ugdcn/certificate', 'POST'] as const
}

export function usePostUgdcnCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ugdcn.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ugdcn.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUgdcnCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ugdcn.certificate.$post> }) =>
        parseResponse(client.ugdcn.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
