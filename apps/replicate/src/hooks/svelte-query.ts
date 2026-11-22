import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getDeploymentsKey() {
  return ['deployments'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getHardwareKey() {
  return ['hardware'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getPredictionsKey() {
  return ['predictions'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTrainingsKey() {
  return ['trainings'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCollectionsCollectionSlugQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_slug']['$get']>,
) {
  return ['collections', '/collections/:collection_slug', args] as const
}

export function getCollectionsCollectionSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionSlugQueryKey>
  >({
    queryKey: getCollectionsCollectionSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionSlugQueryKey>
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
      ...getCollectionsCollectionSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeploymentsQueryKey() {
  return ['deployments', '/deployments'] as const
}

export function getDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeploymentsQueryKey>
  >({
    queryKey: getDeploymentsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.deployments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDeployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeploymentsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostDeploymentsMutationKey() {
  return ['deployments', '/deployments', 'POST'] as const
}

export function getPostDeploymentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$post>>>>>,
    TError,
    InferRequestType<typeof client.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deployments.$post>) {
      return parseResponse(client.deployments.$post(args, options))
    },
  })
}

export function createPostDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeploymentsDeploymentOwnerDeploymentNameQueryKey(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
  >,
) {
  return ['deployments', '/deployments/:deployment_owner/:deployment_name', args] as const
}

export function getDeploymentsDeploymentOwnerDeploymentNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentsDeploymentOwnerDeploymentNameQueryKey>
  >({
    queryKey: getDeploymentsDeploymentOwnerDeploymentNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.deployments[':deployment_owner'][':deployment_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeploymentsDeploymentOwnerDeploymentName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeploymentsDeploymentOwnerDeploymentNameQueryKey>
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
      ...getDeploymentsDeploymentOwnerDeploymentNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDeploymentsDeploymentOwnerDeploymentNameMutationKey() {
  return ['deployments', '/deployments/:deployment_owner/:deployment_name', 'DELETE'] as const
}

export function getDeleteDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeploymentsDeploymentOwnerDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.deployments[':deployment_owner'][':deployment_name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteDeploymentsDeploymentOwnerDeploymentName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.deployments)[':deployment_owner'][':deployment_name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
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

export function getPatchDeploymentsDeploymentOwnerDeploymentNameMutationKey() {
  return ['deployments', '/deployments/:deployment_owner/:deployment_name', 'PATCH'] as const
}

export function getPatchDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDeploymentsDeploymentOwnerDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.deployments[':deployment_owner'][':deployment_name'].$patch(args, options),
      )
    },
  })
}

export function createPatchDeploymentsDeploymentOwnerDeploymentName<
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
                  (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.deployments)[':deployment_owner'][':deployment_name']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
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

export function getPostDeploymentsDeploymentOwnerDeploymentNamePredictionsMutationKey() {
  return [
    'deployments',
    '/deployments/:deployment_owner/:deployment_name/predictions',
    'POST',
  ] as const
}

export function getPostDeploymentsDeploymentOwnerDeploymentNamePredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDeploymentsDeploymentOwnerDeploymentNamePredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
      >,
    ) {
      return parseResponse(
        client.deployments[':deployment_owner'][':deployment_name'].predictions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostDeploymentsDeploymentOwnerDeploymentNamePredictions<
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
                  (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.deployments)[':deployment_owner'][':deployment_name']['predictions']['$post']
        >,
        TOnMutateResult
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
      getPostDeploymentsDeploymentOwnerDeploymentNamePredictionsMutationOptions<
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

export function getFilesQueryKey() {
  return ['files', '/files'] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function createPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
        TError,
        InferRequestType<typeof client.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
) {
  return ['files', '/files/:file_id', args] as const
}

export function getFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >({
    queryKey: getFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteFilesFileIdMutationKey() {
  return ['files', '/files/:file_id', 'DELETE'] as const
}

export function getDeleteFilesFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesFileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['$delete']>) {
      return parseResponse(client.files[':file_id'].$delete(args, options))
    },
  })
}

export function createDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdDownloadQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['download']['$get']>,
) {
  return ['files', '/files/:file_id/download', args] as const
}

export function getFilesFileIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdDownloadQueryKey>
  >({
    queryKey: getFilesFileIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHardwareQueryKey() {
  return ['hardware', '/hardware'] as const
}

export function getHardwareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHardwareQueryKey>
  >({
    queryKey: getHardwareQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHardwareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHardwareQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getModelsQueryKey(args: InferRequestType<typeof client.models.$get>) {
  return ['models', '/models', args] as const
}

export function getModelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >({
    queryKey: getModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.models.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostModelsMutationKey() {
  return ['models', '/models', 'POST'] as const
}

export function getPostModelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
    TError,
    InferRequestType<typeof client.models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.models.$post>) {
      return parseResponse(client.models.$post(args, options))
    },
  })
}

export function createPostModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
        TError,
        InferRequestType<typeof client.models.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryModelsQueryKey(args: InferRequestType<typeof client.models.$query>) {
  return ['models', '/models', 'QUERY', args] as const
}

export function getQueryModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.models.$query>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryModelsQueryKey>
  >({
    queryKey: getQueryModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models.$query(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.models.$query>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getModelsModelOwnerModelNameQueryKey(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>,
) {
  return ['models', '/models/:model_owner/:model_name', args] as const
}

export function getModelsModelOwnerModelNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameQueryKey>
  >({
    queryKey: getModelsModelOwnerModelNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModelsModelOwnerModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelOwnerModelNameQueryKey>
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
      ...getModelsModelOwnerModelNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteModelsModelOwnerModelNameMutationKey() {
  return ['models', '/models/:model_owner/:model_name', 'DELETE'] as const
}

export function getDeleteModelsModelOwnerModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsModelOwnerModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$delete']>,
    ) {
      return parseResponse(client.models[':model_owner'][':model_name'].$delete(args, options))
    },
  })
}

export function createDeleteModelsModelOwnerModelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.models)[':model_owner'][':model_name']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModelsModelOwnerModelNameMutationOptions<
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

export function getPatchModelsModelOwnerModelNameMutationKey() {
  return ['models', '/models/:model_owner/:model_name', 'PATCH'] as const
}

export function getPatchModelsModelOwnerModelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsModelOwnerModelNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$patch']>,
    ) {
      return parseResponse(client.models[':model_owner'][':model_name'].$patch(args, options))
    },
  })
}

export function createPatchModelsModelOwnerModelName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchModelsModelOwnerModelNameMutationOptions<
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

export function getModelsModelOwnerModelNameExamplesQueryKey(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>,
) {
  return ['models', '/models/:model_owner/:model_name/examples', args] as const
}

export function getModelsModelOwnerModelNameExamplesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameExamplesQueryKey>
  >({
    queryKey: getModelsModelOwnerModelNameExamplesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].examples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModelsModelOwnerModelNameExamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['examples']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.models)[':model_owner'][':model_name']['examples']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelOwnerModelNameExamplesQueryKey>
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
      ...getModelsModelOwnerModelNameExamplesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostModelsModelOwnerModelNamePredictionsMutationKey() {
  return ['models', '/models/:model_owner/:model_name/predictions', 'POST'] as const
}

export function getPostModelsModelOwnerModelNamePredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':model_owner'][':model_name']['predictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['predictions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsModelOwnerModelNamePredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':model_owner'][':model_name']['predictions']['$post']
      >,
    ) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].predictions.$post(args, options),
      )
    },
  })
}

export function createPostModelsModelOwnerModelNamePredictions<
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
                  (typeof client.models)[':model_owner'][':model_name']['predictions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.models)[':model_owner'][':model_name']['predictions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostModelsModelOwnerModelNamePredictionsMutationOptions<
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

export function getModelsModelOwnerModelNameReadmeQueryKey(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>,
) {
  return ['models', '/models/:model_owner/:model_name/readme', args] as const
}

export function getModelsModelOwnerModelNameReadmeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameReadmeQueryKey>
  >({
    queryKey: getModelsModelOwnerModelNameReadmeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].readme.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModelsModelOwnerModelNameReadme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['readme']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelOwnerModelNameReadmeQueryKey>
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
      ...getModelsModelOwnerModelNameReadmeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getModelsModelOwnerModelNameVersionsQueryKey(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>,
) {
  return ['models', '/models/:model_owner/:model_name/versions', args] as const
}

export function getModelsModelOwnerModelNameVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameVersionsQueryKey>
  >({
    queryKey: getModelsModelOwnerModelNameVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModelsModelOwnerModelNameVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.models)[':model_owner'][':model_name']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelOwnerModelNameVersionsQueryKey>
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
      ...getModelsModelOwnerModelNameVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getModelsModelOwnerModelNameVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
  >,
) {
  return ['models', '/models/:model_owner/:model_name/versions/:version_id', args] as const
}

export function getModelsModelOwnerModelNameVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameVersionsVersionIdQueryKey>
  >({
    queryKey: getModelsModelOwnerModelNameVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions[':version_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModelsModelOwnerModelNameVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getModelsModelOwnerModelNameVersionsVersionIdQueryKey>
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
      ...getModelsModelOwnerModelNameVersionsVersionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteModelsModelOwnerModelNameVersionsVersionIdMutationKey() {
  return ['models', '/models/:model_owner/:model_name/versions/:version_id', 'DELETE'] as const
}

export function getDeleteModelsModelOwnerModelNameVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsModelOwnerModelNameVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions[':version_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteModelsModelOwnerModelNameVersionsVersionId<
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
                  (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteModelsModelOwnerModelNameVersionsVersionIdMutationOptions<
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

export function getPostModelsModelOwnerModelNameVersionsVersionIdTrainingsMutationKey() {
  return [
    'models',
    '/models/:model_owner/:model_name/versions/:version_id/trainings',
    'POST',
  ] as const
}

export function getPostModelsModelOwnerModelNameVersionsVersionIdTrainingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostModelsModelOwnerModelNameVersionsVersionIdTrainingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
      >,
    ) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions[':version_id'].trainings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostModelsModelOwnerModelNameVersionsVersionIdTrainings<
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
                  (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['trainings']['$post']
        >,
        TOnMutateResult
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
      getPostModelsModelOwnerModelNameVersionsVersionIdTrainingsMutationOptions<
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

export function getPredictionsQueryKey(args: InferRequestType<typeof client.predictions.$get>) {
  return ['predictions', '/predictions', args] as const
}

export function getPredictionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.predictions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictionsQueryKey>
  >({
    queryKey: getPredictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predictions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPredictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.predictions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPredictionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPredictionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPredictionsMutationKey() {
  return ['predictions', '/predictions', 'POST'] as const
}

export function getPostPredictionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>>,
    TError,
    InferRequestType<typeof client.predictions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPredictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predictions.$post>) {
      return parseResponse(client.predictions.$post(args, options))
    },
  })
}

export function createPostPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.predictions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPredictionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPredictionsPredictionIdQueryKey(
  args: InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>,
) {
  return ['predictions', '/predictions/:prediction_id', args] as const
}

export function getPredictionsPredictionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPredictionsPredictionIdQueryKey>
  >({
    queryKey: getPredictionsPredictionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.predictions[':prediction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPredictionsPredictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPredictionsPredictionIdQueryKey>
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
      ...getPredictionsPredictionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPredictionsPredictionIdCancelMutationKey() {
  return ['predictions', '/predictions/:prediction_id/cancel', 'POST'] as const
}

export function getPostPredictionsPredictionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPredictionsPredictionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.predictions[':prediction_id'].cancel.$post(args, options))
    },
  })
}

export function createPostPredictionsPredictionIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPredictionsPredictionIdCancelMutationOptions<
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

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTrainingsQueryKey() {
  return ['trainings', '/trainings'] as const
}

export function getTrainingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrainingsQueryKey>
  >({
    queryKey: getTrainingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.trainings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTrainings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTrainingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrainingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTrainingsTrainingIdQueryKey(
  args: InferRequestType<(typeof client.trainings)[':training_id']['$get']>,
) {
  return ['trainings', '/trainings/:training_id', args] as const
}

export function getTrainingsTrainingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.trainings)[':training_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainingsTrainingIdQueryKey>
  >({
    queryKey: getTrainingsTrainingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trainings[':training_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTrainingsTrainingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.trainings)[':training_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrainingsTrainingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrainingsTrainingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTrainingsTrainingIdCancelMutationKey() {
  return ['trainings', '/trainings/:training_id/cancel', 'POST'] as const
}

export function getPostTrainingsTrainingIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trainings)[':training_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.trainings)[':training_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTrainingsTrainingIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.trainings)[':training_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.trainings[':training_id'].cancel.$post(args, options))
    },
  })
}

export function createPostTrainingsTrainingIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.trainings)[':training_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.trainings)[':training_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTrainingsTrainingIdCancelMutationOptions<
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

export function getWebhooksDefaultSecretQueryKey() {
  return ['webhooks', '/webhooks/default/secret'] as const
}

export function getWebhooksDefaultSecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksDefaultSecretQueryKey>
  >({
    queryKey: getWebhooksDefaultSecretQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.default.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWebhooksDefaultSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksDefaultSecretQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksDefaultSecretQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
