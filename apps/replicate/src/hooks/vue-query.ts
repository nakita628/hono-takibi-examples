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

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
          >,
          ReturnType<typeof getCollectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCollectionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_slug']['$get']>>,
) {
  return ['collections', '/collections/:collection_slug', toValue(args)] as const
}

export function getCollectionsCollectionSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsCollectionSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collections)[':collection_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.collections)[':collection_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeploymentsQueryKey() {
  return ['deployments', '/deployments'] as const
}

export function getDeploymentsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeploymentsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deployments.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDeployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>
          >,
          ReturnType<typeof getDeploymentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeploymentsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.deployments.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deployments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deployments.$post>,
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
  const mutationDefaults = getPostDeploymentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeploymentsDeploymentOwnerDeploymentNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
  >,
) {
  return ['deployments', '/deployments/:deployment_owner/:deployment_name', toValue(args)] as const
}

export function getDeploymentsDeploymentOwnerDeploymentNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentsDeploymentOwnerDeploymentNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deployments[':deployment_owner'][':deployment_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentsDeploymentOwnerDeploymentName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
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
                    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
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
                    (typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentsDeploymentOwnerDeploymentNameQueryKey>
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
            ReturnType<(typeof client.deployments)[':deployment_owner'][':deployment_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentsDeploymentOwnerDeploymentNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentsDeploymentOwnerDeploymentNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deployments[':deployment_owner'][':deployment_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDeploymentsDeploymentOwnerDeploymentName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
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

export function usePatchDeploymentsDeploymentOwnerDeploymentName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDeploymentsDeploymentOwnerDeploymentNameMutationOptions<
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

export function usePostDeploymentsDeploymentOwnerDeploymentNamePredictions<
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
    getPostDeploymentsDeploymentOwnerDeploymentNamePredictionsMutationOptions<
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

export function getFilesQueryKey() {
  return ['files', '/files'] as const
}

export function getFilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
) {
  return ['files', '/files/:file_id', toValue(args)] as const
}

export function getFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteFilesFileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFilesFileIdMutationOptions<TError, TOnMutateResult>(
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

export function getFilesFileIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['download']['$get']>>,
) {
  return ['files', '/files/:file_id/download', toValue(args)] as const
}

export function getFilesFileIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':file_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareQueryKey() {
  return ['hardware', '/hardware'] as const
}

export function getHardwareQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHardwareQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>
          >,
          ReturnType<typeof getHardwareQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHardwareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHardwareQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
) {
  return ['models', '/models', toValue(args)] as const
}

export function getModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useModels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
          ReturnType<typeof getModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.models.$post>,
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
  const mutationDefaults = getPostModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQueryModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$query>>,
) {
  return ['models', '/models', 'QUERY', toValue(args)] as const
}

export function getQueryModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$query>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models.$query(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useQueryModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.models.$query>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>
          >,
          ReturnType<typeof getQueryModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$query>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models.$query(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsModelOwnerModelNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>
  >,
) {
  return ['models', '/models/:model_owner/:model_name', toValue(args)] as const
}

export function getModelsModelOwnerModelNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelOwnerModelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelOwnerModelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModelsModelOwnerModelNameQueryKey>
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
          Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelOwnerModelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model_owner'][':model_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteModelsModelOwnerModelName<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteModelsModelOwnerModelNameMutationOptions<
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

export function usePatchModelsModelOwnerModelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchModelsModelOwnerModelNameMutationOptions<
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

export function getModelsModelOwnerModelNameExamplesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
  >,
) {
  return ['models', '/models/:model_owner/:model_name/examples', toValue(args)] as const
}

export function getModelsModelOwnerModelNameExamplesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelOwnerModelNameExamplesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].examples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelOwnerModelNameExamples<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
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
                    (typeof client.models)[':model_owner'][':model_name']['examples']['$get']
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
                    (typeof client.models)[':model_owner'][':model_name']['examples']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getModelsModelOwnerModelNameExamplesQueryKey>
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
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['examples']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelOwnerModelNameExamplesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model_owner'][':model_name'].examples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostModelsModelOwnerModelNamePredictions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostModelsModelOwnerModelNamePredictionsMutationOptions<
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

export function getModelsModelOwnerModelNameReadmeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
  >,
) {
  return ['models', '/models/:model_owner/:model_name/readme', toValue(args)] as const
}

export function getModelsModelOwnerModelNameReadmeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelOwnerModelNameReadmeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].readme.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelOwnerModelNameReadme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
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
                    (typeof client.models)[':model_owner'][':model_name']['readme']['$get']
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
                    (typeof client.models)[':model_owner'][':model_name']['readme']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getModelsModelOwnerModelNameReadmeQueryKey>
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
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['readme']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameReadmeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelOwnerModelNameReadmeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model_owner'][':model_name'].readme.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsModelOwnerModelNameVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
  >,
) {
  return ['models', '/models/:model_owner/:model_name/versions', toValue(args)] as const
}

export function getModelsModelOwnerModelNameVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelOwnerModelNameVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelOwnerModelNameVersions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
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
                    (typeof client.models)[':model_owner'][':model_name']['versions']['$get']
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
                    (typeof client.models)[':model_owner'][':model_name']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getModelsModelOwnerModelNameVersionsQueryKey>
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
            ReturnType<(typeof client.models)[':model_owner'][':model_name']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelOwnerModelNameVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model_owner'][':model_name'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getModelsModelOwnerModelNameVersionsVersionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
    >
  >,
) {
  return ['models', '/models/:model_owner/:model_name/versions/:version_id', toValue(args)] as const
}

export function getModelsModelOwnerModelNameVersionsVersionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelOwnerModelNameVersionsVersionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':model_owner'][':model_name'].versions[':version_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelOwnerModelNameVersionsVersionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
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
                    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
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
                    (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getModelsModelOwnerModelNameVersionsVersionIdQueryKey>
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
              (typeof client.models)[':model_owner'][':model_name']['versions'][':version_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelOwnerModelNameVersionsVersionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelOwnerModelNameVersionsVersionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':model_owner'][':model_name'].versions[':version_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteModelsModelOwnerModelNameVersionsVersionId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteModelsModelOwnerModelNameVersionsVersionIdMutationOptions<
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

export function usePostModelsModelOwnerModelNameVersionsVersionIdTrainings<
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
    getPostModelsModelOwnerModelNameVersionsVersionIdTrainingsMutationOptions<
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

export function getPredictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
) {
  return ['predictions', '/predictions', toValue(args)] as const
}

export function getPredictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predictions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePredictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.predictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
          >,
          ReturnType<typeof getPredictionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPredictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.predictions.$post>,
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
  const mutationDefaults = getPostPredictionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPredictionsPredictionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>>,
) {
  return ['predictions', '/predictions/:prediction_id', toValue(args)] as const
}

export function getPredictionsPredictionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPredictionsPredictionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.predictions[':prediction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePredictionsPredictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.predictions)[':prediction_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPredictionsPredictionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.predictions)[':prediction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPredictionsPredictionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPredictionsPredictionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.predictions[':prediction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPredictionsPredictionIdCancel<
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
                  ReturnType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.predictions)[':prediction_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostPredictionsPredictionIdCancelMutationOptions<
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

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrainingsQueryKey() {
  return ['trainings', '/trainings'] as const
}

export function getTrainingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTrainingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trainings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrainings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>
          >,
          ReturnType<typeof getTrainingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trainings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrainingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTrainingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.trainings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrainingsTrainingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trainings)[':training_id']['$get']>>,
) {
  return ['trainings', '/trainings/:training_id', toValue(args)] as const
}

export function getTrainingsTrainingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trainings)[':training_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrainingsTrainingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trainings[':training_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrainingsTrainingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.trainings)[':training_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTrainingsTrainingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.trainings)[':training_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrainingsTrainingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrainingsTrainingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trainings[':training_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTrainingsTrainingIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTrainingsTrainingIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksDefaultSecretQueryKey() {
  return ['webhooks', '/webhooks/default/secret'] as const
}

export function getWebhooksDefaultSecretQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWebhooksDefaultSecretQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.default.secret.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksDefaultSecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
            >
          >,
          ReturnType<typeof getWebhooksDefaultSecretQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.default.secret.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksDefaultSecretQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWebhooksDefaultSecretQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.default.secret.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
