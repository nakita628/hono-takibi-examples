import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFoodKey() {
  return ['food'] as const
}

export function getFoodBrandedBarcodePhpQueryKey(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
) {
  return ['food', '/food/branded/barcode.php', args] as const
}

export function getFoodBrandedBarcodePhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedBarcodePhpQueryKey>
  >({
    queryKey: getFoodBrandedBarcodePhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.branded['barcode.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodBrandedBarcodePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedBarcodePhpQueryKey>
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
      ...getFoodBrandedBarcodePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodBrandedBarcodePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedBarcodePhpQueryKey>
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
      ...getFoodBrandedBarcodePhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodBrandedNamePhpQueryKey(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
) {
  return ['food', '/food/branded/name.php', args] as const
}

export function getFoodBrandedNamePhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedNamePhpQueryKey>
  >({
    queryKey: getFoodBrandedNamePhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.branded['name.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodBrandedNamePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedNamePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodBrandedNamePhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodBrandedNamePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedNamePhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodBrandedNamePhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodBrandedSearchPhpQueryKey(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
) {
  return ['food', '/food/branded/search.php', args] as const
}

export function getFoodBrandedSearchPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedSearchPhpQueryKey>
  >({
    queryKey: getFoodBrandedSearchPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.branded['search.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodBrandedSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedSearchPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodBrandedSearchPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodBrandedSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodBrandedSearchPhpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodBrandedSearchPhpQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodIngredientSearchPhpQueryKey(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
) {
  return ['food', '/food/ingredient/search.php', args] as const
}

export function getFoodIngredientSearchPhpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientSearchPhpQueryKey>
  >({
    queryKey: getFoodIngredientSearchPhpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredient['search.php'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientSearchPhpQueryKey>
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
      ...getFoodIngredientSearchPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientSearchPhpQueryKey>
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
      ...getFoodIngredientSearchPhpQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
