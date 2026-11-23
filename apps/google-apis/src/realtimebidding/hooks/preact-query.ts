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

export function getV1alphaKey() {
  return ['v1alpha'] as const
}

export function getPostV1alphaNameActivateMutationKey() {
  return ['v1alpha', '/v1alpha/:name:activate', 'POST'] as const
}

export function getPostV1alphaNameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':name:activate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaNameActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']>) {
      return parseResponse(client.v1alpha[':name:activate'].$post(args, options))
    },
  })
}

export function usePostV1alphaNameActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha)[':name:activate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha)[':name:activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alphaNameActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1alphaNameArchiveMutationKey() {
  return ['v1alpha', '/v1alpha/:name:archive', 'POST'] as const
}

export function getPostV1alphaNameArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha)[':name:archive']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaNameArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']>) {
      return parseResponse(client.v1alpha[':name:archive'].$post(args, options))
    },
  })
}

export function usePostV1alphaNameArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha)[':name:archive']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha)[':name:archive']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alphaNameArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getV1alphaParentBiddingFunctionsQueryKey(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
) {
  return ['v1alpha', '/v1alpha/:parent/biddingFunctions', args] as const
}

export function getV1alphaParentBiddingFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alphaParentBiddingFunctionsQueryKey>
  >({
    queryKey: getV1alphaParentBiddingFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha[':parent'].biddingFunctions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1alphaParentBiddingFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alphaParentBiddingFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1alphaParentBiddingFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1alphaParentBiddingFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alphaParentBiddingFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1alphaParentBiddingFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1alphaParentBiddingFunctionsMutationKey() {
  return ['v1alpha', '/v1alpha/:parent/biddingFunctions', 'POST'] as const
}

export function getPostV1alphaParentBiddingFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alphaParentBiddingFunctionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>,
    ) {
      return parseResponse(client.v1alpha[':parent'].biddingFunctions.$post(args, options))
    },
  })
}

export function usePostV1alphaParentBiddingFunctions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha)[':parent']['biddingFunctions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alphaParentBiddingFunctionsMutationOptions<
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
