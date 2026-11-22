import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1FlagsKey(args: InferRequestType<typeof client.v1.flags.$get>) {
  return ['v1', '/v1/flags', args] as const
}

export function useGetV1Flags<TError = unknown>(
  args: InferRequestType<typeof client.v1.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.flags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Flags<TError = unknown>(
  args: InferRequestType<typeof client.v1.flags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FlagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.flags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1ProjectsProjectInstancesKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
) {
  return ['v1', '/v1/projects/:project/instances', args] as const
}

export function useGetV1ProjectsProjectInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
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
        ? getGetV1ProjectsProjectInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
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
        ? getGetV1ProjectsProjectInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesKey() {
  return ['v1', '/v1/projects/:project/instances', 'POST'] as const
}

export function usePostV1ProjectsProjectInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']> },
      ) => parseResponse(client.v1.projects[':project'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
) {
  return ['v1', '/v1/projects/:project/instances/:instance', args] as const
}

export function useGetV1ProjectsProjectInstancesInstance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
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
        ? getGetV1ProjectsProjectInstancesInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
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
        ? getGetV1ProjectsProjectInstancesInstanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectInstancesInstanceKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PUT'] as const
}

export function usePutV1ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectInstancesInstanceKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectInstancesInstanceKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectInstancesInstanceKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectInstancesInstanceKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectInstancesInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectInstancesInstanceKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceAddServerCaKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/addServerCa', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceAddServerCa<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceAddServerCaKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].addServerCa.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceBackupRunsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceBackupRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceBackupRunsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
          client.v1.projects[':project'].instances[':instance'].backupRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceBackupRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceBackupRunsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
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
          client.v1.projects[':project'].instances[':instance'].backupRuns.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceBackupRunsKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceBackupRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceBackupRunsKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].backupRuns.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceBackupRunsIdKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceBackupRunsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceBackupRunsIdKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
          client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceBackupRunsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceBackupRunsIdKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
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
          client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectInstancesInstanceBackupRunsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceCloneKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/clone', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceCloneKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].clone.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceConnectSettingsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/connectSettings', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceConnectSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceConnectSettingsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
          client.v1.projects[':project'].instances[':instance'].connectSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceConnectSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceConnectSettingsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
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
          client.v1.projects[':project'].instances[':instance'].connectSettings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceCreateEphemeralKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/createEphemeral', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceCreateEphemeral<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceCreateEphemeralKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].createEphemeral.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceDatabasesKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceDatabases<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceDatabasesKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
          client.v1.projects[':project'].instances[':instance'].databases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceDatabases<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceDatabasesKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
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
          client.v1.projects[':project'].instances[':instance'].databases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceDatabasesKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceDatabasesKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceDatabasesDatabase<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
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
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PUT'] as const
}

export function usePutV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].databases[':database'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demote', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceDemote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceDemoteKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].demote.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMasterKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demoteMaster', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceDemoteMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceDemoteMasterKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].demoteMaster.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceExportKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/export', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceExportKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].export.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceFailoverKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/failover', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceFailover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceFailoverKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].failover.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/getDiskShrinkConfig', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceGetDiskShrinkConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
          client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
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
          client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/getLatestRecoveryTime', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceGetLatestRecoveryTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
          client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceGetLatestRecoveryTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
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
          client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceImportKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/import', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceImportKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceListServerCasKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/listServerCas', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceListServerCas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceListServerCasKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
          client.v1.projects[':project'].instances[':instance'].listServerCas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceListServerCas<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceListServerCasKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
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
          client.v1.projects[':project'].instances[':instance'].listServerCas.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/performDiskShrink', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstancePerformDiskShrink<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].performDiskShrink.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstancePromoteReplicaKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/promoteReplica', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstancePromoteReplica<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstancePromoteReplicaKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].promoteReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceReencryptKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/reencrypt', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceReencrypt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceReencryptKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].reencrypt.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rescheduleMaintenance', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceRescheduleMaintenance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetReplicaSize', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceResetReplicaSize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].resetReplicaSize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceResetSslConfigKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetSslConfig', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceResetSslConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceResetSslConfigKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].resetSslConfig.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceRestartKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restart', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceRestartKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].restart.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceRestoreBackupKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restoreBackup', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceRestoreBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceRestoreBackupKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].restoreBackup.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceRotateServerCaKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rotateServerCa', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceRotateServerCa<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceRotateServerCaKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].rotateServerCa.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceSslCertsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceSslCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceSslCertsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
          client.v1.projects[':project'].instances[':instance'].sslCerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceSslCerts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceSslCertsKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
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
          client.v1.projects[':project'].instances[':instance'].sslCerts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceSslCertsKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceSslCerts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceSslCertsKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].sslCerts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    args,
  ] as const
}

export function useGetV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
          client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
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
          client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].sslCerts[
            ':sha1Fingerprint'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceStartExternalSyncKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startExternalSync', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceStartExternalSync<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceStartExternalSyncKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].startExternalSync.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceStartReplicaKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startReplica', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceStartReplica<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceStartReplicaKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].startReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceStopReplicaKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/stopReplica', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceStopReplica<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceStopReplicaKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].stopReplica.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceSwitchoverKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/switchover', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceSwitchover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceSwitchoverKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].switchover.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceTruncateLogKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/truncateLog', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceTruncateLog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceTruncateLogKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].truncateLog.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceUsersKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceUsersKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
          client.v1.projects[':project'].instances[':instance'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceUsersKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
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
          client.v1.projects[':project'].instances[':instance'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectInstancesInstanceUsersKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'PUT'] as const
}

export function usePutV1ProjectsProjectInstancesInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].users.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceUsersKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectInstancesInstanceUsersKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectInstancesInstanceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectInstancesInstanceUsersKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].users.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectInstancesInstanceUsersNameKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users/:name', args] as const
}

export function useGetV1ProjectsProjectInstancesInstanceUsersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceUsersNameKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
          client.v1.projects[':project'].instances[':instance'].users[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectInstancesInstanceUsersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
        ? getGetV1ProjectsProjectInstancesInstanceUsersNameKey(args)
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
                (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
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
          client.v1.projects[':project'].instances[':instance'].users[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/verifyExternalSyncSettings',
    'POST',
  ] as const
}

export function usePostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance'].verifyExternalSyncSettings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertKey() {
  return ['v1', '/v1/projects/:project/instances/:instance:generateEphemeralCert', 'POST'] as const
}

export function usePostV1ProjectsProjectInstancesInstanceGenerateEphemeralCert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertKey()
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
            (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectOperationsKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
) {
  return ['v1', '/v1/projects/:project/operations', args] as const
}

export function useGetV1ProjectsProjectOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
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
        ? getGetV1ProjectsProjectOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
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
        ? getGetV1ProjectsProjectOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':project'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectOperationsOperationKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/operations/:operation', args] as const
}

export function useGetV1ProjectsProjectOperationsOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
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
        ? getGetV1ProjectsProjectOperationsOperationKey(args)
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
                (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
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
          client.v1.projects[':project'].operations[':operation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectOperationsOperation<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
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
        ? getGetV1ProjectsProjectOperationsOperationKey(args)
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
                (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
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
          client.v1.projects[':project'].operations[':operation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectOperationsOperationCancelKey() {
  return ['v1', '/v1/projects/:project/operations/:operation/cancel', 'POST'] as const
}

export function usePostV1ProjectsProjectOperationsOperationCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectOperationsOperationCancelKey()
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
            (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':project'].operations[':operation'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectTiersKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
) {
  return ['v1', '/v1/projects/:project/tiers', args] as const
}

export function useGetV1ProjectsProjectTiers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
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
        ? getGetV1ProjectsProjectTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectTiers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
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
        ? getGetV1ProjectsProjectTiersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':project'].tiers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
