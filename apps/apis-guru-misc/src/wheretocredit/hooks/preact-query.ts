import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApi10CalculateMutationKey() {
  return ['api', '/api/1.0/calculate', 'POST'] as const
}

export function getPostApi10CalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['calculate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['1.0']['calculate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApi10CalculateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['1.0']['calculate']['$post']>) {
      return parseResponse(client.api['1.0'].calculate.$post(args, options))
    },
  })
}

export function usePostApi10Calculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1.0']['calculate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['1.0']['calculate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApi10CalculateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApi10ProgramsQueryKey() {
  return ['api', '/api/1.0/programs'] as const
}

export function getApi10ProgramsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi10ProgramsQueryKey>
  >({
    queryKey: getApi10ProgramsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['1.0'].programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApi10Programs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi10ProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApi10ProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApi10Programs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApi10ProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApi10ProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
