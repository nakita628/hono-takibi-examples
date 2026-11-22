import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getCookiesQueryKey(args: InferRequestType<typeof client.cookies.$get>) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies', '/cookies', keyArgs] as const
}

export function getCookiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cookies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCookiesQueryKey>
  >({
    queryKey: getCookiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cookies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCookies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cookies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cookies.$get>,
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getCookiesFormNonExplodedQueryKey(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formNonExploded', '/cookies#formNonExploded', keyArgs] as const
}

export function getCookiesFormNonExplodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormNonExplodedQueryKey>
  >({
    queryKey: getCookiesFormNonExplodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cookies#formNonExploded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCookiesFormNonExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormNonExplodedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCookiesFormNonExplodedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCookiesFormExplodedQueryKey(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
) {
  const { cookie: _, ...keyArgs } = args
  return ['cookies#formExploded', '/cookies#formExploded', keyArgs] as const
}

export function getCookiesFormExplodedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormExplodedQueryKey>
  >({
    queryKey: getCookiesFormExplodedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cookies#formExploded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCookiesFormExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['cookies#formExploded']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCookiesFormExplodedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCookiesFormExplodedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnythingHeadersQueryKey(
  args: InferRequestType<typeof client.anything.headers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers', keyArgs] as const
}

export function getAnythingHeadersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.headers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersQueryKey>
  >({
    queryKey: getAnythingHeadersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.headers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.headers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingHeadersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnythingHeadersSimpleQueryKey(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['anything', '/anything/headers/simple', keyArgs] as const
}

export function getAnythingHeadersSimpleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersSimpleQueryKey>
  >({
    queryKey: getAnythingHeadersSimpleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.headers.simple.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingHeadersSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.headers.simple.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingHeadersSimpleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingHeadersSimpleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnythingHeadersSimpleMutationKey() {
  return ['anything', '/anything/headers/simple', 'POST'] as const
}

export function getPostAnythingHeadersSimpleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.anything.headers.simple.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingHeadersSimpleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.headers.simple.$post>) {
      return parseResponse(client.anything.headers.simple.$post(args, options))
    },
  })
}

export function injectPostAnythingHeadersSimple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.headers.simple.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingHeadersSimpleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingPathPrimitiveArrayObjectQueryKey(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
) {
  return ['anything', '/anything/path/:primitive/:array/:object', args] as const
}

export function getAnythingPathPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingPathPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.anything.path)[':primitive'][':array'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingPathPrimitiveArrayObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', args] as const
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathMatrixPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.matrix[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingPathMatrixPrimitiveArrayObject<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingPathMatrixPrimitiveArrayObjectQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnythingPathMatrixPrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathMatrixPrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathMatrixPrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.matrix[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function injectPostAnythingPathMatrixPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingPathMatrixPrimitiveArrayObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/label/:primitive/:array/:object', args] as const
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathLabelPrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.label[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingPathLabelPrimitiveArrayObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingPathLabelPrimitiveArrayObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnythingPathLabelPrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/label/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathLabelPrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathLabelPrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.label[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function injectPostAnythingPathLabelPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.anything.path.label)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingPathLabelPrimitiveArrayObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryKey(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
) {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', args] as const
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
  >({
    queryKey: getAnythingPathSimplePrimitiveArrayObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.path.simple[':primitive'][':array'][':object'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingPathSimplePrimitiveArrayObject<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingPathSimplePrimitiveArrayObjectQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnythingPathSimplePrimitiveArrayObjectMutationKey() {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', 'POST'] as const
}

export function getPostAnythingPathSimplePrimitiveArrayObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingPathSimplePrimitiveArrayObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
      >,
    ) {
      return parseResponse(
        client.anything.path.simple[':primitive'][':array'][':object'].$post(args, options),
      )
    },
  })
}

export function injectPostAnythingPathSimplePrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingPathSimplePrimitiveArrayObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingQueryQueryKey(
  args: InferRequestType<typeof client.anything.query.$get>,
) {
  return ['anything', '/anything/query', args] as const
}

export function getAnythingQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryQueryKey>
  >({
    queryKey: getAnythingQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.query.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnythingQueryFormQueryKey(
  args: InferRequestType<typeof client.anything.query.form.$get>,
) {
  return ['anything', '/anything/query/form', args] as const
}

export function getAnythingQueryFormQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.anything.query.form.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryFormQueryKey>
  >({
    queryKey: getAnythingQueryFormQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.form.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnythingQueryForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.query.form.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryFormQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnythingQueryFormQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAnythingQueryFormMutationKey() {
  return ['anything', '/anything/query/form', 'POST'] as const
}

export function getPostAnythingQueryFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.anything.query.form.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingQueryFormMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.anything.query.form.$post>) {
      return parseResponse(client.anything.query.form.$post(args, options))
    },
  })
}

export function injectPostAnythingQueryForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.anything.query.form.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingQueryFormMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnythingQuerySpaceDelimitedQueryKey(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
) {
  return ['anything', '/anything/query/spaceDelimited', args] as const
}

export function getAnythingQuerySpaceDelimitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
  >({
    queryKey: getAnythingQuerySpaceDelimitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.spaceDelimited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingQuerySpaceDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.query.spaceDelimited.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingQuerySpaceDelimitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAnythingQueryPipeDelimitedQueryKey(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
) {
  return ['anything', '/anything/query/pipeDelimited', args] as const
}

export function getAnythingQueryPipeDelimitedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
  >({
    queryKey: getAnythingQueryPipeDelimitedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.pipeDelimited.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingQueryPipeDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.query.pipeDelimited.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingQueryPipeDelimitedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAnythingQueryDeepObjectQueryKey(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
) {
  return ['anything', '/anything/query/deepObject', args] as const
}

export function getAnythingQueryDeepObjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
  >({
    queryKey: getAnythingQueryDeepObjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anything.query.deepObject.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnythingQueryDeepObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.anything.query.deepObject.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnythingQueryDeepObjectQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnythingFormDataMutationKey() {
  return ['anything', '/anything/form-data', 'POST'] as const
}

export function getPostAnythingFormDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['form-data']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.anything)['form-data']['$post']>) {
      return parseResponse(client.anything['form-data'].$post(args, options))
    },
  })
}

export function injectPostAnythingFormData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingFormDataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutAnythingFormDataFormMutationKey() {
  return ['anything', '/anything/form-data/form', 'PUT'] as const
}

export function getPutAnythingFormDataFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnythingFormDataFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
    ) {
      return parseResponse(client.anything['form-data'].form.$put(args, options))
    },
  })
}

export function injectPutAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['form']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingFormDataFormMutationKey() {
  return ['anything', '/anything/form-data/form', 'POST'] as const
}

export function getPostAnythingFormDataFormMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataFormMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].form.$post(args, options))
    },
  })
}

export function injectPostAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['form']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['form']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingFormDataSpaceDelimitedMutationKey() {
  return ['anything', '/anything/form-data/spaceDelimited', 'POST'] as const
}

export function getPostAnythingFormDataSpaceDelimitedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataSpaceDelimitedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].spaceDelimited.$post(args, options))
    },
  })
}

export function injectPostAnythingFormDataSpaceDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingFormDataSpaceDelimitedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingFormDataPipeDelimitedMutationKey() {
  return ['anything', '/anything/form-data/pipeDelimited', 'POST'] as const
}

export function getPostAnythingFormDataPipeDelimitedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataPipeDelimitedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].pipeDelimited.$post(args, options))
    },
  })
}

export function injectPostAnythingFormDataPipeDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['pipeDelimited']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingFormDataPipeDelimitedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnythingFormDataDeepObjectMutationKey() {
  return ['anything', '/anything/form-data/deepObject', 'POST'] as const
}

export function getPostAnythingFormDataDeepObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anything)['form-data']['deepObject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnythingFormDataDeepObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
    ) {
      return parseResponse(client.anything['form-data'].deepObject.$post(args, options))
    },
  })
}

export function injectPostAnythingFormDataDeepObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anything)['form-data']['deepObject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anything)['form-data']['deepObject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnythingFormDataDeepObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
