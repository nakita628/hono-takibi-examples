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

export function getAccountKey() {
  return ['account'] as const
}

export function getHtmlKey() {
  return ['html'] as const
}

export function getSelectedKey() {
  return ['selected'] as const
}

export function getSelectedMultipleKey() {
  return ['selected-multiple'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHtmlQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.html.$get>>) {
  return ['html', '/html', toValue(args)] as const
}

export function getHtmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.html.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHtmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.html.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHtml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.html.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.html.$get>>,
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
      queryKey: computed(() => getHtmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.html.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelectedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.selected.$get>>,
) {
  return ['selected', '/selected', toValue(args)] as const
}

export function getSelectedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.selected.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelectedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.selected.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelected<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.selected.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>
          >,
          ReturnType<typeof getSelectedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.selected.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelectedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelectedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.selected.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelectedMultipleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['selected-multiple']['$get']>>,
) {
  return ['selected-multiple', '/selected-multiple', toValue(args)] as const
}

export function getSelectedMultipleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['selected-multiple']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelectedMultipleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['selected-multiple'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSelectedMultiple<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['selected-multiple']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSelectedMultipleQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['selected-multiple']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelectedMultipleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelectedMultipleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['selected-multiple'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
