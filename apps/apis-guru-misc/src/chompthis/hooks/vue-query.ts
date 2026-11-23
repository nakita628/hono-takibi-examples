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

export function getFoodKey() {
  return ['food'] as const
}

export function getFoodBrandedBarcodePhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>>,
) {
  return ['food', '/food/branded/barcode.php', toValue(args)] as const
}

export function getFoodBrandedBarcodePhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodBrandedBarcodePhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.branded['barcode.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodBrandedBarcodePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodBrandedBarcodePhpQueryKey>
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
          Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedBarcodePhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodBrandedBarcodePhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.branded['barcode.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodBrandedNamePhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['name.php']['$get']>>,
) {
  return ['food', '/food/branded/name.php', toValue(args)] as const
}

export function getFoodBrandedNamePhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['name.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodBrandedNamePhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.branded['name.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodBrandedNamePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['name.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodBrandedNamePhpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedNamePhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodBrandedNamePhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.branded['name.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodBrandedSearchPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['search.php']['$get']>>,
) {
  return ['food', '/food/branded/search.php', toValue(args)] as const
}

export function getFoodBrandedSearchPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['search.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodBrandedSearchPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.branded['search.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodBrandedSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.branded)['search.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodBrandedSearchPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodBrandedSearchPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodBrandedSearchPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.branded['search.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientSearchPhpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>>,
) {
  return ['food', '/food/ingredient/search.php', toValue(args)] as const
}

export function getFoodIngredientSearchPhpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientSearchPhpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredient['search.php'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientSearchPhpQueryKey>
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
          Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientSearchPhpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientSearchPhpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredient['search.php'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
