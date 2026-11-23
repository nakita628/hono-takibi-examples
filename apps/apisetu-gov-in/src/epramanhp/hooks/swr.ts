import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgcerKey() {
  return ['agcer'] as const
}

export function getBacerKey() {
  return ['bacer'] as const
}

export function getBhcerKey() {
  return ['bhcer'] as const
}

export function getChcerKey() {
  return ['chcer'] as const
}

export function getDccerKey() {
  return ['dccer'] as const
}

export function getFfcerKey() {
  return ['ffcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getMncerKey() {
  return ['mncer'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getPsprtKey() {
  return ['psprt'] as const
}

export function getRacerKey() {
  return ['racer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getPostAgcerCertificateKey() {
  return ['agcer', '/agcer/certificate', 'POST'] as const
}

export function usePostAgcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agcer.certificate.$post> }) =>
        parseResponse(client.agcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBacerCertificateKey() {
  return ['bacer', '/bacer/certificate', 'POST'] as const
}

export function usePostBacerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bacer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bacer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBacerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bacer.certificate.$post> }) =>
        parseResponse(client.bacer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBhcerCertificateKey() {
  return ['bhcer', '/bhcer/certificate', 'POST'] as const
}

export function usePostBhcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bhcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bhcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBhcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bhcer.certificate.$post> }) =>
        parseResponse(client.bhcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChcerCertificateKey() {
  return ['chcer', '/chcer/certificate', 'POST'] as const
}

export function usePostChcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chcer.certificate.$post> }) =>
        parseResponse(client.chcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDccerCertificateKey() {
  return ['dccer', '/dccer/certificate', 'POST'] as const
}

export function usePostDccerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dccer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dccer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDccerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dccer.certificate.$post> }) =>
        parseResponse(client.dccer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFfcerCertificateKey() {
  return ['ffcer', '/ffcer/certificate', 'POST'] as const
}

export function usePostFfcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ffcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFfcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ffcer.certificate.$post> }) =>
        parseResponse(client.ffcer.certificate.$post(arg, clientOptions)),
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

export function getPostLhcerCertificateKey() {
  return ['lhcer', '/lhcer/certificate', 'POST'] as const
}

export function usePostLhcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lhcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLhcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lhcer.certificate.$post> }) =>
        parseResponse(client.lhcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMncerCertificateKey() {
  return ['mncer', '/mncer/certificate', 'POST'] as const
}

export function usePostMncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mncer.certificate.$post> }) =>
        parseResponse(client.mncer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostObcerCertificateKey() {
  return ['obcer', '/obcer/certificate', 'POST'] as const
}

export function usePostObcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.obcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostObcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.obcer.certificate.$post> }) =>
        parseResponse(client.obcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPsprtCertificateKey() {
  return ['psprt', '/psprt/certificate', 'POST'] as const
}

export function usePostPsprtCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.psprt.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.psprt.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPsprtCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.psprt.certificate.$post> }) =>
        parseResponse(client.psprt.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRacerCertificateKey() {
  return ['racer', '/racer/certificate', 'POST'] as const
}

export function usePostRacerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.racer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.racer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRacerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.racer.certificate.$post> }) =>
        parseResponse(client.racer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRmcerCertificateKey() {
  return ['rmcer', '/rmcer/certificate', 'POST'] as const
}

export function usePostRmcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rmcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRmcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rmcer.certificate.$post> }) =>
        parseResponse(client.rmcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShcerCertificateKey() {
  return ['shcer', '/shcer/certificate', 'POST'] as const
}

export function usePostShcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shcer.certificate.$post> }) =>
        parseResponse(client.shcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
