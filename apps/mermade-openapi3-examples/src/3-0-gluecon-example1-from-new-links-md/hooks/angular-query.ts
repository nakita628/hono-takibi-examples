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

export function getUsersKey() {
  return ['users'] as const
}

export function getUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
) {
  return ['users', '/users/:username', args] as const
}

export function getUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >({
    queryKey: getUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUseridPhotoQueryKey(
  args: InferRequestType<(typeof client.users)[':userid']['photo']['$get']>,
) {
  return ['users', '/users/:userid/photo', args] as const
}

export function getUsersUseridPhotoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userid']['photo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUseridPhotoQueryKey>
  >({
    queryKey: getUsersUseridPhotoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userid'].photo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUseridPhoto<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':userid']['photo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userid']['photo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUseridPhotoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUseridPhotoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
