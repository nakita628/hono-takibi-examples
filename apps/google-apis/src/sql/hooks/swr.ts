import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSqlKey() {
  return ['sql'] as const
}

export function getGetSqlV1beta4FlagsKey(
  args: InferRequestType<typeof client.sql.v1beta4.flags.$get>,
) {
  return ['sql', '/sql/v1beta4/flags', args] as const
}

export function useGetSqlV1beta4Flags<TError = unknown>(
  args: InferRequestType<typeof client.sql.v1beta4.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
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
        ? getGetSqlV1beta4FlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sql.v1beta4.flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4Flags<TError = unknown>(
  args: InferRequestType<typeof client.sql.v1beta4.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
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
        ? getGetSqlV1beta4FlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sql.v1beta4.flags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sql.v1beta4.flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesKey(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstances<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
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
        ? getGetSqlV1beta4ProjectsProjectInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstances<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
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
        ? getGetSqlV1beta4ProjectsProjectInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances']['$post']
          >
        },
      ) =>
        parseResponse(client.sql.v1beta4.projects[':project'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstance<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'PUT'] as const
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSqlV1beta4ProjectsProjectInstancesInstanceKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'DELETE'] as const
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSqlV1beta4ProjectsProjectInstancesInstanceKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance', 'PATCH'] as const
}

export function usePatchSqlV1beta4ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSqlV1beta4ProjectsProjectInstancesInstanceKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/addServerCa', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCa<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['addServerCa']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].addServerCa.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/backupRuns', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/backupRuns', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceBackupRuns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/backupRuns/:id', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns/:id',
    'DELETE',
  ] as const
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/clone', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceCloneKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].clone.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/connectSettings',
    args,
  ] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceConnectSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].connectSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceConnectSettings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].connectSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/createEphemeral',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeral<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].createEphemeral.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/databases', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceDatabases<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceDatabases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/databases', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceDatabases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceDatabasesKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    args,
  ] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'PUT',
  ] as const
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'DELETE',
  ] as const
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database',
    'PATCH',
  ] as const
}

export function usePatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].databases[
            ':database'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/demoteMaster', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMaster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].demoteMaster.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceExportKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/export', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceExportKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/failover', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceFailover<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceFailoverKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['failover']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].failover.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/getDiskShrinkConfig',
    args,
  ] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceImportKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/import', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceImport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceImportKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].import.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceListServerCasKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/listServerCas', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceListServerCas<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceListServerCasKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].listServerCas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceListServerCas<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceListServerCasKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].listServerCas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/performDiskShrink',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrink<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].performDiskShrink.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/promoteReplica',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].promoteReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/rescheduleMaintenance',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[
            ':instance'
          ].rescheduleMaintenance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/resetReplicaSize',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].resetReplicaSize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/resetSslConfig',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].resetSslConfig.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/restart', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRestart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceRestartKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].restart.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/restoreBackup',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].restoreBackup.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/rotateServerCa',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCa<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].rotateServerCa.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/sslCerts', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceSslCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceSslCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/sslCerts', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceSslCerts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceSslCertsKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
) {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    args,
  ] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
            ':sha1Fingerprint'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
            ':sha1Fingerprint'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    'DELETE',
  ] as const
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].sslCerts[
            ':sha1Fingerprint'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/startExternalSync',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSync<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].startExternalSync.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/startReplica', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStartReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['startReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].startReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/stopReplica', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceStopReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['stopReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].stopReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/truncateLog', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLog<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['truncateLog']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].truncateLog.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'PUT'] as const
}

export function usePutSqlV1beta4ProjectsProjectInstancesInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSqlV1beta4ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'POST'] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersKey() {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users', 'DELETE'] as const
}

export function useDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSqlV1beta4ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[':instance'].users.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersNameKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/instances/:instance/users/:name', args] as const
}

export function useGetSqlV1beta4ProjectsProjectInstancesInstanceUsersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersNameKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].users[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectInstancesInstanceUsersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectInstancesInstanceUsersNameKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
          client.sql.v1beta4.projects[':project'].instances[':instance'].users[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance/verifyExternalSyncSettings',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[
            ':instance'
          ].verifyExternalSyncSettings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertKey() {
  return [
    'sql',
    '/sql/v1beta4/projects/:project/instances/:instance:generateEphemeralCert',
    'POST',
  ] as const
}

export function usePostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertKey()
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
            (typeof client.sql.v1beta4.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sql.v1beta4.projects[':project'].instances[
            ':instance:generateEphemeralCert'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectOperationsKey(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>,
) {
  return ['sql', '/sql/v1beta4/projects/:project/operations', args] as const
}

export function useGetSqlV1beta4ProjectsProjectOperations<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
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
        ? getGetSqlV1beta4ProjectsProjectOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectOperations<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
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
        ? getGetSqlV1beta4ProjectsProjectOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sql.v1beta4.projects)[':project']['operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectOperationsOperationKey(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
  >,
) {
  return ['sql', '/sql/v1beta4/projects/:project/operations/:operation', args] as const
}

export function useGetSqlV1beta4ProjectsProjectOperationsOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectOperationsOperationKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
          client.sql.v1beta4.projects[':project'].operations[':operation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectOperationsOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
        ? getGetSqlV1beta4ProjectsProjectOperationsOperationKey(args)
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
                (typeof client.sql.v1beta4.projects)[':project']['operations'][':operation']['$get']
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
          client.sql.v1beta4.projects[':project'].operations[':operation'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSqlV1beta4ProjectsProjectTiersKey(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>,
) {
  return ['sql', '/sql/v1beta4/projects/:project/tiers', args] as const
}

export function useGetSqlV1beta4ProjectsProjectTiers<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
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
        ? getGetSqlV1beta4ProjectsProjectTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSqlV1beta4ProjectsProjectTiers<TError = unknown>(
  args: InferRequestType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
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
        ? getGetSqlV1beta4ProjectsProjectTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sql.v1beta4.projects)[':project']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sql.v1beta4.projects[':project'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
