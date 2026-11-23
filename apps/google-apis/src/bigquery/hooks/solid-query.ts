import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
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

export function createProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.projects.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProjectsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
) {
  return ['projects', '/projects/:projectId/datasets', args] as const
}

export function getProjectsProjectIdDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdDatasets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdDatasetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdQueryOptions<
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
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getProjectsProjectIdDatasetsDatasetIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutProjectsProjectIdDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProjectsProjectIdDatasetsDatasetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdModelsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdModelsQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdModels<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdModelsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdModelsModelId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdModelsModelIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdDatasetsDatasetIdModelsModelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProjectsProjectIdDatasetsDatasetIdModelsModelId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdRoutinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdRoutines<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdRoutinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdDatasetsDatasetIdRoutines<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdRoutinesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines/:routineId', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdTablesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdTables<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdTablesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdDatasetsDatasetIdTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdTablesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', args] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdTablesTableId<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdTablesTableIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/data',
    args,
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdTablesTableIdData<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdTablesTableIdDataQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAll<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/rowAccessPolicies',
    args,
  ] as const
}

export function getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryOptions<
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
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].datasets[':datasetId'].tables[
          ':tableId'
        ].rowAccessPolicies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPolicies<
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
  args: () => InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdDatasetsDatasetIdUndelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdDatasetsDatasetIdUndeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdJobsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
) {
  return ['projects', '/projects/:projectId/jobs', args] as const
}

export function getProjectsProjectIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
) {
  return ['projects', '/projects/:projectId/jobs/:jobId', args] as const
}

export function getProjectsProjectIdJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getProjectsProjectIdJobsJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdJobsJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdJobsJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteProjectsProjectIdJobsJobIdDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteProjectsProjectIdJobsJobIdDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostProjectsProjectIdQueries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsProjectIdQueriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProjectsProjectIdQueriesJobIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
) {
  return ['projects', '/projects/:projectId/queries/:jobId', args] as const
}

export function getProjectsProjectIdQueriesJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdQueriesJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].queries[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdQueriesJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getProjectsProjectIdQueriesJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdQueriesJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsProjectIdServiceAccountQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
) {
  return ['projects', '/projects/:projectId/serviceAccount', args] as const
}

export function getProjectsProjectIdServiceAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProjectsProjectIdServiceAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].serviceAccount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsProjectIdServiceAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getProjectsProjectIdServiceAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsProjectIdServiceAccountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResourceTestIamPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
