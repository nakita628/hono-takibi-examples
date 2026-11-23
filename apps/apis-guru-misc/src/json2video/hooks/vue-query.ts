import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMoviesKey() {
  return ['movies'] as const
}

export function getMoviesQueryKey() {
  return ['movies', '/movies'] as const
}

export function getMoviesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMoviesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMovies<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
          ReturnType<typeof getMoviesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMoviesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.movies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMovies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.movies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.movies.$post>,
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
  const mutationDefaults = getPostMoviesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
