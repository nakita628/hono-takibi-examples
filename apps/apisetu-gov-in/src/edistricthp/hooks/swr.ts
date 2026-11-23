import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAecmwKey() {
  return ['aecmw'] as const
}

export function getAemtwKey() {
  return ['aemtw'] as const
}

export function getAgcerKey() {
  return ['agcer'] as const
}

export function getAlimwKey() {
  return ['alimw'] as const
}

export function getArcmwKey() {
  return ['arcmw'] as const
}

export function getArmtwKey() {
  return ['armtw'] as const
}

export function getBacerKey() {
  return ['bacer'] as const
}

export function getBhcerKey() {
  return ['bhcer'] as const
}

export function getBpcrdKey() {
  return ['bpcrd'] as const
}

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getCecerKey() {
  return ['cecer'] as const
}

export function getChcerKey() {
  return ['chcer'] as const
}

export function getClcerKey() {
  return ['clcer'] as const
}

export function getCoprgKey() {
  return ['coprg'] as const
}

export function getDccerKey() {
  return ['dccer'] as const
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

export function getErcerKey() {
  return ['ercer'] as const
}

export function getFfcerKey() {
  return ['ffcer'] as const
}

export function getIgcerKey() {
  return ['igcer'] as const
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

export function getMnrgaKey() {
  return ['mnrga'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getRacerKey() {
  return ['racer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getSecerKey() {
  return ['secer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getSicrdKey() {
  return ['sicrd'] as const
}

export function getSrcerKey() {
  return ['srcer'] as const
}

export function getPostAecmwCertificateKey() {
  return ['aecmw', '/aecmw/certificate', 'POST'] as const
}

export function usePostAecmwCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aecmw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.aecmw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAecmwCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aecmw.certificate.$post> }) =>
        parseResponse(client.aecmw.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAemtwCertificateKey() {
  return ['aemtw', '/aemtw/certificate', 'POST'] as const
}

export function usePostAemtwCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aemtw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.aemtw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAemtwCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aemtw.certificate.$post> }) =>
        parseResponse(client.aemtw.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getPostAlimwCertificateKey() {
  return ['alimw', '/alimw/certificate', 'POST'] as const
}

export function usePostAlimwCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alimw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.alimw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlimwCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.alimw.certificate.$post> }) =>
        parseResponse(client.alimw.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostArcmwCertificateKey() {
  return ['arcmw', '/arcmw/certificate', 'POST'] as const
}

export function usePostArcmwCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arcmw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.arcmw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArcmwCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.arcmw.certificate.$post> }) =>
        parseResponse(client.arcmw.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostArmtwCertificateKey() {
  return ['armtw', '/armtw/certificate', 'POST'] as const
}

export function usePostArmtwCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.armtw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.armtw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArmtwCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.armtw.certificate.$post> }) =>
        parseResponse(client.armtw.certificate.$post(arg, clientOptions)),
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

export function getPostBpcrdCertificateKey() {
  return ['bpcrd', '/bpcrd/certificate', 'POST'] as const
}

export function usePostBpcrdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bpcrd.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bpcrd.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBpcrdCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bpcrd.certificate.$post> }) =>
        parseResponse(client.bpcrd.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
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

export function getPostCecerCertificateKey() {
  return ['cecer', '/cecer/certificate', 'POST'] as const
}

export function usePostCecerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cecer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cecer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCecerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cecer.certificate.$post> }) =>
        parseResponse(client.cecer.certificate.$post(arg, clientOptions)),
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

export function getPostCoprgCertificateKey() {
  return ['coprg', '/coprg/certificate', 'POST'] as const
}

export function usePostCoprgCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coprg.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.coprg.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCoprgCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coprg.certificate.$post> }) =>
        parseResponse(client.coprg.certificate.$post(arg, clientOptions)),
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

export function getPostErcerCertificateKey() {
  return ['ercer', '/ercer/certificate', 'POST'] as const
}

export function usePostErcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ercer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostErcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ercer.certificate.$post> }) =>
        parseResponse(client.ercer.certificate.$post(arg, clientOptions)),
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

export function getPostIgcerCertificateKey() {
  return ['igcer', '/igcer/certificate', 'POST'] as const
}

export function usePostIgcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.igcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.igcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIgcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.igcer.certificate.$post> }) =>
        parseResponse(client.igcer.certificate.$post(arg, clientOptions)),
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

export function getPostMnrgaCertificateKey() {
  return ['mnrga', '/mnrga/certificate', 'POST'] as const
}

export function usePostMnrgaCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mnrga.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mnrga.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMnrgaCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mnrga.certificate.$post> }) =>
        parseResponse(client.mnrga.certificate.$post(arg, clientOptions)),
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

export function getPostSecerCertificateKey() {
  return ['secer', '/secer/certificate', 'POST'] as const
}

export function usePostSecerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.secer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secer.certificate.$post> }) =>
        parseResponse(client.secer.certificate.$post(arg, clientOptions)),
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

export function getPostSicrdCertificateKey() {
  return ['sicrd', '/sicrd/certificate', 'POST'] as const
}

export function usePostSicrdCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sicrd.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sicrd.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSicrdCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sicrd.certificate.$post> }) =>
        parseResponse(client.sicrd.certificate.$post(arg, clientOptions)),
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
