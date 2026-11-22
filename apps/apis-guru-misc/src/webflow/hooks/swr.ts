import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAppClientsKey(args: InferRequestType<typeof client.appClients.$get>) {
  return ['appClients', '/appClients', args] as const
}

export function useGetAppClients<TError = unknown>(
  args: InferRequestType<typeof client.appClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppClients<TError = unknown>(
  args: InferRequestType<typeof client.appClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.appClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppClientsKey() {
  return ['appClients', '/appClients', 'POST'] as const
}

export function usePostAppClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.appClients.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appClients.$post> }) =>
        parseResponse(client.appClients.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAppClientsKey() {
  return ['appClients', '/appClients', 'OPTIONS'] as const
}

export function useOptionsAppClients<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.appClients.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.appClients.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAppClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.appClients.$options> }) =>
        parseResponse(client.appClients.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppClientsAppClientIdKey() {
  return ['appClients', '/appClients/:appClientId', 'DELETE'] as const
}

export function useDeleteAppClientsAppClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appClients)[':appClientId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppClientsAppClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.appClients)[':appClientId']['$delete']> },
      ) => parseResponse(client.appClients[':appClientId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAppClientsAppClientIdKey() {
  return ['appClients', '/appClients/:appClientId', 'OPTIONS'] as const
}

export function useOptionsAppClientsAppClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appClients)[':appClientId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAppClientsAppClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.appClients)[':appClientId']['$options']> },
      ) => parseResponse(client.appClients[':appClientId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAppClientsAppClientIdKey() {
  return ['appClients', '/appClients/:appClientId', 'PATCH'] as const
}

export function usePatchAppClientsAppClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.appClients)[':appClientId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.appClients)[':appClientId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAppClientsAppClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.appClients)[':appClientId']['$patch']> },
      ) => parseResponse(client.appClients[':appClientId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsKey(args: InferRequestType<typeof client.assets.$get>) {
  return ['assets', '/assets', args] as const
}

export function useGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAssetsKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function usePostAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.$post> }) =>
        parseResponse(client.assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAssetsKey() {
  return ['assets', '/assets', 'OPTIONS'] as const
}

export function useOptionsAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assets.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.$options> }) =>
        parseResponse(client.assets.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsAssetIdKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
) {
  return ['assets', '/assets/:assetId', args] as const
}

export function useGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAssetsAssetIdKey() {
  return ['assets', '/assets/:assetId', 'DELETE'] as const
}

export function useDeleteAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assets)[':assetId']['$delete']> },
      ) => parseResponse(client.assets[':assetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsAssetsAssetIdKey() {
  return ['assets', '/assets/:assetId', 'OPTIONS'] as const
}

export function useOptionsAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assets)[':assetId']['$options']> },
      ) => parseResponse(client.assets[':assetId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAssetsAssetIdKey() {
  return ['assets', '/assets/:assetId', 'PATCH'] as const
}

export function usePatchAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assets)[':assetId']['$patch']> },
      ) => parseResponse(client.assets[':assetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsKey(args: InferRequestType<typeof client.datasets.$get>) {
  return ['datasets', '/datasets', args] as const
}

export function useGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.datasets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDatasets<TError = unknown>(
  args: InferRequestType<typeof client.datasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.datasets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDatasetsKey() {
  return ['datasets', '/datasets', 'POST'] as const
}

export function usePostDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasets.$post> }) =>
        parseResponse(client.datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsDatasetsKey() {
  return ['datasets', '/datasets', 'OPTIONS'] as const
}

export function useOptionsDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasets.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasets.$options> }) =>
        parseResponse(client.datasets.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasetsDatasetIdKey(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$get']>,
) {
  return ['datasets', '/datasets/:datasetId', args] as const
}

export function useGetDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.datasets)[':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasets[':datasetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatasetsDatasetIdKey() {
  return ['datasets', '/datasets/:datasetId', 'DELETE'] as const
}

export function useDeleteDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasets)[':datasetId']['$delete']> },
      ) => parseResponse(client.datasets[':datasetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsDatasetsDatasetIdKey() {
  return ['datasets', '/datasets/:datasetId', 'OPTIONS'] as const
}

export function useOptionsDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasets)[':datasetId']['$options']> },
      ) => parseResponse(client.datasets[':datasetId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDatasetsDatasetIdKey() {
  return ['datasets', '/datasets/:datasetId', 'PATCH'] as const
}

export function usePatchDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':datasetId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasets)[':datasetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDatasetsDatasetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasets)[':datasetId']['$patch']> },
      ) => parseResponse(client.datasets[':datasetId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentEnvironmentsKey(
  args: InferRequestType<typeof client.deploymentEnvironments.$get>,
) {
  return ['deploymentEnvironments', '/deploymentEnvironments', args] as const
}

export function useGetDeploymentEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.deploymentEnvironments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeploymentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploymentEnvironments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.deploymentEnvironments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeploymentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploymentEnvironments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsDeploymentEnvironmentsKey() {
  return ['deploymentEnvironments', '/deploymentEnvironments', 'OPTIONS'] as const
}

export function useOptionsDeploymentEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deploymentEnvironments.$options>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deploymentEnvironments.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDeploymentEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deploymentEnvironments.$options> },
      ) => parseResponse(client.deploymentEnvironments.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeploymentEnvironmentsDeploymentEnvironmentIdKey(
  args: InferRequestType<
    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
  >,
) {
  return [
    'deploymentEnvironments',
    '/deploymentEnvironments/:deploymentEnvironmentId',
    args,
  ] as const
}

export function useGetDeploymentEnvironmentsDeploymentEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeploymentEnvironmentsDeploymentEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.deploymentEnvironments[':deploymentEnvironmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploymentEnvironmentsDeploymentEnvironmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeploymentEnvironmentsDeploymentEnvironmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.deploymentEnvironments[':deploymentEnvironmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdKey() {
  return [
    'deploymentEnvironments',
    '/deploymentEnvironments/:deploymentEnvironmentId',
    'OPTIONS',
  ] as const
}

export function useOptionsDeploymentEnvironmentsDeploymentEnvironmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDeploymentEnvironmentsDeploymentEnvironmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.deploymentEnvironments)[':deploymentEnvironmentId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.deploymentEnvironments[':deploymentEnvironmentId'].$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsKey(args: InferRequestType<typeof client.documents.$get>) {
  return ['documents', '/documents', args] as const
}

export function useGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocuments<TError = unknown>(
  args: InferRequestType<typeof client.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentsKey() {
  return ['documents', '/documents', 'POST'] as const
}

export function usePostDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$post> }) =>
        parseResponse(client.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDocumentsKey() {
  return ['documents', '/documents', 'DELETE'] as const
}

export function useDeleteDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.documents.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$delete> }) =>
        parseResponse(client.documents.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsDocumentsKey() {
  return ['documents', '/documents', 'OPTIONS'] as const
}

export function useOptionsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.documents.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.documents.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.documents.$options> }) =>
        parseResponse(client.documents.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDocumentsDocumentIdKey(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
) {
  return ['documents', '/documents/:documentId', args] as const
}

export function useGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDocumentsDocumentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.documents)[':documentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.documents[':documentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDocumentsDocumentIdKey() {
  return ['documents', '/documents/:documentId', 'DELETE'] as const
}

export function useDeleteDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':documentId']['$delete']> },
      ) => parseResponse(client.documents[':documentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsDocumentsDocumentIdKey() {
  return ['documents', '/documents/:documentId', 'OPTIONS'] as const
}

export function useOptionsDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':documentId']['$options']> },
      ) => parseResponse(client.documents[':documentId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDocumentsDocumentIdKey() {
  return ['documents', '/documents/:documentId', 'PATCH'] as const
}

export function usePatchDocumentsDocumentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.documents)[':documentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.documents)[':documentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDocumentsDocumentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.documents)[':documentId']['$patch']> },
      ) => parseResponse(client.documents[':documentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsKey(args: InferRequestType<typeof client.logs.$get>) {
  return ['logs', '/logs', args] as const
}

export function useGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogs<TError = unknown>(
  args: InferRequestType<typeof client.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getOptionsLogsKey() {
  return ['logs', '/logs', 'OPTIONS'] as const
}

export function useOptionsLogs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logs.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsLogsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logs.$options> }) =>
        parseResponse(client.logs.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogsLogIdKey(args: InferRequestType<(typeof client.logs)[':logId']['$get']>) {
  return ['logs', '/logs/:logId', args] as const
}

export function useGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsLogId<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':logId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogsLogIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':logId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsLogsLogIdKey() {
  return ['logs', '/logs/:logId', 'OPTIONS'] as const
}

export function useOptionsLogsLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':logId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.logs)[':logId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsLogsLogIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.logs)[':logId']['$options']> },
      ) => parseResponse(client.logs[':logId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsKey(args: InferRequestType<typeof client.models.$get>) {
  return ['models', '/models', args] as const
}

export function useGetModels<TError = unknown>(
  args: InferRequestType<typeof client.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.models.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetModels<TError = unknown>(
  args: InferRequestType<typeof client.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.models.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostModelsKey() {
  return ['models', '/models', 'POST'] as const
}

export function usePostModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.models.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.models.$post> }) =>
        parseResponse(client.models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsKey() {
  return ['models', '/models', 'OPTIONS'] as const
}

export function useOptionsModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.models.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.models.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.models.$options> }) =>
        parseResponse(client.models.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsModelIdKey(
  args: InferRequestType<(typeof client.models)[':modelId']['$get']>,
) {
  return ['models', '/models/:modelId', args] as const
}

export function useGetModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelsModelIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteModelsModelIdKey() {
  return ['models', '/models/:modelId', 'DELETE'] as const
}

export function useDeleteModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':modelId']['$delete']> },
      ) => parseResponse(client.models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsModelIdKey() {
  return ['models', '/models/:modelId', 'OPTIONS'] as const
}

export function useOptionsModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':modelId']['$options']> },
      ) => parseResponse(client.models[':modelId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsModelIdKey() {
  return ['models', '/models/:modelId', 'PATCH'] as const
}

export function usePatchModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.models)[':modelId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.models)[':modelId']['$patch']> },
      ) => parseResponse(client.models[':modelId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelsModelIdDataBundlesKey(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>,
) {
  return ['models', '/models/:modelId/dataBundles', args] as const
}

export function useGetModelsModelIdDataBundles<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsModelIdDataBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].dataBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsModelIdDataBundles<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsModelIdDataBundlesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].dataBundles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModelsModelIdDataBundlesKey() {
  return ['models', '/models/:modelId/dataBundles', 'POST'] as const
}

export function usePostModelsModelIdDataBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsModelIdDataBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$post']> },
      ) => parseResponse(client.models[':modelId'].dataBundles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsModelIdDataBundlesKey() {
  return ['models', '/models/:modelId/dataBundles', 'OPTIONS'] as const
}

export function useOptionsModelsModelIdDataBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['dataBundles']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsModelIdDataBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.models)[':modelId']['dataBundles']['$options']> },
      ) => parseResponse(client.models[':modelId'].dataBundles.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteModelsModelIdDataBundlesDataBundleIdKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'DELETE'] as const
}

export function useDeleteModelsModelIdDataBundlesDataBundleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteModelsModelIdDataBundlesDataBundleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.models[':modelId'].dataBundles[':dataBundleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsModelIdDataBundlesDataBundleIdKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'OPTIONS'] as const
}

export function useOptionsModelsModelIdDataBundlesDataBundleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsModelIdDataBundlesDataBundleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.models[':modelId'].dataBundles[':dataBundleId'].$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsModelIdDataBundlesDataBundleIdKey() {
  return ['models', '/models/:modelId/dataBundles/:dataBundleId', 'PATCH'] as const
}

export function usePatchModelsModelIdDataBundlesDataBundleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsModelIdDataBundlesDataBundleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.models)[':modelId']['dataBundles'][':dataBundleId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.models[':modelId'].dataBundles[':dataBundleId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetModelsModelIdTrainingsKey(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>,
) {
  return ['models', '/models/:modelId/trainings', args] as const
}

export function useGetModelsModelIdTrainings<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsModelIdTrainingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].trainings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelsModelIdTrainings<TError = unknown>(
  args: InferRequestType<(typeof client.models)[':modelId']['trainings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetModelsModelIdTrainingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.models[':modelId'].trainings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostModelsModelIdTrainingsKey() {
  return ['models', '/models/:modelId/trainings', 'POST'] as const
}

export function usePostModelsModelIdTrainings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostModelsModelIdTrainingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.models)[':modelId']['trainings']['$post']> },
      ) => parseResponse(client.models[':modelId'].trainings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsModelIdTrainingsKey() {
  return ['models', '/models/:modelId/trainings', 'OPTIONS'] as const
}

export function useOptionsModelsModelIdTrainings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.models)[':modelId']['trainings']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsModelIdTrainingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.models)[':modelId']['trainings']['$options']> },
      ) => parseResponse(client.models[':modelId'].trainings.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsModelsModelIdTrainingsTrainingIdKey() {
  return ['models', '/models/:modelId/trainings/:trainingId', 'OPTIONS'] as const
}

export function useOptionsModelsModelIdTrainingsTrainingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsModelsModelIdTrainingsTrainingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.models)[':modelId']['trainings'][':trainingId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.models[':modelId'].trainings[':trainingId'].$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchModelsModelIdTrainingsTrainingIdKey() {
  return ['models', '/models/:modelId/trainings/:trainingId', 'PATCH'] as const
}

export function usePatchModelsModelIdTrainingsTrainingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchModelsModelIdTrainingsTrainingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.models)[':modelId']['trainings'][':trainingId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.models[':modelId'].trainings[':trainingId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsKey(args: InferRequestType<typeof client.organizations.$get>) {
  return ['organizations', '/organizations', args] as const
}

export function useGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizations<TError = unknown>(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrganizationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function usePostOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$post> }) =>
        parseResponse(client.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsOrganizationsKey() {
  return ['organizations', '/organizations', 'OPTIONS'] as const
}

export function useOptionsOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$options> }) =>
        parseResponse(client.organizations.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
) {
  return ['organizations', '/organizations/:organizationId', args] as const
}

export function useGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsOrganizationsOrganizationIdKey() {
  return ['organizations', '/organizations/:organizationId', 'OPTIONS'] as const
}

export function useOptionsOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':organizationId']['$options']> },
      ) => parseResponse(client.organizations[':organizationId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdKey() {
  return ['organizations', '/organizations/:organizationId', 'PATCH'] as const
}

export function usePatchOrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':organizationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organizationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':organizationId']['$patch']> },
      ) => parseResponse(client.organizations[':organizationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentMethodsKey(args: InferRequestType<typeof client.paymentMethods.$get>) {
  return ['paymentMethods', '/paymentMethods', args] as const
}

export function useGetPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.paymentMethods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentMethodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.paymentMethods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentMethodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.paymentMethods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentMethodsKey() {
  return ['paymentMethods', '/paymentMethods', 'POST'] as const
}

export function usePostPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentMethods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paymentMethods.$post> }) =>
        parseResponse(client.paymentMethods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsPaymentMethodsKey() {
  return ['paymentMethods', '/paymentMethods', 'OPTIONS'] as const
}

export function useOptionsPaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.paymentMethods.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.paymentMethods.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsPaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.paymentMethods.$options> }) =>
        parseResponse(client.paymentMethods.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>,
) {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', args] as const
}

export function useGetPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentMethods[':paymentMethodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.paymentMethods[':paymentMethodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePaymentMethodsPaymentMethodIdKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'DELETE'] as const
}

export function useDeletePaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$delete']> },
      ) => parseResponse(client.paymentMethods[':paymentMethodId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsPaymentMethodsPaymentMethodIdKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'OPTIONS'] as const
}

export function useOptionsPaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsPaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$options']>
        },
      ) => parseResponse(client.paymentMethods[':paymentMethodId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPaymentMethodsPaymentMethodIdKey() {
  return ['paymentMethods', '/paymentMethods/:paymentMethodId', 'PATCH'] as const
}

export function usePatchPaymentMethodsPaymentMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.paymentMethods)[':paymentMethodId']['$patch']> },
      ) => parseResponse(client.paymentMethods[':paymentMethodId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansKey(args: InferRequestType<typeof client.plans.$get>) {
  return ['plans', '/plans', args] as const
}

export function useGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getOptionsPlansKey() {
  return ['plans', '/plans', 'OPTIONS'] as const
}

export function useOptionsPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.plans.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.plans.$options> }) =>
        parseResponse(client.plans.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansPlanIdKey(
  args: InferRequestType<(typeof client.plans)[':planId']['$get']>,
) {
  return ['plans', '/plans/:planId', args] as const
}

export function useGetPlansPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':planId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansPlanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':planId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':planId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansPlanIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':planId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsPlansPlanIdKey() {
  return ['plans', '/plans/:planId', 'OPTIONS'] as const
}

export function useOptionsPlansPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':planId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':planId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsPlansPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plans)[':planId']['$options']> },
      ) => parseResponse(client.plans[':planId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPredictionsKey(args: InferRequestType<typeof client.predictions.$get>) {
  return ['predictions', '/predictions', args] as const
}

export function useGetPredictions<TError = unknown>(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPredictions<TError = unknown>(
  args: InferRequestType<typeof client.predictions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPredictionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.predictions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPredictionsKey() {
  return ['predictions', '/predictions', 'POST'] as const
}

export function usePostPredictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.predictions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPredictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.predictions.$post> }) =>
        parseResponse(client.predictions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsPredictionsKey() {
  return ['predictions', '/predictions', 'OPTIONS'] as const
}

export function useOptionsPredictions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.predictions.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.predictions.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsPredictionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.predictions.$options> }) =>
        parseResponse(client.predictions.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProfilesProfileIdKey(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$get']>,
) {
  return ['profiles', '/profiles/:profileId', args] as const
}

export function useGetProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getOptionsProfilesProfileIdKey() {
  return ['profiles', '/profiles/:profileId', 'OPTIONS'] as const
}

export function useOptionsProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.profiles)[':profileId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profiles)[':profileId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profiles)[':profileId']['$options']> },
      ) => parseResponse(client.profiles[':profileId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProfilesProfileIdKey() {
  return ['profiles', '/profiles/:profileId', 'PATCH'] as const
}

export function usePatchProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.profiles)[':profileId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.profiles)[':profileId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.profiles)[':profileId']['$patch']> },
      ) => parseResponse(client.profiles[':profileId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretsKey(args: InferRequestType<typeof client.secrets.$get>) {
  return ['secrets', '/secrets', args] as const
}

export function useGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSecrets<TError = unknown>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.secrets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSecretsKey() {
  return ['secrets', '/secrets', 'POST'] as const
}

export function usePostSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secrets.$post> }) =>
        parseResponse(client.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsSecretsKey() {
  return ['secrets', '/secrets', 'OPTIONS'] as const
}

export function useOptionsSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.secrets.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secrets.$options> }) =>
        parseResponse(client.secrets.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSecretsSecretIdKey() {
  return ['secrets', '/secrets/:secretId', 'DELETE'] as const
}

export function useDeleteSecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':secretId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets)[':secretId']['$delete']> },
      ) => parseResponse(client.secrets[':secretId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsSecretsSecretIdKey() {
  return ['secrets', '/secrets/:secretId', 'OPTIONS'] as const
}

export function useOptionsSecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':secretId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsSecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets)[':secretId']['$options']> },
      ) => parseResponse(client.secrets[':secretId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSecretsSecretIdKey() {
  return ['secrets', '/secrets/:secretId', 'PATCH'] as const
}

export function usePatchSecretsSecretId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secrets)[':secretId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSecretsSecretIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secrets)[':secretId']['$patch']> },
      ) => parseResponse(client.secrets[':secretId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignupKey() {
  return ['signup', '/signup', 'POST'] as const
}

export function usePostSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.signup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signup.$post> }) =>
        parseResponse(client.signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsSignupKey() {
  return ['signup', '/signup', 'OPTIONS'] as const
}

export function useOptionsSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.signup.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.signup.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.signup.$options> }) =>
        parseResponse(client.signup.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransitionsKey(args: InferRequestType<typeof client.transitions.$get>) {
  return ['transitions', '/transitions', args] as const
}

export function useGetTransitions<TError = unknown>(
  args: InferRequestType<typeof client.transitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransitionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitions<TError = unknown>(
  args: InferRequestType<typeof client.transitions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransitionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransitionsKey() {
  return ['transitions', '/transitions', 'POST'] as const
}

export function usePostTransitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.transitions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transitions.$post> }) =>
        parseResponse(client.transitions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsTransitionsKey() {
  return ['transitions', '/transitions', 'OPTIONS'] as const
}

export function useOptionsTransitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transitions.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transitions.$options> }) =>
        parseResponse(client.transitions.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransitionsTransitionIdKey(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$get']>,
) {
  return ['transitions', '/transitions/:transitionId', args] as const
}

export function useGetTransitionsTransitionId<TError = unknown>(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions[':transitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsTransitionId<TError = unknown>(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions[':transitionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTransitionsTransitionIdKey() {
  return ['transitions', '/transitions/:transitionId', 'DELETE'] as const
}

export function useDeleteTransitionsTransitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transitions)[':transitionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransitionsTransitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transitions)[':transitionId']['$delete']> },
      ) => parseResponse(client.transitions[':transitionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsTransitionsTransitionIdKey() {
  return ['transitions', '/transitions/:transitionId', 'OPTIONS'] as const
}

export function useOptionsTransitionsTransitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transitions)[':transitionId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransitionsTransitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.transitions)[':transitionId']['$options']> },
      ) => parseResponse(client.transitions[':transitionId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTransitionsTransitionIdKey() {
  return ['transitions', '/transitions/:transitionId', 'PATCH'] as const
}

export function usePatchTransitionsTransitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transitions)[':transitionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransitionsTransitionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transitions)[':transitionId']['$patch']> },
      ) => parseResponse(client.transitions[':transitionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransitionsTransitionIdExecutionsKey(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>,
) {
  return ['transitions', '/transitions/:transitionId/executions', args] as const
}

export function useGetTransitionsTransitionIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transitions[':transitionId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsTransitionIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transitions[':transitionId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransitionsTransitionIdExecutionsKey() {
  return ['transitions', '/transitions/:transitionId/executions', 'POST'] as const
}

export function usePostTransitionsTransitionIdExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions)[':transitionId']['executions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransitionsTransitionIdExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$post']>
        },
      ) => parseResponse(client.transitions[':transitionId'].executions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsTransitionsTransitionIdExecutionsKey() {
  return ['transitions', '/transitions/:transitionId/executions', 'OPTIONS'] as const
}

export function useOptionsTransitionsTransitionIdExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.transitions)[':transitionId']['executions']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransitionsTransitionIdExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.transitions)[':transitionId']['executions']['$options']
          >
        },
      ) =>
        parseResponse(client.transitions[':transitionId'].executions.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransitionsTransitionIdExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
  >,
) {
  return ['transitions', '/transitions/:transitionId/executions/:executionId', args] as const
}

export function useGetTransitionsTransitionIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsTransitionIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.transitions)[':transitionId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsTransitionIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdKey() {
  return ['transitions', '/transitions/:transitionId/executions/:executionId', 'OPTIONS'] as const
}

export function useOptionsTransitionsTransitionIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransitionsTransitionIdExecutionsExecutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].$options(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTransitionsTransitionIdExecutionsExecutionIdKey() {
  return ['transitions', '/transitions/:transitionId/executions/:executionId', 'PATCH'] as const
}

export function usePatchTransitionsTransitionIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransitionsTransitionIdExecutionsExecutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsKey() {
  return [
    'transitions',
    '/transitions/:transitionId/executions/:executionId/heartbeats',
    'POST',
  ] as const
}

export function usePostTransitionsTransitionIdExecutionsExecutionIdHeartbeats<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransitionsTransitionIdExecutionsExecutionIdHeartbeatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$post']
          >
        },
      ) =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].heartbeats.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsKey() {
  return [
    'transitions',
    '/transitions/:transitionId/executions/:executionId/heartbeats',
    'OPTIONS',
  ] as const
}

export function useOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeats<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsTransitionsTransitionIdExecutionsExecutionIdHeartbeatsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.transitions)[':transitionId']['executions'][':executionId']['heartbeats']['$options']
          >
        },
      ) =>
        parseResponse(
          client.transitions[':transitionId'].executions[':executionId'].heartbeats.$options(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsUsersKey() {
  return ['users', '/users', 'OPTIONS'] as const
}

export function useOptionsUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$options> }) =>
        parseResponse(client.users.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$delete']> },
      ) => parseResponse(client.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsUsersUserIdKey() {
  return ['users', '/users/:userId', 'OPTIONS'] as const
}

export function useOptionsUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$options']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$options']> },
      ) => parseResponse(client.users[':userId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUsersUserIdKey() {
  return ['users', '/users/:userId', 'PATCH'] as const
}

export function usePatchUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$patch']> },
      ) => parseResponse(client.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsKey(args: InferRequestType<typeof client.workflows.$get>) {
  return ['workflows', '/workflows', args] as const
}

export function useGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflows<TError = unknown>(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWorkflowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsKey() {
  return ['workflows', '/workflows', 'POST'] as const
}

export function usePostWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.workflows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workflows.$post> }) =>
        parseResponse(client.workflows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWorkflowsKey() {
  return ['workflows', '/workflows', 'OPTIONS'] as const
}

export function useOptionsWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workflows.$options>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.workflows.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.workflows.$options> }) =>
        parseResponse(client.workflows.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdKey(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
) {
  return ['workflows', '/workflows/:workflowId', args] as const
}

export function useGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowId<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.workflows[':workflowId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflowId', 'DELETE'] as const
}

export function useDeleteWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflowId']['$delete']> },
      ) => parseResponse(client.workflows[':workflowId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflowId', 'OPTIONS'] as const
}

export function useOptionsWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflowId']['$options']> },
      ) => parseResponse(client.workflows[':workflowId'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkflowsWorkflowIdKey() {
  return ['workflows', '/workflows/:workflowId', 'PATCH'] as const
}

export function usePatchWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.workflows)[':workflowId']['$patch']> },
      ) => parseResponse(client.workflows[':workflowId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdExecutionsKey(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>,
) {
  return ['workflows', '/workflows/:workflowId/executions', args] as const
}

export function useGetWorkflowsWorkflowIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflows[':workflowId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowIdExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.workflows[':workflowId'].executions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWorkflowsWorkflowIdExecutionsKey() {
  return ['workflows', '/workflows/:workflowId/executions', 'POST'] as const
}

export function usePostWorkflowsWorkflowIdExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWorkflowsWorkflowIdExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$post']>
        },
      ) => parseResponse(client.workflows[':workflowId'].executions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsWorkflowsWorkflowIdExecutionsKey() {
  return ['workflows', '/workflows/:workflowId/executions', 'OPTIONS'] as const
}

export function useOptionsWorkflowsWorkflowIdExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workflows)[':workflowId']['executions']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWorkflowsWorkflowIdExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.workflows)[':workflowId']['executions']['$options']>
        },
      ) => parseResponse(client.workflows[':workflowId'].executions.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWorkflowsWorkflowIdExecutionsExecutionIdKey(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
  >,
) {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', args] as const
}

export function useGetWorkflowsWorkflowIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWorkflowsWorkflowIdExecutionsExecutionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.workflows)[':workflowId']['executions'][':executionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWorkflowsWorkflowIdExecutionsExecutionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteWorkflowsWorkflowIdExecutionsExecutionIdKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'DELETE'] as const
}

export function useDeleteWorkflowsWorkflowIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWorkflowsWorkflowIdExecutionsExecutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsWorkflowsWorkflowIdExecutionsExecutionIdKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'OPTIONS'] as const
}

export function useOptionsWorkflowsWorkflowIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsWorkflowsWorkflowIdExecutionsExecutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$options']
          >
        },
      ) =>
        parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchWorkflowsWorkflowIdExecutionsExecutionIdKey() {
  return ['workflows', '/workflows/:workflowId/executions/:executionId', 'PATCH'] as const
}

export function usePatchWorkflowsWorkflowIdExecutionsExecutionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWorkflowsWorkflowIdExecutionsExecutionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.workflows)[':workflowId']['executions'][':executionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.workflows[':workflowId'].executions[':executionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
