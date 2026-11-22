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

export function getAdministrationKey() {
  return ['administration'] as const
}

export function getForecastKey() {
  return ['forecast'] as const
}

export function getHyperparameterKey() {
  return ['hyperparameter'] as const
}

export function getInventoryKey() {
  return ['inventory'] as const
}

export function getLifecycleKey() {
  return ['lifecycle'] as const
}

export function getOutlierKey() {
  return ['outlier'] as const
}

export function getPortfolioKey() {
  return ['portfolio'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getAdministrationEntityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.entity.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['administration', '/administration/entity', keyArgs] as const
}

export function getAdministrationEntityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.entity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdministrationEntityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.administration.entity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdministrationEntity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.entity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
            >
          >,
          ReturnType<typeof getAdministrationEntityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdministrationEntityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdministrationEntityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.administration.entity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdministrationEntityMutationKey() {
  return ['administration', '/administration/entity', 'PUT'] as const
}

export function getPutAdministrationEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administration.entity.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdministrationEntityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.entity.$put>) {
      return parseResponse(client.administration.entity.$put(args, options))
    },
  })
}

export function usePutAdministrationEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.entity.$put>,
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
  const mutationDefaults = getPutAdministrationEntityMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdministrationEntityMutationKey() {
  return ['administration', '/administration/entity', 'POST'] as const
}

export function getPostAdministrationEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administration.entity.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationEntityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.entity.$post>) {
      return parseResponse(client.administration.entity.$post(args, options))
    },
  })
}

export function usePostAdministrationEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.entity.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.entity.$post>,
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
  const mutationDefaults = getPostAdministrationEntityMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdministrationEntityIdMutationKey() {
  return ['administration', '/administration/entity/:id', 'DELETE'] as const
}

export function getDeleteAdministrationEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.entity)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.administration.entity)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdministrationEntityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.administration.entity)[':id']['$delete']>,
    ) {
      return parseResponse(client.administration.entity[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdministrationEntityId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration.entity)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.administration.entity)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdministrationEntityIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdministrationFileToJsonMutationKey() {
  return ['administration', '/administration/file-to-json', 'POST'] as const
}

export function getPostAdministrationFileToJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration)['file-to-json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.administration)['file-to-json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationFileToJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.administration)['file-to-json']['$post']>,
    ) {
      return parseResponse(client.administration['file-to-json'].$post(args, options))
    },
  })
}

export function usePostAdministrationFileToJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration)['file-to-json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.administration)['file-to-json']['$post']>,
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
  const mutationDefaults = getPostAdministrationFileToJsonMutationOptions<TError, TOnMutateResult>(
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

export function getAdministrationModelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.model.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['administration', '/administration/model', keyArgs] as const
}

export function getAdministrationModelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.model.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdministrationModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.administration.model.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdministrationModel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.administration.model.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>
            >
          >,
          ReturnType<typeof getAdministrationModelQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdministrationModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdministrationModelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.administration.model.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdministrationModelMutationKey() {
  return ['administration', '/administration/model', 'POST'] as const
}

export function getPostAdministrationModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administration.model.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationModelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.model.$post>) {
      return parseResponse(client.administration.model.$post(args, options))
    },
  })
}

export function usePostAdministrationModel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.model.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.model.$post>,
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
  const mutationDefaults = getPostAdministrationModelMutationOptions<TError, TOnMutateResult>(
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

export function getAdministrationModelEntityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.model)[':entityId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['administration', '/administration/model/:entityId', keyArgs] as const
}

export function getAdministrationModelEntityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.model)[':entityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdministrationModelEntityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.administration.model[':entityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdministrationModelEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.model)[':entityId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdministrationModelEntityIdQueryKey>
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
          Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdministrationModelEntityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdministrationModelEntityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.administration.model[':entityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdministrationModelEntityIdMutationKey() {
  return ['administration', '/administration/model/:entityId', 'POST'] as const
}

export function getPostAdministrationModelEntityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.administration.model)[':entityId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationModelEntityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.administration.model)[':entityId']['$post']>,
    ) {
      return parseResponse(client.administration.model[':entityId'].$post(args, options))
    },
  })
}

export function usePostAdministrationModelEntityId<
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
                Awaited<ReturnType<(typeof client.administration.model)[':entityId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.administration.model)[':entityId']['$post']>,
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
  const mutationDefaults = getPostAdministrationModelEntityIdMutationOptions<
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

export function getPostAdministrationPlanningLevelLockMutationKey() {
  return ['administration', '/administration/planning-level/lock', 'POST'] as const
}

export function getPostAdministrationPlanningLevelLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration)['planning-level']['lock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationPlanningLevelLockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>,
    ) {
      return parseResponse(client.administration['planning-level'].lock.$post(args, options))
    },
  })
}

export function usePostAdministrationPlanningLevelLock<
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
                  ReturnType<(typeof client.administration)['planning-level']['lock']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>,
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
  const mutationDefaults = getPostAdministrationPlanningLevelLockMutationOptions<
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

export function getDeleteAdministrationPlanningLevelEntityIdIdMutationKey() {
  return ['administration', '/administration/planning-level/:entityId/:id', 'DELETE'] as const
}

export function getDeleteAdministrationPlanningLevelEntityIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdministrationPlanningLevelEntityIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.administration['planning-level'][':entityId'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdministrationPlanningLevelEntityIdId<
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
                    (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
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
  const mutationDefaults = getDeleteAdministrationPlanningLevelEntityIdIdMutationOptions<
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

export function getPostAdministrationTokenMutationKey() {
  return ['administration', '/administration/token', 'POST'] as const
}

export function getPostAdministrationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administration.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.token.$post>) {
      return parseResponse(client.administration.token.$post(args, options))
    },
  })
}

export function usePostAdministrationToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.token.$post>,
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
  const mutationDefaults = getPostAdministrationTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdministrationUserMutationKey() {
  return ['administration', '/administration/user', 'PUT'] as const
}

export function getPutAdministrationUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.administration.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdministrationUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.user.$put>) {
      return parseResponse(client.administration.user.$put(args, options))
    },
  })
}

export function usePutAdministrationUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.user.$put>,
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
  const mutationDefaults = getPutAdministrationUserMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdministrationUserMutationKey() {
  return ['administration', '/administration/user', 'POST'] as const
}

export function getPostAdministrationUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.administration.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdministrationUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.user.$post>) {
      return parseResponse(client.administration.user.$post(args, options))
    },
  })
}

export function usePostAdministrationUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.user.$post>,
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
  const mutationDefaults = getPostAdministrationUserMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdministrationUserLockMutationKey() {
  return ['administration', '/administration/user/lock', 'PUT'] as const
}

export function getPutAdministrationUserLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.lock.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.administration.user.lock.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAdministrationUserLockMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.administration.user.lock.$put>) {
      return parseResponse(client.administration.user.lock.$put(args, options))
    },
  })
}

export function usePutAdministrationUserLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.administration.user.lock.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.administration.user.lock.$put>,
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
  const mutationDefaults = getPutAdministrationUserLockMutationOptions<TError, TOnMutateResult>(
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

export function getAdministrationUserEntityIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.user)[':entityId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['administration', '/administration/user/:entityId', keyArgs] as const
}

export function getAdministrationUserEntityIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.user)[':entityId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdministrationUserEntityIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.administration.user[':entityId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdministrationUserEntityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.administration.user)[':entityId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdministrationUserEntityIdQueryKey>
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
          Awaited<ReturnType<(typeof client.administration.user)[':entityId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdministrationUserEntityIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdministrationUserEntityIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.administration.user[':entityId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdministrationUserEntityIdIdMutationKey() {
  return ['administration', '/administration/user/:entityId/:id', 'DELETE'] as const
}

export function getDeleteAdministrationUserEntityIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.administration.user)[':entityId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdministrationUserEntityIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>,
    ) {
      return parseResponse(client.administration.user[':entityId'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdministrationUserEntityIdId<
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
                  ReturnType<(typeof client.administration.user)[':entityId'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdministrationUserEntityIdIdMutationOptions<
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

export function getPostForecastMutationKey() {
  return ['forecast', '/forecast', 'POST'] as const
}

export function getPostForecastMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$post>>>>>,
    TError,
    InferRequestType<typeof client.forecast.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forecast.$post>) {
      return parseResponse(client.forecast.$post(args, options))
    },
  })
}

export function usePostForecast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.forecast.$post>,
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
  const mutationDefaults = getPostForecastMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostForecastAIMutationKey() {
  return ['forecast', '/forecast/AI', 'POST'] as const
}

export function getPostForecastAIMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.AI.$post>>>>>,
    TError,
    InferRequestType<typeof client.forecast.AI.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastAIMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forecast.AI.$post>) {
      return parseResponse(client.forecast.AI.$post(args, options))
    },
  })
}

export function usePostForecastAI<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.AI.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.forecast.AI.$post>,
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
  const mutationDefaults = getPostForecastAIMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostForecastAIHistoryAndForecastMutationKey() {
  return ['forecast', '/forecast/AI/history-and-forecast', 'POST'] as const
}

export function getPostForecastAIHistoryAndForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast.AI)['history-and-forecast']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastAIHistoryAndForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']>,
    ) {
      return parseResponse(client.forecast.AI['history-and-forecast'].$post(args, options))
    },
  })
}

export function usePostForecastAIHistoryAndForecast<
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
                Awaited<ReturnType<(typeof client.forecast.AI)['history-and-forecast']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']>,
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
  const mutationDefaults = getPostForecastAIHistoryAndForecastMutationOptions<
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

export function getPostForecastFileToForecastMutationKey() {
  return ['forecast', '/forecast/file-to-forecast', 'POST'] as const
}

export function getPostForecastFileToForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['file-to-forecast']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastFileToForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']>,
    ) {
      return parseResponse(client.forecast['file-to-forecast'].$post(args, options))
    },
  })
}

export function usePostForecastFileToForecast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['file-to-forecast']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']>,
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
  const mutationDefaults = getPostForecastFileToForecastMutationOptions<TError, TOnMutateResult>(
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

export function getPostForecastForecastBottomUpMutationKey() {
  return ['forecast', '/forecast/forecast-bottom-up', 'POST'] as const
}

export function getPostForecastForecastBottomUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['forecast-bottom-up']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastForecastBottomUpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']>,
    ) {
      return parseResponse(client.forecast['forecast-bottom-up'].$post(args, options))
    },
  })
}

export function usePostForecastForecastBottomUp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['forecast-bottom-up']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']>,
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
  const mutationDefaults = getPostForecastForecastBottomUpMutationOptions<TError, TOnMutateResult>(
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

export function getPostForecastForecastTopDownMutationKey() {
  return ['forecast', '/forecast/forecast-top-down', 'POST'] as const
}

export function getPostForecastForecastTopDownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['forecast-top-down']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastForecastTopDownMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']>,
    ) {
      return parseResponse(client.forecast['forecast-top-down'].$post(args, options))
    },
  })
}

export function usePostForecastForecastTopDown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['forecast-top-down']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']>,
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
  const mutationDefaults = getPostForecastForecastTopDownMutationOptions<TError, TOnMutateResult>(
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

export function getPostForecastFullDetailMutationKey() {
  return ['forecast', '/forecast/full-detail', 'POST'] as const
}

export function getPostForecastFullDetailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.forecast)['full-detail']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['full-detail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastFullDetailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.forecast)['full-detail']['$post']>) {
      return parseResponse(client.forecast['full-detail'].$post(args, options))
    },
  })
}

export function usePostForecastFullDetail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['full-detail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['full-detail']['$post']>,
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
  const mutationDefaults = getPostForecastFullDetailMutationOptions<TError, TOnMutateResult>(
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

export function getPostForecastHistoryAndForecastMutationKey() {
  return ['forecast', '/forecast/history-and-forecast', 'POST'] as const
}

export function getPostForecastHistoryAndForecastMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['history-and-forecast']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastHistoryAndForecastMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']>,
    ) {
      return parseResponse(client.forecast['history-and-forecast'].$post(args, options))
    },
  })
}

export function usePostForecastHistoryAndForecast<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['history-and-forecast']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']>,
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
  const mutationDefaults = getPostForecastHistoryAndForecastMutationOptions<
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

export function getPostForecastOptimalParameterMutationKey() {
  return ['forecast', '/forecast/optimal-parameter', 'POST'] as const
}

export function getPostForecastOptimalParameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.forecast)['optimal-parameter']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastOptimalParameterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']>,
    ) {
      return parseResponse(client.forecast['optimal-parameter'].$post(args, options))
    },
  })
}

export function usePostForecastOptimalParameter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast)['optimal-parameter']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']>,
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
  const mutationDefaults = getPostForecastOptimalParameterMutationOptions<TError, TOnMutateResult>(
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

export function getPostForecastRerunMutationKey() {
  return ['forecast', '/forecast/rerun', 'POST'] as const
}

export function getPostForecastRerunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.rerun.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.forecast.rerun.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostForecastRerunMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.forecast.rerun.$post>) {
      return parseResponse(client.forecast.rerun.$post(args, options))
    },
  })
}

export function usePostForecastRerun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.forecast.rerun.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.forecast.rerun.$post>,
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
  const mutationDefaults = getPostForecastRerunMutationOptions<TError, TOnMutateResult>(
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

export function getForecastResultJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['forecast', '/forecast/result/:jobId', keyArgs] as const
}

export function getForecastResultJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForecastResultJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forecast.result[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForecastResultJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getForecastResultJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.forecast.result)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForecastResultJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForecastResultJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forecast.result[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getForecastStatusJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['forecast', '/forecast/status/:jobId', keyArgs] as const
}

export function getForecastStatusJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForecastStatusJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forecast.status[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useForecastStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getForecastStatusJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.forecast.status)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getForecastStatusJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForecastStatusJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forecast.status[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHyperparameterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyperparameter.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['hyperparameter', '/hyperparameter', keyArgs] as const
}

export function getHyperparameterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyperparameter.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHyperparameterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hyperparameter.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHyperparameter<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hyperparameter.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
          >,
          ReturnType<typeof getHyperparameterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHyperparameterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHyperparameterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hyperparameter.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostHyperparameterMutationKey() {
  return ['hyperparameter', '/hyperparameter', 'POST'] as const
}

export function getPostHyperparameterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hyperparameter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHyperparameterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hyperparameter.$post>) {
      return parseResponse(client.hyperparameter.$post(args, options))
    },
  })
}

export function usePostHyperparameter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hyperparameter.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hyperparameter.$post>,
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
  const mutationDefaults = getPostHyperparameterMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryAmazonIpiMutationKey() {
  return ['inventory', '/inventory/amazon-ipi', 'POST'] as const
}

export function getPostInventoryAmazonIpiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inventory)['amazon-ipi']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryAmazonIpiMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']>) {
      return parseResponse(client.inventory['amazon-ipi'].$post(args, options))
    },
  })
}

export function usePostInventoryAmazonIpi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['amazon-ipi']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']>,
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
  const mutationDefaults = getPostInventoryAmazonIpiMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryCaryyingCostMutationKey() {
  return ['inventory', '/inventory/caryying-cost', 'POST'] as const
}

export function getPostInventoryCaryyingCostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['caryying-cost']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['caryying-cost']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryCaryyingCostMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['caryying-cost']['$post']>) {
      return parseResponse(client.inventory['caryying-cost'].$post(args, options))
    },
  })
}

export function usePostInventoryCaryyingCost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['caryying-cost']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['caryying-cost']['$post']>,
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
  const mutationDefaults = getPostInventoryCaryyingCostMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryEoqMutationKey() {
  return ['inventory', '/inventory/eoq', 'POST'] as const
}

export function getPostInventoryEoqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.eoq.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventory.eoq.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryEoqMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventory.eoq.$post>) {
      return parseResponse(client.inventory.eoq.$post(args, options))
    },
  })
}

export function usePostInventoryEoq<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.eoq.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inventory.eoq.$post>,
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
  const mutationDefaults = getPostInventoryEoqMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryFillRateMutationKey() {
  return ['inventory', '/inventory/fill-rate', 'POST'] as const
}

export function getPostInventoryFillRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inventory)['fill-rate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['fill-rate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryFillRateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['fill-rate']['$post']>) {
      return parseResponse(client.inventory['fill-rate'].$post(args, options))
    },
  })
}

export function usePostInventoryFillRate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['fill-rate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['fill-rate']['$post']>,
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
  const mutationDefaults = getPostInventoryFillRateMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryFinancialImapctForecastAccuracyMutationKey() {
  return ['inventory', '/inventory/financial-imapct-forecast-accuracy', 'POST'] as const
}

export function getPostInventoryFinancialImapctForecastAccuracyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryFinancialImapctForecastAccuracyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']
      >,
    ) {
      return parseResponse(
        client.inventory['financial-imapct-forecast-accuracy'].$post(args, options),
      )
    },
  })
}

export function usePostInventoryFinancialImapctForecastAccuracy<
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
                    (typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']
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
  const mutationDefaults = getPostInventoryFinancialImapctForecastAccuracyMutationOptions<
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

export function getPostInventoryInventoryTurnoverMutationKey() {
  return ['inventory', '/inventory/inventory-turnover', 'POST'] as const
}

export function getPostInventoryInventoryTurnoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['inventory-turnover']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryInventoryTurnoverMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']>,
    ) {
      return parseResponse(client.inventory['inventory-turnover'].$post(args, options))
    },
  })
}

export function usePostInventoryInventoryTurnover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['inventory-turnover']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']>,
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
  const mutationDefaults = getPostInventoryInventoryTurnoverMutationOptions<
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

export function getPostInventoryLtdMutationKey() {
  return ['inventory', '/inventory/ltd', 'POST'] as const
}

export function getPostInventoryLtdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.ltd.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventory.ltd.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryLtdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventory.ltd.$post>) {
      return parseResponse(client.inventory.ltd.$post(args, options))
    },
  })
}

export function usePostInventoryLtd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.ltd.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inventory.ltd.$post>,
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
  const mutationDefaults = getPostInventoryLtdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryMoqMutationKey() {
  return ['inventory', '/inventory/moq', 'POST'] as const
}

export function getPostInventoryMoqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.moq.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventory.moq.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryMoqMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventory.moq.$post>) {
      return parseResponse(client.inventory.moq.$post(args, options))
    },
  })
}

export function usePostInventoryMoq<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.moq.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.inventory.moq.$post>,
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
  const mutationDefaults = getPostInventoryMoqMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryOptimalServiceLevelMutationKey() {
  return ['inventory', '/inventory/optimal-service-level', 'POST'] as const
}

export function getPostInventoryOptimalServiceLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['optimal-service-level']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryOptimalServiceLevelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']>,
    ) {
      return parseResponse(client.inventory['optimal-service-level'].$post(args, options))
    },
  })
}

export function usePostInventoryOptimalServiceLevel<
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
                Awaited<ReturnType<(typeof client.inventory)['optimal-service-level']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']>,
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
  const mutationDefaults = getPostInventoryOptimalServiceLevelMutationOptions<
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

export function getPostInventoryReorderPointMutationKey() {
  return ['inventory', '/inventory/reorder-point', 'POST'] as const
}

export function getPostInventoryReorderPointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['reorder-point']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['reorder-point']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryReorderPointMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['reorder-point']['$post']>) {
      return parseResponse(client.inventory['reorder-point'].$post(args, options))
    },
  })
}

export function usePostInventoryReorderPoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['reorder-point']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['reorder-point']['$post']>,
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
  const mutationDefaults = getPostInventoryReorderPointMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventorySafetyStockMutationKey() {
  return ['inventory', '/inventory/safety-stock', 'POST'] as const
}

export function getPostInventorySafetyStockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['safety-stock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['safety-stock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventorySafetyStockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['safety-stock']['$post']>) {
      return parseResponse(client.inventory['safety-stock'].$post(args, options))
    },
  })
}

export function usePostInventorySafetyStock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['safety-stock']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['safety-stock']['$post']>,
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
  const mutationDefaults = getPostInventorySafetyStockMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryServiceLevelMutationKey() {
  return ['inventory', '/inventory/service-level', 'POST'] as const
}

export function getPostInventoryServiceLevelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inventory)['service-level']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.inventory)['service-level']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryServiceLevelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.inventory)['service-level']['$post']>) {
      return parseResponse(client.inventory['service-level'].$post(args, options))
    },
  })
}

export function usePostInventoryServiceLevel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inventory)['service-level']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.inventory)['service-level']['$post']>,
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
  const mutationDefaults = getPostInventoryServiceLevelMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoryTurnsMutationKey() {
  return ['inventory', '/inventory/turns', 'POST'] as const
}

export function getPostInventoryTurnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.turns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventory.turns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoryTurnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventory.turns.$post>) {
      return parseResponse(client.inventory.turns.$post(args, options))
    },
  })
}

export function usePostInventoryTurns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inventory.turns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.inventory.turns.$post>,
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
  const mutationDefaults = getPostInventoryTurnsMutationOptions<TError, TOnMutateResult>(
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

export function getPostLifecycleManyToOneMutationKey() {
  return ['lifecycle', '/lifecycle/many-to-one', 'POST'] as const
}

export function getPostLifecycleManyToOneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lifecycle)['many-to-one']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLifecycleManyToOneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']>) {
      return parseResponse(client.lifecycle['many-to-one'].$post(args, options))
    },
  })
}

export function usePostLifecycleManyToOne<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lifecycle)['many-to-one']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']>,
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
  const mutationDefaults = getPostLifecycleManyToOneMutationOptions<TError, TOnMutateResult>(
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

export function getPostLifecycleOneToOneMutationKey() {
  return ['lifecycle', '/lifecycle/one-to-one', 'POST'] as const
}

export function getPostLifecycleOneToOneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lifecycle)['one-to-one']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLifecycleOneToOneMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']>) {
      return parseResponse(client.lifecycle['one-to-one'].$post(args, options))
    },
  })
}

export function usePostLifecycleOneToOne<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lifecycle)['one-to-one']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']>,
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
  const mutationDefaults = getPostLifecycleOneToOneMutationOptions<TError, TOnMutateResult>(
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

export function getPostOutlierMutationKey() {
  return ['outlier', '/outlier', 'POST'] as const
}

export function getPostOutlierMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outlier.$post>>>>>,
    TError,
    InferRequestType<typeof client.outlier.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOutlierMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.outlier.$post>) {
      return parseResponse(client.outlier.$post(args, options))
    },
  })
}

export function usePostOutlier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outlier.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.outlier.$post>,
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
  const mutationDefaults = getPostOutlierMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortfolioMutationKey() {
  return ['portfolio', '/portfolio', 'POST'] as const
}

export function getPostPortfolioMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.$post>>>>>,
    TError,
    InferRequestType<typeof client.portfolio.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.$post>) {
      return parseResponse(client.portfolio.$post(args, options))
    },
  })
}

export function usePostPortfolio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.portfolio.$post>,
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
  const mutationDefaults = getPostPortfolioMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPortfolioAbcMutationKey() {
  return ['portfolio', '/portfolio/abc', 'POST'] as const
}

export function getPostPortfolioAbcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.abc.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.portfolio.abc.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioAbcMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.abc.$post>) {
      return parseResponse(client.portfolio.abc.$post(args, options))
    },
  })
}

export function usePostPortfolioAbc<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.abc.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.portfolio.abc.$post>,
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
  const mutationDefaults = getPostPortfolioAbcMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortfolioFileToPortfolioMutationKey() {
  return ['portfolio', '/portfolio/file-to-portfolio', 'POST'] as const
}

export function getPostPortfolioFileToPortfolioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio)['file-to-portfolio']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioFileToPortfolioMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']>,
    ) {
      return parseResponse(client.portfolio['file-to-portfolio'].$post(args, options))
    },
  })
}

export function usePostPortfolioFileToPortfolio<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.portfolio)['file-to-portfolio']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']>,
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
  const mutationDefaults = getPostPortfolioFileToPortfolioMutationOptions<TError, TOnMutateResult>(
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

export function getPostPortfolioForecastPerformanceRewindMutationKey() {
  return ['portfolio', '/portfolio/forecast-performance-rewind', 'POST'] as const
}

export function getPostPortfolioForecastPerformanceRewindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioForecastPerformanceRewindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>,
    ) {
      return parseResponse(client.portfolio['forecast-performance-rewind'].$post(args, options))
    },
  })
}

export function usePostPortfolioForecastPerformanceRewind<
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
                  ReturnType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>,
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
  const mutationDefaults = getPostPortfolioForecastPerformanceRewindMutationOptions<
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

export function getPostPortfolioXyzMutationKey() {
  return ['portfolio', '/portfolio/xyz', 'POST'] as const
}

export function getPostPortfolioXyzMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.xyz.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.portfolio.xyz.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortfolioXyzMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portfolio.xyz.$post>) {
      return parseResponse(client.portfolio.xyz.$post(args, options))
    },
  })
}

export function usePostPortfolioXyz<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portfolio.xyz.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.portfolio.xyz.$post>,
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
  const mutationDefaults = getPostPortfolioXyzMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingBundlePricingMutationKey() {
  return ['pricing', '/pricing/bundle-pricing', 'POST'] as const
}

export function getPostPricingBundlePricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['bundle-pricing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingBundlePricingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']>) {
      return parseResponse(client.pricing['bundle-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingBundlePricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['bundle-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingBundlePricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingCompetitivePricingMutationKey() {
  return ['pricing', '/pricing/competitive-pricing', 'POST'] as const
}

export function getPostPricingCompetitivePricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['competitive-pricing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingCompetitivePricingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']>,
    ) {
      return parseResponse(client.pricing['competitive-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingCompetitivePricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['competitive-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingCompetitivePricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingCostPlusPricingMutationKey() {
  return ['pricing', '/pricing/cost-plus-pricing', 'POST'] as const
}

export function getPostPricingCostPlusPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['cost-plus-pricing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingCostPlusPricingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']>,
    ) {
      return parseResponse(client.pricing['cost-plus-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingCostPlusPricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['cost-plus-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingCostPlusPricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingDecoyPricingMutationKey() {
  return ['pricing', '/pricing/decoy-pricing', 'POST'] as const
}

export function getPostPricingDecoyPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing)['decoy-pricing']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingDecoyPricingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']>) {
      return parseResponse(client.pricing['decoy-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingDecoyPricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['decoy-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingDecoyPricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingOddPricingMutationKey() {
  return ['pricing', '/pricing/odd-pricing', 'POST'] as const
}

export function getPostPricingOddPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing)['odd-pricing']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['odd-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingOddPricingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pricing)['odd-pricing']['$post']>) {
      return parseResponse(client.pricing['odd-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingOddPricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['odd-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['odd-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingOddPricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingPenetrationPricingMutationKey() {
  return ['pricing', '/pricing/penetration-pricing', 'POST'] as const
}

export function getPostPricingPenetrationPricingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['penetration-pricing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingPenetrationPricingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']>,
    ) {
      return parseResponse(client.pricing['penetration-pricing'].$post(args, options))
    },
  })
}

export function usePostPricingPenetrationPricing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing)['penetration-pricing']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']>,
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
  const mutationDefaults = getPostPricingPenetrationPricingMutationOptions<TError, TOnMutateResult>(
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

export function getPostPricingPriceElasticityOfDemandMutationKey() {
  return ['pricing', '/pricing/price-elasticity-of-demand', 'POST'] as const
}

export function getPostPricingPriceElasticityOfDemandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingPriceElasticityOfDemandMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>,
    ) {
      return parseResponse(client.pricing['price-elasticity-of-demand'].$post(args, options))
    },
  })
}

export function usePostPricingPriceElasticityOfDemand<
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
                Awaited<ReturnType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>,
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
  const mutationDefaults = getPostPricingPriceElasticityOfDemandMutationOptions<
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

export function getReportPerformanceSkuRationalizationPlanningLevelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/performance/sku-rationalization/:planningLevelId', keyArgs] as const
}

export function getReportPerformanceSkuRationalizationPlanningLevelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPerformanceSkuRationalizationPlanningLevelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.performance['sku-rationalization'][':planningLevelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPerformanceSkuRationalizationPlanningLevelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
    >
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
                    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
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
                    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getReportPerformanceSkuRationalizationPlanningLevelIdQueryKey>
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
            ReturnType<
              (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPerformanceSkuRationalizationPlanningLevelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPerformanceSkuRationalizationPlanningLevelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.performance['sku-rationalization'][':planningLevelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportPerformancePlanningLevelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/performance/:planningLevelId', keyArgs] as const
}

export function getReportPerformancePlanningLevelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPerformancePlanningLevelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.performance[':planningLevelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPerformancePlanningLevelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportPerformancePlanningLevelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.report.performance)[':planningLevelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPerformancePlanningLevelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPerformancePlanningLevelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.performance[':planningLevelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportPlanningLevelOrganizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/planning-level/organization', keyArgs] as const
}

export function getReportPlanningLevelOrganizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPlanningLevelOrganizationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report['planning-level'].organization.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPlanningLevelOrganization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.report)['planning-level']['organization']['$get']>
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
                  ReturnType<(typeof client.report)['planning-level']['organization']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReportPlanningLevelOrganizationQueryKey>
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
          Awaited<ReturnType<(typeof client.report)['planning-level']['organization']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPlanningLevelOrganizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPlanningLevelOrganizationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report['planning-level'].organization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportPlanningLevelUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['user']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/planning-level/user', keyArgs] as const
}

export function getReportPlanningLevelUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportPlanningLevelUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report['planning-level'].user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportPlanningLevelUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.report)['planning-level']['user']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportPlanningLevelUserQueryKey>
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
          Awaited<ReturnType<(typeof client.report)['planning-level']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPlanningLevelUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportPlanningLevelUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report['planning-level'].user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.user.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['report', '/report/user', keyArgs] as const
}

export function getReportUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.report.user.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.report.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>
          >,
          ReturnType<typeof getReportUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.report.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
