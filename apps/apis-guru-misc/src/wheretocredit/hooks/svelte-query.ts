import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostApi10Calculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApi10CalculateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createApi10Programs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['1.0']['programs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApi10ProgramsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
