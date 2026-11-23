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

export function getAppClientsKey() {
  return ['appClients'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getDeploymentEnvironmentsKey() {
  return ['deploymentEnvironments'] as const
}

export function getDocumentsKey() {
  return ['documents'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getModelsKey() {
  return ['models'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPaymentMethodsKey() {
  return ['paymentMethods'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getPredictionsKey() {
  return ['predictions'] as const
}

export function getProfilesKey() {
  return ['profiles'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getSignupKey() {
  return ['signup'] as const
}

export function getTransitionsKey() {
  return ['transitions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWorkflowsKey() {
  return ['workflows'] as const
}

export function getAppClientsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appClients.$get>>,
) {
  return ['appClients', '/appClients', toValue(args)] as const
}

export function getAppClientsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appClients.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppClientsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.appClients.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAppClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.appClients.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>
          >,
          ReturnType<typeof getAppClientsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppClientsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppClientsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.appClients.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAppClientsMutationKey() {
  return ['appClients', '/appClients', 'POST'] as const
}

export function getPostAppClientsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$post>>>>>,
    TError,
    InferRequestType<typeof client.appClients.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appClients.$post>) {
      return parseResponse(client.appClients.$post(args, options))
    },
  })
}

export function usePostAppClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.appClients.$post>,
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
  const mutationDefaults = getPostAppClientsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsAppClientsMutationKey() {
  return ['appClients', '/appClients', 'OPTIONS'] as const
}

export function getOptionsAppClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.appClients.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAppClientsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.appClients.$options>) {
      return parseResponse(client.appClients.$options(args, options))
    },
  })
}

export function useOptionsAppClients<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.appClients.$options>,
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
  const mutationDefaults = getOptionsAppClientsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAppClientsAppClientIdMutationKey() {
  return ['appClients', '/appClients/:appClientId', 'DELETE'] as const
}

export function getDeleteAppClientsAppClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appClients)[':appClientId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppClientsAppClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.appClients)[':appClientId']['$delete']>,
    ) {
      return parseResponse(client.appClients[':appClientId'].$delete(args, options))
    },
  })
}

export function useDeleteAppClientsAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appClients)[':appClientId']['$delete']>,
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
  const mutationDefaults = getDeleteAppClientsAppClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAppClientsAppClientIdMutationKey() {
  return ['appClients', '/appClients/:appClientId', 'OPTIONS'] as const
}

export function getOptionsAppClientsAppClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appClients)[':appClientId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAppClientsAppClientIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.appClients)[':appClientId']['$options']>,
    ) {
      return parseResponse(client.appClients[':appClientId'].$options(args, options))
    },
  })
}

export function useOptionsAppClientsAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appClients)[':appClientId']['$options']>,
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
  const mutationDefaults = getOptionsAppClientsAppClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAppClientsAppClientIdMutationKey() {
  return ['appClients', '/appClients/:appClientId', 'PATCH'] as const
}

export function getPatchAppClientsAppClientIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.appClients)[':appClientId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppClientsAppClientIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.appClients)[':appClientId']['$patch']>) {
      return parseResponse(client.appClients[':appClientId'].$patch(args, options))
    },
  })
}

export function usePatchAppClientsAppClientId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.appClients)[':appClientId']['$patch']>,
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
  const mutationDefaults = getPatchAppClientsAppClientIdMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
) {
  return ['assets', '/assets', toValue(args)] as const
}

export function getAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          ReturnType<typeof getAssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssetsMutationKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function getPostAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$post>) {
      return parseResponse(client.assets.$post(args, options))
    },
  })
}

export function usePostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$post>,
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
  const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsAssetsMutationKey() {
  return ['assets', '/assets', 'OPTIONS'] as const
}

export function getOptionsAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$options>>>>>,
    TError,
    InferRequestType<typeof client.assets.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$options>) {
      return parseResponse(client.assets.$options(args, options))
    },
  })
}

export function useOptionsAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$options>,
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
  const mutationDefaults = getOptionsAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
) {
  return ['assets', '/assets/:assetId', toValue(args)] as const
}

export function getAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetsAssetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAssetsAssetIdMutationKey() {
  return ['assets', '/assets/:assetId', 'DELETE'] as const
}

export function getDeleteAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':assetId']['$delete']>) {
      return parseResponse(client.assets[':assetId'].$delete(args, options))
    },
  })
}

export function useDeleteAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
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
  const mutationDefaults = getDeleteAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsAssetsAssetIdMutationKey() {
  return ['assets', '/assets/:assetId', 'OPTIONS'] as const
}

export function getOptionsAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':assetId']['$options']>) {
      return parseResponse(client.assets[':assetId'].$options(args, options))
    },
  })
}

export function useOptionsAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['$options']>,
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
  const mutationDefaults = getOptionsAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAssetsAssetIdMutationKey() {
  return ['assets', '/assets/:assetId', 'PATCH'] as const
}

export function getPatchAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':assetId']['$patch']>) {
      return parseResponse(client.assets[':assetId'].$patch(args, options))
    },
  })
}

export function usePatchAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['$patch']>,
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
  const mutationDefaults = getPatchAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
) {
  return ['datasets', '/datasets', toValue(args)] as const
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

export function getOptionsDatasetsMutationKey() {
  return ['datasets', '/datasets', 'OPTIONS'] as const
}

export function getOptionsDatasetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$options>>>>>,
    TError,
    InferRequestType<typeof client.datasets.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsDatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasets.$options>) {
      return parseResponse(client.datasets.$options(args, options))
    },
  })
}

export function useOptionsDatasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.datasets.$options>,
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
  const mutationDefaults = getOptionsDatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasetsDatasetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetId']['$get']>>,
) {
  return ['datasets', '/datasets/:datasetId', toValue(args)] as const
}

export function getDatasetsDatasetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsDatasetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':datasetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsDatasetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':datasetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasetsDatasetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsDatasetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsDatasetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':datasetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDatasetsDatasetIdMutationKey() {
  return ['datasets', '/datasets/:datasetId', 'DELETE'] as const
}

export function getDeleteDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasetsDatasetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':datasetId']['$delete']>) {
      return parseResponse(client.datasets[':datasetId'].$delete(args, options))
    },
  })
}

export function useDeleteDatasetsDatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetId']['$delete']>,
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
  const mutationDefaults = getDeleteDatasetsDatasetIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsDatasetsDatasetIdMutationKey() {
  return ['datasets', '/datasets/:datasetId', 'OPTIONS'] as const
}

export function getOptionsDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsDatasetsDatasetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':datasetId']['$options']>) {
      return parseResponse(client.datasets[':datasetId'].$options(args, options))
    },
  })
}

export function useOptionsDatasetsDatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetId']['$options']>,
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
  const mutationDefaults = getOptionsDatasetsDatasetIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDatasetsDatasetIdMutationKey() {
  return ['datasets', '/datasets/:datasetId', 'PATCH'] as const
}

export function getPatchDatasetsDatasetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':datasetId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDatasetsDatasetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasets)[':datasetId']['$patch']>) {
      return parseResponse(client.datasets[':datasetId'].$patch(args, options))
    },
  })
}

export function usePatchDatasetsDatasetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':datasetId']['$patch']>,
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
  const mutationDefaults = getPatchDatasetsDatasetIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeploymentEnvironmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentEnvironments.$get>>,
) {
  return ['deploymentEnvironments', '/deploymentEnvironments', toValue(args)] as const
}

export function getDeploymentEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentEnvironments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentEnvironments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentEnvironments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.deploymentEnvironments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
            >
          >,
          ReturnType<typeof getDeploymentEnvironmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentEnvironments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsDeploymentEnvironmentsMutationKey() {
  return ['deploymentEnvironments', '/deploymentEnvironments', 'OPTIONS'] as const
}

export function getOptionsDeploymentEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$options>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deploymentEnvironments.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsDeploymentEnvironmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deploymentEnvironments.$options>) {
      return parseResponse(client.deploymentEnvironments.$options(args, options))
    },
  })
}

export function useOptionsDeploymentEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.deploymentEnvironments.$options>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.deploymentEnvironments.$options>,
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
  const mutationDefaults = getOptionsDeploymentEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getDeploymentEnvironmentsDeploymentEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
  >,
) {
  return [
    'deploymentEnvironments',
    '/deploymentEnvironments/:deploymentEnvironmentId',
    toValue(args),
  ] as const
}

export function getDeploymentEnvironmentsDeploymentEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeploymentEnvironmentsDeploymentEnvironmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.deploymentEnvironments[':deploymentEnvironmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeploymentEnvironmentsDeploymentEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
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
                    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
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
                    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeploymentEnvironmentsDeploymentEnvironmentIdQueryKey>
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
            ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeploymentEnvironmentsDeploymentEnvironmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeploymentEnvironmentsDeploymentEnvironmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.deploymentEnvironments[':deploymentEnvironmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdMutationKey() {
  return [
    'deploymentEnvironments',
    '/deploymentEnvironments/:deploymentEnvironmentId',
    'OPTIONS',
  ] as const
}

export function getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
      >,
    ) {
      return parseResponse(
        client.deploymentEnvironments[':deploymentEnvironmentId'].$options(args, options),
      )
    },
  })
}

export function useOptionsDeploymentEnvironmentsDeploymentEnvironmentId<
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
                    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
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
  const mutationDefaults = getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdMutationOptions<
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

export function getDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
) {
  return ['documents', '/documents', toValue(args)] as const
}

export function getDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>
          >,
          ReturnType<typeof getDocumentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDocumentsMutationKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function getPostDocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    InferRequestType<typeof client.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.$post>) {
      return parseResponse(client.documents.$post(args, options))
    },
  })
}

export function usePostDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.documents.$post>,
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
  const mutationDefaults = getPostDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDocumentsMutationKey() {
  return ['documents', '/documents', 'DELETE'] as const
}

export function getDeleteDocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$delete>>>>>,
    TError,
    InferRequestType<typeof client.documents.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.$delete>) {
      return parseResponse(client.documents.$delete(args, options))
    },
  })
}

export function useDeleteDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.documents.$delete>,
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
  const mutationDefaults = getDeleteDocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsDocumentsMutationKey() {
  return ['documents', '/documents', 'OPTIONS'] as const
}

export function getOptionsDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.documents.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.documents.$options>) {
      return parseResponse(client.documents.$options(args, options))
    },
  })
}

export function useOptionsDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.documents.$options>,
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
  const mutationDefaults = getOptionsDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
) {
  return ['documents', '/documents/:documentId', toValue(args)] as const
}

export function getDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.documents)[':documentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDocumentsDocumentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDocumentsDocumentIdMutationKey() {
  return ['documents', '/documents/:documentId', 'DELETE'] as const
}

export function getDeleteDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDocumentsDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':documentId']['$delete']>) {
      return parseResponse(client.documents[':documentId'].$delete(args, options))
    },
  })
}

export function useDeleteDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
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
  const mutationDefaults = getDeleteDocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsDocumentsDocumentIdMutationKey() {
  return ['documents', '/documents/:documentId', 'OPTIONS'] as const
}

export function getOptionsDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsDocumentsDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':documentId']['$options']>) {
      return parseResponse(client.documents[':documentId'].$options(args, options))
    },
  })
}

export function useOptionsDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['$options']>,
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
  const mutationDefaults = getOptionsDocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDocumentsDocumentIdMutationKey() {
  return ['documents', '/documents/:documentId', 'PATCH'] as const
}

export function getPatchDocumentsDocumentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.documents)[':documentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDocumentsDocumentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.documents)[':documentId']['$patch']>) {
      return parseResponse(client.documents[':documentId'].$patch(args, options))
    },
  })
}

export function usePatchDocumentsDocumentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.documents)[':documentId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.documents)[':documentId']['$patch']>,
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
  const mutationDefaults = getPatchDocumentsDocumentIdMutationOptions<TError, TOnMutateResult>(
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

export function getLogsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>) {
  return ['logs', '/logs', toValue(args)] as const
}

export function getLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
          ReturnType<typeof getLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsLogsMutationKey() {
  return ['logs', '/logs', 'OPTIONS'] as const
}

export function getOptionsLogsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$options>>>>>,
    TError,
    InferRequestType<typeof client.logs.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsLogsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logs.$options>) {
      return parseResponse(client.logs.$options(args, options))
    },
  })
}

export function useOptionsLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.logs.$options>,
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
  const mutationDefaults = getOptionsLogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogsLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':logId']['$get']>>,
) {
  return ['logs', '/logs/:logId', toValue(args)] as const
}

export function getLogsLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':logId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':logId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':logId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
            >
          >,
          ReturnType<typeof getLogsLogIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':logId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsLogsLogIdMutationKey() {
  return ['logs', '/logs/:logId', 'OPTIONS'] as const
}

export function getOptionsLogsLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':logId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsLogsLogIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs)[':logId']['$options']>) {
      return parseResponse(client.logs[':logId'].$options(args, options))
    },
  })
}

export function useOptionsLogsLogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$options']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.logs)[':logId']['$options']>,
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
  const mutationDefaults = getOptionsLogsLogIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsModelsMutationKey() {
  return ['models', '/models', 'OPTIONS'] as const
}

export function getOptionsModelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$options>>>>>,
    TError,
    InferRequestType<typeof client.models.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.models.$options>) {
      return parseResponse(client.models.$options(args, options))
    },
  })
}

export function useOptionsModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.models.$options>,
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
  const mutationDefaults = getOptionsModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getModelsModelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['$get']>>,
) {
  return ['models', '/models/:modelId', toValue(args)] as const
}

export function getModelsModelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':modelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
            >
          >,
          ReturnType<typeof getModelsModelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':modelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteModelsModelIdMutationKey() {
  return ['models', '/models/:modelId', 'DELETE'] as const
}

export function getDeleteModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':modelId']['$delete']>) {
      return parseResponse(client.models[':modelId'].$delete(args, options))
    },
  })
}

export function useDeleteModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['$delete']>,
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
  const mutationDefaults = getDeleteModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsModelsModelIdMutationKey() {
  return ['models', '/models/:modelId', 'OPTIONS'] as const
}

export function getOptionsModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':modelId']['$options']>) {
      return parseResponse(client.models[':modelId'].$options(args, options))
    },
  })
}

export function useOptionsModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['$options']>,
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
  const mutationDefaults = getOptionsModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchModelsModelIdMutationKey() {
  return ['models', '/models/:modelId', 'PATCH'] as const
}

export function getPatchModelsModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsModelIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.models)[':modelId']['$patch']>) {
      return parseResponse(client.models[':modelId'].$patch(args, options))
    },
  })
}

export function usePatchModelsModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['$patch']>,
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
  const mutationDefaults = getPatchModelsModelIdMutationOptions<TError, TOnMutateResult>(
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

export function getModelsModelIdDataBundlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>
  >,
) {
  return ['models', '/models/:modelId/dataBundles', toValue(args)] as const
}

export function getModelsModelIdDataBundlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelIdDataBundlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':modelId'].dataBundles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelIdDataBundles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModelsModelIdDataBundlesQueryKey>
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
          Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelIdDataBundlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelIdDataBundlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':modelId'].dataBundles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModelsModelIdDataBundlesMutationKey() {
  return ['models', '/models/:modelId/dataBundles', 'POST'] as const
}

export function getPostModelsModelIdDataBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsModelIdDataBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']>,
    ) {
      return parseResponse(client.models[':modelId'].dataBundles.$post(args, options))
    },
  })
}

export function usePostModelsModelIdDataBundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']>,
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
  const mutationDefaults = getPostModelsModelIdDataBundlesMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsModelsModelIdDataBundlesMutationKey() {
  return ['models', '/models/:modelId/dataBundles', 'OPTIONS'] as const
}

export function getOptionsModelsModelIdDataBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsModelIdDataBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']>,
    ) {
      return parseResponse(client.models[':modelId'].dataBundles.$options(args, options))
    },
  })
}

export function useOptionsModelsModelIdDataBundles<
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
                Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']>,
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
  const mutationDefaults = getOptionsModelsModelIdDataBundlesMutationOptions<
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

export function getDeleteModelsModelIdDataBundlesDataBundleIdMutationKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'DELETE'] as const
}

export function getDeleteModelsModelIdDataBundlesDataBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModelsModelIdDataBundlesDataBundleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.models[':modelId'].dataBundles[':dataBundleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteModelsModelIdDataBundlesDataBundleId<
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
                    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
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
  const mutationDefaults = getDeleteModelsModelIdDataBundlesDataBundleIdMutationOptions<
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

export function getOptionsModelsModelIdDataBundlesDataBundleIdMutationKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'OPTIONS'] as const
}

export function getOptionsModelsModelIdDataBundlesDataBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsModelIdDataBundlesDataBundleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
      >,
    ) {
      return parseResponse(
        client.models[':modelId'].dataBundles[':dataBundleId'].$options(args, options),
      )
    },
  })
}

export function useOptionsModelsModelIdDataBundlesDataBundleId<
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
                    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
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
  const mutationDefaults = getOptionsModelsModelIdDataBundlesDataBundleIdMutationOptions<
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

export function getPatchModelsModelIdDataBundlesDataBundleIdMutationKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'PATCH'] as const
}

export function getPatchModelsModelIdDataBundlesDataBundleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsModelIdDataBundlesDataBundleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.models[':modelId'].dataBundles[':dataBundleId'].$patch(args, options),
      )
    },
  })
}

export function usePatchModelsModelIdDataBundlesDataBundleId<
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
                    (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']
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
  const mutationDefaults = getPatchModelsModelIdDataBundlesDataBundleIdMutationOptions<
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

export function getModelsModelIdTrainingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>>,
) {
  return ['models', '/models/:modelId/trainings', toValue(args)] as const
}

export function getModelsModelIdTrainingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelsModelIdTrainingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.models[':modelId'].trainings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelsModelIdTrainings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getModelsModelIdTrainingsQueryKey>
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
          Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModelsModelIdTrainingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelsModelIdTrainingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.models[':modelId'].trainings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostModelsModelIdTrainingsMutationKey() {
  return ['models', '/models/:modelId/trainings', 'POST'] as const
}

export function getPostModelsModelIdTrainingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostModelsModelIdTrainingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']>,
    ) {
      return parseResponse(client.models[':modelId'].trainings.$post(args, options))
    },
  })
}

export function usePostModelsModelIdTrainings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']>,
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
  const mutationDefaults = getPostModelsModelIdTrainingsMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsModelsModelIdTrainingsMutationKey() {
  return ['models', '/models/:modelId/trainings', 'OPTIONS'] as const
}

export function getOptionsModelsModelIdTrainingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsModelIdTrainingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']>,
    ) {
      return parseResponse(client.models[':modelId'].trainings.$options(args, options))
    },
  })
}

export function useOptionsModelsModelIdTrainings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']>,
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
  const mutationDefaults = getOptionsModelsModelIdTrainingsMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsModelsModelIdTrainingsTrainingIdMutationKey() {
  return ['models', '/models/:modelId/trainings/:trainingId', 'OPTIONS'] as const
}

export function getOptionsModelsModelIdTrainingsTrainingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$options']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsModelsModelIdTrainingsTrainingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':modelId']['trainings'][':trainingId']['$options']
      >,
    ) {
      return parseResponse(
        client.models[':modelId'].trainings[':trainingId'].$options(args, options),
      )
    },
  })
}

export function useOptionsModelsModelIdTrainingsTrainingId<
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
                    (typeof client.models)[':modelId']['trainings'][':trainingId']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.models)[':modelId']['trainings'][':trainingId']['$options']
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
  const mutationDefaults = getOptionsModelsModelIdTrainingsTrainingIdMutationOptions<
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

export function getPatchModelsModelIdTrainingsTrainingIdMutationKey() {
  return ['models', '/models/:modelId/trainings/:trainingId', 'PATCH'] as const
}

export function getPatchModelsModelIdTrainingsTrainingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchModelsModelIdTrainingsTrainingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']
      >,
    ) {
      return parseResponse(client.models[':modelId'].trainings[':trainingId'].$patch(args, options))
    },
  })
}

export function usePatchModelsModelIdTrainingsTrainingId<
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
                    (typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']
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
  const mutationDefaults = getPatchModelsModelIdTrainingsTrainingIdMutationOptions<
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

export function getOrganizationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
) {
  return ['organizations', '/organizations', toValue(args)] as const
}

export function getOrganizationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
          >,
          ReturnType<typeof getOrganizationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function getPostOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$post>) {
      return parseResponse(client.organizations.$post(args, options))
    },
  })
}

export function usePostOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.organizations.$post>,
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
  const mutationDefaults = getPostOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsOrganizationsMutationKey() {
  return ['organizations', '/organizations', 'OPTIONS'] as const
}

export function getOptionsOrganizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.organizations.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsOrganizationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organizations.$options>) {
      return parseResponse(client.organizations.$options(args, options))
    },
  })
}

export function useOptionsOrganizations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$options>>>
            >
          >,
          TError,
          InferRequestType<typeof client.organizations.$options>,
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
  const mutationDefaults = getOptionsOrganizationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organizationId', toValue(args)] as const
}

export function getOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organizationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organizationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organizationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsOrganizationsOrganizationIdMutationKey() {
  return ['organizations', '/organizations/:organizationId', 'OPTIONS'] as const
}

export function getOptionsOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['$options']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].$options(args, options))
    },
  })
}

export function useOptionsOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['$options']>,
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
  const mutationDefaults = getOptionsOrganizationsOrganizationIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdMutationKey() {
  return ['organizations', '/organizations/:organizationId', 'PATCH'] as const
}

export function getPatchOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':organizationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':organizationId']['$patch']>,
    ) {
      return parseResponse(client.organizations[':organizationId'].$patch(args, options))
    },
  })
}

export function usePatchOrganizationsOrganizationId<
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
                Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organizations)[':organizationId']['$patch']>,
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
  const mutationDefaults = getPatchOrganizationsOrganizationIdMutationOptions<
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

export function getPaymentMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.paymentMethods.$get>>,
) {
  return ['paymentMethods', '/paymentMethods', toValue(args)] as const
}

export function getPaymentMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.paymentMethods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentMethods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.paymentMethods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
          >,
          ReturnType<typeof getPaymentMethodsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentMethods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentMethodsMutationKey() {
  return ['paymentMethods', '/paymentMethods', 'POST'] as const
}

export function getPostPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.paymentMethods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentMethods.$post>) {
      return parseResponse(client.paymentMethods.$post(args, options))
    },
  })
}

export function usePostPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.paymentMethods.$post>,
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
  const mutationDefaults = getPostPaymentMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsPaymentMethodsMutationKey() {
  return ['paymentMethods', '/paymentMethods', 'OPTIONS'] as const
}

export function getOptionsPaymentMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.paymentMethods.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsPaymentMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.paymentMethods.$options>) {
      return parseResponse(client.paymentMethods.$options(args, options))
    },
  })
}

export function useOptionsPaymentMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$options>>>
            >
          >,
          TError,
          InferRequestType<typeof client.paymentMethods.$options>,
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
  const mutationDefaults = getOptionsPaymentMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentMethodsPaymentMethodIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>
  >,
) {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', toValue(args)] as const
}

export function getPaymentMethodsPaymentMethodIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentMethodsPaymentMethodIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.paymentMethods[':paymentMethodId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentMethodsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentMethodsPaymentMethodIdQueryKey>
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
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentMethodsPaymentMethodIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentMethodsPaymentMethodIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.paymentMethods[':paymentMethodId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePaymentMethodsPaymentMethodIdMutationKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'DELETE'] as const
}

export function getDeletePaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>,
    ) {
      return parseResponse(client.paymentMethods[':paymentMethodId'].$delete(args, options))
    },
  })
}

export function useDeletePaymentMethodsPaymentMethodId<
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
                Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>,
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
  const mutationDefaults = getDeletePaymentMethodsPaymentMethodIdMutationOptions<
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

export function getOptionsPaymentMethodsPaymentMethodIdMutationKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'OPTIONS'] as const
}

export function getOptionsPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>,
    ) {
      return parseResponse(client.paymentMethods[':paymentMethodId'].$options(args, options))
    },
  })
}

export function useOptionsPaymentMethodsPaymentMethodId<
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
                Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>,
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
  const mutationDefaults = getOptionsPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPatchPaymentMethodsPaymentMethodIdMutationKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'PATCH'] as const
}

export function getPatchPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>,
    ) {
      return parseResponse(client.paymentMethods[':paymentMethodId'].$patch(args, options))
    },
  })
}

export function usePatchPaymentMethodsPaymentMethodId<
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
                Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>,
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
  const mutationDefaults = getPatchPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
) {
  return ['plans', '/plans', toValue(args)] as const
}

export function getPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          ReturnType<typeof getPlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsPlansMutationKey() {
  return ['plans', '/plans', 'OPTIONS'] as const
}

export function getOptionsPlansMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$options>>>>>,
    TError,
    InferRequestType<typeof client.plans.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsPlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.plans.$options>) {
      return parseResponse(client.plans.$options(args, options))
    },
  })
}

export function useOptionsPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.plans.$options>,
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
  const mutationDefaults = getOptionsPlansMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansPlanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':planId']['$get']>>,
) {
  return ['plans', '/plans/:planId', toValue(args)] as const
}

export function getPlansPlanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':planId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':planId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlansPlanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':planId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
            >
          >,
          ReturnType<typeof getPlansPlanIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlansPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':planId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsPlansPlanIdMutationKey() {
  return ['plans', '/plans/:planId', 'OPTIONS'] as const
}

export function getOptionsPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.plans)[':planId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsPlansPlanIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':planId']['$options']>) {
      return parseResponse(client.plans[':planId'].$options(args, options))
    },
  })
}

export function useOptionsPlansPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.plans)[':planId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':planId']['$options']>,
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
  const mutationDefaults = getOptionsPlansPlanIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsPredictionsMutationKey() {
  return ['predictions', '/predictions', 'OPTIONS'] as const
}

export function getOptionsPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.predictions.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsPredictionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.predictions.$options>) {
      return parseResponse(client.predictions.$options(args, options))
    },
  })
}

export function useOptionsPredictions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$options>>>
            >
          >,
          TError,
          InferRequestType<typeof client.predictions.$options>,
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
  const mutationDefaults = getOptionsPredictionsMutationOptions<TError, TOnMutateResult>(
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

export function getProfilesProfileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profiles)[':profileId']['$get']>>,
) {
  return ['profiles', '/profiles/:profileId', toValue(args)] as const
}

export function getProfilesProfileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profiles)[':profileId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProfilesProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profiles[':profileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProfilesProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.profiles)[':profileId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProfilesProfileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProfilesProfileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProfilesProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.profiles[':profileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsProfilesProfileIdMutationKey() {
  return ['profiles', '/profiles/:profileId', 'OPTIONS'] as const
}

export function getOptionsProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profiles)[':profileId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.profiles)[':profileId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsProfilesProfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profiles)[':profileId']['$options']>) {
      return parseResponse(client.profiles[':profileId'].$options(args, options))
    },
  })
}

export function useOptionsProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profiles)[':profileId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profiles)[':profileId']['$options']>,
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
  const mutationDefaults = getOptionsProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchProfilesProfileIdMutationKey() {
  return ['profiles', '/profiles/:profileId', 'PATCH'] as const
}

export function getPatchProfilesProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.profiles)[':profileId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProfilesProfileIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.profiles)[':profileId']['$patch']>) {
      return parseResponse(client.profiles[':profileId'].$patch(args, options))
    },
  })
}

export function usePatchProfilesProfileId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.profiles)[':profileId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.profiles)[':profileId']['$patch']>,
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
  const mutationDefaults = getPatchProfilesProfileIdMutationOptions<TError, TOnMutateResult>(
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

export function getSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
) {
  return ['secrets', '/secrets', toValue(args)] as const
}

export function getSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          ReturnType<typeof getSecretsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSecretsMutationKey() {
  return ['secrets', '/secrets', 'POST'] as const
}

export function getPostSecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
    TError,
    InferRequestType<typeof client.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secrets.$post>) {
      return parseResponse(client.secrets.$post(args, options))
    },
  })
}

export function usePostSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.secrets.$post>,
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
  const mutationDefaults = getPostSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsSecretsMutationKey() {
  return ['secrets', '/secrets', 'OPTIONS'] as const
}

export function getOptionsSecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$options>>>>>,
    TError,
    InferRequestType<typeof client.secrets.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secrets.$options>) {
      return parseResponse(client.secrets.$options(args, options))
    },
  })
}

export function useOptionsSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.secrets.$options>,
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
  const mutationDefaults = getOptionsSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecretsSecretIdMutationKey() {
  return ['secrets', '/secrets/:secretId', 'DELETE'] as const
}

export function getDeleteSecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':secretId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':secretId']['$delete']>) {
      return parseResponse(client.secrets[':secretId'].$delete(args, options))
    },
  })
}

export function useDeleteSecretsSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':secretId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':secretId']['$delete']>,
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
  const mutationDefaults = getDeleteSecretsSecretIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsSecretsSecretIdMutationKey() {
  return ['secrets', '/secrets/:secretId', 'OPTIONS'] as const
}

export function getOptionsSecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':secretId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsSecretsSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':secretId']['$options']>) {
      return parseResponse(client.secrets[':secretId'].$options(args, options))
    },
  })
}

export function useOptionsSecretsSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':secretId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':secretId']['$options']>,
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
  const mutationDefaults = getOptionsSecretsSecretIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSecretsSecretIdMutationKey() {
  return ['secrets', '/secrets/:secretId', 'PATCH'] as const
}

export function getPatchSecretsSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':secretId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSecretsSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':secretId']['$patch']>) {
      return parseResponse(client.secrets[':secretId'].$patch(args, options))
    },
  })
}

export function usePatchSecretsSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':secretId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':secretId']['$patch']>,
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
  const mutationDefaults = getPatchSecretsSecretIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSignupMutationKey() {
  return ['signup', '/signup', 'POST'] as const
}

export function getPostSignupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>>,
    TError,
    InferRequestType<typeof client.signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signup.$post>) {
      return parseResponse(client.signup.$post(args, options))
    },
  })
}

export function usePostSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.signup.$post>,
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
  const mutationDefaults = getPostSignupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsSignupMutationKey() {
  return ['signup', '/signup', 'OPTIONS'] as const
}

export function getOptionsSignupMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$options>>>>>,
    TError,
    InferRequestType<typeof client.signup.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.signup.$options>) {
      return parseResponse(client.signup.$options(args, options))
    },
  })
}

export function useOptionsSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.signup.$options>,
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
  const mutationDefaults = getOptionsSignupMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transitions.$get>>,
) {
  return ['transitions', '/transitions', toValue(args)] as const
}

export function getTransitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transitions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransitions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transitions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
          >,
          ReturnType<typeof getTransitionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransitionsMutationKey() {
  return ['transitions', '/transitions', 'POST'] as const
}

export function getPostTransitionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$post>>>>>,
    TError,
    InferRequestType<typeof client.transitions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transitions.$post>) {
      return parseResponse(client.transitions.$post(args, options))
    },
  })
}

export function usePostTransitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transitions.$post>,
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
  const mutationDefaults = getPostTransitionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsTransitionsMutationKey() {
  return ['transitions', '/transitions', 'OPTIONS'] as const
}

export function getOptionsTransitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.transitions.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransitionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transitions.$options>) {
      return parseResponse(client.transitions.$options(args, options))
    },
  })
}

export function useOptionsTransitions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$options>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transitions.$options>,
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
  const mutationDefaults = getOptionsTransitionsMutationOptions<TError, TOnMutateResult>(
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

export function getTransitionsTransitionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transitions)[':transitionId']['$get']>>,
) {
  return ['transitions', '/transitions/:transitionId', toValue(args)] as const
}

export function getTransitionsTransitionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transitions)[':transitionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransitionsTransitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions[':transitionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsTransitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transitions)[':transitionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransitionsTransitionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsTransitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransitionsTransitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions[':transitionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTransitionsTransitionIdMutationKey() {
  return ['transitions', '/transitions/:transitionId', 'DELETE'] as const
}

export function getDeleteTransitionsTransitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transitions)[':transitionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransitionsTransitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transitions)[':transitionId']['$delete']>,
    ) {
      return parseResponse(client.transitions[':transitionId'].$delete(args, options))
    },
  })
}

export function useDeleteTransitionsTransitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transitions)[':transitionId']['$delete']>,
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
  const mutationDefaults = getDeleteTransitionsTransitionIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsTransitionsTransitionIdMutationKey() {
  return ['transitions', '/transitions/:transitionId', 'OPTIONS'] as const
}

export function getOptionsTransitionsTransitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transitions)[':transitionId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransitionsTransitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transitions)[':transitionId']['$options']>,
    ) {
      return parseResponse(client.transitions[':transitionId'].$options(args, options))
    },
  })
}

export function useOptionsTransitionsTransitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transitions)[':transitionId']['$options']>,
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
  const mutationDefaults = getOptionsTransitionsTransitionIdMutationOptions<
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

export function getPatchTransitionsTransitionIdMutationKey() {
  return ['transitions', '/transitions/:transitionId', 'PATCH'] as const
}

export function getPatchTransitionsTransitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transitions)[':transitionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTransitionsTransitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transitions)[':transitionId']['$patch']>,
    ) {
      return parseResponse(client.transitions[':transitionId'].$patch(args, options))
    },
  })
}

export function usePatchTransitionsTransitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transitions)[':transitionId']['$patch']>,
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
  const mutationDefaults = getPatchTransitionsTransitionIdMutationOptions<TError, TOnMutateResult>(
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

export function getTransitionsTransitionIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>
  >,
) {
  return ['transitions', '/transitions/:transitionId/executions', toValue(args)] as const
}

export function getTransitionsTransitionIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransitionsTransitionIdExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions[':transitionId'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsTransitionIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>
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
                  ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTransitionsTransitionIdExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsTransitionIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransitionsTransitionIdExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions[':transitionId'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTransitionsTransitionIdExecutionsMutationKey() {
  return ['transitions', '/transitions/:transitionId/executions', 'POST'] as const
}

export function getPostTransitionsTransitionIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransitionsTransitionIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>,
    ) {
      return parseResponse(client.transitions[':transitionId'].executions.$post(args, options))
    },
  })
}

export function usePostTransitionsTransitionIdExecutions<
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
                  ReturnType<(typeof client.transitions)[':transitionId']['executions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>,
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
  const mutationDefaults = getPostTransitionsTransitionIdExecutionsMutationOptions<
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

export function getOptionsTransitionsTransitionIdExecutionsMutationKey() {
  return ['transitions', '/transitions/:transitionId/executions', 'OPTIONS'] as const
}

export function getOptionsTransitionsTransitionIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.transitions)[':transitionId']['executions']['$options']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransitionsTransitionIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transitions)[':transitionId']['executions']['$options']
      >,
    ) {
      return parseResponse(client.transitions[':transitionId'].executions.$options(args, options))
    },
  })
}

export function useOptionsTransitionsTransitionIdExecutions<
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
                  ReturnType<(typeof client.transitions)[':transitionId']['executions']['$options']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$options']>,
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
  const mutationDefaults = getOptionsTransitionsTransitionIdExecutionsMutationOptions<
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

export function getTransitionsTransitionIdExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
    >
  >,
) {
  return [
    'transitions',
    '/transitions/:transitionId/executions/:executionId',
    toValue(args),
  ] as const
}

export function getTransitionsTransitionIdExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransitionsTransitionIdExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions[':transitionId'].executions[':executionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsTransitionIdExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
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
                    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
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
                    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTransitionsTransitionIdExecutionsExecutionIdQueryKey>
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
              (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsTransitionIdExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransitionsTransitionIdExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdMutationKey() {
  return ['transitions', '/transitions/:transitionId/executions/:executionId', 'OPTIONS'] as const
}

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransitionsTransitionIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
      >,
    ) {
      return parseResponse(
        client.transitions[':transitionId'].executions[':executionId'].$options(args, options),
      )
    },
  })
}

export function useOptionsTransitionsTransitionIdExecutionsExecutionId<
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
                    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
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
  const mutationDefaults = getOptionsTransitionsTransitionIdExecutionsExecutionIdMutationOptions<
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

export function getPatchTransitionsTransitionIdExecutionsExecutionIdMutationKey() {
  return ['transitions', '/transitions/:transitionId/executions/:executionId', 'PATCH'] as const
}

export function getPatchTransitionsTransitionIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchTransitionsTransitionIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.transitions[':transitionId'].executions[':executionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchTransitionsTransitionIdExecutionsExecutionId<
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
                    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
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
  const mutationDefaults = getPatchTransitionsTransitionIdExecutionsExecutionIdMutationOptions<
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

export function getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationKey() {
  return [
    'transitions',
    '/transitions/:transitionId/executions/:executionId/heartbeats',
    'POST',
  ] as const
}

export function getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
      >,
    ) {
      return parseResponse(
        client.transitions[':transitionId'].executions[':executionId'].heartbeats.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostTransitionsTransitionIdExecutionsExecutionIdHeartbeats<
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
                      (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
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
    getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationOptions<
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

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationKey() {
  return [
    'transitions',
    '/transitions/:transitionId/executions/:executionId/heartbeats',
    'OPTIONS',
  ] as const
}

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
      >,
    ) {
      return parseResponse(
        client.transitions[':transitionId'].executions[':executionId'].heartbeats.$options(
          args,
          options,
        ),
      )
    },
  })
}

export function useOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeats<
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
                    (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
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
    getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsMutationOptions<
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsUsersMutationKey() {
  return ['users', '/users', 'OPTIONS'] as const
}

export function getOptionsUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$options>>>>>,
    TError,
    InferRequestType<typeof client.users.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$options>) {
      return parseResponse(client.users.$options(args, options))
    },
  })
}

export function useOptionsUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.users.$options>,
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
  const mutationDefaults = getOptionsUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
) {
  return ['users', '/users/:userId', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'OPTIONS'] as const
}

export function getOptionsUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$options']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$options']>) {
      return parseResponse(client.users[':userId'].$options(args, options))
    },
  })
}

export function useOptionsUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$options']>,
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
  const mutationDefaults = getOptionsUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function getPatchUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$patch']>) {
      return parseResponse(client.users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$patch']>,
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
  const mutationDefaults = getPatchUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
) {
  return ['workflows', '/workflows', toValue(args)] as const
}

export function getWorkflowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workflows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>
          >,
          ReturnType<typeof getWorkflowsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkflowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsMutationKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function getPostWorkflowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    InferRequestType<typeof client.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.$post>) {
      return parseResponse(client.workflows.$post(args, options))
    },
  })
}

export function usePostWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workflows.$post>,
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
  const mutationDefaults = getPostWorkflowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOptionsWorkflowsMutationKey() {
  return ['workflows', '/workflows', 'OPTIONS'] as const
}

export function getOptionsWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$options>>>>
    >,
    TError,
    InferRequestType<typeof client.workflows.$options>,
    TOnMutateResult
  >({
    mutationKey: getOptionsWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workflows.$options>) {
      return parseResponse(client.workflows.$options(args, options))
    },
  })
}

export function useOptionsWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$options>>>>
          >,
          TError,
          InferRequestType<typeof client.workflows.$options>,
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
  const mutationDefaults = getOptionsWorkflowsMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowsWorkflowIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
) {
  return ['workflows', '/workflows/:workflowId', toValue(args)] as const
}

export function getWorkflowsWorkflowIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflowId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workflows)[':workflowId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflowId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflowId', 'DELETE'] as const
}

export function getDeleteWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>) {
      return parseResponse(client.workflows[':workflowId'].$delete(args, options))
    },
  })
}

export function useDeleteWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>,
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
  const mutationDefaults = getDeleteWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getOptionsWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflowId', 'OPTIONS'] as const
}

export function getOptionsWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflowId']['$options']>) {
      return parseResponse(client.workflows[':workflowId'].$options(args, options))
    },
  })
}

export function useOptionsWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$options']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflowId']['$options']>,
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
  const mutationDefaults = getOptionsWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWorkflowsWorkflowIdMutationKey() {
  return ['workflows', '/workflows/:workflowId', 'PATCH'] as const
}

export function getPatchWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkflowsWorkflowIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>) {
      return parseResponse(client.workflows[':workflowId'].$patch(args, options))
    },
  })
}

export function usePatchWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>,
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
  const mutationDefaults = getPatchWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
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

export function getWorkflowsWorkflowIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>
  >,
) {
  return ['workflows', '/workflows/:workflowId/executions', toValue(args)] as const
}

export function getWorkflowsWorkflowIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflowId'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflowId'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkflowsWorkflowIdExecutionsMutationKey() {
  return ['workflows', '/workflows/:workflowId/executions', 'POST'] as const
}

export function getPostWorkflowsWorkflowIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkflowsWorkflowIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>,
    ) {
      return parseResponse(client.workflows[':workflowId'].executions.$post(args, options))
    },
  })
}

export function usePostWorkflowsWorkflowIdExecutions<
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
                Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>,
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
  const mutationDefaults = getPostWorkflowsWorkflowIdExecutionsMutationOptions<
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

export function getOptionsWorkflowsWorkflowIdExecutionsMutationKey() {
  return ['workflows', '/workflows/:workflowId/executions', 'OPTIONS'] as const
}

export function getOptionsWorkflowsWorkflowIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$options']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>,
    TOnMutateResult
  >({
    mutationKey: getOptionsWorkflowsWorkflowIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>,
    ) {
      return parseResponse(client.workflows[':workflowId'].executions.$options(args, options))
    },
  })
}

export function useOptionsWorkflowsWorkflowIdExecutions<
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
                  ReturnType<(typeof client.workflows)[':workflowId']['executions']['$options']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>,
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
  const mutationDefaults = getOptionsWorkflowsWorkflowIdExecutionsMutationOptions<
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

export function getWorkflowsWorkflowIdExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']>
  >,
) {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', toValue(args)] as const
}

export function getWorkflowsWorkflowIdExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkflowsWorkflowIdExecutionsExecutionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workflows[':workflowId'].executions[':executionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkflowsWorkflowIdExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']>
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
                    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
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
                    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkflowsWorkflowIdExecutionsExecutionIdQueryKey>
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
              (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkflowsWorkflowIdExecutionsExecutionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkflowsWorkflowIdExecutionsExecutionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWorkflowsWorkflowIdExecutionsExecutionIdMutationKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'DELETE'] as const
}

export function getDeleteWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkflowsWorkflowIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.workflows[':workflowId'].executions[':executionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWorkflowsWorkflowIdExecutionsExecutionId<
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
                    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
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
  const mutationDefaults = getDeleteWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
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

export function getOptionsWorkflowsWorkflowIdExecutionsExecutionIdMutationKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'OPTIONS'] as const
}

export function getOptionsWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
    >,
    TOnMutateResult
  >({
    mutationKey: getOptionsWorkflowsWorkflowIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
      >,
    ) {
      return parseResponse(
        client.workflows[':workflowId'].executions[':executionId'].$options(args, options),
      )
    },
  })
}

export function useOptionsWorkflowsWorkflowIdExecutionsExecutionId<
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
                    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
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
  const mutationDefaults = getOptionsWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
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

export function getPatchWorkflowsWorkflowIdExecutionsExecutionIdMutationKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'PATCH'] as const
}

export function getPatchWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkflowsWorkflowIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.workflows[':workflowId'].executions[':executionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchWorkflowsWorkflowIdExecutionsExecutionId<
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
                    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
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
  const mutationDefaults = getPatchWorkflowsWorkflowIdExecutionsExecutionIdMutationOptions<
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
