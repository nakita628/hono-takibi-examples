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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getApplicationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications', keyArgs] as const
}

export function getApplicationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.applications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>
          >,
          ReturnType<typeof getApplicationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApplicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplicationsMutationKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function getPostApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.$post>) {
      return parseResponse(client.applications.$post(args, options))
    },
  })
}

export function usePostApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.applications.$post>,
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
  const mutationDefaults = getPostApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApplicationsApplicationIdVersionsSemanticVersionMutationKey() {
  return ['applications', '/applications/:applicationId/versions/:semanticVersion', 'PUT'] as const
}

export function getPutApplicationsApplicationIdVersionsSemanticVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdVersionsSemanticVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
      >,
    ) {
      return parseResponse(
        client.applications[':applicationId'].versions[':semanticVersion'].$put(args, options),
      )
    },
  })
}

export function usePutApplicationsApplicationIdVersionsSemanticVersion<
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
                    (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.applications)[':applicationId']['versions'][':semanticVersion']['$put']
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
  const mutationDefaults = getPutApplicationsApplicationIdVersionsSemanticVersionMutationOptions<
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

export function getPostApplicationsApplicationIdChangesetsMutationKey() {
  return ['applications', '/applications/:applicationId/changesets', 'POST'] as const
}

export function getPostApplicationsApplicationIdChangesetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['changesets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdChangesetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].changesets.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdChangesets<
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
                  ReturnType<(typeof client.applications)[':applicationId']['changesets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['changesets']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdChangesetsMutationOptions<
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

export function getPostApplicationsApplicationIdTemplatesMutationKey() {
  return ['applications', '/applications/:applicationId/templates', 'POST'] as const
}

export function getPostApplicationsApplicationIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].templates.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdTemplates<
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
                  ReturnType<(typeof client.applications)[':applicationId']['templates']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['templates']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdTemplatesMutationOptions<
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

export function getApplicationsApplicationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':applicationId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:applicationId', keyArgs] as const
}

export function getApplicationsApplicationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':applicationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':applicationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.applications)[':applicationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':applicationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:applicationId', 'DELETE'] as const
}

export function getDeleteApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':applicationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
    ) {
      return parseResponse(client.applications[':applicationId'].$delete(args, options))
    },
  })
}

export function useDeleteApplicationsApplicationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.applications)[':applicationId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['$delete']>,
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
  const mutationDefaults = getDeleteApplicationsApplicationIdMutationOptions<
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

export function getPatchApplicationsApplicationIdMutationKey() {
  return ['applications', '/applications/:applicationId', 'PATCH'] as const
}

export function getPatchApplicationsApplicationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApplicationsApplicationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
    ) {
      return parseResponse(client.applications[':applicationId'].$patch(args, options))
    },
  })
}

export function usePatchApplicationsApplicationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':applicationId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['$patch']>,
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
  const mutationDefaults = getPatchApplicationsApplicationIdMutationOptions<
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

export function getApplicationsApplicationIdPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:applicationId/policy', keyArgs] as const
}

export function getApplicationsApplicationIdPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':applicationId'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>
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
                  ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdPolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':applicationId'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApplicationsApplicationIdPolicyMutationKey() {
  return ['applications', '/applications/:applicationId/policy', 'PUT'] as const
}

export function getPutApplicationsApplicationIdPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['policy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsApplicationIdPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
    ) {
      return parseResponse(client.applications[':applicationId'].policy.$put(args, options))
    },
  })
}

export function usePutApplicationsApplicationIdPolicy<
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
                  ReturnType<(typeof client.applications)[':applicationId']['policy']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['policy']['$put']>,
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
  const mutationDefaults = getPutApplicationsApplicationIdPolicyMutationOptions<
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

export function getApplicationsApplicationIdTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:applicationId/templates/:templateId', keyArgs] as const
}

export function getApplicationsApplicationIdTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':applicationId'].templates[':templateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
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
                    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
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
                    (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdTemplatesTemplateIdQueryKey>
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
              (typeof client.applications)[':applicationId']['templates'][':templateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':applicationId'].templates[':templateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationsApplicationIdDependenciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:applicationId/dependencies', keyArgs] as const
}

export function getApplicationsApplicationIdDependenciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdDependenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':applicationId'].dependencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
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
                  ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdDependenciesQueryKey>
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
            ReturnType<(typeof client.applications)[':applicationId']['dependencies']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdDependenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdDependenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':applicationId'].dependencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApplicationsApplicationIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['applications', '/applications/:applicationId/versions', keyArgs] as const
}

export function getApplicationsApplicationIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApplicationsApplicationIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.applications[':applicationId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApplicationsApplicationIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.applications)[':applicationId']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>
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
                  ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApplicationsApplicationIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.applications)[':applicationId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsApplicationIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApplicationsApplicationIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.applications[':applicationId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApplicationsApplicationIdUnshareMutationKey() {
  return ['applications', '/applications/:applicationId/unshare', 'POST'] as const
}

export function getPostApplicationsApplicationIdUnshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':applicationId']['unshare']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsApplicationIdUnshareMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
    ) {
      return parseResponse(client.applications[':applicationId'].unshare.$post(args, options))
    },
  })
}

export function usePostApplicationsApplicationIdUnshare<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.applications)[':applicationId']['unshare']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.applications)[':applicationId']['unshare']['$post']>,
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
  const mutationDefaults = getPostApplicationsApplicationIdUnshareMutationOptions<
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
