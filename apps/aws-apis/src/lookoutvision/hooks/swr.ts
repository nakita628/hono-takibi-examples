import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2020_11_20Key() {
  return ['2020-11-20'] as const
}

export function getPost20201120ProjectsProjectNameDatasetsKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/datasets', 'POST'] as const
}

export function usePost20201120ProjectsProjectNameDatasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsProjectNameDatasetsKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].datasets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameModelsKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models', keyArgs] as const
}

export function useGet20201120ProjectsProjectNameModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelsKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
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
          client['2020-11-20'].projects[':projectName'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameModels<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelsKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['models']['$get']
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
          client['2020-11-20'].projects[':projectName'].models.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20201120ProjectsProjectNameModelsKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models', 'POST'] as const
}

export function usePost20201120ProjectsProjectNameModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsProjectNameModelsKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['models']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].models.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsKey(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects', keyArgs] as const
}

export function useGet20201120Projects<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>
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
        ? getGet20201120ProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-11-20'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120Projects<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>
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
        ? getGet20201120ProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-11-20'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20201120ProjectsKey() {
  return ['2020-11-20', '/2020-11-20/projects', 'POST'] as const
}

export function usePost20201120Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-11-20']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-11-20']['projects']['$post']> },
      ) => parseResponse(client['2020-11-20'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameDatasetsDatasetTypeKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/datasets/:datasetType', keyArgs] as const
}

export function useGet20201120ProjectsProjectNameDatasetsDatasetType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameDatasetsDatasetTypeKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
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
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameDatasetsDatasetType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameDatasetsDatasetTypeKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$get']
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
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20201120ProjectsProjectNameDatasetsDatasetTypeKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/datasets/:datasetType',
    'DELETE',
  ] as const
}

export function useDelete20201120ProjectsProjectNameDatasetsDatasetType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20201120ProjectsProjectNameDatasetsDatasetTypeKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameModelsModelVersionKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models/:modelVersion', keyArgs] as const
}

export function useGet20201120ProjectsProjectNameModelsModelVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelsModelVersionKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
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
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameModelsModelVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelsModelVersionKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$get']
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
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20201120ProjectsProjectNameModelsModelVersionKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/models/:modelVersion', 'DELETE'] as const
}

export function useDelete20201120ProjectsProjectNameModelsModelVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20201120ProjectsProjectNameModelsModelVersionKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameKey(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName', keyArgs] as const
}

export function useGet20201120ProjectsProjectName<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
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
        ? getGet20201120ProjectsProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-11-20'].projects[':projectName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectName<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
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
        ? getGet20201120ProjectsProjectNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-11-20'].projects[':projectName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20201120ProjectsProjectNameKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName', 'DELETE'] as const
}

export function useDelete20201120ProjectsProjectName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-11-20']['projects'][':projectName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20201120ProjectsProjectNameKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['$delete']
          >
        },
      ) => parseResponse(client['2020-11-20'].projects[':projectName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameModelpackagingjobsJobNameKey(
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

export function useGet20201120ProjectsProjectNameModelpackagingjobsJobName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelpackagingjobsJobNameKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
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
          client['2020-11-20'].projects[':projectName'].modelpackagingjobs[':jobName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameModelpackagingjobsJobName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelpackagingjobsJobNameKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs'][':jobName']['$get']
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
          client['2020-11-20'].projects[':projectName'].modelpackagingjobs[':jobName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/detect#Content-Type',
    'POST',
  ] as const
}

export function usePost20201120ProjectsProjectNameModelsModelVersionDetectContentType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20201120ProjectsProjectNameModelsModelVersionDetectContentTypeKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['detect#Content-Type']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'][
            'detect#Content-Type'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameDatasetsDatasetTypeEntriesKey(
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

export function useGet20201120ProjectsProjectNameDatasetsDatasetTypeEntries<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameDatasetsDatasetTypeEntriesKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
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
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameDatasetsDatasetTypeEntries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameDatasetsDatasetTypeEntriesKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$get']
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
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/datasets/:datasetType/entries',
    'PATCH',
  ] as const
}

export function usePatch20201120ProjectsProjectNameDatasetsDatasetTypeEntries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['datasets'][':datasetType']['entries']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].datasets[':datasetType'].entries.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120ProjectsProjectNameModelpackagingjobsKey(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/projects/:projectName/modelpackagingjobs', keyArgs] as const
}

export function useGet20201120ProjectsProjectNameModelpackagingjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelpackagingjobsKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
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
          client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120ProjectsProjectNameModelpackagingjobs<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20201120ProjectsProjectNameModelpackagingjobsKey(args)
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
                (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$get']
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
          client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20201120ProjectsProjectNameModelpackagingjobsKey() {
  return ['2020-11-20', '/2020-11-20/projects/:projectName/modelpackagingjobs', 'POST'] as const
}

export function usePost20201120ProjectsProjectNameModelpackagingjobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsProjectNameModelpackagingjobsKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['modelpackagingjobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].modelpackagingjobs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20201120TagsResourceArnKey(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn', keyArgs] as const
}

export function useGet20201120TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
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
        ? getGet20201120TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-11-20'].tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20201120TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
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
        ? getGet20201120TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-11-20'].tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20201120TagsResourceArnKey() {
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn', 'POST'] as const
}

export function usePost20201120TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn']['$post']>
        },
      ) => parseResponse(client['2020-11-20'].tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20201120ProjectsProjectNameModelsModelVersionStartKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/start',
    'POST',
  ] as const
}

export function usePost20201120ProjectsProjectNameModelsModelVersionStart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsProjectNameModelsModelVersionStartKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'].start.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20201120ProjectsProjectNameModelsModelVersionStopKey() {
  return [
    '2020-11-20',
    '/2020-11-20/projects/:projectName/models/:modelVersion/stop',
    'POST',
  ] as const
}

export function usePost20201120ProjectsProjectNameModelsModelVersionStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20201120ProjectsProjectNameModelsModelVersionStopKey()
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
            (typeof client)['2020-11-20']['projects'][':projectName']['models'][':modelVersion']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].projects[':projectName'].models[':modelVersion'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20201120TagsResourceArnTagKeysKey() {
  return ['2020-11-20', '/2020-11-20/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDelete20201120TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20201120TagsResourceArnTagKeysKey()
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
            (typeof client)['2020-11-20']['tags'][':resourceArn#tagKeys']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-11-20'].tags[':resourceArn#tagKeys'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
