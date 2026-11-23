import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiMessageMessageAnnunciatorCurrentQueryKey(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>,
) {
  return ['api', '/api/Message/message/:annunciator/current', args] as const
}

export function getApiMessageMessageAnnunciatorCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageMessageAnnunciatorCurrentQueryKey>
  >({
    queryKey: getApiMessageMessageAnnunciatorCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Message.message[':annunciator'].current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMessageMessageAnnunciatorCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.Message.message)[':annunciator']['current']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMessageMessageAnnunciatorCurrentQueryKey>
        >
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
      ...getApiMessageMessageAnnunciatorCurrentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiMessageMessageAnnunciatorDateQueryKey(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>,
) {
  return ['api', '/api/Message/message/:annunciator/:date', args] as const
}

export function getApiMessageMessageAnnunciatorDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageMessageAnnunciatorDateQueryKey>
  >({
    queryKey: getApiMessageMessageAnnunciatorDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.Message.message[':annunciator'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiMessageMessageAnnunciatorDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.Message.message)[':annunciator'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiMessageMessageAnnunciatorDateQueryKey>
        >
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
      ...getApiMessageMessageAnnunciatorDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
