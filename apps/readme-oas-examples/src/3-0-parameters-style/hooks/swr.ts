import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getCookiesKey() {
  return ['cookies'] as const
}

export function getCookiesFormExplodedKey() {
  return ['cookies#formExploded'] as const
}

export function getCookiesFormNonExplodedKey() {
  return ['cookies#formNonExploded'] as const
}

export function getGetCookiesKey(args: InferRequestType<typeof client.cookies.$get>) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies', '/cookies', keyArgs] as const
}

export function useGetCookies<TError = unknown>(
  args: InferRequestType<typeof client.cookies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cookies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCookies<TError = unknown>(
  args: InferRequestType<typeof client.cookies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCookiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cookies.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCookiesFormNonExplodedKey(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formNonExploded', '/cookies#formNonExploded', keyArgs] as const
}

export function useGetCookiesFormNonExploded<TError = unknown>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
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
        ? getGetCookiesFormNonExplodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cookies#formNonExploded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookiesFormNonExploded<TError = unknown>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
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
        ? getGetCookiesFormNonExplodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cookies#formNonExploded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCookiesFormExplodedKey(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formExploded', '/cookies#formExploded', keyArgs] as const
}

export function useGetCookiesFormExploded<TError = unknown>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
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
        ? getGetCookiesFormExplodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cookies#formExploded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCookiesFormExploded<TError = unknown>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
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
        ? getGetCookiesFormExplodedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cookies#formExploded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingHeadersKey(
  args: InferRequestType<typeof client.anything.headers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers', keyArgs] as const
}

export function useGetAnythingHeaders<TError = unknown>(
  args: InferRequestType<typeof client.anything.headers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
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
        ? getGetAnythingHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingHeaders<TError = unknown>(
  args: InferRequestType<typeof client.anything.headers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
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
        ? getGetAnythingHeadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.headers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingHeadersSimpleKey(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers/simple', keyArgs] as const
}

export function useGetAnythingHeadersSimple<TError = unknown>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
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
        ? getGetAnythingHeadersSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.headers.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingHeadersSimple<TError = unknown>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
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
        ? getGetAnythingHeadersSimpleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.headers.simple.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingHeadersSimpleKey() {
  return ['anything', '/anything/headers/simple', 'POST'] as const
}

export function usePostAnythingHeadersSimple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.headers.simple.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingHeadersSimpleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.anything.headers.simple.$post> },
      ) => parseResponse(client.anything.headers.simple.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingPathPrimitiveArrayObjectKey(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
) {
  return ['anything', '/anything/path/:primitive/:array/:object', args] as const
}

export function useGetAnythingPathPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
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
        ? getGetAnythingPathPrimitiveArrayObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.anything.path[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingPathPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
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
        ? getGetAnythingPathPrimitiveArrayObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.anything.path[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingPathMatrixPrimitiveArrayObjectKey(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', args] as const
}

export function useGetAnythingPathMatrixPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathMatrixPrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.matrix[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingPathMatrixPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathMatrixPrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.matrix[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingPathMatrixPrimitiveArrayObjectKey() {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', 'POST'] as const
}

export function usePostAnythingPathMatrixPrimitiveArrayObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingPathMatrixPrimitiveArrayObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
          >
        },
      ) =>
        parseResponse(
          client.anything.path.matrix[':primitive'][':array'][':object'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingPathLabelPrimitiveArrayObjectKey(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/label/:primitive/:array/:object', args] as const
}

export function useGetAnythingPathLabelPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathLabelPrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.label[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingPathLabelPrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathLabelPrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.label[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingPathLabelPrimitiveArrayObjectKey() {
  return ['anything', '/anything/path/label/:primitive/:array/:object', 'POST'] as const
}

export function usePostAnythingPathLabelPrimitiveArrayObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingPathLabelPrimitiveArrayObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
          >
        },
      ) =>
        parseResponse(
          client.anything.path.label[':primitive'][':array'][':object'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingPathSimplePrimitiveArrayObjectKey(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', args] as const
}

export function useGetAnythingPathSimplePrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathSimplePrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.simple[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingPathSimplePrimitiveArrayObject<TError = unknown>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
        ? getGetAnythingPathSimplePrimitiveArrayObjectKey(args)
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
                (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
          client.anything.path.simple[':primitive'][':array'][':object'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingPathSimplePrimitiveArrayObjectKey() {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', 'POST'] as const
}

export function usePostAnythingPathSimplePrimitiveArrayObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingPathSimplePrimitiveArrayObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
          >
        },
      ) =>
        parseResponse(
          client.anything.path.simple[':primitive'][':array'][':object'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingQueryKey(args: InferRequestType<typeof client.anything.query.$get>) {
  return ['anything', '/anything/query', args] as const
}

export function useGetAnythingQuery<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnythingQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingQuery<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnythingQueryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingQueryFormKey(
  args: InferRequestType<typeof client.anything.query.form.$get>,
) {
  return ['anything', '/anything/query/form', args] as const
}

export function useGetAnythingQueryForm<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.form.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
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
        ? getGetAnythingQueryFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.form.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingQueryForm<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.form.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
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
        ? getGetAnythingQueryFormKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.form.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingQueryFormKey() {
  return ['anything', '/anything/query/form', 'POST'] as const
}

export function usePostAnythingQueryForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.query.form.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingQueryFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.query.form.$post> }) =>
        parseResponse(client.anything.query.form.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnythingQuerySpaceDelimitedKey(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
) {
  return ['anything', '/anything/query/spaceDelimited', args] as const
}

export function useGetAnythingQuerySpaceDelimited<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
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
        ? getGetAnythingQuerySpaceDelimitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.spaceDelimited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingQuerySpaceDelimited<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
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
        ? getGetAnythingQuerySpaceDelimitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.spaceDelimited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingQueryPipeDelimitedKey(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
) {
  return ['anything', '/anything/query/pipeDelimited', args] as const
}

export function useGetAnythingQueryPipeDelimited<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
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
        ? getGetAnythingQueryPipeDelimitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.pipeDelimited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingQueryPipeDelimited<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
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
        ? getGetAnythingQueryPipeDelimitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.pipeDelimited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnythingQueryDeepObjectKey(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
) {
  return ['anything', '/anything/query/deepObject', args] as const
}

export function useGetAnythingQueryDeepObject<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
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
        ? getGetAnythingQueryDeepObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.deepObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingQueryDeepObject<TError = unknown>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
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
        ? getGetAnythingQueryDeepObjectKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.query.deepObject.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnythingFormDataKey() {
  return ['anything', '/anything/form-data', 'POST'] as const
}

export function usePostAnythingFormData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['form-data']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingFormDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['form-data']['$post']> },
      ) => parseResponse(client.anything['form-data'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAnythingFormDataFormKey() {
  return ['anything', '/anything/form-data/form', 'PUT'] as const
}

export function usePutAnythingFormDataForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['form']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingFormDataFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['form-data']['form']['$put']> },
      ) => parseResponse(client.anything['form-data'].form.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingFormDataFormKey() {
  return ['anything', '/anything/form-data/form', 'POST'] as const
}

export function usePostAnythingFormDataForm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['form']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingFormDataFormKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.anything)['form-data']['form']['$post']> },
      ) => parseResponse(client.anything['form-data'].form.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingFormDataSpaceDelimitedKey() {
  return ['anything', '/anything/form-data/spaceDelimited', 'POST'] as const
}

export function usePostAnythingFormDataSpaceDelimited<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingFormDataSpaceDelimitedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>
        },
      ) => parseResponse(client.anything['form-data'].spaceDelimited.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingFormDataPipeDelimitedKey() {
  return ['anything', '/anything/form-data/pipeDelimited', 'POST'] as const
}

export function usePostAnythingFormDataPipeDelimited<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingFormDataPipeDelimitedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>
        },
      ) => parseResponse(client.anything['form-data'].pipeDelimited.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingFormDataDeepObjectKey() {
  return ['anything', '/anything/form-data/deepObject', 'POST'] as const
}

export function usePostAnythingFormDataDeepObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['deepObject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingFormDataDeepObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']> },
      ) => parseResponse(client.anything['form-data'].deepObject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
