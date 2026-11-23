import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDelcsKey() {
  return ['delcs'] as const
}

export function getMalcsKey() {
  return ['malcs'] as const
}

export function getPalcsKey() {
  return ['palcs'] as const
}

export function getRelcsKey() {
  return ['relcs'] as const
}

export function getPostDelcsCertificateKey() {
  return ['delcs', '/delcs/certificate', 'POST'] as const
}

export function usePostDelcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.delcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDelcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delcs.certificate.$post> }) =>
        parseResponse(client.delcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMalcsCertificateKey() {
  return ['malcs', '/malcs/certificate', 'POST'] as const
}

export function usePostMalcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.malcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.malcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMalcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.malcs.certificate.$post> }) =>
        parseResponse(client.malcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPalcsCertificateKey() {
  return ['palcs', '/palcs/certificate', 'POST'] as const
}

export function usePostPalcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.palcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.palcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPalcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.palcs.certificate.$post> }) =>
        parseResponse(client.palcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRelcsCertificateKey() {
  return ['relcs', '/relcs/certificate', 'POST'] as const
}

export function usePostRelcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.relcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRelcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.relcs.certificate.$post> }) =>
        parseResponse(client.relcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
