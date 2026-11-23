import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlltrKey() {
  return ['alltr'] as const
}

export function getBknocKey() {
  return ['bknoc'] as const
}

export function getBpcerKey() {
  return ['bpcer'] as const
}

export function getCfltrKey() {
  return ['cfltr'] as const
}

export function getLcsagKey() {
  return ['lcsag'] as const
}

export function getPscerKey() {
  return ['pscer'] as const
}

export function getPsnocKey() {
  return ['psnoc'] as const
}

export function getWtrblKey() {
  return ['wtrbl'] as const
}

export function getPostAlltrCertificateKey() {
  return ['alltr', '/alltr/certificate', 'POST'] as const
}

export function usePostAlltrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alltr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alltr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlltrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alltr.certificate.$post> }) =>
        parseResponse(client.alltr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBknocCertificateKey() {
  return ['bknoc', '/bknoc/certificate', 'POST'] as const
}

export function usePostBknocCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bknoc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bknoc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBknocCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bknoc.certificate.$post> }) =>
        parseResponse(client.bknoc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBpcerCertificateKey() {
  return ['bpcer', '/bpcer/certificate', 'POST'] as const
}

export function usePostBpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bpcer.certificate.$post> }) =>
        parseResponse(client.bpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCfltrCertificateKey() {
  return ['cfltr', '/cfltr/certificate', 'POST'] as const
}

export function usePostCfltrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cfltr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cfltr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCfltrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cfltr.certificate.$post> }) =>
        parseResponse(client.cfltr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLcsagCertificateKey() {
  return ['lcsag', '/lcsag/certificate', 'POST'] as const
}

export function usePostLcsagCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lcsag.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lcsag.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLcsagCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lcsag.certificate.$post> }) =>
        parseResponse(client.lcsag.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPscerCertificateKey() {
  return ['pscer', '/pscer/certificate', 'POST'] as const
}

export function usePostPscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pscer.certificate.$post> }) =>
        parseResponse(client.pscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPsnocCertificateKey() {
  return ['psnoc', '/psnoc/certificate', 'POST'] as const
}

export function usePostPsnocCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.psnoc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.psnoc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPsnocCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.psnoc.certificate.$post> }) =>
        parseResponse(client.psnoc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWtrblCertificateKey() {
  return ['wtrbl', '/wtrbl/certificate', 'POST'] as const
}

export function usePostWtrblCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wtrbl.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wtrbl.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWtrblCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wtrbl.certificate.$post> }) =>
        parseResponse(client.wtrbl.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
