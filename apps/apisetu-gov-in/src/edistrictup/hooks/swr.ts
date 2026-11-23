import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getCtcerKey() {
  return ['ctcer'] as const
}

export function getDmcerKey() {
  return ['dmcer'] as const
}

export function getDpicrKey() {
  return ['dpicr'] as const
}

export function getDtcerKey() {
  return ['dtcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
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

export function getPostCtcerCertificateKey() {
  return ['ctcer', '/ctcer/certificate', 'POST'] as const
}

export function usePostCtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ctcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ctcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ctcer.certificate.$post> }) =>
        parseResponse(client.ctcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDmcerCertificateKey() {
  return ['dmcer', '/dmcer/certificate', 'POST'] as const
}

export function usePostDmcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dmcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dmcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDmcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dmcer.certificate.$post> }) =>
        parseResponse(client.dmcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDpicrCertificateKey() {
  return ['dpicr', '/dpicr/certificate', 'POST'] as const
}

export function usePostDpicrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dpicr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDpicrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dpicr.certificate.$post> }) =>
        parseResponse(client.dpicr.certificate.$post(arg, clientOptions)),
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

export function getPostIncerCertificateKey() {
  return ['incer', '/incer/certificate', 'POST'] as const
}

export function usePostIncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.incer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.incer.certificate.$post> }) =>
        parseResponse(client.incer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
