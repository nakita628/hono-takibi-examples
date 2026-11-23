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

export function getMultipleTypesMultipleExamplesKey() {
  return ['multiple-types-multiple-examples'] as const
}

export function getMultipleTypesSingleExampleKey() {
  return ['multiple-types-single-example'] as const
}

export function getSingleTypeMultipleExamplesKey() {
  return ['single-type-multiple-examples'] as const
}

export function getSingleTypeSingleExampleKey() {
  return ['single-type-single-example'] as const
}

export function getPostMultipleTypesMultipleExamplesMutationKey() {
  return ['multiple-types-multiple-examples', '/multiple-types-multiple-examples', 'POST'] as const
}

export function getPostMultipleTypesMultipleExamplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multiple-types-multiple-examples']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMultipleTypesMultipleExamplesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']>,
    ) {
      return parseResponse(client['multiple-types-multiple-examples'].$post(args, options))
    },
  })
}

export function usePostMultipleTypesMultipleExamples<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multiple-types-multiple-examples']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['multiple-types-multiple-examples']['$post']>,
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
  const mutationDefaults = getPostMultipleTypesMultipleExamplesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMultipleTypesSingleExampleMutationKey() {
  return ['multiple-types-single-example', '/multiple-types-single-example', 'POST'] as const
}

export function getPostMultipleTypesSingleExampleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['multiple-types-single-example']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['multiple-types-single-example']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMultipleTypesSingleExampleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['multiple-types-single-example']['$post']>,
    ) {
      return parseResponse(client['multiple-types-single-example'].$post(args, options))
    },
  })
}

export function usePostMultipleTypesSingleExample<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['multiple-types-single-example']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['multiple-types-single-example']['$post']>,
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
  const mutationDefaults = getPostMultipleTypesSingleExampleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSingleTypeMultipleExamplesQueryKey() {
  return ['single-type-multiple-examples', '/single-type-multiple-examples'] as const
}

export function getSingleTypeMultipleExamplesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSingleTypeMultipleExamplesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['single-type-multiple-examples'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSingleTypeMultipleExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSingleTypeMultipleExamplesQueryKey>
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
          Awaited<ReturnType<(typeof client)['single-type-multiple-examples']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSingleTypeMultipleExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSingleTypeMultipleExamplesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['single-type-multiple-examples'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSingleTypeSingleExampleQueryKey() {
  return ['single-type-single-example', '/single-type-single-example'] as const
}

export function getSingleTypeSingleExampleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSingleTypeSingleExampleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['single-type-single-example'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSingleTypeSingleExample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSingleTypeSingleExampleQueryKey>
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
          Awaited<ReturnType<(typeof client)['single-type-single-example']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSingleTypeSingleExampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSingleTypeSingleExampleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['single-type-single-example'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
