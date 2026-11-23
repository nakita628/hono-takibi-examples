import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBadWordFilterKey() {
  return ['bad-word-filter'] as const
}

export function getBinListDownloadKey() {
  return ['bin-list-download'] as const
}

export function getBinLookupKey() {
  return ['bin-lookup'] as const
}

export function getBrowserBotKey() {
  return ['browser-bot'] as const
}

export function getConvertKey() {
  return ['convert'] as const
}

export function getEmailValidateKey() {
  return ['email-validate'] as const
}

export function getEmailVerifyKey() {
  return ['email-verify'] as const
}

export function getGeocodeAddressKey() {
  return ['geocode-address'] as const
}

export function getGeocodeReverseKey() {
  return ['geocode-reverse'] as const
}

export function getHlrLookupKey() {
  return ['hlr-lookup'] as const
}

export function getHostReputationKey() {
  return ['host-reputation'] as const
}

export function getHtmlCleanKey() {
  return ['html-clean'] as const
}

export function getHtmlRenderKey() {
  return ['html-render'] as const
}

export function getImageResizeKey() {
  return ['image-resize'] as const
}

export function getImageWatermarkKey() {
  return ['image-watermark'] as const
}

export function getIpBlocklistKey() {
  return ['ip-blocklist'] as const
}

export function getIpBlocklistDownloadKey() {
  return ['ip-blocklist-download'] as const
}

export function getIpInfoKey() {
  return ['ip-info'] as const
}

export function getIpProbeKey() {
  return ['ip-probe'] as const
}

export function getPhonePlaybackKey() {
  return ['phone-playback'] as const
}

export function getPhoneValidateKey() {
  return ['phone-validate'] as const
}

export function getPhoneVerifyKey() {
  return ['phone-verify'] as const
}

export function getQrCodeKey() {
  return ['qr-code'] as const
}

export function getSmsVerifyKey() {
  return ['sms-verify'] as const
}

export function getUaLookupKey() {
  return ['ua-lookup'] as const
}

export function getUrlInfoKey() {
  return ['url-info'] as const
}

export function getVerifySecurityCodeKey() {
  return ['verify-security-code'] as const
}

export function getPostBadWordFilterKey() {
  return ['bad-word-filter', '/bad-word-filter', 'POST'] as const
}

export function usePostBadWordFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bad-word-filter']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bad-word-filter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBadWordFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bad-word-filter']['$post']> },
      ) => parseResponse(client['bad-word-filter'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBinListDownloadKey(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
) {
  return ['bin-list-download', '/bin-list-download', args] as const
}

export function useGetBinListDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBinListDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bin-list-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBinListDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBinListDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bin-list-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBinLookupKey(args: InferRequestType<(typeof client)['bin-lookup']['$get']>) {
  return ['bin-lookup', '/bin-lookup', args] as const
}

export function useGetBinLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['bin-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBinLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bin-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBinLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['bin-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBinLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bin-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBrowserBotKey() {
  return ['browser-bot', '/browser-bot', 'POST'] as const
}

export function usePostBrowserBot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['browser-bot']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['browser-bot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrowserBotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['browser-bot']['$post']> }) =>
        parseResponse(client['browser-bot'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConvertKey(args: InferRequestType<typeof client.convert.$get>) {
  return ['convert', '/convert', args] as const
}

export function useGetConvert<TError = unknown>(
  args: InferRequestType<typeof client.convert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConvertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.convert.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConvert<TError = unknown>(
  args: InferRequestType<typeof client.convert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConvertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.convert.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEmailValidateKey(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
) {
  return ['email-validate', '/email-validate', args] as const
}

export function useGetEmailValidate<TError = unknown>(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-validate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailValidate<TError = unknown>(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-validate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailVerifyKey(
  args: InferRequestType<(typeof client)['email-verify']['$get']>,
) {
  return ['email-verify', '/email-verify', args] as const
}

export function useGetEmailVerify<TError = unknown>(
  args: InferRequestType<(typeof client)['email-verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailVerifyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-verify'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailVerify<TError = unknown>(
  args: InferRequestType<(typeof client)['email-verify']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmailVerifyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['email-verify'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeocodeAddressKey(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
) {
  return ['geocode-address', '/geocode-address', args] as const
}

export function useGetGeocodeAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['geocode-address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeocodeAddress<TError = unknown>(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeAddressKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['geocode-address'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeocodeReverseKey(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
) {
  return ['geocode-reverse', '/geocode-reverse', args] as const
}

export function useGetGeocodeReverse<TError = unknown>(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeReverseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['geocode-reverse'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeocodeReverse<TError = unknown>(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeReverseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['geocode-reverse'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHlrLookupKey(args: InferRequestType<(typeof client)['hlr-lookup']['$get']>) {
  return ['hlr-lookup', '/hlr-lookup', args] as const
}

export function useGetHlrLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['hlr-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHlrLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['hlr-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHlrLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['hlr-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHlrLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['hlr-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHostReputationKey(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
) {
  return ['host-reputation', '/host-reputation', args] as const
}

export function useGetHostReputation<TError = unknown>(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHostReputationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['host-reputation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHostReputation<TError = unknown>(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHostReputationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['host-reputation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHtmlCleanKey() {
  return ['html-clean', '/html-clean', 'POST'] as const
}

export function usePostHtmlClean<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['html-clean']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['html-clean']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHtmlCleanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['html-clean']['$post']> }) =>
        parseResponse(client['html-clean'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHtmlRenderKey() {
  return ['html-render', '/html-render', 'POST'] as const
}

export function usePostHtmlRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['html-render']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['html-render']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHtmlRenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['html-render']['$post']> }) =>
        parseResponse(client['html-render'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImageResizeKey() {
  return ['image-resize', '/image-resize', 'POST'] as const
}

export function usePostImageResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['image-resize']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['image-resize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImageResizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['image-resize']['$post']> },
      ) => parseResponse(client['image-resize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImageWatermarkKey() {
  return ['image-watermark', '/image-watermark', 'POST'] as const
}

export function usePostImageWatermark<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['image-watermark']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['image-watermark']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImageWatermarkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['image-watermark']['$post']> },
      ) => parseResponse(client['image-watermark'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpBlocklistKey(
  args: InferRequestType<(typeof client)['ip-blocklist']['$get']>,
) {
  return ['ip-blocklist', '/ip-blocklist', args] as const
}

export function useGetIpBlocklist<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-blocklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpBlocklistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-blocklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpBlocklist<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-blocklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpBlocklistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-blocklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpBlocklistDownloadKey(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
) {
  return ['ip-blocklist-download', '/ip-blocklist-download', args] as const
}

export function useGetIpBlocklistDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpBlocklistDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-blocklist-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpBlocklistDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIpBlocklistDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-blocklist-download'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpInfoKey(args: InferRequestType<(typeof client)['ip-info']['$get']>) {
  return ['ip-info', '/ip-info', args] as const
}

export function useGetIpInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpProbeKey(args: InferRequestType<(typeof client)['ip-probe']['$get']>) {
  return ['ip-probe', '/ip-probe', args] as const
}

export function useGetIpProbe<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-probe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-probe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpProbe<TError = unknown>(
  args: InferRequestType<(typeof client)['ip-probe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip-probe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhonePlaybackKey() {
  return ['phone-playback', '/phone-playback', 'POST'] as const
}

export function usePostPhonePlayback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-playback']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-playback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhonePlaybackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-playback']['$post']> },
      ) => parseResponse(client['phone-playback'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPhoneValidateKey(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
) {
  return ['phone-validate', '/phone-validate', args] as const
}

export function useGetPhoneValidate<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-validate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPhoneValidate<TError = unknown>(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPhoneValidateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['phone-validate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPhoneVerifyKey() {
  return ['phone-verify', '/phone-verify', 'POST'] as const
}

export function usePostPhoneVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-verify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['phone-verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['phone-verify']['$post']> },
      ) => parseResponse(client['phone-verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQrCodeKey() {
  return ['qr-code', '/qr-code', 'POST'] as const
}

export function usePostQrCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['qr-code']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['qr-code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQrCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['qr-code']['$post']> }) =>
        parseResponse(client['qr-code'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSmsVerifyKey() {
  return ['sms-verify', '/sms-verify', 'POST'] as const
}

export function usePostSmsVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-verify']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sms-verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSmsVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['sms-verify']['$post']> }) =>
        parseResponse(client['sms-verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUaLookupKey(args: InferRequestType<(typeof client)['ua-lookup']['$get']>) {
  return ['ua-lookup', '/ua-lookup', args] as const
}

export function useGetUaLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['ua-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUaLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ua-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUaLookup<TError = unknown>(
  args: InferRequestType<(typeof client)['ua-lookup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUaLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ua-lookup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUrlInfoKey(args: InferRequestType<(typeof client)['url-info']['$get']>) {
  return ['url-info', '/url-info', args] as const
}

export function useGetUrlInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['url-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUrlInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['url-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUrlInfo<TError = unknown>(
  args: InferRequestType<(typeof client)['url-info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUrlInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['url-info'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVerifySecurityCodeKey(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
) {
  return ['verify-security-code', '/verify-security-code', args] as const
}

export function useGetVerifySecurityCode<TError = unknown>(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerifySecurityCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['verify-security-code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVerifySecurityCode<TError = unknown>(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVerifySecurityCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['verify-security-code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
