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

export function get_2020_11_20Key() {
  return ['2020-11-20'] as const
}

export function getPost20201120ProjectsProjectNameDatasetsMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/datasets', 'POST'] as const
}

export function getPost20201120ProjectsProjectNameDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].datasets.$post(args, options),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameDatasets<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
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
    const mutationDefaults = getPost20201120ProjectsProjectNameDatasetsMutationOptions<
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

export function get20201120ProjectsProjectNameModelsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models', keyArgs] as const
}

export function get20201120ProjectsProjectNameModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameModelsQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameModelsQueryKey>
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
      ...get20201120ProjectsProjectNameModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20201120ProjectsProjectNameModelsMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models', 'POST'] as const
}

export function getPost20201120ProjectsProjectNameModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models.$post(args, options),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameModels<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']
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
    const mutationDefaults = getPost20201120ProjectsProjectNameModelsMutationOptions<
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

export function get20201120ProjectsQueryKey(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects', keyArgs] as const
}

export function get20201120ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsQueryKey>
  >({
    queryKey: get20201120ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120Projects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsQueryKey>
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
    return { ...get20201120ProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20201120ProjectsMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects', 'POST'] as const
}

export function getPost20201120ProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-11-20']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2020-11-20']['projects']['$post']>) {
      return parseResponse(client['2020-11-20'].projects.$post(args, options))
    },
  })
}

export function createPost20201120Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-11-20']['projects']['$post']>,
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
    const mutationDefaults = getPost20201120ProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20201120ProjectsProjectNameDatasetsDatasetTypeQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/datasets/:datasetType', keyArgs] as const
}

export function get20201120ProjectsProjectNameDatasetsDatasetTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameDatasetsDatasetTypeQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameDatasetsDatasetTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameDatasetsDatasetType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameDatasetsDatasetTypeQueryKey>
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
      ...get20201120ProjectsProjectNameDatasetsDatasetTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20201120ProjectsProjectNameDatasetsDatasetTypeMutationKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/datasets/:datasetType',
    'DELETE',
  ] as const
}

export function getDelete20201120ProjectsProjectNameDatasetsDatasetTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20201120ProjectsProjectNameDatasetsDatasetTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDelete20201120ProjectsProjectNameDatasetsDatasetType<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
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
    const mutationDefaults = getDelete20201120ProjectsProjectNameDatasetsDatasetTypeMutationOptions<
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

export function get20201120ProjectsProjectNameModelsModelVersionQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models/:modelVersion', keyArgs] as const
}

export function get20201120ProjectsProjectNameModelsModelVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameModelsModelVersionQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameModelsModelVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameModelsModelVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameModelsModelVersionQueryKey>
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
      ...get20201120ProjectsProjectNameModelsModelVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20201120ProjectsProjectNameModelsModelVersionMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models/:modelVersion', 'DELETE'] as const
}

export function getDelete20201120ProjectsProjectNameModelsModelVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20201120ProjectsProjectNameModelsModelVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDelete20201120ProjectsProjectNameModelsModelVersion<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
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
    const mutationDefaults = getDelete20201120ProjectsProjectNameModelsModelVersionMutationOptions<
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

export function get20201120ProjectsProjectNameQueryKey(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName', keyArgs] as const
}

export function get20201120ProjectsProjectNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameQueryKey>
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
      ...get20201120ProjectsProjectNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20201120ProjectsProjectNameMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName', 'DELETE'] as const
}

export function getDelete20201120ProjectsProjectNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20201120ProjectsProjectNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>,
    ) {
      return parseResponse(client['2020-11-20'].projects[':projectName'].$delete(args, options))
    },
  })
}

export function createDelete20201120ProjectsProjectName<
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
                  ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>,
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
    const mutationDefaults = getDelete20201120ProjectsProjectNameMutationOptions<
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

export function get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/modelpackagingjobs/:jobName',
    keyArgs,
  ] as const
}

export function get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].modelpackagingjobs[':jobName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameModelpackagingjobsJobName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryKey>
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
      ...get20201120ProjectsProjectNameModelpackagingjobsJobNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeMutationKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/detect#Content-Type',
    'POST',
  ] as const
}

export function getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models[':modelVersion'][
          'detect#Content-Type'
        ].$post(args, options),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameModelsModelVersionDetectContentType<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
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
      getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeMutationOptions<
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

export function get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/datasets/:datasetType/entries',
    keyArgs,
  ] as const
}

export function get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameDatasetsDatasetTypeEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryKey>
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
      ...get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesMutationKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/datasets/:datasetType/entries',
    'PATCH',
  ] as const
}

export function getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntries<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
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
      getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesMutationOptions<
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

export function get20201120ProjectsProjectNameModelpackagingjobsQueryKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/modelpackagingjobs', keyArgs] as const
}

export function get20201120ProjectsProjectNameModelpackagingjobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120ProjectsProjectNameModelpackagingjobsQueryKey>
  >({
    queryKey: get20201120ProjectsProjectNameModelpackagingjobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120ProjectsProjectNameModelpackagingjobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120ProjectsProjectNameModelpackagingjobsQueryKey>
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
      ...get20201120ProjectsProjectNameModelpackagingjobsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20201120ProjectsProjectNameModelpackagingjobsMutationKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/modelpackagingjobs', 'POST'] as const
}

export function getPost20201120ProjectsProjectNameModelpackagingjobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameModelpackagingjobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$post(args, options),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameModelpackagingjobs<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
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
    const mutationDefaults = getPost20201120ProjectsProjectNameModelpackagingjobsMutationOptions<
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

export function get20201120TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn', keyArgs] as const
}

export function get20201120TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20201120TagsResourceArnQueryKey>
  >({
    queryKey: get20201120TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-11-20'].tags[':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20201120TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof get20201120TagsResourceArnQueryKey>
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
      ...get20201120TagsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20201120TagsResourceArnMutationKey() {
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn', 'POST'] as const
}

export function getPost20201120TagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20201120TagsResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>,
    ) {
      return parseResponse(client['2020-11-20'].tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPost20201120TagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>,
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
    const mutationDefaults = getPost20201120TagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20201120ProjectsProjectNameModelsModelVersionStartMutationKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/start',
    'POST',
  ] as const
}

export function getPost20201120ProjectsProjectNameModelsModelVersionStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameModelsModelVersionStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models[':modelVersion'].start.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameModelsModelVersionStart<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
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
      getPost20201120ProjectsProjectNameModelsModelVersionStartMutationOptions<
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

export function getPost20201120ProjectsProjectNameModelsModelVersionStopMutationKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/stop',
    'POST',
  ] as const
}

export function getPost20201120ProjectsProjectNameModelsModelVersionStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20201120ProjectsProjectNameModelsModelVersionStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-11-20'].projects[':projectName'].models[':modelVersion'].stop.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPost20201120ProjectsProjectNameModelsModelVersionStop<
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
                    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
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
      getPost20201120ProjectsProjectNameModelsModelVersionStopMutationOptions<
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

export function getDelete20201120TagsResourceArnTagKeysMutationKey() {
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDelete20201120TagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20201120TagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']
      >,
    ) {
      return parseResponse(client['2020-11-20'].tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDelete20201120TagsResourceArnTagKeys<
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
                    (typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']
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
    const mutationDefaults = getDelete20201120TagsResourceArnTagKeysMutationOptions<
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
