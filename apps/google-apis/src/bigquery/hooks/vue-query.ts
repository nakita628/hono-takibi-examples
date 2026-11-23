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

export function getProjectsKey() {
  return ['projects'] as const
}

export function getResourceGetIamPolicyKey() {
  return ['{resource}:getIamPolicy'] as const
}

export function getResourceSetIamPolicyKey() {
  return ['{resource}:setIamPolicy'] as const
}

export function getResourceTestIamPermissionsKey() {
  return ['{resource}:testIamPermissions'] as const
}

export function getProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.projects.$get>>,
) {
  return ['projects', '/projects', toValue(args)] as const
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

export function getProjectsProjectIdDatasetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/datasets', toValue(args)] as const
}

export function getProjectsProjectIdDatasetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdDatasetsMutationKey() {
  return ['projects', '/projects/:projectId/datasets', 'POST'] as const
}

export function getPostProjectsProjectIdDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].datasets.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdDatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdDatasetsDatasetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId', toValue(args)] as const
}

export function getProjectsProjectIdDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdQueryKey>
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
            ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdDatasetsDatasetIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'PUT'] as const
}

export function getPutProjectsProjectIdDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].datasets[':datasetId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectIdDatasetsDatasetId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']
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
  const mutationDefaults = getPutProjectsProjectIdDatasetsDatasetIdMutationOptions<
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

export function getDeleteProjectsProjectIdDatasetsDatasetIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdDatasetsDatasetId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdDatasetsDatasetIdMutationOptions<
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

export function getPatchProjectsProjectIdDatasetsDatasetIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdDatasetsDatasetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].$patch(args, options),
      )
    },
  })
}

export function usePatchProjectsProjectIdDatasetsDatasetId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
    >
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models', toValue(args)] as const
}

export function getProjectsProjectIdDatasetsDatasetIdModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdModelsQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/models/:modelId',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdModelsModelId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
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

export function getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchProjectsProjectIdDatasetsDatasetIdModelsModelId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
    >
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines', toValue(args)] as const
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdRoutines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].routines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdDatasetsDatasetIdRoutinesMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines', 'POST'] as const
}

export function getPostProjectsProjectIdDatasetsDatasetIdRoutinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDatasetsDatasetIdRoutinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdDatasetsDatasetIdRoutines<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdRoutinesMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/routines/:routineId',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/routines/:routineId',
    'PUT',
  ] as const
}

export function getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
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
  const mutationDefaults = getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
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

export function getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/routines/:routineId',
    'DELETE',
  ] as const
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
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
  const mutationDefaults =
    getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdTablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
    >
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables', toValue(args)] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdTables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables', 'POST'] as const
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDatasetsDatasetIdTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdDatasetsDatasetIdTables<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdTablesMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'PUT'] as const
}

export function getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$put(args, options),
      )
    },
  })
}

export function usePutProjectsProjectIdDatasetsDatasetIdTablesTableId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
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
  const mutationDefaults = getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
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

export function getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdTablesTableId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
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

export function getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchProjectsProjectIdDatasetsDatasetIdTablesTableId<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/data',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdTablesTableIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey>
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllMutationKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/insertAll',
    'POST',
  ] as const
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].insertAll.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAll<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
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
  const mutationDefaults =
    getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllMutationOptions<
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

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/rowAccessPolicies',
    toValue(args),
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[
          ':tableId'
        ].rowAccessPolicies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey
          >
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
              (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[
            ':tableId'
          ].rowAccessPolicies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdDatasetsDatasetIdUndeleteMutationKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId:undelete', 'POST'] as const
}

export function getPostProjectsProjectIdDatasetsDatasetIdUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdDatasetsDatasetIdUndeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId:undelete'].$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdDatasetsDatasetIdUndelete<
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
                    (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdUndeleteMutationOptions<
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

export function getProjectsProjectIdJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>>,
) {
  return ['projects', '/projects/:projectId/jobs', toValue(args)] as const
}

export function getProjectsProjectIdJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdJobsMutationKey() {
  return ['projects', '/projects/:projectId/jobs', 'POST'] as const
}

export function getPostProjectsProjectIdJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].jobs.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdJobsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/jobs/:jobId', toValue(args)] as const
}

export function getProjectsProjectIdJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>
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
                  ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdJobsJobIdCancelMutationKey() {
  return ['projects', '/projects/:projectId/jobs/:jobId/cancel', 'POST'] as const
}

export function getPostProjectsProjectIdJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].jobs[':jobId'].cancel.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdJobsJobIdCancel<
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
                    (typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdJobsJobIdCancelMutationOptions<
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

export function getDeleteProjectsProjectIdJobsJobIdDeleteMutationKey() {
  return ['projects', '/projects/:projectId/jobs/:jobId/delete', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdJobsJobIdDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdJobsJobIdDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].jobs[':jobId'].delete.$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdJobsJobIdDelete<
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
                    (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdJobsJobIdDeleteMutationOptions<
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

export function getPostProjectsProjectIdQueriesMutationKey() {
  return ['projects', '/projects/:projectId/queries', 'POST'] as const
}

export function getPostProjectsProjectIdQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['queries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].queries.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['queries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdQueriesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdQueriesJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/queries/:jobId', toValue(args)] as const
}

export function getProjectsProjectIdQueriesJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueriesJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].queries[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdQueriesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>
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
                  ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueriesJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueriesJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueriesJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].queries[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdServiceAccountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
) {
  return ['projects', '/projects/:projectId/serviceAccount', toValue(args)] as const
}

export function getProjectsProjectIdServiceAccountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdServiceAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].serviceAccount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdServiceAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
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
                  ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdServiceAccountQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdServiceAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdServiceAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].serviceAccount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResourceGetIamPolicyMutationKey() {
  return [':resource:getIamPolicy', '/:resource:getIamPolicy', 'POST'] as const
}

export function getPostResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceGetIamPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']>) {
      return parseResponse(client[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']>,
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
  const mutationDefaults = getPostResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourceSetIamPolicyMutationKey() {
  return [':resource:setIamPolicy', '/:resource:setIamPolicy', 'POST'] as const
}

export function getPostResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceSetIamPolicyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']>) {
      return parseResponse(client[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourceTestIamPermissionsMutationKey() {
  return [':resource:testIamPermissions', '/:resource:testIamPermissions', 'POST'] as const
}

export function getPostResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostResourceTestIamPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostResourceTestIamPermissionsMutationOptions<
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
