import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1ShoppersSubaccountMutationKey() {
  return ['v1', '/v1/shoppers/subaccount', 'POST'] as const
}

export function getPostV1ShoppersSubaccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.shoppers.subaccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.shoppers.subaccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShoppersSubaccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.shoppers.subaccount.$post>) {
      return parseResponse(client.v1.shoppers.subaccount.$post(args, options))
    },
  })
}

export function usePostV1ShoppersSubaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.shoppers.subaccount.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.shoppers.subaccount.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ShoppersSubaccountMutationOptions<TError, TOnMutateResult>(
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

export function getV1ShoppersShopperIdQueryKey(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$get']>,
) {
  return ['v1', '/v1/shoppers/:shopperId', args] as const
}

export function getV1ShoppersShopperIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShoppersShopperIdQueryKey>
  >({
    queryKey: getV1ShoppersShopperIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shoppers[':shopperId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ShoppersShopperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShoppersShopperIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ShoppersShopperIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ShoppersShopperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShoppersShopperIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ShoppersShopperIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ShoppersShopperIdMutationKey() {
  return ['v1', '/v1/shoppers/:shopperId', 'POST'] as const
}

export function getPostV1ShoppersShopperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShoppersShopperIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$post']>) {
      return parseResponse(client.v1.shoppers[':shopperId'].$post(args, options))
    },
  })
}

export function usePostV1ShoppersShopperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ShoppersShopperIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1ShoppersShopperIdMutationKey() {
  return ['v1', '/v1/shoppers/:shopperId', 'DELETE'] as const
}

export function getDeleteV1ShoppersShopperIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ShoppersShopperIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$delete']>) {
      return parseResponse(client.v1.shoppers[':shopperId'].$delete(args, options))
    },
  })
}

export function useDeleteV1ShoppersShopperId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.shoppers)[':shopperId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ShoppersShopperIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1ShoppersShopperIdFactorsPasswordMutationKey() {
  return ['v1', '/v1/shoppers/:shopperId/factors/password', 'PUT'] as const
}

export function getPutV1ShoppersShopperIdFactorsPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ShoppersShopperIdFactorsPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']
      >,
    ) {
      return parseResponse(client.v1.shoppers[':shopperId'].factors.password.$put(args, options))
    },
  })
}

export function usePutV1ShoppersShopperIdFactorsPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.shoppers)[':shopperId']['factors']['password']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ShoppersShopperIdFactorsPasswordMutationOptions<
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

export function getV1ShoppersShopperIdStatusQueryKey(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>,
) {
  return ['v1', '/v1/shoppers/:shopperId/status', args] as const
}

export function getV1ShoppersShopperIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShoppersShopperIdStatusQueryKey>
  >({
    queryKey: getV1ShoppersShopperIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shoppers[':shopperId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ShoppersShopperIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShoppersShopperIdStatusQueryKey>
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
      ...getV1ShoppersShopperIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ShoppersShopperIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shoppers)[':shopperId']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShoppersShopperIdStatusQueryKey>
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
      ...getV1ShoppersShopperIdStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
