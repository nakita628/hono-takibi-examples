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

export function getMoviesKey() {
  return ['movies'] as const
}

export function getMoviesQueryKey() {
  return ['movies', '/movies'] as const
}

export function getMoviesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMoviesQueryKey>
  >({
    queryKey: getMoviesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.movies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMovies<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMoviesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostMoviesMutationKey() {
  return ['movies', '/movies', 'POST'] as const
}

export function getPostMoviesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$post>>>>>,
    TError,
    InferRequestType<typeof client.movies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMoviesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.movies.$post>) {
      return parseResponse(client.movies.$post(args, options))
    },
  })
}

export function injectPostMovies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$post>>>>>,
        TError,
        InferRequestType<typeof client.movies.$post>,
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
    const mutationDefaults = getPostMoviesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
