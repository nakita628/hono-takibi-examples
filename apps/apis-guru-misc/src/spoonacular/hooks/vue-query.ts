import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
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

export function getMealplannerKey() {
  return ['mealplanner'] as const
}

export function getRecipesKey() {
  return ['recipes'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getFoodConverseQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.$get>>,
) {
  return ['food', '/food/converse', toValue(args)] as const
}

export function getFoodConverseQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodConverseQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.converse.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodConverse<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
          >,
          ReturnType<typeof getFoodConverseQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodConverseQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodConverseQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.converse.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodConverseSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.suggest.$get>>,
) {
  return ['food', '/food/converse/suggest', toValue(args)] as const
}

export function getFoodConverseSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodConverseSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.converse.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodConverseSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.converse.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
            >
          >,
          ReturnType<typeof getFoodConverseSuggestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.converse.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodConverseSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodConverseSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.converse.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodCustomFoodsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.customFoods.search.$get>>,
) {
  return ['food', '/food/customFoods/search', toValue(args)] as const
}

export function getFoodCustomFoodsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.customFoods.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodCustomFoodsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.customFoods.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodCustomFoodsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.customFoods.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodCustomFoodsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.customFoods.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodCustomFoodsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodCustomFoodsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.customFoods.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.detect.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.food.detect.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.analyze.$get>>,
) {
  return ['food', '/food/images/analyze', toValue(args)] as const
}

export function getFoodImagesAnalyzeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.analyze.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodImagesAnalyzeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.images.analyze.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodImagesAnalyze<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.analyze.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>
            >
          >,
          ReturnType<typeof getFoodImagesAnalyzeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.analyze.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodImagesAnalyzeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodImagesAnalyzeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.images.analyze.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodImagesClassifyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.classify.$get>>,
) {
  return ['food', '/food/images/classify', toValue(args)] as const
}

export function getFoodImagesClassifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.classify.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodImagesClassifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.images.classify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodImagesClassify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.images.classify.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>
            >
          >,
          ReturnType<typeof getFoodImagesClassifyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.images.classify.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodImagesClassifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodImagesClassifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.images.classify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientsAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.autocomplete.$get>>,
) {
  return ['food', '/food/ingredients/autocomplete', toValue(args)] as const
}

export function getFoodIngredientsAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients.autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodIngredientsAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientsAutocompleteQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.autocomplete.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients.autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.search.$get>>,
) {
  return ['food', '/food/ingredients/search', toValue(args)] as const
}

export function getFoodIngredientsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodIngredientsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodIngredientsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientsSubstitutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.substitutes.$get>>,
) {
  return ['food', '/food/ingredients/substitutes', toValue(args)] as const
}

export function getFoodIngredientsSubstitutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.substitutes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsSubstitutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients.substitutes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodIngredientsSubstitutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.ingredients.substitutes.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientsSubstitutesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.ingredients.substitutes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsSubstitutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsSubstitutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients.substitutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientsIdAmountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>
  >,
) {
  return ['food', '/food/ingredients/:id/amount', toValue(args)] as const
}

export function getFoodIngredientsIdAmountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsIdAmountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients[':id'].amount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['amount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientsIdAmountQueryKey>
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
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['amount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdAmountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsIdAmountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients[':id'].amount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientsIdInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>
  >,
) {
  return ['food', '/food/ingredients/:id/information', toValue(args)] as const
}

export function getFoodIngredientsIdInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsIdInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients[':id'].information.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['information']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientsIdInformationQueryKey>
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
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsIdInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients[':id'].information.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodIngredientsIdSubstitutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>
  >,
) {
  return ['food', '/food/ingredients/:id/substitutes', toValue(args)] as const
}

export function getFoodIngredientsIdSubstitutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodIngredientsIdSubstitutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.ingredients[':id'].substitutes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodIngredientsIdSubstitutesQueryKey>
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
          Awaited<ReturnType<(typeof client.food.ingredients)[':id']['substitutes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodIngredientsIdSubstitutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodIngredientsIdSubstitutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.ingredients[':id'].substitutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodJokesRandomQueryKey() {
  return ['food', '/food/jokes/random'] as const
}

export function getFoodJokesRandomQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFoodJokesRandomQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.jokes.random.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodJokesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>
            >
          >,
          ReturnType<typeof getFoodJokesRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.jokes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodJokesRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFoodJokesRandomQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.food.jokes.random.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.search.$get>>,
) {
  return ['food', '/food/menuItems/search', toValue(args)] as const
}

export function getFoodMenuItemsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodMenuItemsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodMenuItemsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.suggest.$get>>,
) {
  return ['food', '/food/menuItems/suggest', toValue(args)] as const
}

export function getFoodMenuItemsSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodMenuItemsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.menuItems.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
            >
          >,
          ReturnType<typeof getFoodMenuItemsSuggestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.menuItems.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.menuItems)[':id']['$get']>>,
) {
  return ['food', '/food/menuItems/:id', toValue(args)] as const
}

export function getFoodMenuItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.menuItems)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodMenuItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.menuItems)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodMenuItemsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.menuItems)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionLabelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>
  >,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel', toValue(args)] as const
}

export function getFoodMenuItemsIdNutritionLabelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsIdNutritionLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems[':id'].nutritionLabel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodMenuItemsIdNutritionLabelQueryKey>
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
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsIdNutritionLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems[':id'].nutritionLabel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionLabelPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
  >,
) {
  return ['food', '/food/menuItems/:id/nutritionLabel.png', toValue(args)] as const
}

export function getFoodMenuItemsIdNutritionLabelPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsIdNutritionLabelPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems[':id']['nutritionLabel.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFoodMenuItemsIdNutritionLabelPngQueryKey>
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
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionLabelPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsIdNutritionLabelPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems[':id']['nutritionLabel.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['food', '/food/menuItems/:id/nutritionWidget', keyArgs] as const
}

export function getFoodMenuItemsIdNutritionWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsIdNutritionWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems[':id'].nutritionWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFoodMenuItemsIdNutritionWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsIdNutritionWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems[':id'].nutritionWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodMenuItemsIdNutritionWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
  >,
) {
  return ['food', '/food/menuItems/:id/nutritionWidget.png', toValue(args)] as const
}

export function getFoodMenuItemsIdNutritionWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodMenuItemsIdNutritionWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.menuItems[':id']['nutritionWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFoodMenuItemsIdNutritionWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.food.menuItems)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodMenuItemsIdNutritionWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodMenuItemsIdNutritionWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.menuItems[':id']['nutritionWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.search.$get>>,
) {
  return ['food', '/food/products/search', toValue(args)] as const
}

export function getFoodProductsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodProductsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodProductsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsSuggestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.suggest.$get>>,
) {
  return ['food', '/food/products/suggest', toValue(args)] as const
}

export function getFoodProductsSuggestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.suggest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsSuggestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products.suggest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodProductsSuggest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.products.suggest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
            >
          >,
          ReturnType<typeof getFoodProductsSuggestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.products.suggest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsSuggestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsSuggestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products.suggest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsUpcUpcQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>>,
) {
  return ['food', '/food/products/upc/:upc', toValue(args)] as const
}

export function getFoodProductsUpcUpcQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsUpcUpcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products.upc[':upc'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodProductsUpcUpc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products.upc)[':upc']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodProductsUpcUpcQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsUpcUpcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsUpcUpcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products.upc[':upc'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsUpcUpcComparableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>
  >,
) {
  return ['food', '/food/products/upc/:upc/comparable', toValue(args)] as const
}

export function getFoodProductsUpcUpcComparableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsUpcUpcComparableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products.upc[':upc'].comparable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodProductsUpcUpcComparableQueryKey>
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
          Awaited<ReturnType<(typeof client.food.products.upc)[':upc']['comparable']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsUpcUpcComparableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsUpcUpcComparableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products.upc[':upc'].comparable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products)[':id']['$get']>>,
) {
  return ['food', '/food/products/:id', toValue(args)] as const
}

export function getFoodProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.food.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodProductsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.food.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionLabelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>
  >,
) {
  return ['food', '/food/products/:id/nutritionLabel', toValue(args)] as const
}

export function getFoodProductsIdNutritionLabelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsIdNutritionLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products[':id'].nutritionLabel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodProductsIdNutritionLabelQueryKey>
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
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsIdNutritionLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products[':id'].nutritionLabel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionLabelPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
  >,
) {
  return ['food', '/food/products/:id/nutritionLabel.png', toValue(args)] as const
}

export function getFoodProductsIdNutritionLabelPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsIdNutritionLabelPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products[':id']['nutritionLabel.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFoodProductsIdNutritionLabelPngQueryKey>
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
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionLabelPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsIdNutritionLabelPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products[':id']['nutritionLabel.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['food', '/food/products/:id/nutritionWidget', keyArgs] as const
}

export function getFoodProductsIdNutritionWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsIdNutritionWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products[':id'].nutritionWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoodProductsIdNutritionWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsIdNutritionWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products[':id'].nutritionWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodProductsIdNutritionWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
  >,
) {
  return ['food', '/food/products/:id/nutritionWidget.png', toValue(args)] as const
}

export function getFoodProductsIdNutritionWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodProductsIdNutritionWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.products[':id']['nutritionWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFoodProductsIdNutritionWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.food.products)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodProductsIdNutritionWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodProductsIdNutritionWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.products[':id']['nutritionWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodRestaurantsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.restaurants.search.$get>>,
) {
  return ['food', '/food/restaurants/search', toValue(args)] as const
}

export function getFoodRestaurantsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.restaurants.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodRestaurantsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.restaurants.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodRestaurantsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.restaurants.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodRestaurantsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.restaurants.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodRestaurantsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodRestaurantsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.restaurants.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
) {
  return ['food', '/food/search', toValue(args)] as const
}

export function getFoodSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFoodSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>
          >,
          ReturnType<typeof getFoodSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoodSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodSiteSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.site.search.$get>>,
) {
  return ['food', '/food/site/search', toValue(args)] as const
}

export function getFoodSiteSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.site.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodSiteSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.site.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodSiteSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.site.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodSiteSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.site.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodSiteSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodSiteSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.site.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodTriviaRandomQueryKey() {
  return ['food', '/food/trivia/random'] as const
}

export function getFoodTriviaRandomQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFoodTriviaRandomQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.trivia.random.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodTriviaRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>
            >
          >,
          ReturnType<typeof getFoodTriviaRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.trivia.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodTriviaRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFoodTriviaRandomQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.food.trivia.random.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodVideosSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.videos.search.$get>>,
) {
  return ['food', '/food/videos/search', toValue(args)] as const
}

export function getFoodVideosSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.videos.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodVideosSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.videos.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodVideosSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.videos.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>
            >
          >,
          ReturnType<typeof getFoodVideosSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.videos.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodVideosSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodVideosSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.videos.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodWineDescriptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.description.$get>>,
) {
  return ['food', '/food/wine/description', toValue(args)] as const
}

export function getFoodWineDescriptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.description.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodWineDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.wine.description.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodWineDescription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.description.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
            >
          >,
          ReturnType<typeof getFoodWineDescriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.description.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodWineDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.wine.description.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodWineDishesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.dishes.$get>>,
) {
  return ['food', '/food/wine/dishes', toValue(args)] as const
}

export function getFoodWineDishesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.dishes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodWineDishesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.wine.dishes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodWineDishes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.dishes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>
            >
          >,
          ReturnType<typeof getFoodWineDishesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.dishes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineDishesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodWineDishesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.wine.dishes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodWinePairingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.pairing.$get>>,
) {
  return ['food', '/food/wine/pairing', toValue(args)] as const
}

export function getFoodWinePairingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.pairing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodWinePairingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.wine.pairing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodWinePairing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.pairing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>
            >
          >,
          ReturnType<typeof getFoodWinePairingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.pairing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWinePairingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodWinePairingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.wine.pairing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFoodWineRecommendationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.recommendation.$get>>,
) {
  return ['food', '/food/wine/recommendation', toValue(args)] as const
}

export function getFoodWineRecommendationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.recommendation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoodWineRecommendationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.food.wine.recommendation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoodWineRecommendation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.food.wine.recommendation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
            >
          >,
          ReturnType<typeof getFoodWineRecommendationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.food.wine.recommendation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoodWineRecommendationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoodWineRecommendationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.food.wine.recommendation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMealplannerGenerateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mealplanner.generate.$get>>,
) {
  return ['mealplanner', '/mealplanner/generate', toValue(args)] as const
}

export function getMealplannerGenerateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mealplanner.generate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMealplannerGenerateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mealplanner.generate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMealplannerGenerate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.mealplanner.generate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>
            >
          >,
          ReturnType<typeof getMealplannerGenerateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mealplanner.generate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerGenerateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMealplannerGenerateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mealplanner.generate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>
  >,
) {
  return ['mealplanner', '/mealplanner/:username/shopping-list', toValue(args)] as const
}

export function getMealplannerUsernameShoppingListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMealplannerUsernameShoppingListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mealplanner[':username']['shopping-list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMealplannerUsernameShoppingListQueryKey>
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
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['shopping-list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameShoppingListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMealplannerUsernameShoppingListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mealplanner[':username']['shopping-list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>
  >,
) {
  return ['mealplanner', '/mealplanner/:username/templates', toValue(args)] as const
}

export function getMealplannerUsernameTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMealplannerUsernameTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mealplanner[':username'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMealplannerUsernameTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMealplannerUsernameTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mealplanner[':username'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
  >,
) {
  return ['mealplanner', '/mealplanner/:username/templates/:id', toValue(args)] as const
}

export function getMealplannerUsernameTemplatesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMealplannerUsernameTemplatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mealplanner[':username'].templates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMealplannerUsernameTemplatesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.mealplanner)[':username']['templates'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameTemplatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMealplannerUsernameTemplatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mealplanner[':username'].templates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.mealplanner)[':username']['templates'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.mealplanner)[':username']['templates'][':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
  >,
) {
  return ['mealplanner', '/mealplanner/:username/week/:start-date', toValue(args)] as const
}

export function getMealplannerUsernameWeekStartDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMealplannerUsernameWeekStartDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mealplanner[':username'].week[':start-date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.mealplanner)[':username']['week'][':start-date']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.mealplanner)[':username']['week'][':start-date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMealplannerUsernameWeekStartDateQueryKey>
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
          Awaited<
            ReturnType<(typeof client.mealplanner)[':username']['week'][':start-date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMealplannerUsernameWeekStartDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMealplannerUsernameWeekStartDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.mealplanner[':username'].week[':start-date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.analyze.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipes.analyze.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.autocomplete.$get>>,
) {
  return ['recipes', '/recipes/autocomplete', toValue(args)] as const
}

export function getRecipesAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.autocomplete.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.autocomplete.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesAutocomplete<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.autocomplete.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>
            >
          >,
          ReturnType<typeof getRecipesAutocompleteQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.autocomplete.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.autocomplete.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesComplexSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.complexSearch.$get>>,
) {
  return ['recipes', '/recipes/complexSearch', toValue(args)] as const
}

export function getRecipesComplexSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.complexSearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesComplexSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.complexSearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesComplexSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.complexSearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
            >
          >,
          ReturnType<typeof getRecipesComplexSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.complexSearch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesComplexSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesComplexSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.complexSearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesConvertQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.convert.$get>>,
) {
  return ['recipes', '/recipes/convert', toValue(args)] as const
}

export function getRecipesConvertQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.convert.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesConvertQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.convert.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.convert.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>
            >
          >,
          ReturnType<typeof getRecipesConvertQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.convert.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesConvertQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesConvertQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.convert.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.cuisine.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.recipes.cuisine.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.extract.$get>>,
) {
  return ['recipes', '/recipes/extract', toValue(args)] as const
}

export function getRecipesExtractQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.extract.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesExtractQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.extract.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesExtract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.extract.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>
            >
          >,
          ReturnType<typeof getRecipesExtractQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.extract.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesExtractQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesExtractQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.extract.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesFindByIngredientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByIngredients.$get>>,
) {
  return ['recipes', '/recipes/findByIngredients', toValue(args)] as const
}

export function getRecipesFindByIngredientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByIngredients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesFindByIngredientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.findByIngredients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesFindByIngredients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByIngredients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>
              >
            >
          >,
          ReturnType<typeof getRecipesFindByIngredientsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByIngredients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesFindByIngredientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesFindByIngredientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.findByIngredients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesFindByNutrientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByNutrients.$get>>,
) {
  return ['recipes', '/recipes/findByNutrients', toValue(args)] as const
}

export function getRecipesFindByNutrientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByNutrients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesFindByNutrientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.findByNutrients.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesFindByNutrients<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.findByNutrients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
            >
          >,
          ReturnType<typeof getRecipesFindByNutrientsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.findByNutrients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesFindByNutrientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesFindByNutrientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.findByNutrients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesGuessNutritionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.guessNutrition.$get>>,
) {
  return ['recipes', '/recipes/guessNutrition', toValue(args)] as const
}

export function getRecipesGuessNutritionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.guessNutrition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesGuessNutritionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.guessNutrition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesGuessNutrition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.guessNutrition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
            >
          >,
          ReturnType<typeof getRecipesGuessNutritionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.guessNutrition.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesGuessNutritionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesGuessNutritionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.guessNutrition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesInformationBulkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.informationBulk.$get>>,
) {
  return ['recipes', '/recipes/informationBulk', toValue(args)] as const
}

export function getRecipesInformationBulkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.informationBulk.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesInformationBulkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.informationBulk.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesInformationBulk<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.informationBulk.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
            >
          >,
          ReturnType<typeof getRecipesInformationBulkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.informationBulk.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesInformationBulkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesInformationBulkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.informationBulk.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recipes.parseIngredients.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.recipes.parseIngredients.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.queries.analyze.$get>>,
) {
  return ['recipes', '/recipes/queries/analyze', toValue(args)] as const
}

export function getRecipesQueriesAnalyzeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.queries.analyze.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesQueriesAnalyzeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.queries.analyze.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesQueriesAnalyze<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.queries.analyze.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
            >
          >,
          ReturnType<typeof getRecipesQueriesAnalyzeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recipes.queries.analyze.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesQueriesAnalyzeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesQueriesAnalyzeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.queries.analyze.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesQuickAnswerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.quickAnswer.$get>>,
) {
  return ['recipes', '/recipes/quickAnswer', toValue(args)] as const
}

export function getRecipesQuickAnswerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.quickAnswer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesQuickAnswerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.quickAnswer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesQuickAnswer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.quickAnswer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>
            >
          >,
          ReturnType<typeof getRecipesQuickAnswerQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.quickAnswer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesQuickAnswerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesQuickAnswerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.quickAnswer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesRandomQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.random.$get>>,
) {
  return ['recipes', '/recipes/random', toValue(args)] as const
}

export function getRecipesRandomQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.random.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesRandomQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.random.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesRandom<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.random.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
          >,
          ReturnType<typeof getRecipesRandomQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.random.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesRandomQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesRandomQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.random.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/analyzedInstructions', toValue(args)] as const
}

export function getRecipesIdAnalyzedInstructionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdAnalyzedInstructionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].analyzedInstructions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdAnalyzedInstructionsQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['analyzedInstructions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdAnalyzedInstructionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdAnalyzedInstructionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].analyzedInstructions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdCardQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['card']['$get']>>,
) {
  return ['recipes', '/recipes/:id/card', toValue(args)] as const
}

export function getRecipesIdCardQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['card']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdCardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].card.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesIdCard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['card']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdCardQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['card']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdCardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdCardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].card.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/equipmentWidget', toValue(args)] as const
}

export function getRecipesIdEquipmentWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdEquipmentWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].equipmentWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdEquipmentWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdEquipmentWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].equipmentWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.json', toValue(args)] as const
}

export function getRecipesIdEquipmentWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdEquipmentWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['equipmentWidget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdEquipmentWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdEquipmentWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['equipmentWidget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdEquipmentWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/equipmentWidget.png', toValue(args)] as const
}

export function getRecipesIdEquipmentWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdEquipmentWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['equipmentWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdEquipmentWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['equipmentWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdEquipmentWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdEquipmentWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['equipmentWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdInformationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['information']['$get']>>,
) {
  return ['recipes', '/recipes/:id/information', toValue(args)] as const
}

export function getRecipesIdInformationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['information']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].information.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['information']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdInformationQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].information.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/ingredientWidget', toValue(args)] as const
}

export function getRecipesIdIngredientWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdIngredientWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].ingredientWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdIngredientWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdIngredientWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].ingredientWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.json', toValue(args)] as const
}

export function getRecipesIdIngredientWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdIngredientWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['ingredientWidget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdIngredientWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdIngredientWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['ingredientWidget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdIngredientWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/ingredientWidget.png', toValue(args)] as const
}

export function getRecipesIdIngredientWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdIngredientWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['ingredientWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdIngredientWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['ingredientWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdIngredientWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdIngredientWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['ingredientWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdNutritionLabelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/nutritionLabel', toValue(args)] as const
}

export function getRecipesIdNutritionLabelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdNutritionLabelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].nutritionLabel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdNutritionLabelQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionLabelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdNutritionLabelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].nutritionLabel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdNutritionLabelPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/nutritionLabel.png', toValue(args)] as const
}

export function getRecipesIdNutritionLabelPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdNutritionLabelPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['nutritionLabel.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdNutritionLabelPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionLabel.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionLabelPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdNutritionLabelPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['nutritionLabel.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipes', '/recipes/:id/nutritionWidget', keyArgs] as const
}

export function getRecipesIdNutritionWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdNutritionWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].nutritionWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdNutritionWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdNutritionWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].nutritionWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.json', toValue(args)] as const
}

export function getRecipesIdNutritionWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdNutritionWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['nutritionWidget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdNutritionWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdNutritionWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['nutritionWidget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdNutritionWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/nutritionWidget.png', toValue(args)] as const
}

export function getRecipesIdNutritionWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdNutritionWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['nutritionWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdNutritionWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['nutritionWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdNutritionWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdNutritionWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['nutritionWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget', toValue(args)] as const
}

export function getRecipesIdPriceBreakdownWidgetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdPriceBreakdownWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].priceBreakdownWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdPriceBreakdownWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdPriceBreakdownWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].priceBreakdownWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.json', toValue(args)] as const
}

export function getRecipesIdPriceBreakdownWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdPriceBreakdownWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['priceBreakdownWidget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRecipesIdPriceBreakdownWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdPriceBreakdownWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['priceBreakdownWidget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdPriceBreakdownWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/priceBreakdownWidget.png', toValue(args)] as const
}

export function getRecipesIdPriceBreakdownWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdPriceBreakdownWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['priceBreakdownWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRecipesIdPriceBreakdownWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['priceBreakdownWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdPriceBreakdownWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdPriceBreakdownWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['priceBreakdownWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>>,
) {
  return ['recipes', '/recipes/:id/similar', toValue(args)] as const
}

export function getRecipesIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdSimilarQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['similar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>>,
) {
  return ['recipes', '/recipes/:id/summary', toValue(args)] as const
}

export function getRecipesIdSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['summary']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':id']['summary']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>,
) {
  return ['recipes', '/recipes/:id/tasteWidget', toValue(args)] as const
}

export function getRecipesIdTasteWidgetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdTasteWidgetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id'].tasteWidget.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdTasteWidgetQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdTasteWidgetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id'].tasteWidget.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/tasteWidget.json', toValue(args)] as const
}

export function getRecipesIdTasteWidgetJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdTasteWidgetJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['tasteWidget.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdTasteWidgetJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdTasteWidgetJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['tasteWidget.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesIdTasteWidgetPngQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>
  >,
) {
  return ['recipes', '/recipes/:id/tasteWidget.png', toValue(args)] as const
}

export function getRecipesIdTasteWidgetPngQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesIdTasteWidgetPngQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':id']['tasteWidget.png'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipesIdTasteWidgetPngQueryKey>
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
          Awaited<ReturnType<(typeof client.recipes)[':id']['tasteWidget.png']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesIdTasteWidgetPngQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesIdTasteWidgetPngQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':id']['tasteWidget.png'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.connect.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.connect.$post>,
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
