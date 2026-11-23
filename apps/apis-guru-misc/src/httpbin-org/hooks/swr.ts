import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAbsoluteRedirectNKey(
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
) {
  return ['absolute-redirect', '/absolute-redirect/:n', args] as const
}

export function useGetAbsoluteRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
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
        ? getGetAbsoluteRedirectNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['absolute-redirect'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAbsoluteRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
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
        ? getGetAbsoluteRedirectNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['absolute-redirect'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingKey() {
  return ['anything', '/anything'] as const
}

export function useGetAnything<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnythingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnything<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnythingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnythingKey() {
  return ['anything', '/anything', 'PUT'] as const
}

export function usePutAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.anything.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingKey() {
  return ['anything', '/anything', 'POST'] as const
}

export function usePostAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.anything.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnythingKey() {
  return ['anything', '/anything', 'DELETE'] as const
}

export function useDeleteAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.anything.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingKey() {
  return ['anything', '/anything', 'PATCH'] as const
}

export function usePatchAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$patch>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.anything.$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getTraceAnythingKey() {
  return ['anything', '/anything', 'TRACE'] as const
}

export function useTraceAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$trace>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getTraceAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.anything.$trace(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingAnythingKey(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
) {
  return ['anything', '/anything/:anything', args] as const
}

export function useGetAnythingAnything<TError = unknown>(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
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
        ? getGetAnythingAnythingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything[':anything'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingAnything<TError = unknown>(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
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
        ? getGetAnythingAnythingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything[':anything'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnythingAnythingKey() {
  return ['anything', '/anything/:anything', 'PUT'] as const
}

export function usePutAnythingAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)[':anything']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)[':anything']['$put']> },
      ) => parseResponse(client.anything[':anything'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingAnythingKey() {
  return ['anything', '/anything/:anything', 'POST'] as const
}

export function usePostAnythingAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)[':anything']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)[':anything']['$post']> },
      ) => parseResponse(client.anything[':anything'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnythingAnythingKey() {
  return ['anything', '/anything/:anything', 'DELETE'] as const
}

export function useDeleteAnythingAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)[':anything']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnythingAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)[':anything']['$delete']> },
      ) => parseResponse(client.anything[':anything'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnythingAnythingKey() {
  return ['anything', '/anything/:anything', 'PATCH'] as const
}

export function usePatchAnythingAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)[':anything']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnythingAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)[':anything']['$patch']> },
      ) => parseResponse(client.anything[':anything'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getTraceAnythingAnythingKey() {
  return ['anything', '/anything/:anything', 'TRACE'] as const
}

export function useTraceAnythingAnything<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$trace']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)[':anything']['$trace']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getTraceAnythingAnythingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)[':anything']['$trace']> },
      ) => parseResponse(client.anything[':anything'].$trace(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBase64ValueKey(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
) {
  return ['base64', '/base64/:value', args] as const
}

export function useGetBase64Value<TError = unknown>(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBase64ValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.base64[':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBase64Value<TError = unknown>(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBase64ValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.base64[':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBasicAuthUserPasswdKey(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
) {
  return ['basic-auth', '/basic-auth/:user/:passwd', args] as const
}

export function useGetBasicAuthUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
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
        ? getGetBasicAuthUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['basic-auth'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBasicAuthUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
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
        ? getGetBasicAuthUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['basic-auth'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBearerKey(args: InferRequestType<typeof client.bearer.$get>) {
  const { header: _, ...keyArgs } = args
  return ['bearer', '/bearer', keyArgs] as const
}

export function useGetBearer<TError = unknown>(
  args: InferRequestType<typeof client.bearer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBearerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bearer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBearer<TError = unknown>(
  args: InferRequestType<typeof client.bearer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBearerKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bearer.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBrotliKey() {
  return ['brotli', '/brotli'] as const
}

export function useGetBrotli<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrotliKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.brotli.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBrotli<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrotliKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.brotli.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBytesNKey(args: InferRequestType<(typeof client.bytes)[':n']['$get']>) {
  return ['bytes', '/bytes/:n', args] as const
}

export function useGetBytesN<TError = unknown>(
  args: InferRequestType<(typeof client.bytes)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBytesNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bytes[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBytesN<TError = unknown>(
  args: InferRequestType<(typeof client.bytes)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBytesNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bytes[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCacheKey(args: InferRequestType<typeof client.cache.$get>) {
  const { header: _, ...keyArgs } = args
  return ['cache', '/cache', keyArgs] as const
}

export function useGetCache<TError = unknown>(
  args: InferRequestType<typeof client.cache.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacheKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cache.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCache<TError = unknown>(
  args: InferRequestType<typeof client.cache.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCacheKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cache.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCacheValueKey(
  args: InferRequestType<(typeof client.cache)[':value']['$get']>,
) {
  return ['cache', '/cache/:value', args] as const
}

export function useGetCacheValue<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCacheValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCacheValue<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCacheValueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCookiesKey() {
  return ['cookies', '/cookies'] as const
}

export function useGetCookies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCookiesDeleteKey(args: InferRequestType<typeof client.cookies.delete.$get>) {
  return ['cookies', '/cookies/delete', args] as const
}

export function useGetCookiesDelete<TError = unknown>(
  args: InferRequestType<typeof client.cookies.delete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesDeleteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.delete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookiesDelete<TError = unknown>(
  args: InferRequestType<typeof client.cookies.delete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesDeleteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.delete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCookiesSetKey(args: InferRequestType<typeof client.cookies.set.$get>) {
  return ['cookies', '/cookies/set', args] as const
}

export function useGetCookiesSet<TError = unknown>(
  args: InferRequestType<typeof client.cookies.set.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookiesSet<TError = unknown>(
  args: InferRequestType<typeof client.cookies.set.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesSetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCookiesSetNameValueKey(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
) {
  return ['cookies', '/cookies/set/:name/:value', args] as const
}

export function useGetCookiesSetNameValue<TError = unknown>(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
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
        ? getGetCookiesSetNameValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.set[':name'][':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookiesSetNameValue<TError = unknown>(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
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
        ? getGetCookiesSetNameValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cookies.set[':name'][':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeflateKey() {
  return ['deflate', '/deflate'] as const
}

export function useGetDeflate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeflateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deflate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeflate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeflateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deflate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDelayDelayKey(
  args: InferRequestType<(typeof client.delay)[':delay']['$get']>,
) {
  return ['delay', '/delay/:delay', args] as const
}

export function useGetDelayDelay<TError = unknown>(
  args: InferRequestType<(typeof client.delay)[':delay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDelayDelayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delay[':delay'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDelayDelay<TError = unknown>(
  args: InferRequestType<(typeof client.delay)[':delay']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDelayDelayKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delay[':delay'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDelayDelayKey() {
  return ['delay', '/delay/:delay', 'PUT'] as const
}

export function usePutDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delay)[':delay']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDelayDelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.delay)[':delay']['$put']> }) =>
        parseResponse(client.delay[':delay'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDelayDelayKey() {
  return ['delay', '/delay/:delay', 'POST'] as const
}

export function usePostDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delay)[':delay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDelayDelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delay)[':delay']['$post']> },
      ) => parseResponse(client.delay[':delay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDelayDelayKey() {
  return ['delay', '/delay/:delay', 'DELETE'] as const
}

export function useDeleteDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delay)[':delay']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDelayDelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delay)[':delay']['$delete']> },
      ) => parseResponse(client.delay[':delay'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDelayDelayKey() {
  return ['delay', '/delay/:delay', 'PATCH'] as const
}

export function usePatchDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delay)[':delay']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDelayDelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delay)[':delay']['$patch']> },
      ) => parseResponse(client.delay[':delay'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getTraceDelayDelayKey() {
  return ['delay', '/delay/:delay', 'TRACE'] as const
}

export function useTraceDelayDelay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$trace']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delay)[':delay']['$trace']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getTraceDelayDelayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delay)[':delay']['$trace']> },
      ) => parseResponse(client.delay[':delay'].$trace(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteKey() {
  return ['delete', '/delete', 'DELETE'] as const
}

export function useDeleteDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$delete>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.delete.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDenyKey() {
  return ['deny', '/deny'] as const
}

export function useGetDeny<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDenyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deny.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeny<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetDenyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deny.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDigestAuthQopUserPasswdKey(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd', args] as const
}

export function useGetDigestAuthQopUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
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
        ? getGetDigestAuthQopUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['digest-auth'][':qop'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDigestAuthQopUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
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
        ? getGetDigestAuthQopUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['digest-auth'][':qop'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDigestAuthQopUserPasswdAlgorithmKey(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd/:algorithm', args] as const
}

export function useGetDigestAuthQopUserPasswdAlgorithm<TError = unknown>(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDigestAuthQopUserPasswdAlgorithmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDigestAuthQopUserPasswdAlgorithm<TError = unknown>(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDigestAuthQopUserPasswdAlgorithmKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDigestAuthQopUserPasswdAlgorithmStaleAfterKey(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd/:algorithm/:stale_after', args] as const
}

export function useGetDigestAuthQopUserPasswdAlgorithmStaleAfter<TError = unknown>(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDigestAuthQopUserPasswdAlgorithmStaleAfterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDigestAuthQopUserPasswdAlgorithmStaleAfter<TError = unknown>(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDigestAuthQopUserPasswdAlgorithmStaleAfterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDripKey(args: InferRequestType<typeof client.drip.$get>) {
  return ['drip', '/drip', args] as const
}

export function useGetDrip<TError = unknown>(
  args: InferRequestType<typeof client.drip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDripKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drip.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDrip<TError = unknown>(
  args: InferRequestType<typeof client.drip.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDripKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drip.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEncodingUtf8Key() {
  return ['encoding', '/encoding/utf8'] as const
}

export function useGetEncodingUtf8<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEncodingUtf8Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.encoding.utf8.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEncodingUtf8<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEncodingUtf8Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.encoding.utf8.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEtagEtagKey(args: InferRequestType<(typeof client.etag)[':etag']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['etag', '/etag/:etag', keyArgs] as const
}

export function useGetEtagEtag<TError = unknown>(
  args: InferRequestType<(typeof client.etag)[':etag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtagEtagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etag[':etag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEtagEtag<TError = unknown>(
  args: InferRequestType<(typeof client.etag)[':etag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEtagEtagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.etag[':etag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetKey() {
  return ['get', '/get'] as const
}

export function useGetGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.get.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.get.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetGzipKey() {
  return ['gzip', '/gzip'] as const
}

export function useGetGzip<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGzipKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gzip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGzip<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetGzipKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.gzip.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHeadersKey() {
  return ['headers', '/headers'] as const
}

export function useGetHeaders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeadersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.headers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHeaders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHeadersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.headers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHiddenBasicAuthUserPasswdKey(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
) {
  return ['hidden-basic-auth', '/hidden-basic-auth/:user/:passwd', args] as const
}

export function useGetHiddenBasicAuthUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
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
        ? getGetHiddenBasicAuthUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['hidden-basic-auth'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHiddenBasicAuthUserPasswd<TError = unknown>(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
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
        ? getGetHiddenBasicAuthUserPasswdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['hidden-basic-auth'][':user'][':passwd'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHtmlKey() {
  return ['html', '/html'] as const
}

export function useGetHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetHtmlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.html.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHtml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetHtmlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.html.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImageKey() {
  return ['image', '/image'] as const
}

export function useGetImage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetImageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetImageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImageJpegKey() {
  return ['image', '/image/jpeg'] as const
}

export function useGetImageJpeg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageJpegKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.jpeg.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImageJpeg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageJpegKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.jpeg.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImagePngKey() {
  return ['image', '/image/png'] as const
}

export function useGetImagePng<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagePngKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.png.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImagePng<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImagePngKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.png.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImageSvgKey() {
  return ['image', '/image/svg'] as const
}

export function useGetImageSvg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageSvgKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.svg.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImageSvg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageSvgKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.svg.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetImageWebpKey() {
  return ['image', '/image/webp'] as const
}

export function useGetImageWebp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageWebpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.webp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImageWebp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImageWebpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.image.webp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpKey() {
  return ['ip', '/ip'] as const
}

export function useGetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ip.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ip.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetJsonKey() {
  return ['json', '/json'] as const
}

export function useGetJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.json.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.json.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLinksNOffsetKey(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
) {
  return ['links', '/links/:n/:offset', args] as const
}

export function useGetLinksNOffset<TError = unknown>(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLinksNOffsetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.links[':n'][':offset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLinksNOffset<TError = unknown>(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLinksNOffsetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.links[':n'][':offset'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPatchKey() {
  return ['patch', '/patch', 'PATCH'] as const
}

export function usePatchPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patch.$patch>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.patch.$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostKey() {
  return ['post', '/post', 'POST'] as const
}

export function usePostPost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.post.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPutKey() {
  return ['put', '/put', 'PUT'] as const
}

export function usePutPut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.put.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.put.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRangeNumbytesKey(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
) {
  return ['range', '/range/:numbytes', args] as const
}

export function useGetRangeNumbytes<TError = unknown>(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRangeNumbytesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.range[':numbytes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRangeNumbytes<TError = unknown>(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRangeNumbytesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.range[':numbytes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRedirectToKey(
  args: InferRequestType<(typeof client)['redirect-to']['$get']>,
) {
  return ['redirect-to', '/redirect-to', args] as const
}

export function useGetRedirectTo<TError = unknown>(
  args: InferRequestType<(typeof client)['redirect-to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectToKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['redirect-to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedirectTo<TError = unknown>(
  args: InferRequestType<(typeof client)['redirect-to']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectToKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['redirect-to'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRedirectToKey() {
  return ['redirect-to', '/redirect-to', 'PUT'] as const
}

export function usePutRedirectTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['redirect-to']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRedirectToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['redirect-to']['$put']> }) =>
        parseResponse(client['redirect-to'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRedirectToKey() {
  return ['redirect-to', '/redirect-to', 'POST'] as const
}

export function usePostRedirectTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['redirect-to']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRedirectToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['redirect-to']['$post']> }) =>
        parseResponse(client['redirect-to'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRedirectToKey() {
  return ['redirect-to', '/redirect-to', 'DELETE'] as const
}

export function useDeleteRedirectTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$delete']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRedirectToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['redirect-to'].$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRedirectToKey() {
  return ['redirect-to', '/redirect-to', 'PATCH'] as const
}

export function usePatchRedirectTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$patch']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRedirectToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['redirect-to'].$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getTraceRedirectToKey() {
  return ['redirect-to', '/redirect-to', 'TRACE'] as const
}

export function useTraceRedirectTo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$trace']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getTraceRedirectToKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['redirect-to'].$trace(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRedirectNKey(args: InferRequestType<(typeof client.redirect)[':n']['$get']>) {
  return ['redirect', '/redirect/:n', args] as const
}

export function useGetRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client.redirect)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client.redirect)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRedirectNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.redirect[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRelativeRedirectNKey(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
) {
  return ['relative-redirect', '/relative-redirect/:n', args] as const
}

export function useGetRelativeRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
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
        ? getGetRelativeRedirectNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['relative-redirect'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRelativeRedirectN<TError = unknown>(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
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
        ? getGetRelativeRedirectNKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['relative-redirect'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResponseHeadersKey(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
) {
  return ['response-headers', '/response-headers', args] as const
}

export function useGetResponseHeaders<TError = unknown>(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
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
        ? getGetResponseHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['response-headers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResponseHeaders<TError = unknown>(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
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
        ? getGetResponseHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['response-headers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResponseHeadersKey() {
  return ['response-headers', '/response-headers', 'POST'] as const
}

export function usePostResponseHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['response-headers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResponseHeadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['response-headers']['$post']> },
      ) => parseResponse(client['response-headers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRobotsTxtKey() {
  return ['robots.txt', '/robots.txt'] as const
}

export function useGetRobotsTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRobotsTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['robots.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRobotsTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRobotsTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['robots.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusCodesKey(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
) {
  return ['status', '/status/:codes', args] as const
}

export function useGetStatusCodes<TError = unknown>(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStatusCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status[':codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusCodes<TError = unknown>(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStatusCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status[':codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStatusCodesKey() {
  return ['status', '/status/:codes', 'PUT'] as const
}

export function usePutStatusCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status)[':codes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStatusCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status)[':codes']['$put']> },
      ) => parseResponse(client.status[':codes'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStatusCodesKey() {
  return ['status', '/status/:codes', 'POST'] as const
}

export function usePostStatusCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status)[':codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStatusCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status)[':codes']['$post']> },
      ) => parseResponse(client.status[':codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStatusCodesKey() {
  return ['status', '/status/:codes', 'DELETE'] as const
}

export function useDeleteStatusCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status)[':codes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStatusCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status)[':codes']['$delete']> },
      ) => parseResponse(client.status[':codes'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchStatusCodesKey() {
  return ['status', '/status/:codes', 'PATCH'] as const
}

export function usePatchStatusCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status)[':codes']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchStatusCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status)[':codes']['$patch']> },
      ) => parseResponse(client.status[':codes'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getTraceStatusCodesKey() {
  return ['status', '/status/:codes', 'TRACE'] as const
}

export function useTraceStatusCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$trace']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.status)[':codes']['$trace']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getTraceStatusCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.status)[':codes']['$trace']> },
      ) => parseResponse(client.status[':codes'].$trace(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStreamBytesNKey(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
) {
  return ['stream-bytes', '/stream-bytes/:n', args] as const
}

export function useGetStreamBytesN<TError = unknown>(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStreamBytesNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stream-bytes'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamBytesN<TError = unknown>(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStreamBytesNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stream-bytes'][':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStreamNKey(args: InferRequestType<(typeof client.stream)[':n']['$get']>) {
  return ['stream', '/stream/:n', args] as const
}

export function useGetStreamN<TError = unknown>(
  args: InferRequestType<(typeof client.stream)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stream[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStreamN<TError = unknown>(
  args: InferRequestType<(typeof client.stream)[':n']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStreamNKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stream[':n'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserAgentKey() {
  return ['user-agent', '/user-agent'] as const
}

export function useGetUserAgent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAgentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-agent'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAgent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAgentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-agent'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUuidKey() {
  return ['uuid', '/uuid'] as const
}

export function useGetUuid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUuidKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uuid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUuid<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUuidKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uuid.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetXmlKey() {
  return ['xml', '/xml'] as const
}

export function useGetXml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetXmlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.xml.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetXml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetXmlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.xml.$get(undefined, clientOptions)), restSwrOptions),
  }
}
