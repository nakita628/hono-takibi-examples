import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getBalanceKey() {
  return ['balance'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getHooksKey() {
  return ['hooks'] as const
}

export function getLookupKey() {
  return ['lookup'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getValidateForVoiceKey() {
  return ['validate_for_voice'] as const
}

export function getVoiceKey() {
  return ['voice'] as const
}

export function getGetAnalyticsKey(args: InferRequestType<typeof client.analytics.$get>) {
  return ['analytics', '/analytics', args] as const
}

export function useGetAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalytics<TError = unknown>(
  args: InferRequestType<typeof client.analytics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBalanceKey() {
  return ['balance', '/balance'] as const
}

export function useGetBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBalance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBalanceKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.balance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHooksKey(args: InferRequestType<typeof client.hooks.$get>) {
  return ['hooks', '/hooks', args] as const
}

export function useGetHooks<TError = unknown>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHooks<TError = unknown>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostHooksKey() {
  return ['hooks', '/hooks', 'POST'] as const
}

export function usePostHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.hooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hooks.$post> }) =>
        parseResponse(client.hooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLookupKey() {
  return ['lookup', '/lookup', 'POST'] as const
}

export function usePostLookup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lookup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.$post> }) =>
        parseResponse(client.lookup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLookupCnamKey() {
  return ['lookup', '/lookup/cnam', 'POST'] as const
}

export function usePostLookupCnam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.cnam.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lookup.cnam.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupCnamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.cnam.$post> }) =>
        parseResponse(client.lookup.cnam.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLookupFormatKey() {
  return ['lookup', '/lookup/format', 'POST'] as const
}

export function usePostLookupFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.format.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lookup.format.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.format.$post> }) =>
        parseResponse(client.lookup.format.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLookupHlrKey() {
  return ['lookup', '/lookup/hlr', 'POST'] as const
}

export function usePostLookupHlr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.hlr.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lookup.hlr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupHlrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.hlr.$post> }) =>
        parseResponse(client.lookup.hlr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLookupMnpKey() {
  return ['lookup', '/lookup/mnp', 'POST'] as const
}

export function usePostLookupMnp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lookup.mnp.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lookup.mnp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLookupMnpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lookup.mnp.$post> }) =>
        parseResponse(client.lookup.mnp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPricingKey(args: InferRequestType<typeof client.pricing.$get>) {
  return ['pricing', '/pricing', args] as const
}

export function useGetPricing<TError = unknown>(
  args: InferRequestType<typeof client.pricing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pricing.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPricing<TError = unknown>(
  args: InferRequestType<typeof client.pricing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pricing.$get(args, clientOptions)), restSwrOptions),
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

export function getGetStatusKey(args: InferRequestType<typeof client.status.$get>) {
  return ['status', '/status', args] as const
}

export function useGetStatus<TError = unknown>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.status.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetStatus<TError = unknown>(
  args: InferRequestType<typeof client.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.status.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostValidateForVoiceKey() {
  return ['validate_for_voice', '/validate_for_voice', 'POST'] as const
}

export function usePostValidateForVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate_for_voice.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validate_for_voice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateForVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validate_for_voice.$post> }) =>
        parseResponse(client.validate_for_voice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVoiceKey() {
  return ['voice', '/voice', 'POST'] as const
}

export function usePostVoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voice.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.voice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voice.$post> }) =>
        parseResponse(client.voice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
