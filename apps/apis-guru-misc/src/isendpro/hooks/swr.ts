import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCampagneKey() {
  return ['campagne'] as const
}

export function getComptageKey() {
  return ['comptage'] as const
}

export function getCreditKey() {
  return ['credit'] as const
}

export function getDellistenoireKey() {
  return ['dellistenoire'] as const
}

export function getGetlistenoireKey() {
  return ['getlistenoire'] as const
}

export function getHlrKey() {
  return ['hlr'] as const
}

export function getRepertoireKey() {
  return ['repertoire'] as const
}

export function getSetlistenoireKey() {
  return ['setlistenoire'] as const
}

export function getShortlinkKey() {
  return ['shortlink'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getSmsmultiKey() {
  return ['smsmulti'] as const
}

export function getSubaccountKey() {
  return ['subaccount'] as const
}

export function getGetCampagneKey(args: InferRequestType<typeof client.campagne.$get>) {
  return ['campagne', '/campagne', args] as const
}

export function useGetCampagne<TError = unknown>(
  args: InferRequestType<typeof client.campagne.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampagneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.campagne.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCampagne<TError = unknown>(
  args: InferRequestType<typeof client.campagne.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampagneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.campagne.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostComptageKey() {
  return ['comptage', '/comptage', 'POST'] as const
}

export function usePostComptage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comptage.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.comptage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostComptageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.comptage.$post> }) =>
        parseResponse(client.comptage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCreditKey(args: InferRequestType<typeof client.credit.$get>) {
  return ['credit', '/credit', args] as const
}

export function useGetCredit<TError = unknown>(
  args: InferRequestType<typeof client.credit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.credit.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCredit<TError = unknown>(
  args: InferRequestType<typeof client.credit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCreditKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.credit.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDellistenoireKey() {
  return ['dellistenoire', '/dellistenoire', 'POST'] as const
}

export function usePostDellistenoire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dellistenoire.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dellistenoire.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDellistenoireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dellistenoire.$post> }) =>
        parseResponse(client.dellistenoire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetlistenoireKey() {
  return ['getlistenoire', '/getlistenoire', 'POST'] as const
}

export function usePostGetlistenoire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getlistenoire.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getlistenoire.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetlistenoireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getlistenoire.$post> }) =>
        parseResponse(client.getlistenoire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHlrKey() {
  return ['hlr', '/hlr', 'POST'] as const
}

export function usePostHlr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlr.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.hlr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHlrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hlr.$post> }) =>
        parseResponse(client.hlr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRepertoireKey() {
  return ['repertoire', '/repertoire', 'PUT'] as const
}

export function usePutRepertoire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.repertoire.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRepertoireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.repertoire.$put> }) =>
        parseResponse(client.repertoire.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRepertoireKey() {
  return ['repertoire', '/repertoire', 'POST'] as const
}

export function usePostRepertoire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.repertoire.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRepertoireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.repertoire.$post> }) =>
        parseResponse(client.repertoire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetlistenoireKey() {
  return ['setlistenoire', '/setlistenoire', 'POST'] as const
}

export function usePostSetlistenoire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setlistenoire.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.setlistenoire.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetlistenoireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setlistenoire.$post> }) =>
        parseResponse(client.setlistenoire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShortlinkKey() {
  return ['shortlink', '/shortlink', 'POST'] as const
}

export function usePostShortlink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shortlink.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.shortlink.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShortlinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shortlink.$post> }) =>
        parseResponse(client.shortlink.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsKey() {
  return ['sms', '/sms', 'POST'] as const
}

export function usePostSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sms.$post> }) =>
        parseResponse(client.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsmultiKey() {
  return ['smsmulti', '/smsmulti', 'POST'] as const
}

export function usePostSmsmulti<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsmulti.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.smsmulti.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsmultiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.smsmulti.$post> }) =>
        parseResponse(client.smsmulti.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSubaccountKey() {
  return ['subaccount', '/subaccount', 'PUT'] as const
}

export function usePutSubaccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subaccount.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubaccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccount.$put> }) =>
        parseResponse(client.subaccount.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountKey() {
  return ['subaccount', '/subaccount', 'POST'] as const
}

export function usePostSubaccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.subaccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccount.$post> }) =>
        parseResponse(client.subaccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
