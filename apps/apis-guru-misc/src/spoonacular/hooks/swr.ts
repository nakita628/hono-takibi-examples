import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFoodKey() {
  return ['food'] as const
}

export function getMealplannerKey() {
  return ['mealplanner'] as const
}

export function getRecipesKey() {
  return ['recipes'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetFoodConverseKey(args: InferRequestType<typeof client.food.converse.$get>) {
  return ['food', '/food/converse', args] as const
}

export function useGetFoodConverse<TError = unknown>(
  args: InferRequestType<typeof client.food.converse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodConverseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.converse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodConverse<TError = unknown>(
  args: InferRequestType<typeof client.food.converse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodConverseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.converse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodConverseSuggestKey(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
) {
  return ['food', '/food/converse/suggest', args] as const
}

export function useGetFoodConverseSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
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
        ? getGetFoodConverseSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.converse.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodConverseSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
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
        ? getGetFoodConverseSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.converse.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodCustomFoodsSearchKey(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
) {
  return ['food', '/food/customFoods/search', args] as const
}

export function useGetFoodCustomFoodsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
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
        ? getGetFoodCustomFoodsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.customFoods.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodCustomFoodsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
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
        ? getGetFoodCustomFoodsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.customFoods.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoodDetectKey() {
  return ['food', '/food/detect', 'POST'] as const
}

export function usePostFoodDetect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.detect.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.food.detect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodDetectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.food.detect.$post> }) =>
        parseResponse(client.food.detect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoodImagesAnalyzeKey(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
) {
  return ['food', '/food/images/analyze', args] as const
}

export function useGetFoodImagesAnalyze<TError = unknown>(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
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
        ? getGetFoodImagesAnalyzeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.images.analyze.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodImagesAnalyze<TError = unknown>(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
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
        ? getGetFoodImagesAnalyzeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.images.analyze.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodImagesClassifyKey(
  args: InferRequestType<typeof client.food.images.classify.$get>,
) {
  return ['food', '/food/images/classify', args] as const
}

export function useGetFoodImagesClassify<TError = unknown>(
  args: InferRequestType<typeof client.food.images.classify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
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
        ? getGetFoodImagesClassifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.images.classify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodImagesClassify<TError = unknown>(
  args: InferRequestType<typeof client.food.images.classify.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
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
        ? getGetFoodImagesClassifyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.images.classify.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientsAutocompleteKey(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
) {
  return ['food', '/food/ingredients/autocomplete', args] as const
}

export function useGetFoodIngredientsAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
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
        ? getGetFoodIngredientsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
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
        ? getGetFoodIngredientsAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoodIngredientsGlycemicLoadKey() {
  return ['food', '/food/ingredients/glycemicLoad', 'POST'] as const
}

export function usePostFoodIngredientsGlycemicLoad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.glycemicLoad.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.food.ingredients.glycemicLoad.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodIngredientsGlycemicLoadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.food.ingredients.glycemicLoad.$post> },
      ) => parseResponse(client.food.ingredients.glycemicLoad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoodIngredientsMapKey() {
  return ['food', '/food/ingredients/map', 'POST'] as const
}

export function usePostFoodIngredientsMap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.map.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.food.ingredients.map.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodIngredientsMapKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.food.ingredients.map.$post> },
      ) => parseResponse(client.food.ingredients.map.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoodIngredientsSearchKey(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
) {
  return ['food', '/food/ingredients/search', args] as const
}

export function useGetFoodIngredientsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
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
        ? getGetFoodIngredientsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
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
        ? getGetFoodIngredientsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientsSubstitutesKey(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
) {
  return ['food', '/food/ingredients/substitutes', args] as const
}

export function useGetFoodIngredientsSubstitutes<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
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
        ? getGetFoodIngredientsSubstitutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.substitutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsSubstitutes<TError = unknown>(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
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
        ? getGetFoodIngredientsSubstitutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients.substitutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientsIdAmountKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
) {
  return ['food', '/food/ingredients/:id/amount', args] as const
}

export function useGetFoodIngredientsIdAmount<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
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
        ? getGetFoodIngredientsIdAmountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients[':id'].amount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsIdAmount<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
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
        ? getGetFoodIngredientsIdAmountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.ingredients[':id'].amount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientsIdInformationKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
) {
  return ['food', '/food/ingredients/:id/information', args] as const
}

export function useGetFoodIngredientsIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
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
        ? getGetFoodIngredientsIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.ingredients[':id'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
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
        ? getGetFoodIngredientsIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.ingredients[':id'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodIngredientsIdSubstitutesKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
) {
  return ['food', '/food/ingredients/:id/substitutes', args] as const
}

export function useGetFoodIngredientsIdSubstitutes<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
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
        ? getGetFoodIngredientsIdSubstitutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.ingredients[':id'].substitutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodIngredientsIdSubstitutes<TError = unknown>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
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
        ? getGetFoodIngredientsIdSubstitutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.ingredients[':id'].substitutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodJokesRandomKey() {
  return ['food', '/food/jokes/random'] as const
}

export function useGetFoodJokesRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodJokesRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.jokes.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodJokesRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodJokesRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.jokes.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsSearchKey(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
) {
  return ['food', '/food/menuItems/search', args] as const
}

export function useGetFoodMenuItemsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
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
        ? getGetFoodMenuItemsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
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
        ? getGetFoodMenuItemsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsSuggestKey(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
) {
  return ['food', '/food/menuItems/suggest', args] as const
}

export function useGetFoodMenuItemsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
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
        ? getGetFoodMenuItemsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
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
        ? getGetFoodMenuItemsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsIdKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
) {
  return ['food', '/food/menuItems/:id', args] as const
}

export function useGetFoodMenuItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
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
        ? getGetFoodMenuItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
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
        ? getGetFoodMenuItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.menuItems[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsIdNutritionLabelKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel', args] as const
}

export function useGetFoodMenuItemsIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsIdNutritionLabelPngKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel.png', args] as const
}

export function useGetFoodMenuItemsIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsIdNutritionWidgetKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['food', '/food/menuItems/:id/nutritionWidget', keyArgs] as const
}

export function useGetFoodMenuItemsIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
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
        ? getGetFoodMenuItemsIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.menuItems[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodMenuItemsIdNutritionWidgetPngKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionWidget.png', args] as const
}

export function useGetFoodMenuItemsIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
            >
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
        ? getGetFoodMenuItemsIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.food.menuItems[':id']['nutritionWidget.png'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodMenuItemsIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
            >
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
        ? getGetFoodMenuItemsIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.food.menuItems[':id']['nutritionWidget.png'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFoodProductsClassifyKey() {
  return ['food', '/food/products/classify', 'POST'] as const
}

export function usePostFoodProductsClassify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.classify.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.food.products.classify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodProductsClassifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.food.products.classify.$post> },
      ) => parseResponse(client.food.products.classify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFoodProductsClassifyBatchKey() {
  return ['food', '/food/products/classifyBatch', 'POST'] as const
}

export function usePostFoodProductsClassifyBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.classifyBatch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.food.products.classifyBatch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoodProductsClassifyBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.food.products.classifyBatch.$post> },
      ) => parseResponse(client.food.products.classifyBatch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoodProductsSearchKey(
  args: InferRequestType<typeof client.food.products.search.$get>,
) {
  return ['food', '/food/products/search', args] as const
}

export function useGetFoodProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
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
        ? getGetFoodProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
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
        ? getGetFoodProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsSuggestKey(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
) {
  return ['food', '/food/products/suggest', args] as const
}

export function useGetFoodProductsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
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
        ? getGetFoodProductsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsSuggest<TError = unknown>(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
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
        ? getGetFoodProductsSuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsUpcUpcKey(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
) {
  return ['food', '/food/products/upc/:upc', args] as const
}

export function useGetFoodProductsUpcUpc<TError = unknown>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
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
        ? getGetFoodProductsUpcUpcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.upc[':upc'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsUpcUpc<TError = unknown>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
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
        ? getGetFoodProductsUpcUpcKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products.upc[':upc'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsUpcUpcComparableKey(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
) {
  return ['food', '/food/products/upc/:upc/comparable', args] as const
}

export function useGetFoodProductsUpcUpcComparable<TError = unknown>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
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
        ? getGetFoodProductsUpcUpcComparableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products.upc[':upc'].comparable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsUpcUpcComparable<TError = unknown>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
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
        ? getGetFoodProductsUpcUpcComparableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products.upc[':upc'].comparable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsIdKey(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
) {
  return ['food', '/food/products/:id', args] as const
}

export function useGetFoodProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFoodProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFoodProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsIdNutritionLabelKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionLabel', args] as const
}

export function useGetFoodProductsIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
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
        ? getGetFoodProductsIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
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
        ? getGetFoodProductsIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsIdNutritionLabelPngKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionLabel.png', args] as const
}

export function useGetFoodProductsIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetFoodProductsIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetFoodProductsIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsIdNutritionWidgetKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['food', '/food/products/:id/nutritionWidget', keyArgs] as const
}

export function useGetFoodProductsIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
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
        ? getGetFoodProductsIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
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
        ? getGetFoodProductsIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodProductsIdNutritionWidgetPngKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionWidget.png', args] as const
}

export function useGetFoodProductsIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
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
        ? getGetFoodProductsIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id']['nutritionWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodProductsIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
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
        ? getGetFoodProductsIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.food.products[':id']['nutritionWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodRestaurantsSearchKey(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
) {
  return ['food', '/food/restaurants/search', args] as const
}

export function useGetFoodRestaurantsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
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
        ? getGetFoodRestaurantsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.restaurants.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodRestaurantsSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
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
        ? getGetFoodRestaurantsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.restaurants.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodSearchKey(args: InferRequestType<typeof client.food.search.$get>) {
  return ['food', '/food/search', args] as const
}

export function useGetFoodSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodSiteSearchKey(
  args: InferRequestType<typeof client.food.site.search.$get>,
) {
  return ['food', '/food/site/search', args] as const
}

export function useGetFoodSiteSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.site.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSiteSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.site.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodSiteSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.site.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodSiteSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.site.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodTriviaRandomKey() {
  return ['food', '/food/trivia/random'] as const
}

export function useGetFoodTriviaRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodTriviaRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.trivia.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodTriviaRandom<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodTriviaRandomKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.trivia.random.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodVideosSearchKey(
  args: InferRequestType<typeof client.food.videos.search.$get>,
) {
  return ['food', '/food/videos/search', args] as const
}

export function useGetFoodVideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
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
        ? getGetFoodVideosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodVideosSearch<TError = unknown>(
  args: InferRequestType<typeof client.food.videos.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
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
        ? getGetFoodVideosSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.videos.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodWineDescriptionKey(
  args: InferRequestType<typeof client.food.wine.description.$get>,
) {
  return ['food', '/food/wine/description', args] as const
}

export function useGetFoodWineDescription<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
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
        ? getGetFoodWineDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodWineDescription<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
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
        ? getGetFoodWineDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodWineDishesKey(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
) {
  return ['food', '/food/wine/dishes', args] as const
}

export function useGetFoodWineDishes<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodWineDishesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.dishes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodWineDishes<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoodWineDishesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.dishes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodWinePairingKey(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
) {
  return ['food', '/food/wine/pairing', args] as const
}

export function useGetFoodWinePairing<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
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
        ? getGetFoodWinePairingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.pairing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodWinePairing<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
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
        ? getGetFoodWinePairingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.pairing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFoodWineRecommendationKey(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
) {
  return ['food', '/food/wine/recommendation', args] as const
}

export function useGetFoodWineRecommendation<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
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
        ? getGetFoodWineRecommendationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.recommendation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoodWineRecommendation<TError = unknown>(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
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
        ? getGetFoodWineRecommendationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.food.wine.recommendation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMealplannerGenerateKey(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
) {
  return ['mealplanner', '/mealplanner/generate', args] as const
}

export function useGetMealplannerGenerate<TError = unknown>(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
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
        ? getGetMealplannerGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mealplanner.generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMealplannerGenerate<TError = unknown>(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
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
        ? getGetMealplannerGenerateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mealplanner.generate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMealplannerUsernameDayDateKey() {
  return ['mealplanner', '/mealplanner/:username/day/:date', 'DELETE'] as const
}

export function useDeleteMealplannerUsernameDayDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMealplannerUsernameDayDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>
        },
      ) => parseResponse(client.mealplanner[':username'].day[':date'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMealplannerUsernameItemsKey() {
  return ['mealplanner', '/mealplanner/:username/items', 'POST'] as const
}

export function usePostMealplannerUsernameItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMealplannerUsernameItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']> },
      ) => parseResponse(client.mealplanner[':username'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMealplannerUsernameItemsIdKey() {
  return ['mealplanner', '/mealplanner/:username/items/:id', 'DELETE'] as const
}

export function useDeleteMealplannerUsernameItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMealplannerUsernameItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>
        },
      ) => parseResponse(client.mealplanner[':username'].items[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMealplannerUsernameShoppingListKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/shopping-list', args] as const
}

export function useGetMealplannerUsernameShoppingList<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
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
        ? getGetMealplannerUsernameShoppingListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username']['shopping-list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMealplannerUsernameShoppingList<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
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
        ? getGetMealplannerUsernameShoppingListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username']['shopping-list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMealplannerUsernameShoppingListItemsKey() {
  return ['mealplanner', '/mealplanner/:username/shopping-list/items', 'POST'] as const
}

export function usePostMealplannerUsernameShoppingListItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMealplannerUsernameShoppingListItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.mealplanner)[':username']['shopping-list']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mealplanner[':username']['shopping-list'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMealplannerUsernameShoppingListItemsIdKey() {
  return ['mealplanner', '/mealplanner/:username/shopping-list/items/:id', 'DELETE'] as const
}

export function useDeleteMealplannerUsernameShoppingListItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMealplannerUsernameShoppingListItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.mealplanner[':username']['shopping-list'].items[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMealplannerUsernameShoppingListStartDateEndDateKey() {
  return [
    'mealplanner',
    '/mealplanner/:username/shopping-list/:start-date/:end-date',
    'POST',
  ] as const
}

export function usePostMealplannerUsernameShoppingListStartDateEndDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMealplannerUsernameShoppingListStartDateEndDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
          >
        },
      ) =>
        parseResponse(
          client.mealplanner[':username']['shopping-list'][':start-date'][':end-date'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMealplannerUsernameTemplatesKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/templates', args] as const
}

export function useGetMealplannerUsernameTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
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
        ? getGetMealplannerUsernameTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMealplannerUsernameTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
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
        ? getGetMealplannerUsernameTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMealplannerUsernameTemplatesKey() {
  return ['mealplanner', '/mealplanner/:username/templates', 'POST'] as const
}

export function usePostMealplannerUsernameTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMealplannerUsernameTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>
        },
      ) => parseResponse(client.mealplanner[':username'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMealplannerUsernameTemplatesIdKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/templates/:id', args] as const
}

export function useGetMealplannerUsernameTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
            >
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
        ? getGetMealplannerUsernameTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username'].templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMealplannerUsernameTemplatesId<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
            >
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
        ? getGetMealplannerUsernameTemplatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.mealplanner[':username'].templates[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMealplannerUsernameTemplatesIdKey() {
  return ['mealplanner', '/mealplanner/:username/templates/:id', 'DELETE'] as const
}

export function useDeleteMealplannerUsernameTemplatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMealplannerUsernameTemplatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.mealplanner)[':username']['templates'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.mealplanner[':username'].templates[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMealplannerUsernameWeekStartDateKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/week/:start-date', args] as const
}

export function useGetMealplannerUsernameWeekStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
            >
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
        ? getGetMealplannerUsernameWeekStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mealplanner[':username'].week[':start-date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMealplannerUsernameWeekStartDate<TError = unknown>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
            >
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
        ? getGetMealplannerUsernameWeekStartDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.mealplanner[':username'].week[':start-date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostRecipesAnalyzeKey() {
  return ['recipes', '/recipes/analyze', 'POST'] as const
}

export function usePostRecipesAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyze.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.analyze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipes.analyze.$post> }) =>
        parseResponse(client.recipes.analyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesAnalyzeInstructionsKey() {
  return ['recipes', '/recipes/analyzeInstructions', 'POST'] as const
}

export function usePostRecipesAnalyzeInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyzeInstructions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.analyzeInstructions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesAnalyzeInstructionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.analyzeInstructions.$post> },
      ) => parseResponse(client.recipes.analyzeInstructions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipesAutocompleteKey(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
) {
  return ['recipes', '/recipes/autocomplete', args] as const
}

export function useGetRecipesAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
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
        ? getGetRecipesAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesAutocomplete<TError = unknown>(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
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
        ? getGetRecipesAutocompleteKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.autocomplete.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesComplexSearchKey(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
) {
  return ['recipes', '/recipes/complexSearch', args] as const
}

export function useGetRecipesComplexSearch<TError = unknown>(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
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
        ? getGetRecipesComplexSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.complexSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesComplexSearch<TError = unknown>(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
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
        ? getGetRecipesComplexSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.complexSearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesConvertKey(
  args: InferRequestType<typeof client.recipes.convert.$get>,
) {
  return ['recipes', '/recipes/convert', args] as const
}

export function useGetRecipesConvert<TError = unknown>(
  args: InferRequestType<typeof client.recipes.convert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesConvertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.convert.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesConvert<TError = unknown>(
  args: InferRequestType<typeof client.recipes.convert.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesConvertKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.convert.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipesCuisineKey() {
  return ['recipes', '/recipes/cuisine', 'POST'] as const
}

export function usePostRecipesCuisine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.cuisine.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.cuisine.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesCuisineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recipes.cuisine.$post> }) =>
        parseResponse(client.recipes.cuisine.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipesExtractKey(
  args: InferRequestType<typeof client.recipes.extract.$get>,
) {
  return ['recipes', '/recipes/extract', args] as const
}

export function useGetRecipesExtract<TError = unknown>(
  args: InferRequestType<typeof client.recipes.extract.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesExtractKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.extract.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesExtract<TError = unknown>(
  args: InferRequestType<typeof client.recipes.extract.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesExtractKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.extract.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesFindByIngredientsKey(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
) {
  return ['recipes', '/recipes/findByIngredients', args] as const
}

export function useGetRecipesFindByIngredients<TError = unknown>(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
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
        ? getGetRecipesFindByIngredientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.findByIngredients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesFindByIngredients<TError = unknown>(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
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
        ? getGetRecipesFindByIngredientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.findByIngredients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesFindByNutrientsKey(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
) {
  return ['recipes', '/recipes/findByNutrients', args] as const
}

export function useGetRecipesFindByNutrients<TError = unknown>(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
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
        ? getGetRecipesFindByNutrientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.findByNutrients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesFindByNutrients<TError = unknown>(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
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
        ? getGetRecipesFindByNutrientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.findByNutrients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesGuessNutritionKey(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
) {
  return ['recipes', '/recipes/guessNutrition', args] as const
}

export function useGetRecipesGuessNutrition<TError = unknown>(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
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
        ? getGetRecipesGuessNutritionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.guessNutrition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesGuessNutrition<TError = unknown>(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
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
        ? getGetRecipesGuessNutritionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.guessNutrition.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesInformationBulkKey(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
) {
  return ['recipes', '/recipes/informationBulk', args] as const
}

export function useGetRecipesInformationBulk<TError = unknown>(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
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
        ? getGetRecipesInformationBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.informationBulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesInformationBulk<TError = unknown>(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
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
        ? getGetRecipesInformationBulkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.informationBulk.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipesParseIngredientsKey() {
  return ['recipes', '/recipes/parseIngredients', 'POST'] as const
}

export function usePostRecipesParseIngredients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.parseIngredients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.parseIngredients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesParseIngredientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.parseIngredients.$post> },
      ) => parseResponse(client.recipes.parseIngredients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipesQueriesAnalyzeKey(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
) {
  return ['recipes', '/recipes/queries/analyze', args] as const
}

export function useGetRecipesQueriesAnalyze<TError = unknown>(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
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
        ? getGetRecipesQueriesAnalyzeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.queries.analyze.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesQueriesAnalyze<TError = unknown>(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
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
        ? getGetRecipesQueriesAnalyzeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.queries.analyze.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesQuickAnswerKey(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
) {
  return ['recipes', '/recipes/quickAnswer', args] as const
}

export function useGetRecipesQuickAnswer<TError = unknown>(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
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
        ? getGetRecipesQuickAnswerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.quickAnswer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesQuickAnswer<TError = unknown>(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
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
        ? getGetRecipesQuickAnswerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.quickAnswer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesRandomKey(args: InferRequestType<typeof client.recipes.random.$get>) {
  return ['recipes', '/recipes/random', args] as const
}

export function useGetRecipesRandom<TError = unknown>(
  args: InferRequestType<typeof client.recipes.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesRandom<TError = unknown>(
  args: InferRequestType<typeof client.recipes.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecipesRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecipesVisualizeEquipmentKey() {
  return ['recipes', '/recipes/visualizeEquipment', 'POST'] as const
}

export function usePostRecipesVisualizeEquipment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeEquipment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizeEquipment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizeEquipmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizeEquipment.$post> },
      ) => parseResponse(client.recipes.visualizeEquipment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesVisualizeIngredientsKey() {
  return ['recipes', '/recipes/visualizeIngredients', 'POST'] as const
}

export function usePostRecipesVisualizeIngredients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeIngredients.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizeIngredients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizeIngredientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizeIngredients.$post> },
      ) => parseResponse(client.recipes.visualizeIngredients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesVisualizeNutritionKey() {
  return ['recipes', '/recipes/visualizeNutrition', 'POST'] as const
}

export function usePostRecipesVisualizeNutrition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeNutrition.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizeNutrition.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizeNutritionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizeNutrition.$post> },
      ) => parseResponse(client.recipes.visualizeNutrition.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesVisualizePriceEstimatorKey() {
  return ['recipes', '/recipes/visualizePriceEstimator', 'POST'] as const
}

export function usePostRecipesVisualizePriceEstimator<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipes.visualizePriceEstimator.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizePriceEstimator.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizePriceEstimatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizePriceEstimator.$post> },
      ) => parseResponse(client.recipes.visualizePriceEstimator.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesVisualizeRecipeKey() {
  return ['recipes', '/recipes/visualizeRecipe', 'POST'] as const
}

export function usePostRecipesVisualizeRecipe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeRecipe.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizeRecipe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizeRecipeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizeRecipe.$post> },
      ) => parseResponse(client.recipes.visualizeRecipe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecipesVisualizeTasteKey() {
  return ['recipes', '/recipes/visualizeTaste', 'POST'] as const
}

export function usePostRecipesVisualizeTaste<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeTaste.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.recipes.visualizeTaste.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecipesVisualizeTasteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.recipes.visualizeTaste.$post> },
      ) => parseResponse(client.recipes.visualizeTaste.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecipesIdAnalyzedInstructionsKey(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
) {
  return ['recipes', '/recipes/:id/analyzedInstructions', args] as const
}

export function useGetRecipesIdAnalyzedInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
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
        ? getGetRecipesIdAnalyzedInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id'].analyzedInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdAnalyzedInstructions<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
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
        ? getGetRecipesIdAnalyzedInstructionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id'].analyzedInstructions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdCardKey(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
) {
  return ['recipes', '/recipes/:id/card', args] as const
}

export function useGetRecipesIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipesIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRecipesIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdEquipmentWidgetKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget', args] as const
}

export function useGetRecipesIdEquipmentWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].equipmentWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdEquipmentWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].equipmentWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdEquipmentWidgetJsonKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.json', args] as const
}

export function useGetRecipesIdEquipmentWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['equipmentWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdEquipmentWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['equipmentWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdEquipmentWidgetPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.png', args] as const
}

export function useGetRecipesIdEquipmentWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['equipmentWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdEquipmentWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
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
        ? getGetRecipesIdEquipmentWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['equipmentWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdInformationKey(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
) {
  return ['recipes', '/recipes/:id/information', args] as const
}

export function useGetRecipesIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
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
        ? getGetRecipesIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
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
        ? getGetRecipesIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdIngredientWidgetKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget', args] as const
}

export function useGetRecipesIdIngredientWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].ingredientWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdIngredientWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].ingredientWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdIngredientWidgetJsonKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.json', args] as const
}

export function useGetRecipesIdIngredientWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['ingredientWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdIngredientWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['ingredientWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdIngredientWidgetPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.png', args] as const
}

export function useGetRecipesIdIngredientWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['ingredientWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdIngredientWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
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
        ? getGetRecipesIdIngredientWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['ingredientWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdNutritionLabelKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionLabel', args] as const
}

export function useGetRecipesIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
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
        ? getGetRecipesIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdNutritionLabel<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
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
        ? getGetRecipesIdNutritionLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].nutritionLabel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdNutritionLabelPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionLabel.png', args] as const
}

export function useGetRecipesIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetRecipesIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdNutritionLabelPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
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
        ? getGetRecipesIdNutritionLabelPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionLabel.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdNutritionWidgetKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipes', '/recipes/:id/nutritionWidget', keyArgs] as const
}

export function useGetRecipesIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdNutritionWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].nutritionWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdNutritionWidgetJsonKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.json', args] as const
}

export function useGetRecipesIdNutritionWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdNutritionWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdNutritionWidgetPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.png', args] as const
}

export function useGetRecipesIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdNutritionWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
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
        ? getGetRecipesIdNutritionWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['nutritionWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdPriceBreakdownWidgetKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget', args] as const
}

export function useGetRecipesIdPriceBreakdownWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id'].priceBreakdownWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdPriceBreakdownWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id'].priceBreakdownWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdPriceBreakdownWidgetJsonKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.json', args] as const
}

export function useGetRecipesIdPriceBreakdownWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['priceBreakdownWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdPriceBreakdownWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['priceBreakdownWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdPriceBreakdownWidgetPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.png', args] as const
}

export function useGetRecipesIdPriceBreakdownWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['priceBreakdownWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdPriceBreakdownWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
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
        ? getGetRecipesIdPriceBreakdownWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['priceBreakdownWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdSimilarKey(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
) {
  return ['recipes', '/recipes/:id/similar', args] as const
}

export function useGetRecipesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
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
        ? getGetRecipesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
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
        ? getGetRecipesIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdSummaryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
) {
  return ['recipes', '/recipes/:id/summary', args] as const
}

export function useGetRecipesIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
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
        ? getGetRecipesIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdSummary<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
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
        ? getGetRecipesIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdTasteWidgetKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget', args] as const
}

export function useGetRecipesIdTasteWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
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
        ? getGetRecipesIdTasteWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].tasteWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdTasteWidget<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
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
        ? getGetRecipesIdTasteWidgetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id'].tasteWidget.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdTasteWidgetJsonKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget.json', args] as const
}

export function useGetRecipesIdTasteWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
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
        ? getGetRecipesIdTasteWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['tasteWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdTasteWidgetJson<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
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
        ? getGetRecipesIdTasteWidgetJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.recipes[':id']['tasteWidget.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecipesIdTasteWidgetPngKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget.png', args] as const
}

export function useGetRecipesIdTasteWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
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
        ? getGetRecipesIdTasteWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id']['tasteWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecipesIdTasteWidgetPng<TError = unknown>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
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
        ? getGetRecipesIdTasteWidgetPngKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recipes[':id']['tasteWidget.png'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersConnectKey() {
  return ['users', '/users/connect', 'POST'] as const
}

export function usePostUsersConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.connect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.connect.$post> }) =>
        parseResponse(client.users.connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
