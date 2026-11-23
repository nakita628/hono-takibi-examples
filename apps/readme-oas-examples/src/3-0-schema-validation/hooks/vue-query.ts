import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
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

export function getAnythingNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
) {
  return ['anything', '/anything/numbers', toValue(args)] as const
}

export function getAnythingNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>
            >
          >,
          ReturnType<typeof getAnythingNumbersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.numbers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingStringsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
) {
  return ['anything', '/anything/strings', toValue(args)] as const
}

export function getAnythingStringsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingStringsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.strings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingStrings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.strings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>
            >
          >,
          ReturnType<typeof getAnythingStringsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingStringsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingStringsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.strings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingJsonschemaFormatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>>,
) {
  return ['anything', '/anything/jsonschema-formats', toValue(args)] as const
}

export function getAnythingJsonschemaFormatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingJsonschemaFormatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything['jsonschema-formats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingJsonschemaFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['jsonschema-formats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingJsonschemaFormatsQueryKey>
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
          Awaited<ReturnType<(typeof client.anything)['jsonschema-formats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingJsonschemaFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingJsonschemaFormatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything['jsonschema-formats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingOasFormatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['oas-formats']['$get']>>,
) {
  return ['anything', '/anything/oas-formats', toValue(args)] as const
}

export function getAnythingOasFormatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['oas-formats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingOasFormatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything['oas-formats'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingOasFormats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.anything)['oas-formats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnythingOasFormatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.anything)['oas-formats']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingOasFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingOasFormatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything['oas-formats'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnythingBooleansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.booleans.$get>>,
) {
  return ['anything', '/anything/booleans', toValue(args)] as const
}

export function getAnythingBooleansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.booleans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnythingBooleansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anything.booleans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnythingBooleans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.anything.booleans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>
            >
          >,
          ReturnType<typeof getAnythingBooleansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.booleans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnythingBooleansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnythingBooleansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.anything.booleans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
