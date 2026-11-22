import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormsKey() {
  return ['forms'] as const
}

export function getFormsQueryKey(args: InferRequestType<typeof client.forms.$get>) {
  return ['forms', '/forms', args] as const
}

export function getFormsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.forms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFormsQueryKey>
  >({
    queryKey: getFormsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectForms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.forms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFormsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFormsFormNameQueryKey(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
) {
  return ['forms', '/forms/:form_name', args] as const
}

export function getFormsFormNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.forms)[':form_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormsFormNameQueryKey>
  >({
    queryKey: getFormsFormNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forms[':form_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFormsFormName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.forms)[':form_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.forms)[':form_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormsFormNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormsFormNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
