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

export function getUsersKey() {
  return ['users'] as const
}

export function getUsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
) {
  return ['users', '/users/:username', toValue(args)] as const
}

export function getUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUseridPhotoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userid']['photo']['$get']>>,
) {
  return ['users', '/users/:userid/photo', toValue(args)] as const
}

export function getUsersUseridPhotoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userid']['photo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUseridPhotoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userid'].photo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUseridPhoto<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userid']['photo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUseridPhotoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUseridPhotoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUseridPhotoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userid'].photo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
