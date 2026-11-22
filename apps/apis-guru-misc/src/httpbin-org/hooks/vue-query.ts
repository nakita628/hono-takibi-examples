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

export function getAbsoluteRedirectKey() {
  return ['absolute-redirect'] as const
}

export function getAnythingKey() {
  return ['anything'] as const
}

export function getBase64Key() {
  return ['base64'] as const
}

export function getBasicAuthKey() {
  return ['basic-auth'] as const
}

export function getBearerKey() {
  return ['bearer'] as const
}

export function getBrotliKey() {
  return ['brotli'] as const
}

export function getBytesKey() {
  return ['bytes'] as const
}

export function getCacheKey() {
  return ['cache'] as const
}

export function getCookiesKey() {
  return ['cookies'] as const
}

export function getDeflateKey() {
  return ['deflate'] as const
}

export function getDelayKey() {
  return ['delay'] as const
}

export function getDeleteKey() {
  return ['delete'] as const
}

export function getDenyKey() {
  return ['deny'] as const
}

export function getDigestAuthKey() {
  return ['digest-auth'] as const
}

export function getDripKey() {
  return ['drip'] as const
}

export function getEncodingKey() {
  return ['encoding'] as const
}

export function getEtagKey() {
  return ['etag'] as const
}

export function getGetKey() {
  return ['get'] as const
}

export function getGzipKey() {
  return ['gzip'] as const
}

export function getHeadersKey() {
  return ['headers'] as const
}

export function getHiddenBasicAuthKey() {
  return ['hidden-basic-auth'] as const
}

export function getHtmlKey() {
  return ['html'] as const
}

export function getImageKey() {
  return ['image'] as const
}

export function getIpKey() {
  return ['ip'] as const
}

export function getJsonKey() {
  return ['json'] as const
}

export function getLinksKey() {
  return ['links'] as const
}

export function getPatchKey() {
  return ['patch'] as const
}

export function getPostKey() {
  return ['post'] as const
}

export function getPutKey() {
  return ['put'] as const
}

export function getRangeKey() {
  return ['range'] as const
}

export function getRedirectKey() {
  return ['redirect'] as const
}

export function getRedirectToKey() {
  return ['redirect-to'] as const
}

export function getRelativeRedirectKey() {
  return ['relative-redirect'] as const
}

export function getResponseHeadersKey() {
  return ['response-headers'] as const
}

export function getRobotsTxtKey() {
  return ['robots.txt'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getStreamKey() {
  return ['stream'] as const
}

export function getStreamBytesKey() {
  return ['stream-bytes'] as const
}

export function getUserAgentKey() {
  return ['user-agent'] as const
}

export function getUuidKey() {
  return ['uuid'] as const
}

export function getXmlKey() {
  return ['xml'] as const
}

export function getAbsoluteRedirectNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>>,
) {
  return ['absolute-redirect', '/absolute-redirect/:n', toValue(args)] as const
}

export function getAbsoluteRedirectNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAbsoluteRedirectNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['absolute-redirect'][':n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAbsoluteRedirectN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAbsoluteRedirectNQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAbsoluteRedirectNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAbsoluteRedirectNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['absolute-redirect'][':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingQueryKey() {
  return ['anything', '/anything'] as const
}

export function getAnythingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnythingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnything<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
          >,
          ReturnType<typeof getAnythingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnythingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnythingMutationKey() {
  return ['anything', '/anything', 'PUT'] as const
}

export function getPutAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.$put(undefined, options))
    },
  })
}

export function usePutAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPutAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnythingMutationKey() {
  return ['anything', '/anything', 'POST'] as const
}

export function getPostAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.$post(undefined, options))
    },
  })
}

export function usePostAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAnythingMutationKey() {
  return ['anything', '/anything', 'DELETE'] as const
}

export function getDeleteAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnythingMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.$delete(undefined, options))
    },
  })
}

export function useDeleteAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchAnythingMutationKey() {
  return ['anything', '/anything', 'PATCH'] as const
}

export function getPatchAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$patch>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.$patch(undefined, options))
    },
  })
}

export function usePatchAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$patch>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPatchAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTraceAnythingMutationKey() {
  return ['anything', '/anything', 'TRACE'] as const
}

export function getTraceAnythingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$trace>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getTraceAnythingMutationKey(),
    async mutationFn() {
      return parseResponse(client.anything.$trace(undefined, options))
    },
  })
}

export function useTraceAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$trace>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getTraceAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingAnythingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':anything']['$get']>>,
) {
  return ['anything', '/anything/:anything', toValue(args)] as const
}

export function getAnythingAnythingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':anything']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingAnythingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything[':anything'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingAnything<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)[':anything']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingAnythingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingAnythingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingAnythingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything[':anything'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnythingAnythingMutationKey() {
  return ['anything', '/anything/:anything', 'PUT'] as const
}

export function getPutAnythingAnythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':anything']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingAnythingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':anything']['$put']>) {
      return parseResponse(client.anything[':anything'].$put(args, options))
    },
  })
}

export function usePutAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':anything']['$put']>,
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
  const mutationDefaults = getPutAnythingAnythingMutationOptions<TError, TOnMutateResult>(
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

export function getPostAnythingAnythingMutationKey() {
  return ['anything', '/anything/:anything', 'POST'] as const
}

export function getPostAnythingAnythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':anything']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingAnythingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':anything']['$post']>) {
      return parseResponse(client.anything[':anything'].$post(args, options))
    },
  })
}

export function usePostAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':anything']['$post']>,
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
  const mutationDefaults = getPostAnythingAnythingMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAnythingAnythingMutationKey() {
  return ['anything', '/anything/:anything', 'DELETE'] as const
}

export function getDeleteAnythingAnythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':anything']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnythingAnythingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':anything']['$delete']>) {
      return parseResponse(client.anything[':anything'].$delete(args, options))
    },
  })
}

export function useDeleteAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':anything']['$delete']>,
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
  const mutationDefaults = getDeleteAnythingAnythingMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAnythingAnythingMutationKey() {
  return ['anything', '/anything/:anything', 'PATCH'] as const
}

export function getPatchAnythingAnythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':anything']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnythingAnythingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':anything']['$patch']>) {
      return parseResponse(client.anything[':anything'].$patch(args, options))
    },
  })
}

export function usePatchAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':anything']['$patch']>,
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
  const mutationDefaults = getPatchAnythingAnythingMutationOptions<TError, TOnMutateResult>(
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

export function getTraceAnythingAnythingMutationKey() {
  return ['anything', '/anything/:anything', 'TRACE'] as const
}

export function getTraceAnythingAnythingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$trace']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)[':anything']['$trace']>,
    TOnMutateResult
  >({
    mutationKey: getTraceAnythingAnythingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)[':anything']['$trace']>) {
      return parseResponse(client.anything[':anything'].$trace(args, options))
    },
  })
}

export function useTraceAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)[':anything']['$trace']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)[':anything']['$trace']>,
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
  const mutationDefaults = getTraceAnythingAnythingMutationOptions<TError, TOnMutateResult>(
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

export function getBase64ValueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.base64)[':value']['$get']>>,
) {
  return ['base64', '/base64/:value', toValue(args)] as const
}

export function getBase64ValueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.base64)[':value']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBase64ValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.base64[':value'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBase64Value<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.base64)[':value']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
            >
          >,
          ReturnType<typeof getBase64ValueQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBase64ValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBase64ValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.base64[':value'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBasicAuthUserPasswdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>
  >,
) {
  return ['basic-auth', '/basic-auth/:user/:passwd', toValue(args)] as const
}

export function getBasicAuthUserPasswdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBasicAuthUserPasswdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['basic-auth'][':user'][':passwd'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBasicAuthUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBasicAuthUserPasswdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasicAuthUserPasswdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBasicAuthUserPasswdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['basic-auth'][':user'][':passwd'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBearerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bearer.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bearer', '/bearer', keyArgs] as const
}

export function getBearerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bearer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBearerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bearer.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBearer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bearer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
          ReturnType<typeof getBearerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBearerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBearerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bearer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrotliQueryKey() {
  return ['brotli', '/brotli'] as const
}

export function getBrotliQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBrotliQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.brotli.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBrotli<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
          ReturnType<typeof getBrotliQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrotliQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBrotliQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.brotli.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBytesNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bytes)[':n']['$get']>>,
) {
  return ['bytes', '/bytes/:n', toValue(args)] as const
}

export function getBytesNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bytes)[':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBytesNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bytes[':n'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBytesN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bytes)[':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>
            >
          >,
          ReturnType<typeof getBytesNQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBytesNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBytesNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bytes[':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCacheQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cache', '/cache', keyArgs] as const
}

export function getCacheQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacheQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cache.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCache<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cache.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
          ReturnType<typeof getCacheQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacheQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cache.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCacheValueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':value']['$get']>>,
) {
  return ['cache', '/cache/:value', toValue(args)] as const
}

export function getCacheValueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':value']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacheValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cache[':value'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCacheValue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':value']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
            >
          >,
          ReturnType<typeof getCacheValueQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacheValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cache[':value'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesQueryKey() {
  return ['cookies', '/cookies'] as const
}

export function getCookiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCookiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cookies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
          >,
          ReturnType<typeof getCookiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCookiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cookies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesDeleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.delete.$get>>,
) {
  return ['cookies', '/cookies/delete', toValue(args)] as const
}

export function getCookiesDeleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.delete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesDeleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cookies.delete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCookiesDelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.delete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
          >,
          ReturnType<typeof getCookiesDeleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesDeleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCookiesDeleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cookies.delete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesSetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.set.$get>>,
) {
  return ['cookies', '/cookies/set', toValue(args)] as const
}

export function getCookiesSetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.set.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesSetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cookies.set.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCookiesSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.set.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
          >,
          ReturnType<typeof getCookiesSetQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesSetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCookiesSetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cookies.set.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesSetNameValueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>>,
) {
  return ['cookies', '/cookies/set/:name/:value', toValue(args)] as const
}

export function getCookiesSetNameValueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesSetNameValueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cookies.set[':name'][':value'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCookiesSetNameValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCookiesSetNameValueQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesSetNameValueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCookiesSetNameValueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cookies.set[':name'][':value'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeflateQueryKey() {
  return ['deflate', '/deflate'] as const
}

export function getDeflateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeflateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deflate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeflate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>
          >,
          ReturnType<typeof getDeflateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeflateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeflateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.deflate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelayDelayQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.delay)[':delay']['$get']>>,
) {
  return ['delay', '/delay/:delay', toValue(args)] as const
}

export function getDelayDelayQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.delay)[':delay']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDelayDelayQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.delay[':delay'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDelayDelay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.delay)[':delay']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
            >
          >,
          ReturnType<typeof getDelayDelayQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDelayDelayQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDelayDelayQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.delay[':delay'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDelayDelayMutationKey() {
  return ['delay', '/delay/:delay', 'PUT'] as const
}

export function getPutDelayDelayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.delay)[':delay']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDelayDelayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delay)[':delay']['$put']>) {
      return parseResponse(client.delay[':delay'].$put(args, options))
    },
  })
}

export function usePutDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.delay)[':delay']['$put']>,
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
  const mutationDefaults = getPutDelayDelayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDelayDelayMutationKey() {
  return ['delay', '/delay/:delay', 'POST'] as const
}

export function getPostDelayDelayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.delay)[':delay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDelayDelayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delay)[':delay']['$post']>) {
      return parseResponse(client.delay[':delay'].$post(args, options))
    },
  })
}

export function usePostDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.delay)[':delay']['$post']>,
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
  const mutationDefaults = getPostDelayDelayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDelayDelayMutationKey() {
  return ['delay', '/delay/:delay', 'DELETE'] as const
}

export function getDeleteDelayDelayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.delay)[':delay']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDelayDelayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delay)[':delay']['$delete']>) {
      return parseResponse(client.delay[':delay'].$delete(args, options))
    },
  })
}

export function useDeleteDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.delay)[':delay']['$delete']>,
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
  const mutationDefaults = getDeleteDelayDelayMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDelayDelayMutationKey() {
  return ['delay', '/delay/:delay', 'PATCH'] as const
}

export function getPatchDelayDelayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.delay)[':delay']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDelayDelayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delay)[':delay']['$patch']>) {
      return parseResponse(client.delay[':delay'].$patch(args, options))
    },
  })
}

export function usePatchDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.delay)[':delay']['$patch']>,
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
  const mutationDefaults = getPatchDelayDelayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTraceDelayDelayMutationKey() {
  return ['delay', '/delay/:delay', 'TRACE'] as const
}

export function getTraceDelayDelayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$trace']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.delay)[':delay']['$trace']>,
    TOnMutateResult
  >({
    mutationKey: getTraceDelayDelayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delay)[':delay']['$trace']>) {
      return parseResponse(client.delay[':delay'].$trace(args, options))
    },
  })
}

export function useTraceDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$trace']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.delay)[':delay']['$trace']>,
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
  const mutationDefaults = getTraceDelayDelayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDeleteMutationKey() {
  return ['delete', '/delete', 'DELETE'] as const
}

export function getDeleteDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteMutationKey(),
    async mutationFn() {
      return parseResponse(client.delete.$delete(undefined, options))
    },
  })
}

export function useDeleteDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$delete>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDenyQueryKey() {
  return ['deny', '/deny'] as const
}

export function getDenyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDenyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deny.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeny<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
          ReturnType<typeof getDenyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDenyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDenyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.deny.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDigestAuthQopUserPasswdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd', toValue(args)] as const
}

export function getDigestAuthQopUserPasswdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDigestAuthQopUserPasswdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDigestAuthQopUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDigestAuthQopUserPasswdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigestAuthQopUserPasswdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDigestAuthQopUserPasswdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDigestAuthQopUserPasswdAlgorithmQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
    >
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd/:algorithm', toValue(args)] as const
}

export function getDigestAuthQopUserPasswdAlgorithmQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDigestAuthQopUserPasswdAlgorithmQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDigestAuthQopUserPasswdAlgorithm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDigestAuthQopUserPasswdAlgorithmQueryKey>
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
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigestAuthQopUserPasswdAlgorithmQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDigestAuthQopUserPasswdAlgorithmQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
    >
  >,
) {
  return [
    'digest-auth',
    '/digest-auth/:qop/:user/:passwd/:algorithm/:stale_after',
    toValue(args),
  ] as const
}

export function getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDigestAuthQopUserPasswdAlgorithmStaleAfter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey>
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
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDripQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.drip.$get>>) {
  return ['drip', '/drip', toValue(args)] as const
}

export function getDripQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drip.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDripQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.drip.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDrip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.drip.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
          ReturnType<typeof getDripQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDripQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDripQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.drip.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEncodingUtf8QueryKey() {
  return ['encoding', '/encoding/utf8'] as const
}

export function getEncodingUtf8QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEncodingUtf8QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.encoding.utf8.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEncodingUtf8<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
          >,
          ReturnType<typeof getEncodingUtf8QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEncodingUtf8QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEncodingUtf8QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.encoding.utf8.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtagEtagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.etag)[':etag']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['etag', '/etag/:etag', keyArgs] as const
}

export function getEtagEtagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.etag)[':etag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtagEtagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etag[':etag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtagEtag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.etag)[':etag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>
            >
          >,
          ReturnType<typeof getEtagEtagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtagEtagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtagEtagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etag[':etag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetQueryKey() {
  return ['get', '/get'] as const
}

export function getGetQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGetQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.get.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGet<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
          ReturnType<typeof getGetQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGetQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.get.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGzipQueryKey() {
  return ['gzip', '/gzip'] as const
}

export function getGzipQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGzipQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gzip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGzip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
          ReturnType<typeof getGzipQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGzipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGzipQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.gzip.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHeadersQueryKey() {
  return ['headers', '/headers'] as const
}

export function getHeadersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHeadersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.headers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>
          >,
          ReturnType<typeof getHeadersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHeadersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.headers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHiddenBasicAuthUserPasswdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>
  >,
) {
  return ['hidden-basic-auth', '/hidden-basic-auth/:user/:passwd', toValue(args)] as const
}

export function getHiddenBasicAuthUserPasswdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHiddenBasicAuthUserPasswdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['hidden-basic-auth'][':user'][':passwd'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHiddenBasicAuthUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getHiddenBasicAuthUserPasswdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHiddenBasicAuthUserPasswdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHiddenBasicAuthUserPasswdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['hidden-basic-auth'][':user'][':passwd'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtmlQueryKey() {
  return ['html', '/html'] as const
}

export function getHtmlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHtmlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.html.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
          ReturnType<typeof getHtmlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHtmlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.html.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImageQueryKey() {
  return ['image', '/image'] as const
}

export function getImageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
          ReturnType<typeof getImageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.image.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImageJpegQueryKey() {
  return ['image', '/image/jpeg'] as const
}

export function getImageJpegQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImageJpegQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.jpeg.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImageJpeg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
          >,
          ReturnType<typeof getImageJpegQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageJpegQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImageJpegQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.image.jpeg.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagePngQueryKey() {
  return ['image', '/image/png'] as const
}

export function getImagePngQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImagePngQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.png.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImagePng<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
          >,
          ReturnType<typeof getImagePngQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagePngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImagePngQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.image.png.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImageSvgQueryKey() {
  return ['image', '/image/svg'] as const
}

export function getImageSvgQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImageSvgQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.svg.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImageSvg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
          >,
          ReturnType<typeof getImageSvgQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageSvgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImageSvgQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.image.svg.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImageWebpQueryKey() {
  return ['image', '/image/webp'] as const
}

export function getImageWebpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getImageWebpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.image.webp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImageWebp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
          >,
          ReturnType<typeof getImageWebpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageWebpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getImageWebpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.image.webp.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpQueryKey() {
  return ['ip', '/ip'] as const
}

export function getIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
          ReturnType<typeof getIpQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ip.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getJsonQueryKey() {
  return ['json', '/json'] as const
}

export function getJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.json.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
          ReturnType<typeof getJsonQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.json.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinksNOffsetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':n'][':offset']['$get']>>,
) {
  return ['links', '/links/:n/:offset', toValue(args)] as const
}

export function getLinksNOffsetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':n'][':offset']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinksNOffsetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.links[':n'][':offset'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLinksNOffset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.links)[':n'][':offset']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLinksNOffsetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinksNOffsetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinksNOffsetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.links[':n'][':offset'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchPatchMutationKey() {
  return ['patch', '/patch', 'PATCH'] as const
}

export function getPatchPatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patch.$patch>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchPatchMutationKey(),
    async mutationFn() {
      return parseResponse(client.patch.$patch(undefined, options))
    },
  })
}

export function usePatchPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patch.$patch>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPatchPatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPostMutationKey() {
  return ['post', '/post', 'POST'] as const
}

export function getPostPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPostMutationKey(),
    async mutationFn() {
      return parseResponse(client.post.$post(undefined, options))
    },
  })
}

export function usePostPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.$post>>>>>,
          TError,
          void,
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
  const mutationDefaults = getPostPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutPutMutationKey() {
  return ['put', '/put', 'PUT'] as const
}

export function getPutPutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.put.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutPutMutationKey(),
    async mutationFn() {
      return parseResponse(client.put.$put(undefined, options))
    },
  })
}

export function usePutPut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.put.$put>>>>>,
          TError,
          void,
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
  const mutationDefaults = getPutPutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRangeNumbytesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.range)[':numbytes']['$get']>>,
) {
  return ['range', '/range/:numbytes', toValue(args)] as const
}

export function getRangeNumbytesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.range)[':numbytes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRangeNumbytesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.range[':numbytes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRangeNumbytes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.range)[':numbytes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
            >
          >,
          ReturnType<typeof getRangeNumbytesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRangeNumbytesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRangeNumbytesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.range[':numbytes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRedirectToQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['redirect-to']['$get']>>,
) {
  return ['redirect-to', '/redirect-to', toValue(args)] as const
}

export function getRedirectToQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['redirect-to']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedirectToQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['redirect-to'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedirectTo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['redirect-to']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
            >
          >,
          ReturnType<typeof getRedirectToQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectToQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedirectToQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['redirect-to'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRedirectToMutationKey() {
  return ['redirect-to', '/redirect-to', 'PUT'] as const
}

export function getPutRedirectToMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['redirect-to']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRedirectToMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['redirect-to']['$put']>) {
      return parseResponse(client['redirect-to'].$put(args, options))
    },
  })
}

export function usePutRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['redirect-to']['$put']>,
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
  const mutationDefaults = getPutRedirectToMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRedirectToMutationKey() {
  return ['redirect-to', '/redirect-to', 'POST'] as const
}

export function getPostRedirectToMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['redirect-to']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRedirectToMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['redirect-to']['$post']>) {
      return parseResponse(client['redirect-to'].$post(args, options))
    },
  })
}

export function usePostRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['redirect-to']['$post']>,
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
  const mutationDefaults = getPostRedirectToMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRedirectToMutationKey() {
  return ['redirect-to', '/redirect-to', 'DELETE'] as const
}

export function getDeleteRedirectToMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$delete']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteRedirectToMutationKey(),
    async mutationFn() {
      return parseResponse(client['redirect-to'].$delete(undefined, options))
    },
  })
}

export function useDeleteRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$delete']>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getDeleteRedirectToMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRedirectToMutationKey() {
  return ['redirect-to', '/redirect-to', 'PATCH'] as const
}

export function getPatchRedirectToMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$patch']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchRedirectToMutationKey(),
    async mutationFn() {
      return parseResponse(client['redirect-to'].$patch(undefined, options))
    },
  })
}

export function usePatchRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$patch']>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPatchRedirectToMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTraceRedirectToMutationKey() {
  return ['redirect-to', '/redirect-to', 'TRACE'] as const
}

export function getTraceRedirectToMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$trace']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getTraceRedirectToMutationKey(),
    async mutationFn() {
      return parseResponse(client['redirect-to'].$trace(undefined, options))
    },
  })
}

export function useTraceRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$trace']>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getTraceRedirectToMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRedirectNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect)[':n']['$get']>>,
) {
  return ['redirect', '/redirect/:n', toValue(args)] as const
}

export function getRedirectNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect)[':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRedirectNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.redirect[':n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRedirectN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.redirect)[':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
            >
          >,
          ReturnType<typeof getRedirectNQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRedirectNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.redirect[':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRelativeRedirectNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>>,
) {
  return ['relative-redirect', '/relative-redirect/:n', toValue(args)] as const
}

export function getRelativeRedirectNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRelativeRedirectNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['relative-redirect'][':n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRelativeRedirectN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRelativeRedirectNQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRelativeRedirectNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRelativeRedirectNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['relative-redirect'][':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResponseHeadersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['response-headers']['$get']>>,
) {
  return ['response-headers', '/response-headers', toValue(args)] as const
}

export function getResponseHeadersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['response-headers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResponseHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['response-headers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResponseHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['response-headers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
            >
          >,
          ReturnType<typeof getResponseHeadersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponseHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResponseHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['response-headers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResponseHeadersMutationKey() {
  return ['response-headers', '/response-headers', 'POST'] as const
}

export function getPostResponseHeadersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['response-headers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResponseHeadersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['response-headers']['$post']>) {
      return parseResponse(client['response-headers'].$post(args, options))
    },
  })
}

export function usePostResponseHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['response-headers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['response-headers']['$post']>,
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
  const mutationDefaults = getPostResponseHeadersMutationOptions<TError, TOnMutateResult>(
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

export function getRobotsTxtQueryKey() {
  return ['robots.txt', '/robots.txt'] as const
}

export function getRobotsTxtQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRobotsTxtQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['robots.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRobotsTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>
            >
          >,
          ReturnType<typeof getRobotsTxtQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRobotsTxtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRobotsTxtQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['robots.txt'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusCodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':codes']['$get']>>,
) {
  return ['status', '/status/:codes', toValue(args)] as const
}

export function getStatusCodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':codes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatusCodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status[':codes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatusCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':codes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
            >
          >,
          ReturnType<typeof getStatusCodesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusCodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatusCodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.status[':codes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutStatusCodesMutationKey() {
  return ['status', '/status/:codes', 'PUT'] as const
}

export function getPutStatusCodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.status)[':codes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStatusCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.status)[':codes']['$put']>) {
      return parseResponse(client.status[':codes'].$put(args, options))
    },
  })
}

export function usePutStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.status)[':codes']['$put']>,
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
  const mutationDefaults = getPutStatusCodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStatusCodesMutationKey() {
  return ['status', '/status/:codes', 'POST'] as const
}

export function getPostStatusCodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.status)[':codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStatusCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.status)[':codes']['$post']>) {
      return parseResponse(client.status[':codes'].$post(args, options))
    },
  })
}

export function usePostStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.status)[':codes']['$post']>,
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
  const mutationDefaults = getPostStatusCodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteStatusCodesMutationKey() {
  return ['status', '/status/:codes', 'DELETE'] as const
}

export function getDeleteStatusCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.status)[':codes']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteStatusCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.status)[':codes']['$delete']>) {
      return parseResponse(client.status[':codes'].$delete(args, options))
    },
  })
}

export function useDeleteStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.status)[':codes']['$delete']>,
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
  const mutationDefaults = getDeleteStatusCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPatchStatusCodesMutationKey() {
  return ['status', '/status/:codes', 'PATCH'] as const
}

export function getPatchStatusCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.status)[':codes']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStatusCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.status)[':codes']['$patch']>) {
      return parseResponse(client.status[':codes'].$patch(args, options))
    },
  })
}

export function usePatchStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.status)[':codes']['$patch']>,
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
  const mutationDefaults = getPatchStatusCodesMutationOptions<TError, TOnMutateResult>(
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

export function getTraceStatusCodesMutationKey() {
  return ['status', '/status/:codes', 'TRACE'] as const
}

export function getTraceStatusCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$trace']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.status)[':codes']['$trace']>,
    TOnMutateResult
  >({
    mutationKey: getTraceStatusCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.status)[':codes']['$trace']>) {
      return parseResponse(client.status[':codes'].$trace(args, options))
    },
  })
}

export function useTraceStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$trace']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.status)[':codes']['$trace']>,
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
  const mutationDefaults = getTraceStatusCodesMutationOptions<TError, TOnMutateResult>(
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

export function getStreamBytesNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>>,
) {
  return ['stream-bytes', '/stream-bytes/:n', toValue(args)] as const
}

export function getStreamBytesNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamBytesNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['stream-bytes'][':n'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStreamBytesN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStreamBytesNQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamBytesNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamBytesNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['stream-bytes'][':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStreamNQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stream)[':n']['$get']>>,
) {
  return ['stream', '/stream/:n', toValue(args)] as const
}

export function getStreamNQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stream)[':n']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStreamNQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stream[':n'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStreamN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stream)[':n']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>
            >
          >,
          ReturnType<typeof getStreamNQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamNQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStreamNQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stream[':n'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAgentQueryKey() {
  return ['user-agent', '/user-agent'] as const
}

export function getUserAgentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserAgentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-agent'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserAgent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>
            >
          >,
          ReturnType<typeof getUserAgentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserAgentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['user-agent'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUuidQueryKey() {
  return ['uuid', '/uuid'] as const
}

export function getUuidQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUuidQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uuid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
          ReturnType<typeof getUuidQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUuidQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.uuid.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getXmlQueryKey() {
  return ['xml', '/xml'] as const
}

export function getXmlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getXmlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.xml.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useXml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
          ReturnType<typeof getXmlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getXmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getXmlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.xml.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
