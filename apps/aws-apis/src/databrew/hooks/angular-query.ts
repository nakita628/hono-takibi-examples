import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostRecipesNameBatchDeleteRecipeVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipesNameBatchDeleteRecipeVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsQueryKey(args: InferRequestType<typeof client.datasets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets', keyArgs] as const
}

export function getDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >({
    queryKey: getDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datasets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostProfileJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profileJobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.profileJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProfileJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects', keyArgs] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRecipesQueryKey(args: InferRequestType<typeof client.recipes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['recipes', '/recipes', keyArgs] as const
}

export function getRecipesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecipesQueryKey>
  >({
    queryKey: getRecipesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRecipesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRecipes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipes.$post>>>>>,
        TError,
        InferRequestType<typeof client.recipes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRecipeJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipeJobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recipeJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipeJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRulesetsQueryKey(args: InferRequestType<typeof client.rulesets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets', keyArgs] as const
}

export function getRulesetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rulesets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesetsQueryKey>
  >({
    queryKey: getRulesetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rulesets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRulesets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rulesets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRulesetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRulesetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRulesets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rulesets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.rulesets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRulesetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchedulesQueryKey(args: InferRequestType<typeof client.schedules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules', keyArgs] as const
}

export function getSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >({
    queryKey: getSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSchedules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.schedules.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSchedulesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsNameQueryKey(
  args: InferRequestType<(typeof client.datasets)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:name', keyArgs] as const
}

export function getDatasetsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNameQueryKey>
  >({
    queryKey: getDatasetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasetsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDatasetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.datasets)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDatasetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteDatasetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.datasets)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDatasetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsNameQueryKey(args: InferRequestType<(typeof client.jobs)[':name']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:name', keyArgs] as const
}

export function getJobsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.jobs)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsNameQueryKey>
  >({
    queryKey: getJobsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.jobs)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProjectsNameQueryKey(
  args: InferRequestType<(typeof client.projects)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:name', keyArgs] as const
}

export function getProjectsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsNameQueryKey>
  >({
    queryKey: getProjectsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProjectsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutProjectsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteProjectsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRecipesNameRecipeVersionRecipeVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecipesNameRecipeVersionRecipeVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRulesetsNameQueryKey(
  args: InferRequestType<(typeof client.rulesets)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rulesets', '/rulesets/:name', keyArgs] as const
}

export function getRulesetsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rulesets)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesetsNameQueryKey>
  >({
    queryKey: getRulesetsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rulesets[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRulesetsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rulesets)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesetsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRulesetsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRulesetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rulesets)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRulesetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteRulesetsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rulesets)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rulesets)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRulesetsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchedulesNameQueryKey(
  args: InferRequestType<(typeof client.schedules)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['schedules', '/schedules/:name', keyArgs] as const
}

export function getSchedulesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schedules)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchedulesNameQueryKey>
  >({
    queryKey: getSchedulesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchedulesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schedules)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchedulesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchedulesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutSchedulesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.schedules)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSchedulesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteSchedulesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.schedules)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.schedules)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSchedulesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsNameJobRunRunIdQueryKey(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:name/jobRun/:runId', keyArgs] as const
}

export function getJobsNameJobRunRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJobsNameJobRunRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':name'].jobRun[':runId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsNameJobRunRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':name']['jobRun'][':runId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsNameJobRunRunIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRecipesNameQueryKey(
  args: InferRequestType<(typeof client.recipes)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipes', '/recipes/:name', keyArgs] as const
}

export function getRecipesNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.recipes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipesNameQueryKey>
  >({
    queryKey: getRecipesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipes[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRecipesName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.recipes)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRecipesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.recipes)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.recipes)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsNameJobRunsQueryKey(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:name/jobRuns', keyArgs] as const
}

export function getJobsNameJobRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsNameJobRunsQueryKey>
  >({
    queryKey: getJobsNameJobRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs[':name'].jobRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsNameJobRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs)[':name']['jobRuns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.jobs)[':name']['jobRuns']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsNameJobRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsNameJobRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsQueryKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >({
    queryKey: getJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRecipeVersionsNameQueryKey(
  args: InferRequestType<(typeof client)['recipeVersions#name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['recipeVersions#name', '/recipeVersions#name', keyArgs] as const
}

export function getRecipeVersionsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['recipeVersions#name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecipeVersionsNameQueryKey>
  >({
    queryKey: getRecipeVersionsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['recipeVersions#name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecipeVersionsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['recipeVersions#name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['recipeVersions#name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecipeVersionsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecipeVersionsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostRecipesNamePublishRecipe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecipesNamePublishRecipeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutProjectsNameSendProjectSessionAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsNameSendProjectSessionActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostJobsNameStartJobRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsNameStartJobRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutProjectsNameStartProjectSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsNameStartProjectSessionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostJobsNameJobRunRunIdStopJobRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsNameJobRunRunIdStopJobRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutProfileJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.profileJobs)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.profileJobs)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProfileJobsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutRecipeJobsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.recipeJobs)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.recipeJobs)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRecipeJobsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
