import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmcerKey() {
  return ['cmcer'] as const
}

export function getCncerKey() {
  return ['cncer'] as const
}

export function getCtcerKey() {
  return ['ctcer'] as const
}

export function getDmcerKey() {
  return ['dmcer'] as const
}

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getDscerKey() {
  return ['dscer'] as const
}

export function getFmcerKey() {
  return ['fmcer'] as const
}

export function getIdcerKey() {
  return ['idcer'] as const
}

export function getImcerKey() {
  return ['imcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLfcerKey() {
  return ['lfcer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getLocerKey() {
  return ['locer'] as const
}

export function getMncerKey() {
  return ['mncer'] as const
}

export function getNrcerKey() {
  return ['nrcer'] as const
}

export function getNtcerKey() {
  return ['ntcer'] as const
}

export function getOscerKey() {
  return ['oscer'] as const
}

export function getPncerKey() {
  return ['pncer'] as const
}

export function getPscerKey() {
  return ['pscer'] as const
}

export function getRlcerKey() {
  return ['rlcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getSlcerKey() {
  return ['slcer'] as const
}

export function getVlcerKey() {
  return ['vlcer'] as const
}

export function getWwcerKey() {
  return ['wwcer'] as const
}

export function getPostCmcerCertificateKey() {
  return ['cmcer', '/cmcer/certificate', 'POST'] as const
}

export function usePostCmcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cmcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCmcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cmcer.certificate.$post> }) =>
        parseResponse(client.cmcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCncerCertificateKey() {
  return ['cncer', '/cncer/certificate', 'POST'] as const
}

export function usePostCncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cncer.certificate.$post> }) =>
        parseResponse(client.cncer.certificate.$post(arg, clientOptions)),
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

export function getPostDscerCertificateKey() {
  return ['dscer', '/dscer/certificate', 'POST'] as const
}

export function usePostDscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dscer.certificate.$post> }) =>
        parseResponse(client.dscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFmcerCertificateKey() {
  return ['fmcer', '/fmcer/certificate', 'POST'] as const
}

export function usePostFmcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fmcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fmcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFmcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fmcer.certificate.$post> }) =>
        parseResponse(client.fmcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdcerCertificateKey() {
  return ['idcer', '/idcer/certificate', 'POST'] as const
}

export function usePostIdcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.idcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.idcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.idcer.certificate.$post> }) =>
        parseResponse(client.idcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImcerCertificateKey() {
  return ['imcer', '/imcer/certificate', 'POST'] as const
}

export function usePostImcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.imcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.imcer.certificate.$post> }) =>
        parseResponse(client.imcer.certificate.$post(arg, clientOptions)),
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

export function getPostLfcerCertificateKey() {
  return ['lfcer', '/lfcer/certificate', 'POST'] as const
}

export function usePostLfcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lfcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lfcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLfcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lfcer.certificate.$post> }) =>
        parseResponse(client.lfcer.certificate.$post(arg, clientOptions)),
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

export function getPostLocerCertificateKey() {
  return ['locer', '/locer/certificate', 'POST'] as const
}

export function usePostLocerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.locer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.locer.certificate.$post> }) =>
        parseResponse(client.locer.certificate.$post(arg, clientOptions)),
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

export function getPostNrcerCertificateKey() {
  return ['nrcer', '/nrcer/certificate', 'POST'] as const
}

export function usePostNrcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.nrcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNrcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nrcer.certificate.$post> }) =>
        parseResponse(client.nrcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNtcerCertificateKey() {
  return ['ntcer', '/ntcer/certificate', 'POST'] as const
}

export function usePostNtcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ntcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNtcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ntcer.certificate.$post> }) =>
        parseResponse(client.ntcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOscerCertificateKey() {
  return ['oscer', '/oscer/certificate', 'POST'] as const
}

export function usePostOscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oscer.certificate.$post> }) =>
        parseResponse(client.oscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPncerCertificateKey() {
  return ['pncer', '/pncer/certificate', 'POST'] as const
}

export function usePostPncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pncer.certificate.$post> }) =>
        parseResponse(client.pncer.certificate.$post(arg, clientOptions)),
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

export function getPostRlcerCertificateKey() {
  return ['rlcer', '/rlcer/certificate', 'POST'] as const
}

export function usePostRlcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rlcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rlcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRlcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rlcer.certificate.$post> }) =>
        parseResponse(client.rlcer.certificate.$post(arg, clientOptions)),
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

export function getPostSlcerCertificateKey() {
  return ['slcer', '/slcer/certificate', 'POST'] as const
}

export function usePostSlcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.slcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSlcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.slcer.certificate.$post> }) =>
        parseResponse(client.slcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVlcerCertificateKey() {
  return ['vlcer', '/vlcer/certificate', 'POST'] as const
}

export function usePostVlcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vlcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVlcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vlcer.certificate.$post> }) =>
        parseResponse(client.vlcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWwcerCertificateKey() {
  return ['wwcer', '/wwcer/certificate', 'POST'] as const
}

export function usePostWwcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wwcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.wwcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWwcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.wwcer.certificate.$post> }) =>
        parseResponse(client.wwcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
