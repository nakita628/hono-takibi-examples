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

export function getApiKey() {
  return ['api'] as const
}

export function getApiMessageMessageAnnunciatorCurrentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
  >,
) {
  return ['api', '/api/Message/message/:annunciator/current', toValue(args)] as const
}

export function getApiMessageMessageAnnunciatorCurrentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMessageMessageAnnunciatorCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Message.message[':annunciator'].current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMessageMessageAnnunciatorCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiMessageMessageAnnunciatorCurrentQueryKey>
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
            ReturnType<(typeof client.api.Message.message)[':annunciator']['current']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageMessageAnnunciatorCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMessageMessageAnnunciatorCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Message.message[':annunciator'].current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiMessageMessageAnnunciatorDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>
  >,
) {
  return ['api', '/api/Message/message/:annunciator/:date', toValue(args)] as const
}

export function getApiMessageMessageAnnunciatorDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiMessageMessageAnnunciatorDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.Message.message[':annunciator'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiMessageMessageAnnunciatorDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiMessageMessageAnnunciatorDateQueryKey>
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
          Awaited<ReturnType<(typeof client.api.Message.message)[':annunciator'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiMessageMessageAnnunciatorDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiMessageMessageAnnunciatorDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.Message.message[':annunciator'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
