import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePostBadWordFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bad-word-filter']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['bad-word-filter']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBadWordFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBinListDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-list-download']['$get']>>,
) {
  return ['bin-list-download', '/bin-list-download', toValue(args)] as const
}

export function getBinListDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-list-download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBinListDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bin-list-download'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBinListDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-list-download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBinListDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-list-download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBinListDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBinListDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bin-list-download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBinLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-lookup']['$get']>>,
) {
  return ['bin-lookup', '/bin-lookup', toValue(args)] as const
}

export function getBinLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-lookup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBinLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bin-lookup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBinLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bin-lookup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>
            >
          >,
          ReturnType<typeof getBinLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bin-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBinLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBinLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bin-lookup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBrowserBot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['browser-bot']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['browser-bot']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBrowserBotMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConvertQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
) {
  return ['convert', '/convert', toValue(args)] as const
}

export function getConvertQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.convert.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          ReturnType<typeof getConvertQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConvertQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-validate']['$get']>>,
) {
  return ['email-validate', '/email-validate', toValue(args)] as const
}

export function getEmailValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-validate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['email-validate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-validate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
            >
          >,
          ReturnType<typeof getEmailValidateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['email-validate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['email-validate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailVerifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-verify']['$get']>>,
) {
  return ['email-verify', '/email-verify', toValue(args)] as const
}

export function getEmailVerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-verify']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['email-verify'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['email-verify']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>
            >
          >,
          ReturnType<typeof getEmailVerifyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['email-verify']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['email-verify'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeocodeAddressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-address']['$get']>>,
) {
  return ['geocode-address', '/geocode-address', toValue(args)] as const
}

export function getGeocodeAddressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-address']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeocodeAddressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['geocode-address'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeocodeAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-address']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
            >
          >,
          ReturnType<typeof getGeocodeAddressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeocodeAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeocodeAddressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['geocode-address'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeocodeReverseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-reverse']['$get']>>,
) {
  return ['geocode-reverse', '/geocode-reverse', toValue(args)] as const
}

export function getGeocodeReverseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-reverse']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeocodeReverseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['geocode-reverse'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeocodeReverse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['geocode-reverse']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
            >
          >,
          ReturnType<typeof getGeocodeReverseQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['geocode-reverse']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeocodeReverseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeocodeReverseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['geocode-reverse'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHlrLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hlr-lookup']['$get']>>,
) {
  return ['hlr-lookup', '/hlr-lookup', toValue(args)] as const
}

export function getHlrLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hlr-lookup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHlrLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['hlr-lookup'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHlrLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['hlr-lookup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>
            >
          >,
          ReturnType<typeof getHlrLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['hlr-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHlrLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHlrLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['hlr-lookup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHostReputationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['host-reputation']['$get']>>,
) {
  return ['host-reputation', '/host-reputation', toValue(args)] as const
}

export function getHostReputationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['host-reputation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHostReputationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['host-reputation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHostReputation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['host-reputation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
            >
          >,
          ReturnType<typeof getHostReputationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['host-reputation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHostReputationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHostReputationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['host-reputation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostHtmlClean<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['html-clean']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['html-clean']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHtmlCleanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostHtmlRender<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['html-render']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['html-render']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHtmlRenderMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostImageResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['image-resize']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['image-resize']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImageResizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostImageWatermark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['image-watermark']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['image-watermark']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImageWatermarkMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIpBlocklistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist']['$get']>>,
) {
  return ['ip-blocklist', '/ip-blocklist', toValue(args)] as const
}

export function getIpBlocklistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpBlocklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip-blocklist'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpBlocklist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>
            >
          >,
          ReturnType<typeof getIpBlocklistQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpBlocklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpBlocklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ip-blocklist'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpBlocklistDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist-download']['$get']>>,
) {
  return ['ip-blocklist-download', '/ip-blocklist-download', toValue(args)] as const
}

export function getIpBlocklistDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist-download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpBlocklistDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip-blocklist-download'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIpBlocklistDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-blocklist-download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIpBlocklistDownloadQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-blocklist-download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIpBlocklistDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpBlocklistDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ip-blocklist-download'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-info']['$get']>>,
) {
  return ['ip-info', '/ip-info', toValue(args)] as const
}

export function getIpInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip-info'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>
            >
          >,
          ReturnType<typeof getIpInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ip-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpProbeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-probe']['$get']>>,
) {
  return ['ip-probe', '/ip-probe', toValue(args)] as const
}

export function getIpProbeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-probe']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIpProbeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip-probe'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ip-probe']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>
            >
          >,
          ReturnType<typeof getIpProbeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-probe']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpProbeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIpProbeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ip-probe'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhonePlayback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-playback']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-playback']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhonePlaybackMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPhoneValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-validate']['$get']>>,
) {
  return ['phone-validate', '/phone-validate', toValue(args)] as const
}

export function getPhoneValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-validate']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPhoneValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['phone-validate'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePhoneValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['phone-validate']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
            >
          >,
          ReturnType<typeof getPhoneValidateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-validate']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPhoneValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPhoneValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['phone-validate'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPhoneVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['phone-verify']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['phone-verify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPhoneVerifyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostQrCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['qr-code']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['qr-code']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQrCodeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSmsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['sms-verify']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['sms-verify']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsVerifyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUaLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ua-lookup']['$get']>>,
) {
  return ['ua-lookup', '/ua-lookup', toValue(args)] as const
}

export function getUaLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ua-lookup']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUaLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ua-lookup'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUaLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ua-lookup']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>
            >
          >,
          ReturnType<typeof getUaLookupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ua-lookup']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUaLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUaLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ua-lookup'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUrlInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['url-info']['$get']>>,
) {
  return ['url-info', '/url-info', toValue(args)] as const
}

export function getUrlInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['url-info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUrlInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['url-info'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUrlInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['url-info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>
            >
          >,
          ReturnType<typeof getUrlInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['url-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUrlInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUrlInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['url-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVerifySecurityCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['verify-security-code']['$get']>>,
) {
  return ['verify-security-code', '/verify-security-code', toValue(args)] as const
}

export function getVerifySecurityCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['verify-security-code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVerifySecurityCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['verify-security-code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVerifySecurityCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['verify-security-code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVerifySecurityCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-security-code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVerifySecurityCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVerifySecurityCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['verify-security-code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
