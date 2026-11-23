import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHpcerKey() {
  return ['hpcer'] as const
}

export function getHscerKey() {
  return ['hscer'] as const
}

export function getHsmgrKey() {
  return ['hsmgr'] as const
}

export function getNchscKey() {
  return ['nchsc'] as const
}

export function getNctscKey() {
  return ['nctsc'] as const
}

export function getNsescKey() {
  return ['nsesc'] as const
}

export function getNstscKey() {
  return ['nstsc'] as const
}

export function getNtltrKey() {
  return ['ntltr'] as const
}

export function getNtmksKey() {
  return ['ntmks'] as const
}

export function getSkhscKey() {
  return ['skhsc'] as const
}

export function getSktscKey() {
  return ['sktsc'] as const
}

export function getSpcerKey() {
  return ['spcer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getSsmgrKey() {
  return ['ssmgr'] as const
}

export function getTetcrKey() {
  return ['tetcr'] as const
}

export function getTetmsKey() {
  return ['tetms'] as const
}

export function getPostHpcerCertificateKey() {
  return ['hpcer', '/hpcer/certificate', 'POST'] as const
}

export function usePostHpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hpcer.certificate.$post> }) =>
        parseResponse(client.hpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHscerCertificateKey() {
  return ['hscer', '/hscer/certificate', 'POST'] as const
}

export function usePostHscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hscer.certificate.$post> }) =>
        parseResponse(client.hscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHsmgrCertificateKey() {
  return ['hsmgr', '/hsmgr/certificate', 'POST'] as const
}

export function usePostHsmgrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hsmgr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHsmgrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hsmgr.certificate.$post> }) =>
        parseResponse(client.hsmgr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNchscCertificateKey() {
  return ['nchsc', '/nchsc/certificate', 'POST'] as const
}

export function usePostNchscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nchsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nchsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNchscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nchsc.certificate.$post> }) =>
        parseResponse(client.nchsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNctscCertificateKey() {
  return ['nctsc', '/nctsc/certificate', 'POST'] as const
}

export function usePostNctscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nctsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nctsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNctscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nctsc.certificate.$post> }) =>
        parseResponse(client.nctsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNsescCertificateKey() {
  return ['nsesc', '/nsesc/certificate', 'POST'] as const
}

export function usePostNsescCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nsesc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nsesc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNsescCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nsesc.certificate.$post> }) =>
        parseResponse(client.nsesc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNstscCertificateKey() {
  return ['nstsc', '/nstsc/certificate', 'POST'] as const
}

export function usePostNstscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nstsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nstsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNstscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nstsc.certificate.$post> }) =>
        parseResponse(client.nstsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtltrCertificateKey() {
  return ['ntltr', '/ntltr/certificate', 'POST'] as const
}

export function usePostNtltrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntltr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntltr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtltrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntltr.certificate.$post> }) =>
        parseResponse(client.ntltr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtmksCertificateKey() {
  return ['ntmks', '/ntmks/certificate', 'POST'] as const
}

export function usePostNtmksCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntmks.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntmks.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtmksCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntmks.certificate.$post> }) =>
        parseResponse(client.ntmks.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSkhscCertificateKey() {
  return ['skhsc', '/skhsc/certificate', 'POST'] as const
}

export function usePostSkhscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skhsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.skhsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSkhscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.skhsc.certificate.$post> }) =>
        parseResponse(client.skhsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSktscCertificateKey() {
  return ['sktsc', '/sktsc/certificate', 'POST'] as const
}

export function usePostSktscCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sktsc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sktsc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSktscCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sktsc.certificate.$post> }) =>
        parseResponse(client.sktsc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSpcerCertificateKey() {
  return ['spcer', '/spcer/certificate', 'POST'] as const
}

export function usePostSpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.spcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.spcer.certificate.$post> }) =>
        parseResponse(client.spcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSscerCertificateKey() {
  return ['sscer', '/sscer/certificate', 'POST'] as const
}

export function usePostSscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sscer.certificate.$post> }) =>
        parseResponse(client.sscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSsmgrCertificateKey() {
  return ['ssmgr', '/ssmgr/certificate', 'POST'] as const
}

export function usePostSsmgrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ssmgr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsmgrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ssmgr.certificate.$post> }) =>
        parseResponse(client.ssmgr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTetcrCertificateKey() {
  return ['tetcr', '/tetcr/certificate', 'POST'] as const
}

export function usePostTetcrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tetcr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tetcr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTetcrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tetcr.certificate.$post> }) =>
        parseResponse(client.tetcr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTetmsCertificateKey() {
  return ['tetms', '/tetms/certificate', 'POST'] as const
}

export function usePostTetmsCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tetms.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tetms.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTetmsCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tetms.certificate.$post> }) =>
        parseResponse(client.tetms.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
