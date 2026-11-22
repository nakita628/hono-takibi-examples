import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
) {
  return ['absolute-redirect', '/absolute-redirect/:n', args] as const
}

export function getAbsoluteRedirectNQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAbsoluteRedirectNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['absolute-redirect'][':n'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAbsoluteRedirectN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['absolute-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAbsoluteRedirectNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAnythingQueryKey() {
  return ['anything', '/anything'] as const
}

export function getAnythingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryKey>
  >({
    queryKey: getAnythingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnything<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$put>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$patch>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTraceAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.$trace>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getTraceAnythingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnythingAnythingQueryKey(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
) {
  return ['anything', '/anything/:anything', args] as const
}

export function getAnythingAnythingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingAnythingQueryKey>
  >({
    queryKey: getAnythingAnythingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything[':anything'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnythingAnything<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.anything)[':anything']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingAnythingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingAnythingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anything)[':anything']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)[':anything']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAnythingAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAnythingAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAnythingAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTraceAnythingAnything<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getTraceAnythingAnythingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBase64ValueQueryKey(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
) {
  return ['base64', '/base64/:value', args] as const
}

export function getBase64ValueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBase64ValueQueryKey>
  >({
    queryKey: getBase64ValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.base64[':value'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBase64Value<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.base64)[':value']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.base64)[':value']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBase64ValueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBase64ValueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBasicAuthUserPasswdQueryKey(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
) {
  return ['basic-auth', '/basic-auth/:user/:passwd', args] as const
}

export function getBasicAuthUserPasswdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getBasicAuthUserPasswdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['basic-auth'][':user'][':passwd'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBasicAuthUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBasicAuthUserPasswdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBearerQueryKey(args: InferRequestType<typeof client.bearer.$get>) {
  const { header: _, ...keyArgs } = args
  return ['bearer', '/bearer', keyArgs] as const
}

export function getBearerQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bearer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBearerQueryKey>
  >({
    queryKey: getBearerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bearer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBearer<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bearer.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bearer.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBearerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBearerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBrotliQueryKey() {
  return ['brotli', '/brotli'] as const
}

export function getBrotliQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrotliQueryKey>
  >({
    queryKey: getBrotliQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.brotli.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBrotli<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brotli.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBrotliQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBrotliQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBytesNQueryKey(args: InferRequestType<(typeof client.bytes)[':n']['$get']>) {
  return ['bytes', '/bytes/:n', args] as const
}

export function getBytesNQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.bytes)[':n']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBytesNQueryKey>
  >({
    queryKey: getBytesNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bytes[':n'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBytesN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bytes)[':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bytes)[':n']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBytesNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBytesNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCacheQueryKey(args: InferRequestType<typeof client.cache.$get>) {
  const { header: _, ...keyArgs } = args
  return ['cache', '/cache', keyArgs] as const
}

export function getCacheQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cache.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCacheQueryKey>
  >({
    queryKey: getCacheQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cache.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCache<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cache.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCacheQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCacheValueQueryKey(
  args: InferRequestType<(typeof client.cache)[':value']['$get']>,
) {
  return ['cache', '/cache/:value', args] as const
}

export function getCacheValueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.cache)[':value']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheValueQueryKey>
  >({
    queryKey: getCacheValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cache[':value'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCacheValue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cache)[':value']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':value']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCacheValueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCacheValueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCookiesQueryKey() {
  return ['cookies', '/cookies'] as const
}

export function getCookiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesQueryKey>
  >({
    queryKey: getCookiesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCookiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCookiesDeleteQueryKey(
  args: InferRequestType<typeof client.cookies.delete.$get>,
) {
  return ['cookies', '/cookies/delete', args] as const
}

export function getCookiesDeleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cookies.delete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesDeleteQueryKey>
  >({
    queryKey: getCookiesDeleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.delete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCookiesDelete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cookies.delete.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.delete.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesDeleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesDeleteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCookiesSetQueryKey(args: InferRequestType<typeof client.cookies.set.$get>) {
  return ['cookies', '/cookies/set', args] as const
}

export function getCookiesSetQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cookies.set.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesSetQueryKey>
  >({
    queryKey: getCookiesSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.set.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCookiesSet<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cookies.set.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.set.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesSetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCookiesSetNameValueQueryKey(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
) {
  return ['cookies', '/cookies/set/:name/:value', args] as const
}

export function getCookiesSetNameValueQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCookiesSetNameValueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.set[':name'][':value'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCookiesSetNameValue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cookies.set)[':name'][':value']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesSetNameValueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeflateQueryKey() {
  return ['deflate', '/deflate'] as const
}

export function getDeflateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeflateQueryKey>
  >({
    queryKey: getDeflateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.deflate.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeflate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deflate.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDeflateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeflateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDelayDelayQueryKey(
  args: InferRequestType<(typeof client.delay)[':delay']['$get']>,
) {
  return ['delay', '/delay/:delay', args] as const
}

export function getDelayDelayQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.delay)[':delay']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDelayDelayQueryKey>
  >({
    queryKey: getDelayDelayQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delay[':delay'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDelayDelay<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.delay)[':delay']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDelayDelayQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDelayDelayQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delay)[':delay']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDelayDelayMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delay)[':delay']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDelayDelayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delay)[':delay']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDelayDelayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delay)[':delay']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDelayDelayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTraceDelayDelay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delay)[':delay']['$trace']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delay)[':delay']['$trace']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getTraceDelayDelayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeleteMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDenyQueryKey() {
  return ['deny', '/deny'] as const
}

export function getDenyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDenyQueryKey>
  >({
    queryKey: getDenyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.deny.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeny<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deny.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDenyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDenyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDigestAuthQopUserPasswdQueryKey(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd', args] as const
}

export function getDigestAuthQopUserPasswdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDigestAuthQopUserPasswdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDigestAuthQopUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getDigestAuthQopUserPasswdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDigestAuthQopUserPasswdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDigestAuthQopUserPasswdAlgorithmQueryKey(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd/:algorithm', args] as const
}

export function getDigestAuthQopUserPasswdAlgorithmQueryOptions<
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
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDigestAuthQopUserPasswdAlgorithmQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDigestAuthQopUserPasswdAlgorithm<
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
  args: () => InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDigestAuthQopUserPasswdAlgorithmQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
) {
  return ['digest-auth', '/digest-auth/:qop/:user/:passwd/:algorithm/:stale_after', args] as const
}

export function getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryOptions<
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
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDigestAuthQopUserPasswdAlgorithmStaleAfter<
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
  args: () => InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDigestAuthQopUserPasswdAlgorithmStaleAfterQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDripQueryKey(args: InferRequestType<typeof client.drip.$get>) {
  return ['drip', '/drip', args] as const
}

export function getDripQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.drip.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDripQueryKey>
  >({
    queryKey: getDripQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.drip.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDrip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.drip.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDripQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDripQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEncodingUtf8QueryKey() {
  return ['encoding', '/encoding/utf8'] as const
}

export function getEncodingUtf8QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEncodingUtf8QueryKey>
  >({
    queryKey: getEncodingUtf8QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.encoding.utf8.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEncodingUtf8<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.encoding.utf8.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEncodingUtf8QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEncodingUtf8QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEtagEtagQueryKey(args: InferRequestType<(typeof client.etag)[':etag']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['etag', '/etag/:etag', keyArgs] as const
}

export function getEtagEtagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.etag)[':etag']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEtagEtagQueryKey>
  >({
    queryKey: getEtagEtagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.etag[':etag'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEtagEtag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.etag)[':etag']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.etag)[':etag']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEtagEtagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEtagEtagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGetQueryKey() {
  return ['get', '/get'] as const
}

export function getGetQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetQueryKey>
  >({
    queryKey: getGetQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.get.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGet<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGzipQueryKey() {
  return ['gzip', '/gzip'] as const
}

export function getGzipQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGzipQueryKey>
  >({
    queryKey: getGzipQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.gzip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGzip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gzip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGzipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGzipQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHeadersQueryKey() {
  return ['headers', '/headers'] as const
}

export function getHeadersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHeadersQueryKey>
  >({
    queryKey: getHeadersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.headers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.headers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHeadersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHiddenBasicAuthUserPasswdQueryKey(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
) {
  return ['hidden-basic-auth', '/hidden-basic-auth/:user/:passwd', args] as const
}

export function getHiddenBasicAuthUserPasswdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHiddenBasicAuthUserPasswdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['hidden-basic-auth'][':user'][':passwd'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHiddenBasicAuthUserPasswd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHiddenBasicAuthUserPasswdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHtmlQueryKey() {
  return ['html', '/html'] as const
}

export function getHtmlQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHtmlQueryKey>
  >({
    queryKey: getHtmlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.html.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHtml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHtmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHtmlQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImageQueryKey() {
  return ['image', '/image'] as const
}

export function getImageQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageQueryKey>
  >({
    queryKey: getImageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.image.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImageJpegQueryKey() {
  return ['image', '/image/jpeg'] as const
}

export function getImageJpegQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageJpegQueryKey>
  >({
    queryKey: getImageJpegQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.image.jpeg.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImageJpeg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.jpeg.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImageJpegQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImageJpegQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImagePngQueryKey() {
  return ['image', '/image/png'] as const
}

export function getImagePngQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagePngQueryKey>
  >({
    queryKey: getImagePngQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.image.png.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImagePng<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.png.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImagePngQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImagePngQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImageSvgQueryKey() {
  return ['image', '/image/svg'] as const
}

export function getImageSvgQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageSvgQueryKey>
  >({
    queryKey: getImageSvgQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.image.svg.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImageSvg<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.svg.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImageSvgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImageSvgQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getImageWebpQueryKey() {
  return ['image', '/image/webp'] as const
}

export function getImageWebpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImageWebpQueryKey>
  >({
    queryKey: getImageWebpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.image.webp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImageWebp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.image.webp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImageWebpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImageWebpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getIpQueryKey() {
  return ['ip', '/ip'] as const
}

export function getIpQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpQueryKey>
  >({
    queryKey: getIpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getJsonQueryKey() {
  return ['json', '/json'] as const
}

export function getJsonQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJsonQueryKey>
  >({
    queryKey: getJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.json.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJson<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.json.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLinksNOffsetQueryKey(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
) {
  return ['links', '/links/:n/:offset', args] as const
}

export function getLinksNOffsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLinksNOffsetQueryKey>
  >({
    queryKey: getLinksNOffsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.links[':n'][':offset'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLinksNOffset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.links)[':n'][':offset']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLinksNOffsetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinksNOffsetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchPatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.patch.$patch>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.post.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutPut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.put.$put>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRangeNumbytesQueryKey(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
) {
  return ['range', '/range/:numbytes', args] as const
}

export function getRangeNumbytesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRangeNumbytesQueryKey>
  >({
    queryKey: getRangeNumbytesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.range[':numbytes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRangeNumbytes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.range)[':numbytes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.range)[':numbytes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRangeNumbytesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRangeNumbytesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRedirectToQueryKey(
  args: InferRequestType<(typeof client)['redirect-to']['$get']>,
) {
  return ['redirect-to', '/redirect-to', args] as const
}

export function getRedirectToQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['redirect-to']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectToQueryKey>
  >({
    queryKey: getRedirectToQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['redirect-to'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedirectTo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['redirect-to']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRedirectToQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRedirectToQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['redirect-to']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRedirectToMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['redirect-to']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRedirectToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$delete']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRedirectToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$patch']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRedirectToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTraceRedirectTo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['redirect-to']['$trace']>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getTraceRedirectToMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRedirectNQueryKey(
  args: InferRequestType<(typeof client.redirect)[':n']['$get']>,
) {
  return ['redirect', '/redirect/:n', args] as const
}

export function getRedirectNQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.redirect)[':n']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRedirectNQueryKey>
  >({
    queryKey: getRedirectNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.redirect[':n'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRedirectN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.redirect)[':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.redirect)[':n']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRedirectNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRedirectNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRelativeRedirectNQueryKey(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
) {
  return ['relative-redirect', '/relative-redirect/:n', args] as const
}

export function getRelativeRedirectNQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRelativeRedirectNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['relative-redirect'][':n'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRelativeRedirectN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['relative-redirect'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRelativeRedirectNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getResponseHeadersQueryKey(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
) {
  return ['response-headers', '/response-headers', args] as const
}

export function getResponseHeadersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResponseHeadersQueryKey>
  >({
    queryKey: getResponseHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['response-headers'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createResponseHeaders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['response-headers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResponseHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResponseHeadersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostResponseHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['response-headers']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['response-headers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResponseHeadersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRobotsTxtQueryKey() {
  return ['robots.txt', '/robots.txt'] as const
}

export function getRobotsTxtQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRobotsTxtQueryKey>
  >({
    queryKey: getRobotsTxtQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['robots.txt'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRobotsTxt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['robots.txt']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRobotsTxtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRobotsTxtQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatusCodesQueryKey(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
) {
  return ['status', '/status/:codes', args] as const
}

export function getStatusCodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusCodesQueryKey>
  >({
    queryKey: getStatusCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status[':codes'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatusCodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.status)[':codes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusCodesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.status)[':codes']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutStatusCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.status)[':codes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStatusCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.status)[':codes']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteStatusCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.status)[':codes']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchStatusCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTraceStatusCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':codes']['$trace']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.status)[':codes']['$trace']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getTraceStatusCodesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStreamBytesNQueryKey(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
) {
  return ['stream-bytes', '/stream-bytes/:n', args] as const
}

export function getStreamBytesNQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStreamBytesNQueryKey>
  >({
    queryKey: getStreamBytesNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['stream-bytes'][':n'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStreamBytesN<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['stream-bytes'][':n']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStreamBytesNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamBytesNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStreamNQueryKey(args: InferRequestType<(typeof client.stream)[':n']['$get']>) {
  return ['stream', '/stream/:n', args] as const
}

export function getStreamNQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.stream)[':n']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStreamNQueryKey>
  >({
    queryKey: getStreamNQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stream[':n'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStreamN<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stream)[':n']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stream)[':n']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStreamNQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStreamNQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserAgentQueryKey() {
  return ['user-agent', '/user-agent'] as const
}

export function getUserAgentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserAgentQueryKey>
  >({
    queryKey: getUserAgentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['user-agent'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserAgent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user-agent']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAgentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUuidQueryKey() {
  return ['uuid', '/uuid'] as const
}

export function getUuidQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUuidQueryKey>
  >({
    queryKey: getUuidQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.uuid.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUuid<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUuidQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getXmlQueryKey() {
  return ['xml', '/xml'] as const
}

export function getXmlQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getXmlQueryKey>
  >({
    queryKey: getXmlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.xml.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createXml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.xml.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getXmlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getXmlQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
