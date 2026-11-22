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

export function getFormsKey() {
  return ['forms'] as const
}

export function getFormsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forms.$get>>,
) {
  return ['forms', '/forms', toValue(args)] as const
}

export function getFormsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forms.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useForms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
          ReturnType<typeof getFormsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormsFormNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forms)[':form_name']['$get']>>,
) {
  return ['forms', '/forms/:form_name', toValue(args)] as const
}

export function getFormsFormNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forms)[':form_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormsFormNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forms[':form_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormsFormName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forms)[':form_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
            >
          >,
          ReturnType<typeof getFormsFormNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormsFormNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormsFormNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forms[':form_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
