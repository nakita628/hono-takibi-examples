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

export function injectFoodBrandedBarcodePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFoodBrandedBarcodePhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFoodBrandedNamePhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoodBrandedNamePhpQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectFoodBrandedSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFoodBrandedSearchPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectFoodIngredientSearchPhp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFoodIngredientSearchPhpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
