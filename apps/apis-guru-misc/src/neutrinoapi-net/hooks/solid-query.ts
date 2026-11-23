import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getPostBadWordFilterMutationKey() {
  return ['bad-word-filter', '/bad-word-filter', 'POST'] as const
}

export function getPostBadWordFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bad-word-filter']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['bad-word-filter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBadWordFilterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['bad-word-filter']['$post']>) {
      return parseResponse(client['bad-word-filter'].$post(args, options))
    },
  })
}

export function createPostBadWordFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bad-word-filter']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['bad-word-filter']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBadWordFilterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBinListDownloadQueryKey(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
) {
  return ['bin-list-download', '/bin-list-download', args] as const
}

export function getBinListDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBinListDownloadQueryKey>
  >({
    queryKey: getBinListDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bin-list-download'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBinListDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bin-list-download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBinListDownloadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBinListDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBinLookupQueryKey(
  args: InferRequestType<(typeof client)['bin-lookup']['$get']>,
) {
  return ['bin-lookup', '/bin-lookup', args] as const
}

export function getBinLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['bin-lookup']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBinLookupQueryKey>
  >({
    queryKey: getBinLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bin-lookup'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBinLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bin-lookup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBinLookupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBinLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBrowserBotMutationKey() {
  return ['browser-bot', '/browser-bot', 'POST'] as const
}

export function getPostBrowserBotMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['browser-bot']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['browser-bot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBrowserBotMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['browser-bot']['$post']>) {
      return parseResponse(client['browser-bot'].$post(args, options))
    },
  })
}

export function createPostBrowserBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['browser-bot']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['browser-bot']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBrowserBotMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConvertQueryKey(args: InferRequestType<typeof client.convert.$get>) {
  return ['convert', '/convert', args] as const
}

export function getConvertQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.convert.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConvertQueryKey>
  >({
    queryKey: getConvertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.convert.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getConvertQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConvertQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEmailValidateQueryKey(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
) {
  return ['email-validate', '/email-validate', args] as const
}

export function getEmailValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailValidateQueryKey>
  >({
    queryKey: getEmailValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-validate'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['email-validate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailValidateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEmailVerifyQueryKey(
  args: InferRequestType<(typeof client)['email-verify']['$get']>,
) {
  return ['email-verify', '/email-verify', args] as const
}

export function getEmailVerifyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['email-verify']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailVerifyQueryKey>
  >({
    queryKey: getEmailVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['email-verify'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmailVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['email-verify']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEmailVerifyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmailVerifyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeocodeAddressQueryKey(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
) {
  return ['geocode-address', '/geocode-address', args] as const
}

export function getGeocodeAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeocodeAddressQueryKey>
  >({
    queryKey: getGeocodeAddressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['geocode-address'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeocodeAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['geocode-address']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeocodeAddressQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGeocodeAddressQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeocodeReverseQueryKey(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
) {
  return ['geocode-reverse', '/geocode-reverse', args] as const
}

export function getGeocodeReverseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeocodeReverseQueryKey>
  >({
    queryKey: getGeocodeReverseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['geocode-reverse'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeocodeReverse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['geocode-reverse']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeocodeReverseQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGeocodeReverseQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHlrLookupQueryKey(
  args: InferRequestType<(typeof client)['hlr-lookup']['$get']>,
) {
  return ['hlr-lookup', '/hlr-lookup', args] as const
}

export function getHlrLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['hlr-lookup']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHlrLookupQueryKey>
  >({
    queryKey: getHlrLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['hlr-lookup'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHlrLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['hlr-lookup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHlrLookupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHlrLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHostReputationQueryKey(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
) {
  return ['host-reputation', '/host-reputation', args] as const
}

export function getHostReputationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHostReputationQueryKey>
  >({
    queryKey: getHostReputationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['host-reputation'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHostReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['host-reputation']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHostReputationQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHostReputationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHtmlCleanMutationKey() {
  return ['html-clean', '/html-clean', 'POST'] as const
}

export function getPostHtmlCleanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['html-clean']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['html-clean']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHtmlCleanMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['html-clean']['$post']>) {
      return parseResponse(client['html-clean'].$post(args, options))
    },
  })
}

export function createPostHtmlClean<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['html-clean']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['html-clean']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHtmlCleanMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostHtmlRenderMutationKey() {
  return ['html-render', '/html-render', 'POST'] as const
}

export function getPostHtmlRenderMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['html-render']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['html-render']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHtmlRenderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['html-render']['$post']>) {
      return parseResponse(client['html-render'].$post(args, options))
    },
  })
}

export function createPostHtmlRender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['html-render']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['html-render']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHtmlRenderMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImageResizeMutationKey() {
  return ['image-resize', '/image-resize', 'POST'] as const
}

export function getPostImageResizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['image-resize']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['image-resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImageResizeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['image-resize']['$post']>) {
      return parseResponse(client['image-resize'].$post(args, options))
    },
  })
}

export function createPostImageResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['image-resize']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['image-resize']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImageResizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImageWatermarkMutationKey() {
  return ['image-watermark', '/image-watermark', 'POST'] as const
}

export function getPostImageWatermarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['image-watermark']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['image-watermark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImageWatermarkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['image-watermark']['$post']>) {
      return parseResponse(client['image-watermark'].$post(args, options))
    },
  })
}

export function createPostImageWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['image-watermark']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['image-watermark']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostImageWatermarkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIpBlocklistQueryKey(
  args: InferRequestType<(typeof client)['ip-blocklist']['$get']>,
) {
  return ['ip-blocklist', '/ip-blocklist', args] as const
}

export function getIpBlocklistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ip-blocklist']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpBlocklistQueryKey>
  >({
    queryKey: getIpBlocklistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ip-blocklist'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpBlocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ip-blocklist']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpBlocklistQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpBlocklistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpBlocklistDownloadQueryKey(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
) {
  return ['ip-blocklist-download', '/ip-blocklist-download', args] as const
}

export function getIpBlocklistDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpBlocklistDownloadQueryKey>
  >({
    queryKey: getIpBlocklistDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ip-blocklist-download'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIpBlocklistDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpBlocklistDownloadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpBlocklistDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpInfoQueryKey(args: InferRequestType<(typeof client)['ip-info']['$get']>) {
  return ['ip-info', '/ip-info', args] as const
}

export function getIpInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ip-info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpInfoQueryKey>
  >({
    queryKey: getIpInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ip-info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ip-info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIpProbeQueryKey(args: InferRequestType<(typeof client)['ip-probe']['$get']>) {
  return ['ip-probe', '/ip-probe', args] as const
}

export function getIpProbeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ip-probe']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpProbeQueryKey>
  >({
    queryKey: getIpProbeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ip-probe'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIpProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ip-probe']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getIpProbeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpProbeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhonePlaybackMutationKey() {
  return ['phone-playback', '/phone-playback', 'POST'] as const
}

export function getPostPhonePlaybackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-playback']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-playback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhonePlaybackMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-playback']['$post']>) {
      return parseResponse(client['phone-playback'].$post(args, options))
    },
  })
}

export function createPostPhonePlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-playback']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-playback']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhonePlaybackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPhoneValidateQueryKey(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
) {
  return ['phone-validate', '/phone-validate', args] as const
}

export function getPhoneValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneValidateQueryKey>
  >({
    queryKey: getPhoneValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['phone-validate'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['phone-validate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPhoneValidateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPhoneValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPhoneVerifyMutationKey() {
  return ['phone-verify', '/phone-verify', 'POST'] as const
}

export function getPostPhoneVerifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-verify']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['phone-verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['phone-verify']['$post']>) {
      return parseResponse(client['phone-verify'].$post(args, options))
    },
  })
}

export function createPostPhoneVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-verify']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-verify']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhoneVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostQrCodeMutationKey() {
  return ['qr-code', '/qr-code', 'POST'] as const
}

export function getPostQrCodeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['qr-code']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['qr-code']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQrCodeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['qr-code']['$post']>) {
      return parseResponse(client['qr-code'].$post(args, options))
    },
  })
}

export function createPostQrCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['qr-code']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['qr-code']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQrCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSmsVerifyMutationKey() {
  return ['sms-verify', '/sms-verify', 'POST'] as const
}

export function getPostSmsVerifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-verify']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['sms-verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsVerifyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['sms-verify']['$post']>) {
      return parseResponse(client['sms-verify'].$post(args, options))
    },
  })
}

export function createPostSmsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-verify']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-verify']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSmsVerifyMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUaLookupQueryKey(args: InferRequestType<(typeof client)['ua-lookup']['$get']>) {
  return ['ua-lookup', '/ua-lookup', args] as const
}

export function getUaLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['ua-lookup']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUaLookupQueryKey>
  >({
    queryKey: getUaLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ua-lookup'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUaLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ua-lookup']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUaLookupQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUaLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUrlInfoQueryKey(args: InferRequestType<(typeof client)['url-info']['$get']>) {
  return ['url-info', '/url-info', args] as const
}

export function getUrlInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['url-info']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUrlInfoQueryKey>
  >({
    queryKey: getUrlInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['url-info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUrlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['url-info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUrlInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUrlInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVerifySecurityCodeQueryKey(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
) {
  return ['verify-security-code', '/verify-security-code', args] as const
}

export function getVerifySecurityCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifySecurityCodeQueryKey>
  >({
    queryKey: getVerifySecurityCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['verify-security-code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVerifySecurityCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['verify-security-code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVerifySecurityCodeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVerifySecurityCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
