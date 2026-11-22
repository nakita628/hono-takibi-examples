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

export function getCookiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.$get>>,
) {
  const { cookie: _, ...keyArgs } = toValue(args)
  return ['cookies', '/cookies', keyArgs] as const
}

export function getCookiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cookies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.cookies.$get>>,
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
      queryKey: computed(() => getCookiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cookies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesFormNonExplodedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>>,
) {
  const { cookie: _, ...keyArgs } = toValue(args)
  return ['cookies#formNonExploded', '/cookies#formNonExploded', keyArgs] as const
}

export function getCookiesFormNonExplodedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesFormNonExplodedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cookies#formNonExploded'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCookiesFormNonExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formNonExploded']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCookiesFormNonExplodedQueryKey>
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
          Awaited<ReturnType<(typeof client)['cookies#formNonExploded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormNonExplodedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCookiesFormNonExplodedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cookies#formNonExploded'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCookiesFormExplodedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formExploded']['$get']>>,
) {
  const { cookie: _, ...keyArgs } = toValue(args)
  return ['cookies#formExploded', '/cookies#formExploded', keyArgs] as const
}

export function getCookiesFormExplodedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formExploded']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCookiesFormExplodedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['cookies#formExploded'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCookiesFormExploded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['cookies#formExploded']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCookiesFormExplodedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cookies#formExploded']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCookiesFormExplodedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCookiesFormExplodedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['cookies#formExploded'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingHeadersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['anything', '/anything/headers', keyArgs] as const
}

export function getAnythingHeadersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingHeadersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.headers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingHeaders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>
            >
          >,
          ReturnType<typeof getAnythingHeadersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingHeadersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.headers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingHeadersSimpleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.simple.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['anything', '/anything/headers/simple', keyArgs] as const
}

export function getAnythingHeadersSimpleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.simple.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingHeadersSimpleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.headers.simple.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingHeadersSimple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.headers.simple.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
            >
          >,
          ReturnType<typeof getAnythingHeadersSimpleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingHeadersSimpleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingHeadersSimpleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.headers.simple.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingHeadersSimple<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.headers.simple.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.anything.headers.simple.$post>,
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
  const mutationDefaults = getPostAnythingHeadersSimpleMutationOptions<TError, TOnMutateResult>(
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

export function getAnythingPathPrimitiveArrayObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
  >,
) {
  return ['anything', '/anything/path/:primitive/:array/:object', toValue(args)] as const
}

export function getAnythingPathPrimitiveArrayObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingPathPrimitiveArrayObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.path[':primitive'][':array'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingPathPrimitiveArrayObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
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
                    (typeof client.anything.path)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path)[':primitive'][':array'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
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
            ReturnType<(typeof client.anything.path)[':primitive'][':array'][':object']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathPrimitiveArrayObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingPathPrimitiveArrayObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.path[':primitive'][':array'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
    >
  >,
) {
  return ['anything', '/anything/path/matrix/:primitive/:array/:object', toValue(args)] as const
}

export function getAnythingPathMatrixPrimitiveArrayObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingPathMatrixPrimitiveArrayObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.path.matrix[':primitive'][':array'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingPathMatrixPrimitiveArrayObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
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
              (typeof client.anything.path.matrix)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathMatrixPrimitiveArrayObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingPathMatrixPrimitiveArrayObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.path.matrix[':primitive'][':array'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingPathMatrixPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathMatrixPrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
  >,
) {
  return ['anything', '/anything/path/label/:primitive/:array/:object', toValue(args)] as const
}

export function getAnythingPathLabelPrimitiveArrayObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingPathLabelPrimitiveArrayObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.path.label[':primitive'][':array'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingPathLabelPrimitiveArrayObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']>
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
                    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
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
              (typeof client.anything.path.label)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathLabelPrimitiveArrayObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingPathLabelPrimitiveArrayObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.path.label[':primitive'][':array'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingPathLabelPrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathLabelPrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
    >
  >,
) {
  return ['anything', '/anything/path/simple/:primitive/:array/:object', toValue(args)] as const
}

export function getAnythingPathSimplePrimitiveArrayObjectQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingPathSimplePrimitiveArrayObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.path.simple[':primitive'][':array'][':object'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingPathSimplePrimitiveArrayObject<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
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
                    (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
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
              (typeof client.anything.path.simple)[':primitive'][':array'][':object']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingPathSimplePrimitiveArrayObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingPathSimplePrimitiveArrayObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.path.simple[':primitive'][':array'][':object'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingPathSimplePrimitiveArrayObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingPathSimplePrimitiveArrayObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnythingQueryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.$get>>,
) {
  return ['anything', '/anything/query', toValue(args)] as const
}

export function getAnythingQueryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.query.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
          >,
          ReturnType<typeof getAnythingQueryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.query.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingQueryFormQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.form.$get>>,
) {
  return ['anything', '/anything/query/form', toValue(args)] as const
}

export function getAnythingQueryFormQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.form.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingQueryFormQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.query.form.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingQueryForm<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.form.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>
            >
          >,
          ReturnType<typeof getAnythingQueryFormQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryFormQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingQueryFormQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.query.form.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingQueryForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.form.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.anything.query.form.$post>,
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
  const mutationDefaults = getPostAnythingQueryFormMutationOptions<TError, TOnMutateResult>(
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

export function getAnythingQuerySpaceDelimitedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.spaceDelimited.$get>>,
) {
  return ['anything', '/anything/query/spaceDelimited', toValue(args)] as const
}

export function getAnythingQuerySpaceDelimitedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.spaceDelimited.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingQuerySpaceDelimitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.query.spaceDelimited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingQuerySpaceDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.spaceDelimited.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>
              >
            >
          >,
          ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.spaceDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQuerySpaceDelimitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingQuerySpaceDelimitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.query.spaceDelimited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingQueryPipeDelimitedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.pipeDelimited.$get>>,
) {
  return ['anything', '/anything/query/pipeDelimited', toValue(args)] as const
}

export function getAnythingQueryPipeDelimitedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.pipeDelimited.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingQueryPipeDelimitedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.query.pipeDelimited.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingQueryPipeDelimited<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.pipeDelimited.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>
              >
            >
          >,
          ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.pipeDelimited.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryPipeDelimitedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingQueryPipeDelimitedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.query.pipeDelimited.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingQueryDeepObjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.deepObject.$get>>,
) {
  return ['anything', '/anything/query/deepObject', toValue(args)] as const
}

export function getAnythingQueryDeepObjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.deepObject.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingQueryDeepObjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.query.deepObject.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingQueryDeepObject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.query.deepObject.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>
              >
            >
          >,
          ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.anything.query.deepObject.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingQueryDeepObjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingQueryDeepObjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.query.deepObject.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnythingFormData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataMutationOptions<TError, TOnMutateResult>(
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

export function usePutAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
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

export function usePostAnythingFormDataForm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataFormMutationOptions<TError, TOnMutateResult>(
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

export function usePostAnythingFormDataSpaceDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.anything)['form-data']['spaceDelimited']['$post']>,
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
  const mutationDefaults = getPostAnythingFormDataSpaceDelimitedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAnythingFormDataPipeDelimited<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataPipeDelimitedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAnythingFormDataDeepObject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnythingFormDataDeepObjectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
