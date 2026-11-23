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

export function getFoodConverseQueryKey(args: InferRequestType<typeof client.food.converse.$get>) {
  return ['food', '/food/converse', args] as const
}

export function getFoodConverseQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.converse.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodConverseQueryKey>
  >({
    queryKey: getFoodConverseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.converse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodConverse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.converse.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodConverseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodConverseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodConverse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.converse.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodConverseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodConverseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodConverseSuggestQueryKey(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
) {
  return ['food', '/food/converse/suggest', args] as const
}

export function getFoodConverseSuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodConverseSuggestQueryKey>
  >({
    queryKey: getFoodConverseSuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.converse.suggest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodConverseSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodConverseSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodConverseSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodConverseSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.converse.suggest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodConverseSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodConverseSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodCustomFoodsSearchQueryKey(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
) {
  return ['food', '/food/customFoods/search', args] as const
}

export function getFoodCustomFoodsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodCustomFoodsSearchQueryKey>
  >({
    queryKey: getFoodCustomFoodsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.customFoods.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodCustomFoodsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodCustomFoodsSearchQueryKey>
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
      ...getFoodCustomFoodsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodCustomFoodsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.customFoods.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodCustomFoodsSearchQueryKey>
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
      ...getFoodCustomFoodsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostFoodDetectMutationKey() {
  return ['food', '/food/detect', 'POST'] as const
}

export function getPostFoodDetectMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.detect.$post>>>>>,
    TError,
    InferRequestType<typeof client.food.detect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodDetectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.detect.$post>) {
      return parseResponse(client.food.detect.$post(args, options))
    },
  })
}

export function usePostFoodDetect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.detect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.food.detect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoodDetectMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoodImagesAnalyzeQueryKey(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
) {
  return ['food', '/food/images/analyze', args] as const
}

export function getFoodImagesAnalyzeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.images.analyze.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodImagesAnalyzeQueryKey>
  >({
    queryKey: getFoodImagesAnalyzeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.images.analyze.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodImagesAnalyze<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodImagesAnalyzeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodImagesAnalyzeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodImagesAnalyze<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.images.analyze.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodImagesAnalyzeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodImagesAnalyzeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodImagesClassifyQueryKey(
  args: InferRequestType<typeof client.food.images.classify.$get>,
) {
  return ['food', '/food/images/classify', args] as const
}

export function getFoodImagesClassifyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.images.classify.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodImagesClassifyQueryKey>
  >({
    queryKey: getFoodImagesClassifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.images.classify.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodImagesClassify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.images.classify.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodImagesClassifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodImagesClassifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodImagesClassify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.images.classify.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodImagesClassifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodImagesClassifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodIngredientsAutocompleteQueryKey(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
) {
  return ['food', '/food/ingredients/autocomplete', args] as const
}

export function getFoodIngredientsAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsAutocompleteQueryKey>
  >({
    queryKey: getFoodIngredientsAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients.autocomplete.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsAutocompleteQueryKey>
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
      ...getFoodIngredientsAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsAutocompleteQueryKey>
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
      ...getFoodIngredientsAutocompleteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostFoodIngredientsGlycemicLoadMutationKey() {
  return ['food', '/food/ingredients/glycemicLoad', 'POST'] as const
}

export function getPostFoodIngredientsGlycemicLoadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.glycemicLoad.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.food.ingredients.glycemicLoad.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodIngredientsGlycemicLoadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.ingredients.glycemicLoad.$post>) {
      return parseResponse(client.food.ingredients.glycemicLoad.$post(args, options))
    },
  })
}

export function usePostFoodIngredientsGlycemicLoad<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.ingredients.glycemicLoad.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.food.ingredients.glycemicLoad.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoodIngredientsGlycemicLoadMutationOptions<
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

export function getPostFoodIngredientsMapMutationKey() {
  return ['food', '/food/ingredients/map', 'POST'] as const
}

export function getPostFoodIngredientsMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.map.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.food.ingredients.map.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodIngredientsMapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.ingredients.map.$post>) {
      return parseResponse(client.food.ingredients.map.$post(args, options))
    },
  })
}

export function usePostFoodIngredientsMap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.map.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.food.ingredients.map.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoodIngredientsMapMutationOptions<TError, TOnMutateResult>(
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

export function getFoodIngredientsSearchQueryKey(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
) {
  return ['food', '/food/ingredients/search', args] as const
}

export function getFoodIngredientsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsSearchQueryKey>
  >({
    queryKey: getFoodIngredientsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsSearchQueryKey>
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
      ...getFoodIngredientsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsSearchQueryKey>
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
      ...getFoodIngredientsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodIngredientsSubstitutesQueryKey(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
) {
  return ['food', '/food/ingredients/substitutes', args] as const
}

export function getFoodIngredientsSubstitutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsSubstitutesQueryKey>
  >({
    queryKey: getFoodIngredientsSubstitutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients.substitutes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsSubstitutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsSubstitutesQueryKey>
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
      ...getFoodIngredientsSubstitutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsSubstitutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.ingredients.substitutes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsSubstitutesQueryKey>
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
      ...getFoodIngredientsSubstitutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodIngredientsIdAmountQueryKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
) {
  return ['food', '/food/ingredients/:id/amount', args] as const
}

export function getFoodIngredientsIdAmountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdAmountQueryKey>
  >({
    queryKey: getFoodIngredientsIdAmountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients[':id'].amount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsIdAmount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdAmountQueryKey>
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
      ...getFoodIngredientsIdAmountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsIdAmount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdAmountQueryKey>
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
      ...getFoodIngredientsIdAmountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodIngredientsIdInformationQueryKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
) {
  return ['food', '/food/ingredients/:id/information', args] as const
}

export function getFoodIngredientsIdInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdInformationQueryKey>
  >({
    queryKey: getFoodIngredientsIdInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients[':id'].information.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdInformationQueryKey>
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
      ...getFoodIngredientsIdInformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdInformationQueryKey>
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
      ...getFoodIngredientsIdInformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodIngredientsIdSubstitutesQueryKey(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
) {
  return ['food', '/food/ingredients/:id/substitutes', args] as const
}

export function getFoodIngredientsIdSubstitutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdSubstitutesQueryKey>
  >({
    queryKey: getFoodIngredientsIdSubstitutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.ingredients[':id'].substitutes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodIngredientsIdSubstitutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdSubstitutesQueryKey>
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
      ...getFoodIngredientsIdSubstitutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodIngredientsIdSubstitutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodIngredientsIdSubstitutesQueryKey>
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
      ...getFoodIngredientsIdSubstitutesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodJokesRandomQueryKey() {
  return ['food', '/food/jokes/random'] as const
}

export function getFoodJokesRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodJokesRandomQueryKey>
  >({
    queryKey: getFoodJokesRandomQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.food.jokes.random.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodJokesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodJokesRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodJokesRandomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodJokesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodJokesRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodJokesRandomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodMenuItemsSearchQueryKey(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
) {
  return ['food', '/food/menuItems/search', args] as const
}

export function getFoodMenuItemsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsSearchQueryKey>
  >({
    queryKey: getFoodMenuItemsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodMenuItemsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodMenuItemsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodMenuItemsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodMenuItemsSuggestQueryKey(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
) {
  return ['food', '/food/menuItems/suggest', args] as const
}

export function getFoodMenuItemsSuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsSuggestQueryKey>
  >({
    queryKey: getFoodMenuItemsSuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems.suggest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodMenuItemsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodMenuItemsSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.menuItems.suggest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodMenuItemsSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodMenuItemsIdQueryKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
) {
  return ['food', '/food/menuItems/:id', args] as const
}

export function getFoodMenuItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdQueryKey>
  >({
    queryKey: getFoodMenuItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodMenuItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodMenuItemsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodMenuItemsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionLabelQueryKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel', args] as const
}

export function getFoodMenuItemsIdNutritionLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionLabelQueryKey>
  >({
    queryKey: getFoodMenuItemsIdNutritionLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems[':id'].nutritionLabel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodMenuItemsIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionLabelQueryKey>
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
      ...getFoodMenuItemsIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionLabelQueryKey>
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
      ...getFoodMenuItemsIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionLabelPngQueryKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel.png', args] as const
}

export function getFoodMenuItemsIdNutritionLabelPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionLabelPngQueryKey>
  >({
    queryKey: getFoodMenuItemsIdNutritionLabelPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems[':id']['nutritionLabel.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodMenuItemsIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionLabelPngQueryKey>
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
      ...getFoodMenuItemsIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionLabelPngQueryKey>
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
      ...getFoodMenuItemsIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionWidgetQueryKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['food', '/food/menuItems/:id/nutritionWidget', keyArgs] as const
}

export function getFoodMenuItemsIdNutritionWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionWidgetQueryKey>
  >({
    queryKey: getFoodMenuItemsIdNutritionWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems[':id'].nutritionWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodMenuItemsIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionWidgetQueryKey>
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
      ...getFoodMenuItemsIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionWidgetQueryKey>
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
      ...getFoodMenuItemsIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionWidgetPngQueryKey(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['food', '/food/menuItems/:id/nutritionWidget.png', args] as const
}

export function getFoodMenuItemsIdNutritionWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionWidgetPngQueryKey>
  >({
    queryKey: getFoodMenuItemsIdNutritionWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.menuItems[':id']['nutritionWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodMenuItemsIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionWidgetPngQueryKey>
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
      ...getFoodMenuItemsIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodMenuItemsIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodMenuItemsIdNutritionWidgetPngQueryKey>
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
      ...getFoodMenuItemsIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostFoodProductsClassifyMutationKey() {
  return ['food', '/food/products/classify', 'POST'] as const
}

export function getPostFoodProductsClassifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.classify.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.food.products.classify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodProductsClassifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.products.classify.$post>) {
      return parseResponse(client.food.products.classify.$post(args, options))
    },
  })
}

export function usePostFoodProductsClassify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.products.classify.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.food.products.classify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoodProductsClassifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostFoodProductsClassifyBatchMutationKey() {
  return ['food', '/food/products/classifyBatch', 'POST'] as const
}

export function getPostFoodProductsClassifyBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.classifyBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.food.products.classifyBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoodProductsClassifyBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.food.products.classifyBatch.$post>) {
      return parseResponse(client.food.products.classifyBatch.$post(args, options))
    },
  })
}

export function usePostFoodProductsClassifyBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.food.products.classifyBatch.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.food.products.classifyBatch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoodProductsClassifyBatchMutationOptions<TError, TOnMutateResult>(
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

export function getFoodProductsSearchQueryKey(
  args: InferRequestType<typeof client.food.products.search.$get>,
) {
  return ['food', '/food/products/search', args] as const
}

export function getFoodProductsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.products.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsSearchQueryKey>
  >({
    queryKey: getFoodProductsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodProductsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.products.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodProductsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodProductsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.products.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodProductsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodProductsSuggestQueryKey(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
) {
  return ['food', '/food/products/suggest', args] as const
}

export function getFoodProductsSuggestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsSuggestQueryKey>
  >({
    queryKey: getFoodProductsSuggestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products.suggest.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodProductsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodProductsSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodProductsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.products.suggest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsSuggestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodProductsSuggestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodProductsUpcUpcQueryKey(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
) {
  return ['food', '/food/products/upc/:upc', args] as const
}

export function getFoodProductsUpcUpcQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsUpcUpcQueryKey>
  >({
    queryKey: getFoodProductsUpcUpcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products.upc[':upc'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsUpcUpc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsUpcUpcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodProductsUpcUpcQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodProductsUpcUpc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsUpcUpcQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodProductsUpcUpcQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodProductsUpcUpcComparableQueryKey(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
) {
  return ['food', '/food/products/upc/:upc/comparable', args] as const
}

export function getFoodProductsUpcUpcComparableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsUpcUpcComparableQueryKey>
  >({
    queryKey: getFoodProductsUpcUpcComparableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products.upc[':upc'].comparable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsUpcUpcComparable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsUpcUpcComparableQueryKey>
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
      ...getFoodProductsUpcUpcComparableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodProductsUpcUpcComparable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsUpcUpcComparableQueryKey>
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
      ...getFoodProductsUpcUpcComparableQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodProductsIdQueryKey(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
) {
  return ['food', '/food/products/:id', args] as const
}

export function getFoodProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdQueryKey>
  >({
    queryKey: getFoodProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodProductsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodProductsIdNutritionLabelQueryKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionLabel', args] as const
}

export function getFoodProductsIdNutritionLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionLabelQueryKey>
  >({
    queryKey: getFoodProductsIdNutritionLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products[':id'].nutritionLabel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionLabelQueryKey>
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
      ...getFoodProductsIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodProductsIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionLabelQueryKey>
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
      ...getFoodProductsIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionLabelPngQueryKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionLabel.png', args] as const
}

export function getFoodProductsIdNutritionLabelPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionLabelPngQueryKey>
  >({
    queryKey: getFoodProductsIdNutritionLabelPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products[':id']['nutritionLabel.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionLabelPngQueryKey>
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
      ...getFoodProductsIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodProductsIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionLabelPngQueryKey>
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
      ...getFoodProductsIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionWidgetQueryKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['food', '/food/products/:id/nutritionWidget', keyArgs] as const
}

export function getFoodProductsIdNutritionWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionWidgetQueryKey>
  >({
    queryKey: getFoodProductsIdNutritionWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products[':id'].nutritionWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionWidgetQueryKey>
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
      ...getFoodProductsIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodProductsIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionWidgetQueryKey>
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
      ...getFoodProductsIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionWidgetPngQueryKey(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['food', '/food/products/:id/nutritionWidget.png', args] as const
}

export function getFoodProductsIdNutritionWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionWidgetPngQueryKey>
  >({
    queryKey: getFoodProductsIdNutritionWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.products[':id']['nutritionWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodProductsIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionWidgetPngQueryKey>
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
      ...getFoodProductsIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodProductsIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodProductsIdNutritionWidgetPngQueryKey>
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
      ...getFoodProductsIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodRestaurantsSearchQueryKey(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
) {
  return ['food', '/food/restaurants/search', args] as const
}

export function getFoodRestaurantsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodRestaurantsSearchQueryKey>
  >({
    queryKey: getFoodRestaurantsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.restaurants.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodRestaurantsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodRestaurantsSearchQueryKey>
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
      ...getFoodRestaurantsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodRestaurantsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.restaurants.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodRestaurantsSearchQueryKey>
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
      ...getFoodRestaurantsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFoodSearchQueryKey(args: InferRequestType<typeof client.food.search.$get>) {
  return ['food', '/food/search', args] as const
}

export function getFoodSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodSearchQueryKey>
  >({
    queryKey: getFoodSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodSiteSearchQueryKey(
  args: InferRequestType<typeof client.food.site.search.$get>,
) {
  return ['food', '/food/site/search', args] as const
}

export function getFoodSiteSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.site.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodSiteSearchQueryKey>
  >({
    queryKey: getFoodSiteSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.site.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodSiteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.site.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodSiteSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodSiteSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodSiteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.site.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodSiteSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodSiteSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodTriviaRandomQueryKey() {
  return ['food', '/food/trivia/random'] as const
}

export function getFoodTriviaRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodTriviaRandomQueryKey>
  >({
    queryKey: getFoodTriviaRandomQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.food.trivia.random.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodTriviaRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodTriviaRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodTriviaRandomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodTriviaRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodTriviaRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodTriviaRandomQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodVideosSearchQueryKey(
  args: InferRequestType<typeof client.food.videos.search.$get>,
) {
  return ['food', '/food/videos/search', args] as const
}

export function getFoodVideosSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.videos.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodVideosSearchQueryKey>
  >({
    queryKey: getFoodVideosSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.videos.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodVideosSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.videos.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodVideosSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodVideosSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodVideosSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.videos.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodVideosSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodVideosSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodWineDescriptionQueryKey(
  args: InferRequestType<typeof client.food.wine.description.$get>,
) {
  return ['food', '/food/wine/description', args] as const
}

export function getFoodWineDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineDescriptionQueryKey>
  >({
    queryKey: getFoodWineDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.wine.description.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodWineDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineDescriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodWineDescriptionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodWineDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.description.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineDescriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodWineDescriptionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodWineDishesQueryKey(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
) {
  return ['food', '/food/wine/dishes', args] as const
}

export function getFoodWineDishesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.wine.dishes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineDishesQueryKey>
  >({
    queryKey: getFoodWineDishesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.wine.dishes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodWineDishes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineDishesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodWineDishesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodWineDishes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.dishes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineDishesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodWineDishesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodWinePairingQueryKey(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
) {
  return ['food', '/food/wine/pairing', args] as const
}

export function getFoodWinePairingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.food.wine.pairing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWinePairingQueryKey>
  >({
    queryKey: getFoodWinePairingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.wine.pairing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFoodWinePairing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWinePairingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFoodWinePairingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFoodWinePairing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.pairing.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWinePairingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFoodWinePairingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFoodWineRecommendationQueryKey(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
) {
  return ['food', '/food/wine/recommendation', args] as const
}

export function getFoodWineRecommendationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineRecommendationQueryKey>
  >({
    queryKey: getFoodWineRecommendationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.food.wine.recommendation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFoodWineRecommendation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineRecommendationQueryKey>
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
      ...getFoodWineRecommendationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFoodWineRecommendation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.food.wine.recommendation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoodWineRecommendationQueryKey>
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
      ...getFoodWineRecommendationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMealplannerGenerateQueryKey(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
) {
  return ['mealplanner', '/mealplanner/generate', args] as const
}

export function getMealplannerGenerateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.mealplanner.generate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerGenerateQueryKey>
  >({
    queryKey: getMealplannerGenerateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mealplanner.generate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMealplannerGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerGenerateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMealplannerGenerateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMealplannerGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.mealplanner.generate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerGenerateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMealplannerGenerateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMealplannerUsernameDayDateMutationKey() {
  return ['mealplanner', '/mealplanner/:username/day/:date', 'DELETE'] as const
}

export function getDeleteMealplannerUsernameDayDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMealplannerUsernameDayDateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>,
    ) {
      return parseResponse(client.mealplanner[':username'].day[':date'].$delete(args, options))
    },
  })
}

export function useDeleteMealplannerUsernameDayDate<
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
                ReturnType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mealplanner)[':username']['day'][':date']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMealplannerUsernameDayDateMutationOptions<
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

export function getPostMealplannerUsernameItemsMutationKey() {
  return ['mealplanner', '/mealplanner/:username/items', 'POST'] as const
}

export function getPostMealplannerUsernameItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMealplannerUsernameItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']>,
    ) {
      return parseResponse(client.mealplanner[':username'].items.$post(args, options))
    },
  })
}

export function usePostMealplannerUsernameItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mealplanner)[':username']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMealplannerUsernameItemsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteMealplannerUsernameItemsIdMutationKey() {
  return ['mealplanner', '/mealplanner/:username/items/:id', 'DELETE'] as const
}

export function getDeleteMealplannerUsernameItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMealplannerUsernameItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>,
    ) {
      return parseResponse(client.mealplanner[':username'].items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMealplannerUsernameItemsId<
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
                ReturnType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mealplanner)[':username']['items'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMealplannerUsernameItemsIdMutationOptions<
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

export function getMealplannerUsernameShoppingListQueryKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/shopping-list', args] as const
}

export function getMealplannerUsernameShoppingListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameShoppingListQueryKey>
  >({
    queryKey: getMealplannerUsernameShoppingListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mealplanner[':username']['shopping-list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMealplannerUsernameShoppingList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameShoppingListQueryKey>
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
      ...getMealplannerUsernameShoppingListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMealplannerUsernameShoppingList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameShoppingListQueryKey>
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
      ...getMealplannerUsernameShoppingListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMealplannerUsernameShoppingListItemsMutationKey() {
  return ['mealplanner', '/mealplanner/:username/shopping-list/items', 'POST'] as const
}

export function getPostMealplannerUsernameShoppingListItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMealplannerUsernameShoppingListItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mealplanner)[':username']['shopping-list']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.mealplanner[':username']['shopping-list'].items.$post(args, options),
      )
    },
  })
}

export function usePostMealplannerUsernameShoppingListItems<
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
                ReturnType<
                  (typeof client.mealplanner)[':username']['shopping-list']['items']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mealplanner)[':username']['shopping-list']['items']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMealplannerUsernameShoppingListItemsMutationOptions<
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

export function getDeleteMealplannerUsernameShoppingListItemsIdMutationKey() {
  return ['mealplanner', '/mealplanner/:username/shopping-list/items/:id', 'DELETE'] as const
}

export function getDeleteMealplannerUsernameShoppingListItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMealplannerUsernameShoppingListItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.mealplanner[':username']['shopping-list'].items[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMealplannerUsernameShoppingListItemsId<
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
                ReturnType<
                  (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mealplanner)[':username']['shopping-list']['items'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMealplannerUsernameShoppingListItemsIdMutationOptions<
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

export function getPostMealplannerUsernameShoppingListStartDateEndDateMutationKey() {
  return [
    'mealplanner',
    '/mealplanner/:username/shopping-list/:start-date/:end-date',
    'POST',
  ] as const
}

export function getPostMealplannerUsernameShoppingListStartDateEndDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMealplannerUsernameShoppingListStartDateEndDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
      >,
    ) {
      return parseResponse(
        client.mealplanner[':username']['shopping-list'][':start-date'][':end-date'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMealplannerUsernameShoppingListStartDateEndDate<
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
                ReturnType<
                  (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.mealplanner)[':username']['shopping-list'][':start-date'][':end-date']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMealplannerUsernameShoppingListStartDateEndDateMutationOptions<
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

export function getMealplannerUsernameTemplatesQueryKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/templates', args] as const
}

export function getMealplannerUsernameTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameTemplatesQueryKey>
  >({
    queryKey: getMealplannerUsernameTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mealplanner[':username'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMealplannerUsernameTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameTemplatesQueryKey>
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
      ...getMealplannerUsernameTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMealplannerUsernameTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameTemplatesQueryKey>
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
      ...getMealplannerUsernameTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMealplannerUsernameTemplatesMutationKey() {
  return ['mealplanner', '/mealplanner/:username/templates', 'POST'] as const
}

export function getPostMealplannerUsernameTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMealplannerUsernameTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>,
    ) {
      return parseResponse(client.mealplanner[':username'].templates.$post(args, options))
    },
  })
}

export function usePostMealplannerUsernameTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mealplanner)[':username']['templates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMealplannerUsernameTemplatesMutationOptions<
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

export function getMealplannerUsernameTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/templates/:id', args] as const
}

export function getMealplannerUsernameTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameTemplatesIdQueryKey>
  >({
    queryKey: getMealplannerUsernameTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mealplanner[':username'].templates[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMealplannerUsernameTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameTemplatesIdQueryKey>
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
      ...getMealplannerUsernameTemplatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMealplannerUsernameTemplatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameTemplatesIdQueryKey>
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
      ...getMealplannerUsernameTemplatesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMealplannerUsernameTemplatesIdMutationKey() {
  return ['mealplanner', '/mealplanner/:username/templates/:id', 'DELETE'] as const
}

export function getDeleteMealplannerUsernameTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMealplannerUsernameTemplatesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.mealplanner)[':username']['templates'][':id']['$delete']
      >,
    ) {
      return parseResponse(client.mealplanner[':username'].templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMealplannerUsernameTemplatesId<
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
                ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMealplannerUsernameTemplatesIdMutationOptions<
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

export function getMealplannerUsernameWeekStartDateQueryKey(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
) {
  return ['mealplanner', '/mealplanner/:username/week/:start-date', args] as const
}

export function getMealplannerUsernameWeekStartDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameWeekStartDateQueryKey>
  >({
    queryKey: getMealplannerUsernameWeekStartDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mealplanner[':username'].week[':start-date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMealplannerUsernameWeekStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameWeekStartDateQueryKey>
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
      ...getMealplannerUsernameWeekStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMealplannerUsernameWeekStartDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMealplannerUsernameWeekStartDateQueryKey>
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
      ...getMealplannerUsernameWeekStartDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRecipesAnalyzeMutationKey() {
  return ['recipes', '/recipes/analyze', 'POST'] as const
}

export function getPostRecipesAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyze.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recipes.analyze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesAnalyzeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.analyze.$post>) {
      return parseResponse(client.recipes.analyze.$post(args, options))
    },
  })
}

export function usePostRecipesAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyze.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recipes.analyze.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesAnalyzeMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipesAnalyzeInstructionsMutationKey() {
  return ['recipes', '/recipes/analyzeInstructions', 'POST'] as const
}

export function getPostRecipesAnalyzeInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyzeInstructions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.analyzeInstructions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesAnalyzeInstructionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.analyzeInstructions.$post>) {
      return parseResponse(client.recipes.analyzeInstructions.$post(args, options))
    },
  })
}

export function usePostRecipesAnalyzeInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipes.analyzeInstructions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.analyzeInstructions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesAnalyzeInstructionsMutationOptions<
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

export function getRecipesAutocompleteQueryKey(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
) {
  return ['recipes', '/recipes/autocomplete', args] as const
}

export function getRecipesAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.autocomplete.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesAutocompleteQueryKey>
  >({
    queryKey: getRecipesAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.autocomplete.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesAutocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesAutocompleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesAutocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.autocomplete.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesAutocompleteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesAutocompleteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesComplexSearchQueryKey(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
) {
  return ['recipes', '/recipes/complexSearch', args] as const
}

export function getRecipesComplexSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesComplexSearchQueryKey>
  >({
    queryKey: getRecipesComplexSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.complexSearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesComplexSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesComplexSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesComplexSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesComplexSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.complexSearch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesComplexSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesComplexSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesConvertQueryKey(
  args: InferRequestType<typeof client.recipes.convert.$get>,
) {
  return ['recipes', '/recipes/convert', args] as const
}

export function getRecipesConvertQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.convert.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesConvertQueryKey>
  >({
    queryKey: getRecipesConvertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.convert.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.convert.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesConvertQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesConvertQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.convert.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesConvertQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesConvertQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRecipesCuisineMutationKey() {
  return ['recipes', '/recipes/cuisine', 'POST'] as const
}

export function getPostRecipesCuisineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.cuisine.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recipes.cuisine.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesCuisineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.cuisine.$post>) {
      return parseResponse(client.recipes.cuisine.$post(args, options))
    },
  })
}

export function usePostRecipesCuisine<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.cuisine.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recipes.cuisine.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesCuisineMutationOptions<TError, TOnMutateResult>(
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

export function getRecipesExtractQueryKey(
  args: InferRequestType<typeof client.recipes.extract.$get>,
) {
  return ['recipes', '/recipes/extract', args] as const
}

export function getRecipesExtractQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.extract.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesExtractQueryKey>
  >({
    queryKey: getRecipesExtractQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.extract.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesExtract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.extract.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesExtractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesExtractQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesExtract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.extract.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesExtractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesExtractQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesFindByIngredientsQueryKey(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
) {
  return ['recipes', '/recipes/findByIngredients', args] as const
}

export function getRecipesFindByIngredientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesFindByIngredientsQueryKey>
  >({
    queryKey: getRecipesFindByIngredientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.findByIngredients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesFindByIngredients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesFindByIngredientsQueryKey>
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
      ...getRecipesFindByIngredientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesFindByIngredients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByIngredients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesFindByIngredientsQueryKey>
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
      ...getRecipesFindByIngredientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesFindByNutrientsQueryKey(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
) {
  return ['recipes', '/recipes/findByNutrients', args] as const
}

export function getRecipesFindByNutrientsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesFindByNutrientsQueryKey>
  >({
    queryKey: getRecipesFindByNutrientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.findByNutrients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesFindByNutrients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesFindByNutrientsQueryKey>
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
      ...getRecipesFindByNutrientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesFindByNutrients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.findByNutrients.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesFindByNutrientsQueryKey>
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
      ...getRecipesFindByNutrientsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesGuessNutritionQueryKey(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
) {
  return ['recipes', '/recipes/guessNutrition', args] as const
}

export function getRecipesGuessNutritionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesGuessNutritionQueryKey>
  >({
    queryKey: getRecipesGuessNutritionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.guessNutrition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesGuessNutrition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesGuessNutritionQueryKey>
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
      ...getRecipesGuessNutritionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesGuessNutrition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.guessNutrition.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesGuessNutritionQueryKey>
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
      ...getRecipesGuessNutritionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesInformationBulkQueryKey(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
) {
  return ['recipes', '/recipes/informationBulk', args] as const
}

export function getRecipesInformationBulkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesInformationBulkQueryKey>
  >({
    queryKey: getRecipesInformationBulkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.informationBulk.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesInformationBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesInformationBulkQueryKey>
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
      ...getRecipesInformationBulkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesInformationBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.informationBulk.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesInformationBulkQueryKey>
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
      ...getRecipesInformationBulkQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRecipesParseIngredientsMutationKey() {
  return ['recipes', '/recipes/parseIngredients', 'POST'] as const
}

export function getPostRecipesParseIngredientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.parseIngredients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.parseIngredients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesParseIngredientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.parseIngredients.$post>) {
      return parseResponse(client.recipes.parseIngredients.$post(args, options))
    },
  })
}

export function usePostRecipesParseIngredients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.parseIngredients.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.parseIngredients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesParseIngredientsMutationOptions<TError, TOnMutateResult>(
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

export function getRecipesQueriesAnalyzeQueryKey(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
) {
  return ['recipes', '/recipes/queries/analyze', args] as const
}

export function getRecipesQueriesAnalyzeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesQueriesAnalyzeQueryKey>
  >({
    queryKey: getRecipesQueriesAnalyzeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.queries.analyze.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesQueriesAnalyze<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesQueriesAnalyzeQueryKey>
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
      ...getRecipesQueriesAnalyzeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesQueriesAnalyze<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.queries.analyze.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesQueriesAnalyzeQueryKey>
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
      ...getRecipesQueriesAnalyzeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesQuickAnswerQueryKey(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
) {
  return ['recipes', '/recipes/quickAnswer', args] as const
}

export function getRecipesQuickAnswerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.quickAnswer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesQuickAnswerQueryKey>
  >({
    queryKey: getRecipesQuickAnswerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.quickAnswer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesQuickAnswer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesQuickAnswerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesQuickAnswerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesQuickAnswer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.quickAnswer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesQuickAnswerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesQuickAnswerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesRandomQueryKey(
  args: InferRequestType<typeof client.recipes.random.$get>,
) {
  return ['recipes', '/recipes/random', args] as const
}

export function getRecipesRandomQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.random.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRandomQueryKey>
  >({
    queryKey: getRecipesRandomQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.random.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.random.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recipes.random.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesRandomQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesRandomQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRecipesVisualizeEquipmentMutationKey() {
  return ['recipes', '/recipes/visualizeEquipment', 'POST'] as const
}

export function getPostRecipesVisualizeEquipmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeEquipment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizeEquipment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizeEquipmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizeEquipment.$post>) {
      return parseResponse(client.recipes.visualizeEquipment.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizeEquipment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipes.visualizeEquipment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizeEquipment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizeEquipmentMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipesVisualizeIngredientsMutationKey() {
  return ['recipes', '/recipes/visualizeIngredients', 'POST'] as const
}

export function getPostRecipesVisualizeIngredientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeIngredients.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizeIngredients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizeIngredientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizeIngredients.$post>) {
      return parseResponse(client.recipes.visualizeIngredients.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizeIngredients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipes.visualizeIngredients.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizeIngredients.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizeIngredientsMutationOptions<
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

export function getPostRecipesVisualizeNutritionMutationKey() {
  return ['recipes', '/recipes/visualizeNutrition', 'POST'] as const
}

export function getPostRecipesVisualizeNutritionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeNutrition.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizeNutrition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizeNutritionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizeNutrition.$post>) {
      return parseResponse(client.recipes.visualizeNutrition.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizeNutrition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipes.visualizeNutrition.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizeNutrition.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizeNutritionMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipesVisualizePriceEstimatorMutationKey() {
  return ['recipes', '/recipes/visualizePriceEstimator', 'POST'] as const
}

export function getPostRecipesVisualizePriceEstimatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.recipes.visualizePriceEstimator.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizePriceEstimator.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizePriceEstimatorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizePriceEstimator.$post>) {
      return parseResponse(client.recipes.visualizePriceEstimator.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizePriceEstimator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.recipes.visualizePriceEstimator.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizePriceEstimator.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizePriceEstimatorMutationOptions<
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

export function getPostRecipesVisualizeRecipeMutationKey() {
  return ['recipes', '/recipes/visualizeRecipe', 'POST'] as const
}

export function getPostRecipesVisualizeRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeRecipe.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizeRecipe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizeRecipeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizeRecipe.$post>) {
      return parseResponse(client.recipes.visualizeRecipe.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizeRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeRecipe.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizeRecipe.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizeRecipeMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipesVisualizeTasteMutationKey() {
  return ['recipes', '/recipes/visualizeTaste', 'POST'] as const
}

export function getPostRecipesVisualizeTasteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeTaste.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.recipes.visualizeTaste.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesVisualizeTasteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.visualizeTaste.$post>) {
      return parseResponse(client.recipes.visualizeTaste.$post(args, options))
    },
  })
}

export function usePostRecipesVisualizeTaste<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.recipes.visualizeTaste.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.recipes.visualizeTaste.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecipesVisualizeTasteMutationOptions<TError, TOnMutateResult>(
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

export function getRecipesIdAnalyzedInstructionsQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
) {
  return ['recipes', '/recipes/:id/analyzedInstructions', args] as const
}

export function getRecipesIdAnalyzedInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdAnalyzedInstructionsQueryKey>
  >({
    queryKey: getRecipesIdAnalyzedInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].analyzedInstructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdAnalyzedInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdAnalyzedInstructionsQueryKey>
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
      ...getRecipesIdAnalyzedInstructionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdAnalyzedInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdAnalyzedInstructionsQueryKey>
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
      ...getRecipesIdAnalyzedInstructionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdCardQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
) {
  return ['recipes', '/recipes/:id/card', args] as const
}

export function getRecipesIdCardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdCardQueryKey>
  >({
    queryKey: getRecipesIdCardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].card.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRecipesIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['card']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdCardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesIdCardQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget', args] as const
}

export function getRecipesIdEquipmentWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetQueryKey>
  >({
    queryKey: getRecipesIdEquipmentWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].equipmentWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdEquipmentWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetQueryKey>
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
      ...getRecipesIdEquipmentWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdEquipmentWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetQueryKey>
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
      ...getRecipesIdEquipmentWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetJsonQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.json', args] as const
}

export function getRecipesIdEquipmentWidgetJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetJsonQueryKey>
  >({
    queryKey: getRecipesIdEquipmentWidgetJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['equipmentWidget.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdEquipmentWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetJsonQueryKey>
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
      ...getRecipesIdEquipmentWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdEquipmentWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetJsonQueryKey>
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
      ...getRecipesIdEquipmentWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.png', args] as const
}

export function getRecipesIdEquipmentWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetPngQueryKey>
  >({
    queryKey: getRecipesIdEquipmentWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['equipmentWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdEquipmentWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetPngQueryKey>
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
      ...getRecipesIdEquipmentWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdEquipmentWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdEquipmentWidgetPngQueryKey>
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
      ...getRecipesIdEquipmentWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdInformationQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
) {
  return ['recipes', '/recipes/:id/information', args] as const
}

export function getRecipesIdInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdInformationQueryKey>
  >({
    queryKey: getRecipesIdInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].information.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesIdInformationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['information']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdInformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesIdInformationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget', args] as const
}

export function getRecipesIdIngredientWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetQueryKey>
  >({
    queryKey: getRecipesIdIngredientWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].ingredientWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdIngredientWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetQueryKey>
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
      ...getRecipesIdIngredientWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdIngredientWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetQueryKey>
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
      ...getRecipesIdIngredientWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetJsonQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.json', args] as const
}

export function getRecipesIdIngredientWidgetJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetJsonQueryKey>
  >({
    queryKey: getRecipesIdIngredientWidgetJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['ingredientWidget.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdIngredientWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetJsonQueryKey>
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
      ...getRecipesIdIngredientWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdIngredientWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetJsonQueryKey>
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
      ...getRecipesIdIngredientWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.png', args] as const
}

export function getRecipesIdIngredientWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetPngQueryKey>
  >({
    queryKey: getRecipesIdIngredientWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['ingredientWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdIngredientWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetPngQueryKey>
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
      ...getRecipesIdIngredientWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdIngredientWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdIngredientWidgetPngQueryKey>
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
      ...getRecipesIdIngredientWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdNutritionLabelQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionLabel', args] as const
}

export function getRecipesIdNutritionLabelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionLabelQueryKey>
  >({
    queryKey: getRecipesIdNutritionLabelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].nutritionLabel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionLabelQueryKey>
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
      ...getRecipesIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdNutritionLabel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionLabelQueryKey>
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
      ...getRecipesIdNutritionLabelQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdNutritionLabelPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionLabel.png', args] as const
}

export function getRecipesIdNutritionLabelPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionLabelPngQueryKey>
  >({
    queryKey: getRecipesIdNutritionLabelPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['nutritionLabel.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionLabelPngQueryKey>
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
      ...getRecipesIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdNutritionLabelPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionLabelPngQueryKey>
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
      ...getRecipesIdNutritionLabelPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipes', '/recipes/:id/nutritionWidget', keyArgs] as const
}

export function getRecipesIdNutritionWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetQueryKey>
  >({
    queryKey: getRecipesIdNutritionWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].nutritionWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetQueryKey>
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
      ...getRecipesIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdNutritionWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetQueryKey>
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
      ...getRecipesIdNutritionWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetJsonQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.json', args] as const
}

export function getRecipesIdNutritionWidgetJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetJsonQueryKey>
  >({
    queryKey: getRecipesIdNutritionWidgetJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['nutritionWidget.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdNutritionWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetJsonQueryKey>
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
      ...getRecipesIdNutritionWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdNutritionWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetJsonQueryKey>
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
      ...getRecipesIdNutritionWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.png', args] as const
}

export function getRecipesIdNutritionWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetPngQueryKey>
  >({
    queryKey: getRecipesIdNutritionWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['nutritionWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetPngQueryKey>
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
      ...getRecipesIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdNutritionWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdNutritionWidgetPngQueryKey>
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
      ...getRecipesIdNutritionWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget', args] as const
}

export function getRecipesIdPriceBreakdownWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetQueryKey>
  >({
    queryKey: getRecipesIdPriceBreakdownWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].priceBreakdownWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdPriceBreakdownWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdPriceBreakdownWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetJsonQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.json', args] as const
}

export function getRecipesIdPriceBreakdownWidgetJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetJsonQueryKey>
  >({
    queryKey: getRecipesIdPriceBreakdownWidgetJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['priceBreakdownWidget.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdPriceBreakdownWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetJsonQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdPriceBreakdownWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetJsonQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.png', args] as const
}

export function getRecipesIdPriceBreakdownWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetPngQueryKey>
  >({
    queryKey: getRecipesIdPriceBreakdownWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['priceBreakdownWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdPriceBreakdownWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetPngQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdPriceBreakdownWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdPriceBreakdownWidgetPngQueryKey>
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
      ...getRecipesIdPriceBreakdownWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdSimilarQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
) {
  return ['recipes', '/recipes/:id/similar', args] as const
}

export function getRecipesIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdSimilarQueryKey>
  >({
    queryKey: getRecipesIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesIdSimilarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesIdSimilarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesIdSummaryQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
) {
  return ['recipes', '/recipes/:id/summary', args] as const
}

export function getRecipesIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdSummaryQueryKey>
  >({
    queryKey: getRecipesIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesIdSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesIdSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget', args] as const
}

export function getRecipesIdTasteWidgetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetQueryKey>
  >({
    queryKey: getRecipesIdTasteWidgetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id'].tasteWidget.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdTasteWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRecipesIdTasteWidgetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRecipesIdTasteWidget<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRecipesIdTasteWidgetQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetJsonQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget.json', args] as const
}

export function getRecipesIdTasteWidgetJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetJsonQueryKey>
  >({
    queryKey: getRecipesIdTasteWidgetJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['tasteWidget.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdTasteWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetJsonQueryKey>
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
      ...getRecipesIdTasteWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdTasteWidgetJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetJsonQueryKey>
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
      ...getRecipesIdTasteWidgetJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetPngQueryKey(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
) {
  return ['recipes', '/recipes/:id/tasteWidget.png', args] as const
}

export function getRecipesIdTasteWidgetPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetPngQueryKey>
  >({
    queryKey: getRecipesIdTasteWidgetPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':id']['tasteWidget.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRecipesIdTasteWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetPngQueryKey>
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
      ...getRecipesIdTasteWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRecipesIdTasteWidgetPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesIdTasteWidgetPngQueryKey>
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
      ...getRecipesIdTasteWidgetPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsersConnectMutationKey() {
  return ['users', '/users/connect', 'POST'] as const
}

export function getPostUsersConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.connect.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.connect.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersConnectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.connect.$post>) {
      return parseResponse(client.users.connect.$post(args, options))
    },
  })
}

export function usePostUsersConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.connect.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.connect.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersConnectMutationOptions<TError, TOnMutateResult>(
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
