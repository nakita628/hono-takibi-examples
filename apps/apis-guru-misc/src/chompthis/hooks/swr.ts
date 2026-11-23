import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFoodKey() {
  return ['food'] as const
}

export function getGetFoodBrandedBarcodePhpKey(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
) {
  return ['food', '/food/branded/barcode.php', args] as const
}

export function useGetFoodBrandedBarcodePhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedBarcodePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['barcode.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodBrandedBarcodePhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedBarcodePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['barcode.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['barcode.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodBrandedNamePhpKey(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
) {
  return ['food', '/food/branded/name.php', args] as const
}

export function useGetFoodBrandedNamePhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedNamePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['name.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodBrandedNamePhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedNamePhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['name.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['name.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodBrandedSearchPhpKey(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
) {
  return ['food', '/food/branded/search.php', args] as const
}

export function useGetFoodBrandedSearchPhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedSearchPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['search.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodBrandedSearchPhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodBrandedSearchPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.branded)['search.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.branded['search.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientSearchPhpKey(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
) {
  return ['food', '/food/ingredient/search.php', args] as const
}

export function useGetFoodIngredientSearchPhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodIngredientSearchPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredient['search.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientSearchPhp<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoodIngredientSearchPhpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredient)['search.php']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredient['search.php'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
