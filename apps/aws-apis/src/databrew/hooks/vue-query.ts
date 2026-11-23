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

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getProfileJobsKey() {
  return ['profileJobs'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRecipeJobsKey() {
  return ['recipeJobs'] as const
}

export function getRecipeVersionsNameKey() {
  return ['recipeVersions#name'] as const
}

export function getRecipesKey() {
  return ['recipes'] as const
}

export function getRulesetsKey() {
  return ['rulesets'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostRecipesNameBatchDeleteRecipeVersionMutationKey() {
  return ['recipes', '/recipes/:name/batchDeleteRecipeVersion', 'POST'] as const
}

export function getPostRecipesNameBatchDeleteRecipeVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesNameBatchDeleteRecipeVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>,
    ) {
      return parseResponse(client.recipes[':name'].batchDeleteRecipeVersion.$post(args, options))
    },
  })
}

export function usePostRecipesNameBatchDeleteRecipeVersion<
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
                  ReturnType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipes)[':name']['batchDeleteRecipeVersion']['$post']>,
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
  const mutationDefaults = getPostRecipesNameBatchDeleteRecipeVersionMutationOptions<
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

export function getDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets', keyArgs] as const
}

export function getDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          ReturnType<typeof getDatasetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDatasetsMutationKey() {
  return ['datasets', '/datasets', 'POST'] as const
}

export function getPostDatasetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>>,
    TError,
    InferRequestType<typeof client.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasets.$post>) {
      return parseResponse(client.datasets.$post(args, options))
    },
  })
}

export function usePostDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datasets.$post>,
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
  const mutationDefaults = getPostDatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProfileJobsMutationKey() {
  return ['profileJobs', '/profileJobs', 'POST'] as const
}

export function getPostProfileJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profileJobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.profileJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProfileJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.profileJobs.$post>) {
      return parseResponse(client.profileJobs.$post(args, options))
    },
  })
}

export function usePostProfileJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profileJobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.profileJobs.$post>,
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
  const mutationDefaults = getPostProfileJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          ReturnType<typeof getProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRecipesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipes', '/recipes', keyArgs] as const
}

export function getRecipesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recipes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
          >,
          ReturnType<typeof getRecipesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecipesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRecipesMutationKey() {
  return ['recipes', '/recipes', 'POST'] as const
}

export function getPostRecipesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$post>>>>>,
    TError,
    InferRequestType<typeof client.recipes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipes.$post>) {
      return parseResponse(client.recipes.$post(args, options))
    },
  })
}

export function usePostRecipes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipes.$post>,
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
  const mutationDefaults = getPostRecipesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRecipeJobsMutationKey() {
  return ['recipeJobs', '/recipeJobs', 'POST'] as const
}

export function getPostRecipeJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipeJobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.recipeJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipeJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recipeJobs.$post>) {
      return parseResponse(client.recipeJobs.$post(args, options))
    },
  })
}

export function usePostRecipeJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipeJobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recipeJobs.$post>,
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
  const mutationDefaults = getPostRecipeJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRulesetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rulesets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rulesets', '/rulesets', keyArgs] as const
}

export function getRulesetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rulesets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rulesets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRulesets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rulesets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>
          >,
          ReturnType<typeof getRulesetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rulesets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRulesetsMutationKey() {
  return ['rulesets', '/rulesets', 'POST'] as const
}

export function getPostRulesetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$post>>>>>,
    TError,
    InferRequestType<typeof client.rulesets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rulesets.$post>) {
      return parseResponse(client.rulesets.$post(args, options))
    },
  })
}

export function usePostRulesets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.rulesets.$post>,
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
  const mutationDefaults = getPostRulesetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['schedules', '/schedules', keyArgs] as const
}

export function getSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          ReturnType<typeof getSchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSchedulesMutationKey() {
  return ['schedules', '/schedules', 'POST'] as const
}

export function getPostSchedulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$post>>>>>,
    TError,
    InferRequestType<typeof client.schedules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSchedulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schedules.$post>) {
      return parseResponse(client.schedules.$post(args, options))
    },
  })
}

export function usePostSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.schedules.$post>,
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
  const mutationDefaults = getPostSchedulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:name', keyArgs] as const
}

export function getDatasetsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getDatasetsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDatasetsNameMutationKey() {
  return ['datasets', '/datasets/:name', 'PUT'] as const
}

export function getPutDatasetsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasetsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':name']['$put']>) {
      return parseResponse(client.datasets[':name'].$put(args, options))
    },
  })
}

export function usePutDatasetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':name']['$put']>,
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
  const mutationDefaults = getPutDatasetsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDatasetsNameMutationKey() {
  return ['datasets', '/datasets/:name', 'DELETE'] as const
}

export function getDeleteDatasetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':name']['$delete']>) {
      return parseResponse(client.datasets[':name'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetsNameMutationOptions<TError, TOnMutateResult>(
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

export function getJobsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:name', keyArgs] as const
}

export function getJobsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteJobsNameMutationKey() {
  return ['jobs', '/jobs/:name', 'DELETE'] as const
}

export function getDeleteJobsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':name']['$delete']>) {
      return parseResponse(client.jobs[':name'].$delete(args, options))
    },
  })
}

export function useDeleteJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteJobsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:name', keyArgs] as const
}

export function getProjectsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getProjectsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsNameMutationKey() {
  return ['projects', '/projects/:name', 'PUT'] as const
}

export function getPutProjectsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':name']['$put']>) {
      return parseResponse(client.projects[':name'].$put(args, options))
    },
  })
}

export function usePutProjectsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':name']['$put']>,
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
  const mutationDefaults = getPutProjectsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProjectsNameMutationKey() {
  return ['projects', '/projects/:name', 'DELETE'] as const
}

export function getDeleteProjectsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':name']['$delete']>) {
      return parseResponse(client.projects[':name'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteRecipesNameRecipeVersionRecipeVersionMutationKey() {
  return ['recipes', '/recipes/:name/recipeVersion/:recipeVersion', 'DELETE'] as const
}

export function getDeleteRecipesNameRecipeVersionRecipeVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecipesNameRecipeVersionRecipeVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client.recipes[':name'].recipeVersion[':recipeVersion'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRecipesNameRecipeVersionRecipeVersion<
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
                    (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.recipes)[':name']['recipeVersion'][':recipeVersion']['$delete']
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
  const mutationDefaults = getDeleteRecipesNameRecipeVersionRecipeVersionMutationOptions<
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

export function getRulesetsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rulesets)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rulesets', '/rulesets/:name', keyArgs] as const
}

export function getRulesetsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rulesets)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesetsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rulesets[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRulesetsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rulesets)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getRulesetsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesetsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesetsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rulesets[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRulesetsNameMutationKey() {
  return ['rulesets', '/rulesets/:name', 'PUT'] as const
}

export function getPutRulesetsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rulesets)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRulesetsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rulesets)[':name']['$put']>) {
      return parseResponse(client.rulesets[':name'].$put(args, options))
    },
  })
}

export function usePutRulesetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.rulesets)[':name']['$put']>,
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
  const mutationDefaults = getPutRulesetsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRulesetsNameMutationKey() {
  return ['rulesets', '/rulesets/:name', 'DELETE'] as const
}

export function getDeleteRulesetsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rulesets)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesetsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rulesets)[':name']['$delete']>) {
      return parseResponse(client.rulesets[':name'].$delete(args, options))
    },
  })
}

export function useDeleteRulesetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rulesets)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.rulesets)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteRulesetsNameMutationOptions<TError, TOnMutateResult>(
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

export function getSchedulesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedules)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['schedules', '/schedules/:name', keyArgs] as const
}

export function getSchedulesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedules)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchedulesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.schedules)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getSchedulesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSchedulesNameMutationKey() {
  return ['schedules', '/schedules/:name', 'PUT'] as const
}

export function getPutSchedulesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.schedules)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSchedulesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedules)[':name']['$put']>) {
      return parseResponse(client.schedules[':name'].$put(args, options))
    },
  })
}

export function usePutSchedulesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.schedules)[':name']['$put']>,
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
  const mutationDefaults = getPutSchedulesNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSchedulesNameMutationKey() {
  return ['schedules', '/schedules/:name', 'DELETE'] as const
}

export function getDeleteSchedulesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.schedules)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSchedulesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.schedules)[':name']['$delete']>) {
      return parseResponse(client.schedules[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSchedulesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schedules)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.schedules)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteSchedulesNameMutationOptions<TError, TOnMutateResult>(
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

export function getJobsNameJobRunRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:name/jobRun/:runId', keyArgs] as const
}

export function getJobsNameJobRunRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsNameJobRunRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':name'].jobRun[':runId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsNameJobRunRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsNameJobRunRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsNameJobRunRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsNameJobRunRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':name'].jobRun[':runId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipes', '/recipes/:name', keyArgs] as const
}

export function getRecipesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recipes[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.recipes)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getRecipesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recipes[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRecipesNameMutationKey() {
  return ['recipes', '/recipes/:name', 'PUT'] as const
}

export function getPutRecipesNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.recipes)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recipes)[':name']['$put']>) {
      return parseResponse(client.recipes[':name'].$put(args, options))
    },
  })
}

export function usePutRecipesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.recipes)[':name']['$put']>,
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
  const mutationDefaults = getPutRecipesNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsNameJobRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:name/jobRuns', keyArgs] as const
}

export function getJobsNameJobRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsNameJobRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':name'].jobRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsNameJobRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsNameJobRunsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsNameJobRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsNameJobRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':name'].jobRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecipeVersionsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recipeVersions#name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['recipeVersions#name', '/recipeVersions#name', keyArgs] as const
}

export function getRecipeVersionsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recipeVersions#name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecipeVersionsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['recipeVersions#name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecipeVersionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['recipeVersions#name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecipeVersionsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeVersionsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecipeVersionsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['recipeVersions#name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':ResourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecipesNamePublishRecipeMutationKey() {
  return ['recipes', '/recipes/:name/publishRecipe', 'POST'] as const
}

export function getPostRecipesNamePublishRecipeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recipes)[':name']['publishRecipe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recipes)[':name']['publishRecipe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecipesNamePublishRecipeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recipes)[':name']['publishRecipe']['$post']>,
    ) {
      return parseResponse(client.recipes[':name'].publishRecipe.$post(args, options))
    },
  })
}

export function usePostRecipesNamePublishRecipe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.recipes)[':name']['publishRecipe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recipes)[':name']['publishRecipe']['$post']>,
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
  const mutationDefaults = getPostRecipesNamePublishRecipeMutationOptions<TError, TOnMutateResult>(
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

export function getPutProjectsNameSendProjectSessionActionMutationKey() {
  return ['projects', '/projects/:name/sendProjectSessionAction', 'PUT'] as const
}

export function getPutProjectsNameSendProjectSessionActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsNameSendProjectSessionActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>,
    ) {
      return parseResponse(client.projects[':name'].sendProjectSessionAction.$put(args, options))
    },
  })
}

export function usePutProjectsNameSendProjectSessionAction<
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
                  ReturnType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':name']['sendProjectSessionAction']['$put']>,
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
  const mutationDefaults = getPutProjectsNameSendProjectSessionActionMutationOptions<
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

export function getPostJobsNameStartJobRunMutationKey() {
  return ['jobs', '/jobs/:name/startJobRun', 'POST'] as const
}

export function getPostJobsNameStartJobRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobs)[':name']['startJobRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':name']['startJobRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsNameStartJobRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jobs)[':name']['startJobRun']['$post']>,
    ) {
      return parseResponse(client.jobs[':name'].startJobRun.$post(args, options))
    },
  })
}

export function usePostJobsNameStartJobRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':name']['startJobRun']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':name']['startJobRun']['$post']>,
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
  const mutationDefaults = getPostJobsNameStartJobRunMutationOptions<TError, TOnMutateResult>(
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

export function getPutProjectsNameStartProjectSessionMutationKey() {
  return ['projects', '/projects/:name/startProjectSession', 'PUT'] as const
}

export function getPutProjectsNameStartProjectSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':name']['startProjectSession']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':name']['startProjectSession']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsNameStartProjectSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':name']['startProjectSession']['$put']>,
    ) {
      return parseResponse(client.projects[':name'].startProjectSession.$put(args, options))
    },
  })
}

export function usePutProjectsNameStartProjectSession<
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
                  ReturnType<(typeof client.projects)[':name']['startProjectSession']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':name']['startProjectSession']['$put']>,
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
  const mutationDefaults = getPutProjectsNameStartProjectSessionMutationOptions<
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

export function getPostJobsNameJobRunRunIdStopJobRunMutationKey() {
  return ['jobs', '/jobs/:name/jobRun/:runId/stopJobRun', 'POST'] as const
}

export function getPostJobsNameJobRunRunIdStopJobRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsNameJobRunRunIdStopJobRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']
      >,
    ) {
      return parseResponse(client.jobs[':name'].jobRun[':runId'].stopJobRun.$post(args, options))
    },
  })
}

export function usePostJobsNameJobRunRunIdStopJobRun<
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
                    (typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.jobs)[':name']['jobRun'][':runId']['stopJobRun']['$post']
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
  const mutationDefaults = getPostJobsNameJobRunRunIdStopJobRunMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutProfileJobsNameMutationKey() {
  return ['profileJobs', '/profileJobs/:name', 'PUT'] as const
}

export function getPutProfileJobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profileJobs)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profileJobs)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProfileJobsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profileJobs)[':name']['$put']>) {
      return parseResponse(client.profileJobs[':name'].$put(args, options))
    },
  })
}

export function usePutProfileJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profileJobs)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profileJobs)[':name']['$put']>,
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
  const mutationDefaults = getPutProfileJobsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPutRecipeJobsNameMutationKey() {
  return ['recipeJobs', '/recipeJobs/:name', 'PUT'] as const
}

export function getPutRecipeJobsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipeJobs)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.recipeJobs)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecipeJobsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.recipeJobs)[':name']['$put']>) {
      return parseResponse(client.recipeJobs[':name'].$put(args, options))
    },
  })
}

export function usePutRecipeJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.recipeJobs)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.recipeJobs)[':name']['$put']>,
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
  const mutationDefaults = getPutRecipeJobsNameMutationOptions<TError, TOnMutateResult>(
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
