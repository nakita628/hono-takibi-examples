import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetProjectsKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function useGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProjects<TError = unknown>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.projects.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetProjectsProjectIdDatasetsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
) {
  return ['projects', '/projects/:projectId/datasets', args] as const
}

export function useGetProjectsProjectIdDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
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
        ? getGetProjectsProjectIdDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasets<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
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
        ? getGetProjectsProjectIdDatasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].datasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDatasetsKey() {
  return ['projects', '/projects/:projectId/datasets', 'POST'] as const
}

export function usePostProjectsProjectIdDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['datasets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDatasetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['datasets']['$post']> },
      ) => parseResponse(client.projects[':projectId'].datasets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
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
        ? getGetProjectsProjectIdDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
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
        ? getGetProjectsProjectIdDatasetsDatasetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdDatasetsDatasetIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'PUT'] as const
}

export function usePutProjectsProjectIdDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdDatasetsDatasetIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdDatasetsDatasetIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdDatasetsDatasetIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId', 'PATCH'] as const
}

export function usePatchProjectsProjectIdDatasetsDatasetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdDatasetsDatasetIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdModelsKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdModelsKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdModels<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdModelsKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['models']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdModelsModelIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdModelsModelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdModelsModelIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdModelsModelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdModelsModelIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdModelsModelId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdDatasetsDatasetIdModelsModelIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/models/:modelId', 'PATCH'] as const
}

export function usePatchProjectsProjectIdDatasetsDatasetIdModelsModelId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdDatasetsDatasetIdModelsModelIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['models'][':modelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].models[':modelId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdRoutinesKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdRoutines<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdRoutinesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].routines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdRoutines<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdRoutinesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].routines.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDatasetsDatasetIdRoutinesKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines', 'POST'] as const
}

export function usePostProjectsProjectIdDatasetsDatasetIdRoutines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDatasetsDatasetIdRoutinesKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].routines.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/routines/:routineId', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/routines/:routineId',
    'PUT',
  ] as const
}

export function usePutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/routines/:routineId',
    'DELETE',
  ] as const
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdDatasetsDatasetIdRoutinesRoutineIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['routines'][':routineId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].routines[':routineId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdTablesKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdTables<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdTables<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables', 'POST'] as const
}

export function usePostProjectsProjectIdDatasetsDatasetIdTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDatasetsDatasetIdTablesKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', args] as const
}

export function useGetProjectsProjectIdDatasetsDatasetIdTablesTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdTablesTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'PUT'] as const
}

export function usePutProjectsProjectIdDatasetsDatasetIdTablesTableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdDatasetsDatasetIdTablesTableIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdDatasetsDatasetIdTablesTableIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId/tables/:tableId', 'PATCH'] as const
}

export function usePatchProjectsProjectIdDatasetsDatasetIdTablesTableId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProjectsProjectIdDatasetsDatasetIdTablesTableIdKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdDataKey(
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

export function useGetProjectsProjectIdDatasetsDatasetIdTablesTableIdData<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdDataKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdTablesTableIdData<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdDataKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['data']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].data.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllKey() {
  return [
    'projects',
    '/projects/:projectId/datasets/:datasetId/tables/:tableId/insertAll',
    'POST',
  ] as const
}

export function usePostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDatasetsDatasetIdTablesTableIdInsertAllKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['insertAll']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId'].tables[':tableId'].insertAll.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesKey(
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

export function useGetProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[
            ':tableId'
          ].rowAccessPolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetProjectsProjectIdDatasetsDatasetIdTablesTableIdRowAccessPoliciesKey(args)
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
                (typeof client.projects)[':projectId']['datasets'][':datasetId']['tables'][':tableId']['rowAccessPolicies']['$get']
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
          client.projects[':projectId'].datasets[':datasetId'].tables[
            ':tableId'
          ].rowAccessPolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdDatasetsDatasetIdUndeleteKey() {
  return ['projects', '/projects/:projectId/datasets/:datasetId:undelete', 'POST'] as const
}

export function usePostProjectsProjectIdDatasetsDatasetIdUndelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdDatasetsDatasetIdUndeleteKey()
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
            (typeof client.projects)[':projectId']['datasets'][':datasetId:undelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].datasets[':datasetId:undelete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdJobsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
) {
  return ['projects', '/projects/:projectId/jobs', args] as const
}

export function useGetProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
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
        ? getGetProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
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
        ? getGetProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdJobsKey() {
  return ['projects', '/projects/:projectId/jobs', 'POST'] as const
}

export function usePostProjectsProjectIdJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['jobs']['$post']> },
      ) => parseResponse(client.projects[':projectId'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdJobsJobIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
) {
  return ['projects', '/projects/:projectId/jobs/:jobId', args] as const
}

export function useGetProjectsProjectIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
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
        ? getGetProjectsProjectIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
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
        ? getGetProjectsProjectIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsProjectIdJobsJobIdCancelKey() {
  return ['projects', '/projects/:projectId/jobs/:jobId/cancel', 'POST'] as const
}

export function usePostProjectsProjectIdJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdJobsJobIdCancelKey()
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
            (typeof client.projects)[':projectId']['jobs'][':jobId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].jobs[':jobId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdJobsJobIdDeleteKey() {
  return ['projects', '/projects/:projectId/jobs/:jobId/delete', 'DELETE'] as const
}

export function useDeleteProjectsProjectIdJobsJobIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdJobsJobIdDeleteKey()
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
            (typeof client.projects)[':projectId']['jobs'][':jobId']['delete']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':projectId'].jobs[':jobId'].delete.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdQueriesKey() {
  return ['projects', '/projects/:projectId/queries', 'POST'] as const
}

export function usePostProjectsProjectIdQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['queries']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdQueriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)[':projectId']['queries']['$post']> },
      ) => parseResponse(client.projects[':projectId'].queries.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdQueriesJobIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
) {
  return ['projects', '/projects/:projectId/queries/:jobId', args] as const
}

export function useGetProjectsProjectIdQueriesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
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
        ? getGetProjectsProjectIdQueriesJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].queries[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdQueriesJobId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
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
        ? getGetProjectsProjectIdQueriesJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['queries'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].queries[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdServiceAccountKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
) {
  return ['projects', '/projects/:projectId/serviceAccount', args] as const
}

export function useGetProjectsProjectIdServiceAccount<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
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
        ? getGetProjectsProjectIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].serviceAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdServiceAccount<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
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
        ? getGetProjectsProjectIdServiceAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['serviceAccount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.projects[':projectId'].serviceAccount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResourceGetIamPolicyKey() {
  return [':resource:getIamPolicy', '/:resource:getIamPolicy', 'POST'] as const
}

export function usePostResourceGetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceGetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':resource:getIamPolicy']['$post']> },
      ) => parseResponse(client[':resource:getIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourceSetIamPolicyKey() {
  return [':resource:setIamPolicy', '/:resource:setIamPolicy', 'POST'] as const
}

export function usePostResourceSetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceSetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':resource:setIamPolicy']['$post']> },
      ) => parseResponse(client[':resource:setIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResourceTestIamPermissionsKey() {
  return [':resource:testIamPermissions', '/:resource:testIamPermissions', 'POST'] as const
}

export function usePostResourceTestIamPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourceTestIamPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':resource:testIamPermissions']['$post']> },
      ) => parseResponse(client[':resource:testIamPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
