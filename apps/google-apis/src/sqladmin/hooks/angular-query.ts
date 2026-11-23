import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1FlagsQueryKey(args: InferRequestType<typeof client.v1.flags.$get>) {
  return ['v1', '/v1/flags', args] as const
}

export function getV1FlagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.flags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FlagsQueryKey>
  >({
    queryKey: getV1FlagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Flags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.flags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1FlagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FlagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
) {
  return ['v1', '/v1/projects/:project/instances', args] as const
}

export function getV1ProjectsProjectInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesMutationKey() {
  return ['v1', '/v1/projects/:project/instances', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
    ) {
      return parseResponse(client.v1.projects[':project'].instances.$post(args, options))
    },
  })
}

export function injectPostV1ProjectsProjectInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project']['instances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
) {
  return ['v1', '/v1/projects/:project/instances/:instance', args] as const
}

export function getV1ProjectsProjectInstancesInstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['instances'][':instance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.projects)[':project']['instances'][':instance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$put(args, options),
      )
    },
  })
}

export function injectPutV1ProjectsProjectInstancesInstance<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProjectsProjectInstancesInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectInstancesInstance<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1ProjectsProjectInstancesInstanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectInstancesInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.projects)[':project']['instances'][':instance']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectInstancesInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV1ProjectsProjectInstancesInstance<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1ProjectsProjectInstancesInstanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/addServerCa', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].addServerCa.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceAddServerCa<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['addServerCa']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceAddServerCaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', args] as const
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceBackupRuns<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceBackupRunsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceBackupRuns<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceBackupRunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', args] as const
}

export function getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceBackupRunsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceBackupRunsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/backupRuns/:id', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].backupRuns[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectInstancesInstanceBackupRunsId<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['backupRuns'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceBackupRunsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceCloneMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/clone', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].clone.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceClone<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['clone']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceCloneMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/connectSettings', args] as const
}

export function getV1ProjectsProjectInstancesInstanceConnectSettingsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].connectSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceConnectSettings<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['connectSettings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceConnectSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceConnectSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/createEphemeral', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].createEphemeral.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceCreateEphemeral<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['createEphemeral']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceCreateEphemeralMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceDatabasesQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', args] as const
}

export function getV1ProjectsProjectInstancesInstanceDatabasesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceDatabases<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceDatabasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceDatabasesMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceDatabases<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['databases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDatabasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', args] as const
}

export function getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceDatabasesDatabase<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceDatabasesDatabaseQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/databases/:database', 'PATCH'] as const
}

export function getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].databases[':database'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchV1ProjectsProjectInstancesInstanceDatabasesDatabase<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['databases'][':database']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV1ProjectsProjectInstancesInstanceDatabasesDatabaseMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demote', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDemoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].demote.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceDemote<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['demote']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDemoteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/demoteMaster', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].demoteMaster.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceDemoteMaster<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['demoteMaster']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceDemoteMasterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceExportMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/export', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].export.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceExport<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['export']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceFailoverMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/failover', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceFailoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceFailoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].failover.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceFailover<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['failover']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceFailoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/getDiskShrinkConfig', args] as const
}

export function getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].getDiskShrinkConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceGetDiskShrinkConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getDiskShrinkConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/getLatestRecoveryTime', args] as const
}

export function getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].getLatestRecoveryTime.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceGetLatestRecoveryTime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['getLatestRecoveryTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceImportMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/import', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].import.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceImport<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['import']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceImportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceListServerCasQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/listServerCas', args] as const
}

export function getV1ProjectsProjectInstancesInstanceListServerCasQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceListServerCasQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceListServerCasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].listServerCas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceListServerCas<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['listServerCas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceListServerCasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceListServerCasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/performDiskShrink', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].performDiskShrink.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstancePerformDiskShrink<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['performDiskShrink']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstancePerformDiskShrinkMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/promoteReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].promoteReplica.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstancePromoteReplica<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['promoteReplica']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstancePromoteReplicaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceReencryptMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/reencrypt', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceReencryptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceReencryptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].reencrypt.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceReencrypt<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['reencrypt']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceReencryptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rescheduleMaintenance', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].rescheduleMaintenance.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceRescheduleMaintenance<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['rescheduleMaintenance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceRescheduleMaintenanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetReplicaSize', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].resetReplicaSize.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceResetReplicaSize<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['resetReplicaSize']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceResetReplicaSizeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/resetSslConfig', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].resetSslConfig.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceResetSslConfig<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['resetSslConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceResetSslConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceRestartMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restart', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].restart.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceRestart<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['restart']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRestartMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/restoreBackup', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].restoreBackup.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceRestoreBackup<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['restoreBackup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRestoreBackupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/rotateServerCa', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].rotateServerCa.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceRotateServerCa<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['rotateServerCa']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceRotateServerCaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceSslCertsQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', args] as const
}

export function getV1ProjectsProjectInstancesInstanceSslCertsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceSslCertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceSslCerts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceSslCertsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceSslCertsMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/sslCerts', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceSslCertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceSslCertsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceSslCerts<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceSslCertsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(
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

export function getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint',
    'DELETE',
  ] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].sslCerts[':sha1Fingerprint'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1Fingerprint<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['sslCerts'][':sha1Fingerprint']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startExternalSync', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].startExternalSync.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceStartExternalSync<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['startExternalSync']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceStartExternalSyncMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/startReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].startReplica.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceStartReplica<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['startReplica']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceStartReplicaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/stopReplica', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].stopReplica.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceStopReplica<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['stopReplica']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceStopReplicaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/switchover', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].switchover.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceSwitchover<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['switchover']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceSwitchoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/truncateLog', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].truncateLog.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceTruncateLog<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['truncateLog']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceTruncateLogMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceUsersQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users', args] as const
}

export function getV1ProjectsProjectInstancesInstanceUsersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceUsers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'PUT'] as const
}

export function getPutV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$put(args, options),
      )
    },
  })
}

export function injectPutV1ProjectsProjectInstancesInstanceUsers<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ProjectsProjectInstancesInstanceUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceUsers<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectInstancesInstanceUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProjectsProjectInstancesInstanceUsersMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance/users', 'DELETE'] as const
}

export function getDeleteV1ProjectsProjectInstancesInstanceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProjectsProjectInstancesInstanceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProjectsProjectInstancesInstanceUsers<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['users']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ProjectsProjectInstancesInstanceUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectInstancesInstanceUsersNameQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/instances/:instance/users/:name', args] as const
}

export function getV1ProjectsProjectInstancesInstanceUsersNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersNameQueryKey>
  >({
    queryKey: getV1ProjectsProjectInstancesInstanceUsersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].users[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectInstancesInstanceUsersName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['instances'][':instance']['users'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectInstancesInstanceUsersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectInstancesInstanceUsersNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey() {
  return [
    'v1',
    '/v1/projects/:project/instances/:instance/verifyExternalSyncSettings',
    'POST',
  ] as const
}

export function getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance'].verifyExternalSyncSettings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettings<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance']['verifyExternalSyncSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey() {
  return ['v1', '/v1/projects/:project/instances/:instance:generateEphemeralCert', 'POST'] as const
}

export function getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].instances[':instance:generateEphemeralCert'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCert<
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
                  (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['instances'][':instance:generateEphemeralCert']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1ProjectsProjectInstancesInstanceGenerateEphemeralCertMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectOperationsQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
) {
  return ['v1', '/v1/projects/:project/operations', args] as const
}

export function getV1ProjectsProjectOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectOperationsQueryKey>
  >({
    queryKey: getV1ProjectsProjectOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectOperationsOperationQueryKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
) {
  return ['v1', '/v1/projects/:project/operations/:operation', args] as const
}

export function getV1ProjectsProjectOperationsOperationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectOperationsOperationQueryKey>
  >({
    queryKey: getV1ProjectsProjectOperationsOperationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].operations[':operation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectOperationsOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.projects)[':project']['operations'][':operation']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.projects)[':project']['operations'][':operation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectOperationsOperationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectOperationsOperationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProjectsProjectOperationsOperationCancelMutationKey() {
  return ['v1', '/v1/projects/:project/operations/:operation/cancel', 'POST'] as const
}

export function getPostV1ProjectsProjectOperationsOperationCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProjectsProjectOperationsOperationCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.projects[':project'].operations[':operation'].cancel.$post(args, options),
      )
    },
  })
}

export function injectPostV1ProjectsProjectOperationsOperationCancel<
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
                  (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.projects)[':project']['operations'][':operation']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ProjectsProjectOperationsOperationCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ProjectsProjectTiersQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
) {
  return ['v1', '/v1/projects/:project/tiers', args] as const
}

export function getV1ProjectsProjectTiersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsProjectTiersQueryKey>
  >({
    queryKey: getV1ProjectsProjectTiersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':project'].tiers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProjectsProjectTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.projects)[':project']['tiers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':project']['tiers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsProjectTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ProjectsProjectTiersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
