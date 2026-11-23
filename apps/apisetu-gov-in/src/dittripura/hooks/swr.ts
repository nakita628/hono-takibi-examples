import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChcerKey() {
  return ['chcer'] as const
}

export function getDncerKey() {
  return ['dncer'] as const
}

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getFslcsKey() {
  return ['fslcs'] as const
}

export function getGrredKey() {
  return ['grred'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getIsoalKey() {
  return ['isoal'] as const
}

export function getLvcerKey() {
  return ['lvcer'] as const
}

export function getMalcsKey() {
  return ['malcs'] as const
}

export function getMpkbyKey() {
  return ['mpkby'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getRitinKey() {
  return ['ritin'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getSmcerKey() {
  return ['smcer'] as const
}

export function getSslcsKey() {
  return ['sslcs'] as const
}

export function getVrwmiKey() {
  return ['vrwmi'] as const
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

export function getPostDncerCertificateKey() {
  return ['dncer', '/dncer/certificate', 'POST'] as const
}

export function usePostDncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dncer.certificate.$post> }) =>
        parseResponse(client.dncer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDpcerCertificateKey() {
  return ['dpcer', '/dpcer/certificate', 'POST'] as const
}

export function usePostDpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dpcer.certificate.$post> }) =>
        parseResponse(client.dpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFslcsCertificateKey() {
  return ['fslcs', '/fslcs/certificate', 'POST'] as const
}

export function usePostFslcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fslcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fslcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFslcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fslcs.certificate.$post> }) =>
        parseResponse(client.fslcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrredCertificateKey() {
  return ['grred', '/grred/certificate', 'POST'] as const
}

export function usePostGrredCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.grred.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.grred.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrredCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.grred.certificate.$post> }) =>
        parseResponse(client.grred.certificate.$post(arg, clientOptions)),
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

export function getPostIsoalCertificateKey() {
  return ['isoal', '/isoal/certificate', 'POST'] as const
}

export function usePostIsoalCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isoal.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.isoal.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIsoalCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.isoal.certificate.$post> }) =>
        parseResponse(client.isoal.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLvcerCertificateKey() {
  return ['lvcer', '/lvcer/certificate', 'POST'] as const
}

export function usePostLvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lvcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lvcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lvcer.certificate.$post> }) =>
        parseResponse(client.lvcer.certificate.$post(arg, clientOptions)),
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

export function getPostMpkbyCertificateKey() {
  return ['mpkby', '/mpkby/certificate', 'POST'] as const
}

export function usePostMpkbyCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mpkby.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mpkby.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMpkbyCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mpkby.certificate.$post> }) =>
        parseResponse(client.mpkby.certificate.$post(arg, clientOptions)),
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

export function getPostRitinCertificateKey() {
  return ['ritin', '/ritin/certificate', 'POST'] as const
}

export function usePostRitinCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ritin.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ritin.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRitinCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ritin.certificate.$post> }) =>
        parseResponse(client.ritin.certificate.$post(arg, clientOptions)),
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

export function getPostRscerCertificateKey() {
  return ['rscer', '/rscer/certificate', 'POST'] as const
}

export function usePostRscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rscer.certificate.$post> }) =>
        parseResponse(client.rscer.certificate.$post(arg, clientOptions)),
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

export function getPostSmcerCertificateKey() {
  return ['smcer', '/smcer/certificate', 'POST'] as const
}

export function usePostSmcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.smcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smcer.certificate.$post> }) =>
        parseResponse(client.smcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSslcsCertificateKey() {
  return ['sslcs', '/sslcs/certificate', 'POST'] as const
}

export function usePostSslcsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcs.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sslcs.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSslcsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sslcs.certificate.$post> }) =>
        parseResponse(client.sslcs.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVrwmiCertificateKey() {
  return ['vrwmi', '/vrwmi/certificate', 'POST'] as const
}

export function usePostVrwmiCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrwmi.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vrwmi.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVrwmiCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vrwmi.certificate.$post> }) =>
        parseResponse(client.vrwmi.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
